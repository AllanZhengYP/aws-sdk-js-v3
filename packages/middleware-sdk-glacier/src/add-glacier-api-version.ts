import {
    BuildHandler,
    BuildHandlerArguments,
    HandlerExecutionContext
} from '@aws-js-sdk-v3-prerelease/types';

import {headerDefault} from '@aws-js-sdk-v3-prerelease/middleware-header-default';

export function addGlacierApiVersion(
    next: BuildHandler<any, any, any>,
    context: HandlerExecutionContext
) {
    return (args: BuildHandlerArguments<any, any>) => {
        return headerDefault({
            'x-amz-glacier-version': context.model.metadata.apiVersion
        })(next, context)(args);
    };
}