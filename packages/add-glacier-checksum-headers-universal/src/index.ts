import { Readable } from 'stream';
import { isNode } from '@aws-js-sdk-v3-prerelease/is-node';
import {
    addChecksumHeaders as browserAddChecksumHeaders
} from '@aws-js-sdk-v3-prerelease/add-glacier-checksum-headers-browser';
import {
    addChecksumHeaders as nodeAddChecksumHeaders
} from '@aws-js-sdk-v3-prerelease/add-glacier-checksum-headers-node';
import {
    BuildMiddleware,
    HashConstructor,
    Decoder,
} from '@aws-js-sdk-v3-prerelease/types';

export function addChecksumHeaders(
    Sha256: HashConstructor,
    fromUtf8: Decoder
): BuildMiddleware<any, any, any> {
    if (isNode()) {
        return nodeAddChecksumHeaders(Sha256, fromUtf8);
    }

    return browserAddChecksumHeaders(Sha256, fromUtf8);
}
