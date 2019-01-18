import {UpdateTimeToLiveInput} from './UpdateTimeToLiveInput';
import {UpdateTimeToLiveOutput} from './UpdateTimeToLiveOutput';
import {UpdateTimeToLiveInput as UpdateTimeToLiveInput_Type} from '../types/UpdateTimeToLiveInput';
import {UpdateTimeToLiveOutput as UpdateTimeToLiveOutput_Type} from '../types/UpdateTimeToLiveOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UpdateTimeToLive: _Operation_<UpdateTimeToLiveInput_Type, UpdateTimeToLiveOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'UpdateTimeToLive',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: UpdateTimeToLiveInput,
    output: UpdateTimeToLiveOutput,
    errors: [],
};