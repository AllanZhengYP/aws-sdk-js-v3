import {StopStreamEncryptionInput} from './StopStreamEncryptionInput';
import {StopStreamEncryptionOutput} from './StopStreamEncryptionOutput';
import {StopStreamEncryptionInput as StopStreamEncryptionInput_Type} from '../types/StopStreamEncryptionInput';
import {StopStreamEncryptionOutput as StopStreamEncryptionOutput_Type} from '../types/StopStreamEncryptionOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const StopStreamEncryption: _Operation_<StopStreamEncryptionInput_Type, StopStreamEncryptionOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'StopStreamEncryption',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: StopStreamEncryptionInput,
    output: StopStreamEncryptionOutput,
    errors: [],
};