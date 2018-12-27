import {UpdateSamplingRuleInput} from './UpdateSamplingRuleInput';
import {UpdateSamplingRuleOutput} from './UpdateSamplingRuleOutput';
import {InvalidRequestException} from './InvalidRequestException';
import {ThrottledException} from './ThrottledException';
import {OperationModel as _Operation_} from '@aws-js-sdk-v3-prerelease/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UpdateSamplingRule: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'UpdateSamplingRule',
    http: {
        method: 'POST',
        requestUri: '/UpdateSamplingRule',
    },
    input: {
        shape: UpdateSamplingRuleInput,
    },
    output: {
        shape: UpdateSamplingRuleOutput,
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