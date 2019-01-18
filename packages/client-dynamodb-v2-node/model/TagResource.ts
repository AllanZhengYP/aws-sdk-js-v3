import {TagResourceInput} from './TagResourceInput';
import {TagResourceOutput} from './TagResourceOutput';
import {TagResourceInput as TagResourceInput_Type} from '../types/TagResourceInput';
import {TagResourceOutput as TagResourceOutput_Type} from '../types/TagResourceOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const TagResource: _Operation_<TagResourceInput_Type, TagResourceOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'TagResource',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: TagResourceInput,
    output: TagResourceOutput,
    errors: [],
};