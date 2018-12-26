import {_LoginsList} from './_LoginsList';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const DescribeIdentityOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        IdentityId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Logins: {
            shape: _LoginsList,
        },
        CreationDate: {
            shape: {
                type: 'timestamp',
            },
        },
        LastModifiedDate: {
            shape: {
                type: 'timestamp',
            },
        },
    },
};