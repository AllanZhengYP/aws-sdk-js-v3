import {_StreamDescription} from './_StreamDescription';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const DescribeStreamOutput: _Structure_ = {
    type: 'structure',
    required: [
        'StreamDescription',
    ],
    members: {
        StreamDescription: {
            shape: _StreamDescription,
        },
    },
};