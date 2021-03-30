import { defaultProvider } from "@aws-sdk/credential-provider-node";
import { Credentials, Provider } from "@aws-sdk/types";

import { getDefaultAssumer, getDefaultAssumerWithWebIdentity } from "./defaultRoleAssumers";
import { STSClient as BaseClient, STSClientConfig as BaseConfig } from "./STSClient";

export interface STSClientConfig extends Omit<BaseConfig, "credentials"> {
  credentials?: Credentials | Provider<Credentials>;
}
export class STSClient extends BaseClient {
  constructor(configuration: STSClientConfig) {
    // This one needs
    super({
      ...configuration,
      credentials: defaultProvider({
        roleAssumer: getDefaultAssumer(configuration),
        roleAssumerWithWebIdentity: getDefaultAssumerWithWebIdentity(configuration),
      }),
    });
  }
}
