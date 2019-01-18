import {ListIdentityPoolsInput} from './ListIdentityPoolsInput';
import {ListIdentityPoolsOutput} from './ListIdentityPoolsOutput';
import {ListIdentityPoolsInput as ListIdentityPoolsInput_Type} from '../types/ListIdentityPoolsInput';
import {ListIdentityPoolsOutput as ListIdentityPoolsOutput_Type} from '../types/ListIdentityPoolsOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListIdentityPools: _Operation_<ListIdentityPoolsInput_Type, ListIdentityPoolsOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'ListIdentityPools',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: ListIdentityPoolsInput,
    output: ListIdentityPoolsOutput,
    errors: [],
};