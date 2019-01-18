import {UnlinkDeveloperIdentityInput} from './UnlinkDeveloperIdentityInput';
import {UnlinkDeveloperIdentityOutput} from './UnlinkDeveloperIdentityOutput';
import {UnlinkDeveloperIdentityInput as UnlinkDeveloperIdentityInput_Type} from '../types/UnlinkDeveloperIdentityInput';
import {UnlinkDeveloperIdentityOutput as UnlinkDeveloperIdentityOutput_Type} from '../types/UnlinkDeveloperIdentityOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UnlinkDeveloperIdentity: _Operation_<UnlinkDeveloperIdentityInput_Type, UnlinkDeveloperIdentityOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'UnlinkDeveloperIdentity',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: UnlinkDeveloperIdentityInput,
    output: UnlinkDeveloperIdentityOutput,
    errors: [],
};