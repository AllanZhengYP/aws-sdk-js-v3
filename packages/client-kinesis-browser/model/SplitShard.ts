import {SplitShardInput} from './SplitShardInput';
import {SplitShardOutput} from './SplitShardOutput';
import {SplitShardInput as SplitShardInput_Type} from '../types/SplitShardInput';
import {SplitShardOutput as SplitShardOutput_Type} from '../types/SplitShardOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const SplitShard: _Operation_<SplitShardInput_Type, SplitShardOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'SplitShard',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: SplitShardInput,
    output: SplitShardOutput,
    errors: [],
};