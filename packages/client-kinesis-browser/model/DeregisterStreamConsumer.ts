import {DeregisterStreamConsumerInput} from './DeregisterStreamConsumerInput';
import {DeregisterStreamConsumerOutput} from './DeregisterStreamConsumerOutput';
import {DeregisterStreamConsumerInput as DeregisterStreamConsumerInput_Type} from '../types/DeregisterStreamConsumerInput';
import {DeregisterStreamConsumerOutput as DeregisterStreamConsumerOutput_Type} from '../types/DeregisterStreamConsumerOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeregisterStreamConsumer: _Operation_<DeregisterStreamConsumerInput_Type, DeregisterStreamConsumerOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'DeregisterStreamConsumer',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: DeregisterStreamConsumerInput,
    output: DeregisterStreamConsumerOutput,
    errors: [],
};