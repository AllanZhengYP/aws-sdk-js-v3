import {CreateTableInput} from './CreateTableInput';
import {CreateTableOutput} from './CreateTableOutput';
import {ResourceInUseException} from './ResourceInUseException';
import {LimitExceededException} from './LimitExceededException';
import {InternalServerError} from './InternalServerError';
import {OperationModel as _Operation_} from '@aws-js-sdk-v3-prerelease/types';
import {ServiceMetadata} from './ServiceMetadata';

export const CreateTable: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'CreateTable',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: CreateTableInput,
    },
    output: {
        shape: CreateTableOutput,
    },
    errors: [
        {
            shape: ResourceInUseException,
        },
        {
            shape: LimitExceededException,
        },
        {
            shape: InternalServerError,
        },
    ],
};