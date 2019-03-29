import {CreatePublicVirtualInterfaceInput} from './CreatePublicVirtualInterfaceInput';
import {CreatePublicVirtualInterfaceOutput} from './CreatePublicVirtualInterfaceOutput';
import {DirectConnectServerException} from './DirectConnectServerException';
import {DirectConnectClientException} from './DirectConnectClientException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const CreatePublicVirtualInterface: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'CreatePublicVirtualInterface',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: CreatePublicVirtualInterfaceInput,
    },
    output: {
        shape: CreatePublicVirtualInterfaceOutput,
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