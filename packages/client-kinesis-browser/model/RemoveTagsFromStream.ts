import {RemoveTagsFromStreamInput} from './RemoveTagsFromStreamInput';
import {RemoveTagsFromStreamOutput} from './RemoveTagsFromStreamOutput';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {ResourceInUseException} from './ResourceInUseException';
import {InvalidArgumentException} from './InvalidArgumentException';
import {LimitExceededException} from './LimitExceededException';
import {OperationModel as _Operation_} from '@aws-js-sdk-v3-prerelease/types';
import {ServiceMetadata} from './ServiceMetadata';

export const RemoveTagsFromStream: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'RemoveTagsFromStream',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: RemoveTagsFromStreamInput,
    },
    output: {
        shape: RemoveTagsFromStreamOutput,
    },
    errors: [
        {
            shape: ResourceNotFoundException,
        },
        {
            shape: ResourceInUseException,
        },
        {
            shape: InvalidArgumentException,
        },
        {
            shape: LimitExceededException,
        },
    ],
};