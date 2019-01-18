import {RestoreTableToPointInTimeInput} from './RestoreTableToPointInTimeInput';
import {RestoreTableToPointInTimeOutput} from './RestoreTableToPointInTimeOutput';
import {RestoreTableToPointInTimeInput as RestoreTableToPointInTimeInput_Type} from '../types/RestoreTableToPointInTimeInput';
import {RestoreTableToPointInTimeOutput as RestoreTableToPointInTimeOutput_Type} from '../types/RestoreTableToPointInTimeOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const RestoreTableToPointInTime: _Operation_<RestoreTableToPointInTimeInput_Type, RestoreTableToPointInTimeOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'RestoreTableToPointInTime',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: RestoreTableToPointInTimeInput,
    output: RestoreTableToPointInTimeOutput,
    errors: [],
};