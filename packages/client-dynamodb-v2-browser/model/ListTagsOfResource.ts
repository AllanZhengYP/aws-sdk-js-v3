import {ListTagsOfResourceInput} from './ListTagsOfResourceInput';
import {ListTagsOfResourceOutput} from './ListTagsOfResourceOutput';
import {ListTagsOfResourceInput as ListTagsOfResourceInput_Type} from '../types/ListTagsOfResourceInput';
import {ListTagsOfResourceOutput as ListTagsOfResourceOutput_Type} from '../types/ListTagsOfResourceOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListTagsOfResource: _Operation_<ListTagsOfResourceInput_Type, ListTagsOfResourceOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'ListTagsOfResource',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: ListTagsOfResourceInput,
    output: ListTagsOfResourceOutput,
    errors: [],
};