import { STSClient as STSClientInterface, STSClientConfig } from "@aws-sdk/client-sts/types";
import { Credentials } from "@aws-sdk/types";

import { AssumeRoleParams } from "./fromIni";

type RoleAssumer = (sourceCreds: Credentials, params: AssumeRoleParams) => Promise<Credentials>;

const ASSUME_ROLE_DEFAULT_REGION = "us-east-1";

const decorateDefaultRegion = (region: STSClientConfig["region"]): STSClientConfig["region"] => {
  if (typeof region !== "function") {
    return region === undefined ? ASSUME_ROLE_DEFAULT_REGION : region;
  }
  return async () => {
    try {
      return await region();
    } catch (e) {
      return ASSUME_ROLE_DEFAULT_REGION;
    }
  };
};

export const getDefaultAssumer = (stsOptions: STSClientConfig = {}): RoleAssumer => {
  let stsClient: STSClientInterface;
  return async (sourceCreds, params) => {
    const { STSClient, AssumeRoleCommand } = await import("@aws-sdk/client-sts");
    if (!stsClient) {
      const { logger, maxAttempts, retryStrategy, tls, systemClockOffset, customUserAgent } = stsOptions;
      stsClient = new STSClient({
        logger,
        maxAttempts,
        retryStrategy,
        tls,
        systemClockOffset,
        customUserAgent,
        credentials: sourceCreds,
        region: decorateDefaultRegion(stsOptions.region),
      });
    }
    const { Credentials } = await stsClient.send(new AssumeRoleCommand(params));
    if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
      throw new Error(`Invalid response from STS.assumeRole call with role ${params.RoleArn}`);
    }
    return {
      accessKeyId: Credentials.AccessKeyId,
      secretAccessKey: Credentials.SecretAccessKey,
      sessionToken: Credentials.SessionToken,
      expiration: Credentials.Expiration,
    };
  };
};
