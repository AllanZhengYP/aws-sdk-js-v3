import {HeaderBag} from '@aws-js-sdk-v3-prerelease/types';

export function hasHeader(soughtHeader: string, headers: HeaderBag): boolean {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
            return true;
        }
    }

    return false;
}