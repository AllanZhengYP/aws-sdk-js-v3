import {GetSamplingRulesInput} from './GetSamplingRulesInput';
import {GetSamplingRulesOutput} from './GetSamplingRulesOutput';
import {InvalidRequestException} from './InvalidRequestException';
import {ThrottledException} from './ThrottledException';
import {OperationModel as _Operation_} from '@aws-js-sdk-v3-prerelease/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetSamplingRules: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetSamplingRules',
    http: {
        method: 'POST',
        requestUri: '/GetSamplingRules',
    },
    input: {
        shape: GetSamplingRulesInput,
    },
    output: {
        shape: GetSamplingRulesOutput,
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