import {CreateInterconnectInput} from './CreateInterconnectInput';
import {CreateInterconnectOutput} from './CreateInterconnectOutput';
import {DirectConnectServerException} from './DirectConnectServerException';
import {DirectConnectClientException} from './DirectConnectClientException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const CreateInterconnect: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'CreateInterconnect',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: CreateInterconnectInput,
    },
    output: {
        shape: CreateInterconnectOutput,
    },
    errors: [
        {
            shape: DirectConnectServerException,
        },
        {
            shape: DirectConnectClientException,
        },
    ],
};