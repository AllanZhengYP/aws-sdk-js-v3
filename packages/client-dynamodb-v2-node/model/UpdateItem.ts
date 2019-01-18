import {UpdateItemInput} from './UpdateItemInput';
import {UpdateItemOutput} from './UpdateItemOutput';
import {UpdateItemInput as UpdateItemInput_Type} from '../types/UpdateItemInput';
import {UpdateItemOutput as UpdateItemOutput_Type} from '../types/UpdateItemOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UpdateItem: _Operation_<UpdateItemInput_Type, UpdateItemOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'UpdateItem',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: UpdateItemInput,
    output: UpdateItemOutput,
    errors: [],
};