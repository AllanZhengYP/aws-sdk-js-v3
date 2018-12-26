import {_TableDescription} from './_TableDescription';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const DescribeTableOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Table: {
            shape: _TableDescription,
        },
    },
};