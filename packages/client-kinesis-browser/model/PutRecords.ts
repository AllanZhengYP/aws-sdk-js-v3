import {PutRecordsInput} from './PutRecordsInput';
import {PutRecordsOutput} from './PutRecordsOutput';
import {PutRecordsInput as PutRecordsInput_Type} from '../types/PutRecordsInput';
import {PutRecordsOutput as PutRecordsOutput_Type} from '../types/PutRecordsOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const PutRecords: _Operation_<PutRecordsInput_Type, PutRecordsOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'PutRecords',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: PutRecordsInput,
    output: PutRecordsOutput,
    errors: [],
};