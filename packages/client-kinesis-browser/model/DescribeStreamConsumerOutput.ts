import {_ConsumerDescription} from './_ConsumerDescription';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const DescribeStreamConsumerOutput: _Structure_ = {
    type: 'structure',
    required: [
        'ConsumerDescription',
    ],
    members: {
        ConsumerDescription: {
            shape: _ConsumerDescription,
        },
    },
};