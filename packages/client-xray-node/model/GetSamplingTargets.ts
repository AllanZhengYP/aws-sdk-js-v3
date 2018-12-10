import {GetSamplingTargetsInput} from './GetSamplingTargetsInput';
import {GetSamplingTargetsOutput} from './GetSamplingTargetsOutput';
import {InvalidRequestException} from './InvalidRequestException';
import {ThrottledException} from './ThrottledException';
import {OperationModel as _Operation_} from '@aws-js-sdk-v3-prerelease/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetSamplingTargets: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetSamplingTargets',
    http: {
        method: 'POST',
        requestUri: '/SamplingTargets',
    },
    input: {
        shape: GetSamplingTargetsInput,
    },
    output: {
        shape: GetSamplingTargetsOutput,
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