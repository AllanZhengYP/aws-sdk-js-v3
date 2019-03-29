import {_RetentionPeriod} from './_RetentionPeriod';
import {_TagList} from './_TagList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const CreateChannelInput: _Structure_ = {
    type: 'structure',
    required: [
        'channelName',
    ],
    members: {
        channelName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        retentionPeriod: {
            shape: _RetentionPeriod,
        },
        tags: {
            shape: _TagList,
        },
    },
};