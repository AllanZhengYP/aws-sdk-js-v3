import {StartStreamEncryptionInput} from './StartStreamEncryptionInput';
import {StartStreamEncryptionOutput} from './StartStreamEncryptionOutput';
import {StartStreamEncryptionInput as StartStreamEncryptionInput_Type} from '../types/StartStreamEncryptionInput';
import {StartStreamEncryptionOutput as StartStreamEncryptionOutput_Type} from '../types/StartStreamEncryptionOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const StartStreamEncryption: _Operation_<StartStreamEncryptionInput_Type, StartStreamEncryptionOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'StartStreamEncryption',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: StartStreamEncryptionInput,
    output: StartStreamEncryptionOutput,
    errors: [],
};