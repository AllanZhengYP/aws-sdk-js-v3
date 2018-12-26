import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const DeleteIdentityPoolInput: _Structure_ = {
    type: 'structure',
    required: [
        'IdentityPoolId',
    ],
    members: {
        IdentityPoolId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};