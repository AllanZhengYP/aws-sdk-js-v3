import {SplitShardInput} from './SplitShardInput';
import {SplitShardOutput} from './SplitShardOutput';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {ResourceInUseException} from './ResourceInUseException';
import {InvalidArgumentException} from './InvalidArgumentException';
import {LimitExceededException} from './LimitExceededException';
import {OperationModel as _Operation_} from '@aws-js-sdk-v3-prerelease/types';
import {ServiceMetadata} from './ServiceMetadata';

export const SplitShard: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'SplitShard',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: SplitShardInput,
    },
    output: {
        shape: SplitShardOutput,
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