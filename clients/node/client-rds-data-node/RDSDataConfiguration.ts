import { AwsAuthConfiguration, AwsAuthConfigurationInput } from '@aws-sdk/signing-middleware';
import { UserAgentConfig, UserAgentConfigInput } from '@aws-sdk/middleware-user-agent';
import { RetryConfig, RetryConfigInput } from '@aws-sdk/retry-middleware';
import {
  RegionConfiguration,
  RegionConfigurationInput,
  EndpointsConfig,
  EndpointsConfigInput,
  ProtocolConfig,
  ProtocolConfigInput,
  AWSClientRuntimeConfiguration
} from '@aws-sdk/config-resolver';

export type RDSDataConfiguration = AWSClientRuntimeConfiguration &
  AwsAuthConfigurationInput &
  RegionConfigurationInput &
  RetryConfigInput &
  EndpointsConfigInput &
  ProtocolConfigInput &
  UserAgentConfigInput

export type RDSDataResolvedConfiguration = Required<AWSClientRuntimeConfiguration> &
  AwsAuthConfiguration.Resolved &
  RegionConfiguration.Resolved &
  RetryConfig.Resolved &
  EndpointsConfig.Resolved &
  ProtocolConfig.Resolved &
  UserAgentConfig.Resolved