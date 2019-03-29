import {DescribeEndpointsInput} from './DescribeEndpointsInput';
import {DescribeEndpointsOutput} from './DescribeEndpointsOutput';
import {BadRequestException} from './BadRequestException';
import {InternalServerErrorException} from './InternalServerErrorException';
import {ForbiddenException} from './ForbiddenException';
import {NotFoundException} from './NotFoundException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {ConflictException} from './ConflictException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DescribeEndpoints: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DescribeEndpoints',
    http: {
        method: 'POST',
        requestUri: '/2017-08-29/endpoints',
    },
    input: {
        shape: DescribeEndpointsInput,
    },
    output: {
        shape: DescribeEndpointsOutput,
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