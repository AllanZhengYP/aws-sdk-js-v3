import {_ServiceList} from './_ServiceList';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const GetTraceGraphOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Services: {
            shape: _ServiceList,
        },
        NextToken: {
            shape: {
                type: 'string',
            },
        },
    },
};