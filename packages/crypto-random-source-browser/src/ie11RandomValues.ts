import {MsWindow} from '@aws-js-sdk-v3-prerelease/crypto-ie11-detection';
import {randomValues as IRandomValues} from '@aws-js-sdk-v3-prerelease/types';
import {locateWindow} from '@aws-js-sdk-v3-prerelease/util-locate-window';

/**
 * @implements {IRandomValues}
 */
export function randomValues(byteLength: number): Promise<Uint8Array> {
    return new Promise(resolve => {
        const randomBytes = new Uint8Array(byteLength);
        (locateWindow() as MsWindow).msCrypto.getRandomValues(randomBytes);

        resolve(randomBytes);
    });
}
