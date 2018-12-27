import {Sha256} from './';
import {Sha256 as BrowserSha256} from '@aws-js-sdk-v3-prerelease/crypto-sha256-browser';
import {Hash} from '@aws-js-sdk-v3-prerelease/hash-node';

describe('implementation selection', () => {
    it(
        'should use the browser implementation when the crypto module is not defined',
        () => {
            jest.mock('crypto', () => {
                throw new Error('Crypto module is not defined');
            });

            const sha256 = new Sha256();
            expect((sha256 as any).hash).toBeInstanceOf(BrowserSha256);
        }
    );
});
