import {PutEncryptionConfigInput} from './PutEncryptionConfigInput';
import {PutEncryptionConfigOutput} from './PutEncryptionConfigOutput';
import {InvalidRequestException} from './InvalidRequestException';
import {ThrottledException} from './ThrottledException';
import {OperationModel as _Operation_} from '@aws-js-sdk-v3-prerelease/types';
import {ServiceMetadata} from './ServiceMetadata';

export const PutEncryptionConfig: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'PutEncryptionConfig',
    http: {
        method: 'POST',
        requestUri: '/PutEncryptionConfig',
    },
    input: {
        shape: PutEncryptionConfigInput,
    },
    output: {
        shape: PutEncryptionConfigOutput,
    },
    errors: [
        {
            shape: InvalidRequestException,
        },
        {
            shape: ThrottledException,
        },
    ],
};