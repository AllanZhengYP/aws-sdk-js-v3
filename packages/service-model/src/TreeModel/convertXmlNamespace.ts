import { isXmlNamespace } from '../ApiModel/Shape';
import { XmlNamespace } from '@aws-js-sdk-v3-prerelease/types';

export function convertXmlNamespace(
    ns: string|XmlNamespace|undefined
): XmlNamespace|undefined {
    if (typeof ns === 'undefined' || isXmlNamespace(ns)) {
        return ns;
    }

    return {uri: ns};
}
