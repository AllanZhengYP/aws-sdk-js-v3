import {UpdateShardCountInput} from './UpdateShardCountInput';
import {UpdateShardCountOutput} from './UpdateShardCountOutput';
import {UpdateShardCountInput as UpdateShardCountInput_Type} from '../types/UpdateShardCountInput';
import {UpdateShardCountOutput as UpdateShardCountOutput_Type} from '../types/UpdateShardCountOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UpdateShardCount: _Operation_<UpdateShardCountInput_Type, UpdateShardCountOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'UpdateShardCount',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: UpdateShardCountInput,
    output: UpdateShardCountOutput,
    errors: [],
};