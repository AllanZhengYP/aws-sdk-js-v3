import {ListIdentitiesInput} from './ListIdentitiesInput';
import {ListIdentitiesOutput} from './ListIdentitiesOutput';
import {ListIdentitiesInput as ListIdentitiesInput_Type} from '../types/ListIdentitiesInput';
import {ListIdentitiesOutput as ListIdentitiesOutput_Type} from '../types/ListIdentitiesOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListIdentities: _Operation_<ListIdentitiesInput_Type, ListIdentitiesOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'ListIdentities',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: ListIdentitiesInput,
    output: ListIdentitiesOutput,
    errors: [],
};