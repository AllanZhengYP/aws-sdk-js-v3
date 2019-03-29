import {_Queue} from './_Queue';
import {Structure as _Structure_} from '@aws-sdk/types';

export const UpdateQueueOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Queue: {
            shape: _Queue,
            locationName: 'queue',
        },
    },
};