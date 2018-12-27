import {Provider} from '@aws-js-sdk-v3-prerelease/types';

export function fromStatic<T>(staticValue: T): Provider<T> {
    const promisified = Promise.resolve(staticValue);
    return () => promisified;
}
