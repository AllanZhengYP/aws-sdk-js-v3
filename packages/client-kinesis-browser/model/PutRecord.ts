import {PutRecordInput} from './PutRecordInput';
import {PutRecordOutput} from './PutRecordOutput';
import {PutRecordInput as PutRecordInput_Type} from '../types/PutRecordInput';
import {PutRecordOutput as PutRecordOutput_Type} from '../types/PutRecordOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const PutRecord: _Operation_<PutRecordInput_Type, PutRecordOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'PutRecord',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: PutRecordInput,
    output: PutRecordOutput,
    errors: [],
};