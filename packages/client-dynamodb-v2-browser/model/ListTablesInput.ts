import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const ListTablesInput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        ExclusiveStartTableName: {
            shape: {
                type: 'string',
                min: 3,
            },
        },
        Limit: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
    },
};