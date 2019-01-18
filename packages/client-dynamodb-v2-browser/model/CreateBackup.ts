import {CreateBackupInput} from './CreateBackupInput';
import {CreateBackupOutput} from './CreateBackupOutput';
import {CreateBackupInput as CreateBackupInput_Type} from '../types/CreateBackupInput';
import {CreateBackupOutput as CreateBackupOutput_Type} from '../types/CreateBackupOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const CreateBackup: _Operation_<CreateBackupInput_Type, CreateBackupOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'CreateBackup',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: CreateBackupInput,
    output: CreateBackupOutput,
    errors: [],
};