import {ListTagsForResourceInput} from './ListTagsForResourceInput';
import {ListTagsForResourceOutput} from './ListTagsForResourceOutput';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InternalFailureException} from './InternalFailureException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListTagsForResource: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ListTagsForResource',
    http: {
        method: 'GET',
        requestUri: '/tags/{resource-arn}',
    },
    input: {
        shape: ListTagsForResourceInput,
    },
    output: {
        shape: ListTagsForResourceOutput,
    },
    errors: [
        {
            shape: ResourceNotFoundException,
        },
        {
            shape: InternalFailureException,
        },
    ],
};