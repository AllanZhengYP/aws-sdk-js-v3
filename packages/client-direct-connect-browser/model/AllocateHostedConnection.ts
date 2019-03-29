import {AllocateHostedConnectionInput} from './AllocateHostedConnectionInput';
import {AllocateHostedConnectionOutput} from './AllocateHostedConnectionOutput';
import {DirectConnectServerException} from './DirectConnectServerException';
import {DirectConnectClientException} from './DirectConnectClientException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const AllocateHostedConnection: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'AllocateHostedConnection',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: AllocateHostedConnectionInput,
    },
    output: {
        shape: AllocateHostedConnectionOutput,
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