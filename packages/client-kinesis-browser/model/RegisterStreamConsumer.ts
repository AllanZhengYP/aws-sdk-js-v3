import {RegisterStreamConsumerInput} from './RegisterStreamConsumerInput';
import {RegisterStreamConsumerOutput} from './RegisterStreamConsumerOutput';
import {RegisterStreamConsumerInput as RegisterStreamConsumerInput_Type} from '../types/RegisterStreamConsumerInput';
import {RegisterStreamConsumerOutput as RegisterStreamConsumerOutput_Type} from '../types/RegisterStreamConsumerOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const RegisterStreamConsumer: _Operation_<RegisterStreamConsumerInput_Type, RegisterStreamConsumerOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'RegisterStreamConsumer',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: RegisterStreamConsumerInput,
    output: RegisterStreamConsumerOutput,
    errors: [],
};