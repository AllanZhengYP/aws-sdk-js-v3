import {packageNameToVariable} from '../../packageNameToVariable';

/**
 * @internal
 */
export function staticOrProvider(staticType: string) {
    return `${staticType}|${packageNameToVariable('@aws-js-sdk-v3-prerelease/types')}.Provider<${staticType}>`;
}

/**
 * @internal
 */
export function normalizeStaticOrProvider(
    staticType: string,
    staticEvaluationExpression: string,
    optional: boolean = true
): string {
    return `
(
    value: ${staticOrProvider(staticType)}${optional ? '|undefined' : ''}
) => {
    if (${staticEvaluationExpression}) {
        const promisified = Promise.resolve(value);
        return () => promisified;
    }

    return value${optional ? '!' : ''};
}
            `.trim();
}
