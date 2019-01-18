import {MergeShardsInput} from './MergeShardsInput';
import {MergeShardsOutput} from './MergeShardsOutput';
import {MergeShardsInput as MergeShardsInput_Type} from '../types/MergeShardsInput';
import {MergeShardsOutput as MergeShardsOutput_Type} from '../types/MergeShardsOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const MergeShards: _Operation_<MergeShardsInput_Type, MergeShardsOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'MergeShards',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: MergeShardsInput,
    output: MergeShardsOutput,
    errors: [],
};