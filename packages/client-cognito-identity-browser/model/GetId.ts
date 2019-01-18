import {GetIdInput} from './GetIdInput';
import {GetIdOutput} from './GetIdOutput';
import {GetIdInput as GetIdInput_Type} from '../types/GetIdInput';
import {GetIdOutput as GetIdOutput_Type} from '../types/GetIdOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetId: _Operation_<GetIdInput_Type, GetIdOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'GetId',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: GetIdInput,
    output: GetIdOutput,
    errors: [],
};