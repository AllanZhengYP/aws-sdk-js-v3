import {CreateStreamInput} from './CreateStreamInput';
import {CreateStreamOutput} from './CreateStreamOutput';
import {CreateStreamInput as CreateStreamInput_Type} from '../types/CreateStreamInput';
import {CreateStreamOutput as CreateStreamOutput_Type} from '../types/CreateStreamOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const CreateStream: _Operation_<CreateStreamInput_Type, CreateStreamOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'CreateStream',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: CreateStreamInput,
    output: CreateStreamOutput,
    errors: [],
};