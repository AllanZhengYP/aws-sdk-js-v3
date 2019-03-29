import {AllocatePrivateVirtualInterfaceInput} from './AllocatePrivateVirtualInterfaceInput';
import {AllocatePrivateVirtualInterfaceOutput} from './AllocatePrivateVirtualInterfaceOutput';
import {DirectConnectServerException} from './DirectConnectServerException';
import {DirectConnectClientException} from './DirectConnectClientException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const AllocatePrivateVirtualInterface: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'AllocatePrivateVirtualInterface',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: AllocatePrivateVirtualInterfaceInput,
    },
    output: {
        shape: AllocatePrivateVirtualInterfaceOutput,
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