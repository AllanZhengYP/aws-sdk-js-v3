import {UpdateContinuousBackupsInput} from './UpdateContinuousBackupsInput';
import {UpdateContinuousBackupsOutput} from './UpdateContinuousBackupsOutput';
import {TableNotFoundException} from './TableNotFoundException';
import {ContinuousBackupsUnavailableException} from './ContinuousBackupsUnavailableException';
import {InternalServerError} from './InternalServerError';
import {OperationModel as _Operation_} from '@aws-js-sdk-v3-prerelease/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UpdateContinuousBackups: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'UpdateContinuousBackups',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: UpdateContinuousBackupsInput,
    },
    output: {
        shape: UpdateContinuousBackupsOutput,
    },
    errors: [
        {
            shape: TableNotFoundException,
        },
        {
            shape: ContinuousBackupsUnavailableException,
        },
        {
            shape: InternalServerError,
        },
    ],
};