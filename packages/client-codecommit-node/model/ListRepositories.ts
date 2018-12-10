import {ListRepositoriesInput} from './ListRepositoriesInput';
import {ListRepositoriesOutput} from './ListRepositoriesOutput';
import {InvalidSortByException} from './InvalidSortByException';
import {InvalidOrderException} from './InvalidOrderException';
import {InvalidContinuationTokenException} from './InvalidContinuationTokenException';
import {OperationModel as _Operation_} from '@aws-js-sdk-v3-prerelease/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListRepositories: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ListRepositories',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: ListRepositoriesInput,
    },
    output: {
        shape: ListRepositoriesOutput,
    },
    errors: [
        {
            shape: InvalidSortByException,
        },
        {
            shape: InvalidOrderException,
        },
        {
            shape: InvalidContinuationTokenException,
        },
    ],
};