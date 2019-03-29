import {GetJobTemplateInput} from './GetJobTemplateInput';
import {GetJobTemplateOutput} from './GetJobTemplateOutput';
import {BadRequestException} from './BadRequestException';
import {InternalServerErrorException} from './InternalServerErrorException';
import {ForbiddenException} from './ForbiddenException';
import {NotFoundException} from './NotFoundException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {ConflictException} from './ConflictException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetJobTemplate: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetJobTemplate',
    http: {
        method: 'GET',
        requestUri: '/2017-08-29/jobTemplates/{name}',
    },
    input: {
        shape: GetJobTemplateInput,
    },
    output: {
        shape: GetJobTemplateOutput,
    },
    errors: [
        {
            shape: BadRequestException,
        },
        {
            shape: InternalServerErrorException,
        },
        {
            shape: ForbiddenException,
        },
        {
            shape: NotFoundException,
        },
        {
            shape: TooManyRequestsException,
        },
        {
            shape: ConflictException,
        },
    ],
};