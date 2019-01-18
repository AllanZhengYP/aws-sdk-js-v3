import {PutItemInput} from './PutItemInput';
import {PutItemOutput} from './PutItemOutput';
import {PutItemInput as PutItemInput_Type} from '../types/PutItemInput';
import {PutItemOutput as PutItemOutput_Type} from '../types/PutItemOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const PutItem: _Operation_<PutItemInput_Type, PutItemOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'PutItem',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: PutItemInput,
    output: PutItemOutput,
    errors: [],
};