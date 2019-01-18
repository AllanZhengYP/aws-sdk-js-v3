import {RemoveTagsFromStreamInput} from './RemoveTagsFromStreamInput';
import {RemoveTagsFromStreamOutput} from './RemoveTagsFromStreamOutput';
import {RemoveTagsFromStreamInput as RemoveTagsFromStreamInput_Type} from '../types/RemoveTagsFromStreamInput';
import {RemoveTagsFromStreamOutput as RemoveTagsFromStreamOutput_Type} from '../types/RemoveTagsFromStreamOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const RemoveTagsFromStream: _Operation_<RemoveTagsFromStreamInput_Type, RemoveTagsFromStreamOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'RemoveTagsFromStream',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: RemoveTagsFromStreamInput,
    output: RemoveTagsFromStreamOutput,
    errors: [],
};