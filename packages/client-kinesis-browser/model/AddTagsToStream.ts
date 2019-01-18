import {AddTagsToStreamInput} from './AddTagsToStreamInput';
import {AddTagsToStreamOutput} from './AddTagsToStreamOutput';
import {AddTagsToStreamInput as AddTagsToStreamInput_Type} from '../types/AddTagsToStreamInput';
import {AddTagsToStreamOutput as AddTagsToStreamOutput_Type} from '../types/AddTagsToStreamOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const AddTagsToStream: _Operation_<AddTagsToStreamInput_Type, AddTagsToStreamOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'AddTagsToStream',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: AddTagsToStreamInput,
    output: AddTagsToStreamOutput,
    errors: [],
};