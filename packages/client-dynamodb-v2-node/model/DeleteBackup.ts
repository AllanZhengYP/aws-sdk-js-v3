import {DeleteBackupInput} from './DeleteBackupInput';
import {DeleteBackupOutput} from './DeleteBackupOutput';
import {DeleteBackupInput as DeleteBackupInput_Type} from '../types/DeleteBackupInput';
import {DeleteBackupOutput as DeleteBackupOutput_Type} from '../types/DeleteBackupOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteBackup: _Operation_<DeleteBackupInput_Type, DeleteBackupOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'DeleteBackup',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: DeleteBackupInput,
    output: DeleteBackupOutput,
    errors: [],
};