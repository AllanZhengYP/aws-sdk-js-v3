import {ListIdentityPoolsInput} from './ListIdentityPoolsInput';
import {ListIdentityPoolsOutput} from './ListIdentityPoolsOutput';
import {InvalidParameterException} from './InvalidParameterException';
import {NotAuthorizedException} from './NotAuthorizedException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {InternalErrorException} from './InternalErrorException';
import {OperationModel as _Operation_} from '@aws-js-sdk-v3-prerelease/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListIdentityPools: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ListIdentityPools',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: ListIdentityPoolsInput,
    },
    output: {
        shape: ListIdentityPoolsOutput,
    },
    errors: [
        {
            shape: InvalidParameterException,
        },
        {
            shape: NotAuthorizedException,
        },
        {
            shape: TooManyRequestsException,
        },
        {
            shape: InternalErrorException,
        },
    ],
};