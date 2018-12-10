import {ProviderError} from '@aws-js-sdk-v3-prerelease/property-provider';
import {Provider} from '@aws-js-sdk-v3-prerelease/types';

export const ENV_REGION = 'AWS_REGION';

export interface EnvConfiguration {
   environmentVariableName?: string;
}

export function fromEnv(
    {environmentVariableName = ENV_REGION}: EnvConfiguration = {}
): Provider<string> {
    return async () => {
        const envRegion = process.env[environmentVariableName];
        if (envRegion) {
            return envRegion;
        }

        throw new ProviderError(
            `No value defined for the ${environmentVariableName} environment variable`
        );
    };
}
