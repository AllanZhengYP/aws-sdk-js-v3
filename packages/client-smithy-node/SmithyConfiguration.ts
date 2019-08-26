import * as __aws_sdk_types from "@aws-sdk/types";

interface BaseConfig {
  /**
   * The credentials used to sign requests.
   *
   * If no static credentials are supplied, the SDK will attempt to credentials from known environment variables, from shared configuration and credentials files, and from the EC2 Instance Metadata Service, in that order.
   */
  credentials?:
    | __aws_sdk_types.Credentials
    | __aws_sdk_types.Provider<__aws_sdk_types.Credentials>;

  /**
   * A function that determines how long (in milliseconds) the SDK should wait before retrying a request
   */
  delayDecider?: __aws_sdk_types.DelayDecider;

  /**
   * The fully qualified endpoint of the webservice. This is only required when using a custom endpoint (for example, when using a local version of S3).
   */
  endpoint?:
    | string
    | __aws_sdk_types.HttpEndpoint
    | __aws_sdk_types.Provider<__aws_sdk_types.HttpEndpoint>;

  /**
   * The endpoint provider to call if no endpoint is provided
   */
  endpointProvider?: any;

  /**
   * The maximum number of times requests that encounter potentially transient failures should be retried
   */
  maxRetries?: number;

  /**
   * The configuration profile to use.
   */
  profile?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __aws_sdk_types.Provider<string>;

  /**
   * A function that determines whether an error is retryable
   */
  retryDecider?: __aws_sdk_types.RetryDecider;

  /**
   * The signer to use when signing requests.
   */
  signer?: __aws_sdk_types.RequestSigner;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Whether SSL is enabled for requests.
   */
  sslEnabled?: boolean;

  /**
   * The function that will be used to convert strings into HTTP endpoints
   */
  urlParser?: __aws_sdk_types.UrlParser;

  config?: never;
}

export type SmithyConfiguration = BaseConfig & __aws_sdk_types.NodeHttpOptions;

export interface SmithyConfigurationWithPlugin<
  RequestType,
  ResponseType,
  HandlerOptions
> {
  config: SmithyConfiguration;
  transferProtocol?: __aws_sdk_types.TransferProtocol<
    RequestType,
    ResponseType,
    HandlerOptions
  >;
}
