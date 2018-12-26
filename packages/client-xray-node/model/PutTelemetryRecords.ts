import {PutTelemetryRecordsInput} from './PutTelemetryRecordsInput';
import {PutTelemetryRecordsOutput} from './PutTelemetryRecordsOutput';
import {InvalidRequestException} from './InvalidRequestException';
import {ThrottledException} from './ThrottledException';
import {OperationModel as _Operation_} from '@aws-js-sdk-v3-prerelease/types';
import {ServiceMetadata} from './ServiceMetadata';

export const PutTelemetryRecords: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'PutTelemetryRecords',
    http: {
        method: 'POST',
        requestUri: '/TelemetryRecords',
    },
    input: {
        shape: PutTelemetryRecordsInput,
    },
    output: {
        shape: PutTelemetryRecordsOutput,
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