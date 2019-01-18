import {UpdateGlobalTableInput} from './UpdateGlobalTableInput';
import {UpdateGlobalTableOutput} from './UpdateGlobalTableOutput';
import {UpdateGlobalTableInput as UpdateGlobalTableInput_Type} from '../types/UpdateGlobalTableInput';
import {UpdateGlobalTableOutput as UpdateGlobalTableOutput_Type} from '../types/UpdateGlobalTableOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UpdateGlobalTable: _Operation_<UpdateGlobalTableInput_Type, UpdateGlobalTableOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'UpdateGlobalTable',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: UpdateGlobalTableInput,
    output: UpdateGlobalTableOutput,
    errors: [],
};