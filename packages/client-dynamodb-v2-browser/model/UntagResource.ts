import {UntagResourceInput} from './UntagResourceInput';
import {UntagResourceOutput} from './UntagResourceOutput';
import {UntagResourceInput as UntagResourceInput_Type} from '../types/UntagResourceInput';
import {UntagResourceOutput as UntagResourceOutput_Type} from '../types/UntagResourceOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UntagResource: _Operation_<UntagResourceInput_Type, UntagResourceOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'UntagResource',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: UntagResourceInput,
    output: UntagResourceOutput,
    errors: [],
};