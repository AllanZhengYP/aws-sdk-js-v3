import {
    CustomizationDefinition,
    ConfigurationPropertyDefinition,
    MiddlewareCustomizationDefinition,
    ServiceCustomizationDefinition,
    SyntheticParameterCustomizationDefinition,
    TreeModel,
} from '@aws-js-sdk-v3-prerelease/build-types';
import { packageNameToVariable } from '../../packageNameToVariable';
import { IMPORTS } from '../../internalImports';

export const locationConstraintCustomization: ServiceCustomizationDefinition = {
    client: [],
    commands: {
        CreateBucket: [
            {
                type: 'Middleware',
                step: 'initialize',
                priority: 0,
                expression: `${packageNameToVariable('@aws-js-sdk-v3-prerelease/location-constraint-middleware')}.locationConstraintMiddleware(configuration.region)`,
                imports: [
                    IMPORTS['location-constraint-middleware'],
                ]
            }
        ]
    },
};
