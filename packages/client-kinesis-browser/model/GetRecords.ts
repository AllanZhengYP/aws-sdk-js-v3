import {GetRecordsInput} from './GetRecordsInput';
import {GetRecordsOutput} from './GetRecordsOutput';
import {GetRecordsInput as GetRecordsInput_Type} from '../types/GetRecordsInput';
import {GetRecordsOutput as GetRecordsOutput_Type} from '../types/GetRecordsOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetRecords: _Operation_<GetRecordsInput_Type, GetRecordsOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'GetRecords',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: GetRecordsInput,
    output: GetRecordsOutput,
    errors: [],
};