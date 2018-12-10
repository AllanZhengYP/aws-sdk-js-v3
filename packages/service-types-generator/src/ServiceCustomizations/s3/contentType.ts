import { 
    TreeModel,
    ServiceCustomizationDefinition,
    CustomizationDefinition,
    MiddlewareCustomizationDefinition
} from '@aws-js-sdk-v3-prerelease/build-types';
import { IMPORTS } from '../../internalImports';
import { packageNameToVariable } from '../../packageNameToVariable';

export const defaultContentType: MiddlewareCustomizationDefinition = {
    type: 'Middleware',
    step: 'build',
    priority: -50,
    tags: '{\'Content-Type\': true}',
    imports: [IMPORTS['middleware-header-default']],
    expression: `${
        packageNameToVariable('@aws-js-sdk-v3-prerelease/middleware-header-default')
    }.headerDefault(
        {'Content-Type': 'application/octet-stream'}
    )`,
}

export function defaultContentTypeCustomization(model: TreeModel): ServiceCustomizationDefinition {
    return {
        client: [],
        commands: Object.keys(model.operations).reduce(
            (customizations, commandName) => {
                const {http: {method}} = model.operations[commandName]
                if (method === 'GET' || method === 'HEAD') {
                    customizations[commandName] = [defaultContentType];
                }
                return customizations;
            }, 
            {} as {[commandName: string]: Array<CustomizationDefinition>}
        ),
    }
}
