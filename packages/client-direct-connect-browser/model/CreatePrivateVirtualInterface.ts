import {CreatePrivateVirtualInterfaceInput} from './CreatePrivateVirtualInterfaceInput';
import {CreatePrivateVirtualInterfaceOutput} from './CreatePrivateVirtualInterfaceOutput';
import {DirectConnectServerException} from './DirectConnectServerException';
import {DirectConnectClientException} from './DirectConnectClientException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const CreatePrivateVirtualInterface: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'CreatePrivateVirtualInterface',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: CreatePrivateVirtualInterfaceInput,
    },
    output: {
        shape: CreatePrivateVirtualInterfaceOutput,
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