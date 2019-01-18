import {UnlinkIdentityInput} from './UnlinkIdentityInput';
import {UnlinkIdentityOutput} from './UnlinkIdentityOutput';
import {UnlinkIdentityInput as UnlinkIdentityInput_Type} from '../types/UnlinkIdentityInput';
import {UnlinkIdentityOutput as UnlinkIdentityOutput_Type} from '../types/UnlinkIdentityOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UnlinkIdentity: _Operation_<UnlinkIdentityInput_Type, UnlinkIdentityOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'UnlinkIdentity',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: UnlinkIdentityInput,
    output: UnlinkIdentityOutput,
    errors: [],
};