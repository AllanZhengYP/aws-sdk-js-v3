import {RestoreTableFromBackupInput} from './RestoreTableFromBackupInput';
import {RestoreTableFromBackupOutput} from './RestoreTableFromBackupOutput';
import {RestoreTableFromBackupInput as RestoreTableFromBackupInput_Type} from '../types/RestoreTableFromBackupInput';
import {RestoreTableFromBackupOutput as RestoreTableFromBackupOutput_Type} from '../types/RestoreTableFromBackupOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const RestoreTableFromBackup: _Operation_<RestoreTableFromBackupInput_Type, RestoreTableFromBackupOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'RestoreTableFromBackup',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: RestoreTableFromBackupInput,
    output: RestoreTableFromBackupOutput,
    errors: [],
};