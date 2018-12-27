import {_ServiceList} from './_ServiceList';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const GetServiceGraphOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        StartTime: {
            shape: {
                type: 'timestamp',
            },
        },
        EndTime: {
            shape: {
                type: 'timestamp',
            },
        },
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