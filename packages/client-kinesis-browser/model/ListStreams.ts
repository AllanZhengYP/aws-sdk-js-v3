import {ListStreamsInput} from './ListStreamsInput';
import {ListStreamsOutput} from './ListStreamsOutput';
import {LimitExceededException} from './LimitExceededException';
import {OperationModel as _Operation_} from '@aws-js-sdk-v3-prerelease/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListStreams: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ListStreams',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: ListStreamsInput,
    },
    output: {
        shape: ListStreamsOutput,
    },
    errors: [
        {
            shape: LimitExceededException,
        },
    ],
};