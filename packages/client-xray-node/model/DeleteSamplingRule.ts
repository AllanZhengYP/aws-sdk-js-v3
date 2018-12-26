import {DeleteSamplingRuleInput} from './DeleteSamplingRuleInput';
import {DeleteSamplingRuleOutput} from './DeleteSamplingRuleOutput';
import {InvalidRequestException} from './InvalidRequestException';
import {ThrottledException} from './ThrottledException';
import {OperationModel as _Operation_} from '@aws-js-sdk-v3-prerelease/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteSamplingRule: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DeleteSamplingRule',
    http: {
        method: 'POST',
        requestUri: '/DeleteSamplingRule',
    },
    input: {
        shape: DeleteSamplingRuleInput,
    },
    output: {
        shape: DeleteSamplingRuleOutput,
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