import {MergeDeveloperIdentitiesInput} from './MergeDeveloperIdentitiesInput';
import {MergeDeveloperIdentitiesOutput} from './MergeDeveloperIdentitiesOutput';
import {MergeDeveloperIdentitiesInput as MergeDeveloperIdentitiesInput_Type} from '../types/MergeDeveloperIdentitiesInput';
import {MergeDeveloperIdentitiesOutput as MergeDeveloperIdentitiesOutput_Type} from '../types/MergeDeveloperIdentitiesOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const MergeDeveloperIdentities: _Operation_<MergeDeveloperIdentitiesInput_Type, MergeDeveloperIdentitiesOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'MergeDeveloperIdentities',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: MergeDeveloperIdentitiesInput,
    output: MergeDeveloperIdentitiesOutput,
    errors: [],
};