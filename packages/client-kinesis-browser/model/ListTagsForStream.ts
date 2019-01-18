import {ListTagsForStreamInput} from './ListTagsForStreamInput';
import {ListTagsForStreamOutput} from './ListTagsForStreamOutput';
import {ListTagsForStreamInput as ListTagsForStreamInput_Type} from '../types/ListTagsForStreamInput';
import {ListTagsForStreamOutput as ListTagsForStreamOutput_Type} from '../types/ListTagsForStreamOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListTagsForStream: _Operation_<ListTagsForStreamInput_Type, ListTagsForStreamOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'ListTagsForStream',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: ListTagsForStreamInput,
    output: ListTagsForStreamOutput,
    errors: [],
};