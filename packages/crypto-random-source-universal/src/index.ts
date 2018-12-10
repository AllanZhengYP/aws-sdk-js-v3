import {
    randomValues as browserRandomValues
} from '@aws-js-sdk-v3-prerelease/crypto-random-source-browser';
import {
    randomValues as nodeRandomValues
} from '@aws-js-sdk-v3-prerelease/crypto-random-source-node';
import {randomValues as IRandomValues} from '@aws-js-sdk-v3-prerelease/types';

/**
 * @implements {IRandomValues}
 */
export function randomValues(byteLength: number): Promise<Uint8Array> {
    if (supportsCryptoModule) {
        return nodeRandomValues(byteLength);
    }

    return browserRandomValues(byteLength);
}

/**
 * Try to require Node's crypto module and record whether the operation
 * succeeded.
 *
 * @internal
 */
const supportsCryptoModule: boolean = (() => {
    try {
        require('crypto');
        return true;
    } catch {
        return false;
    }
})();
