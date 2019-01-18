import {GetItemInput} from './GetItemInput';
import {GetItemOutput} from './GetItemOutput';
import {GetItemInput as GetItemInput_Type} from '../types/GetItemInput';
import {GetItemOutput as GetItemOutput_Type} from '../types/GetItemOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetItem: _Operation_<GetItemInput_Type, GetItemOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'GetItem',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: GetItemInput,
    output: GetItemOutput,
    errors: [],
};