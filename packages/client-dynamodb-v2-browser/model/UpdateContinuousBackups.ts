import {UpdateContinuousBackupsInput} from './UpdateContinuousBackupsInput';
import {UpdateContinuousBackupsOutput} from './UpdateContinuousBackupsOutput';
import {UpdateContinuousBackupsInput as UpdateContinuousBackupsInput_Type} from '../types/UpdateContinuousBackupsInput';
import {UpdateContinuousBackupsOutput as UpdateContinuousBackupsOutput_Type} from '../types/UpdateContinuousBackupsOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UpdateContinuousBackups: _Operation_<UpdateContinuousBackupsInput_Type, UpdateContinuousBackupsOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'UpdateContinuousBackups',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: UpdateContinuousBackupsInput,
    output: UpdateContinuousBackupsOutput,
    errors: [],
};