import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const _SSEDescription: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Status: {
            shape: {
                type: 'string',
            },
        },
        SSEType: {
            shape: {
                type: 'string',
            },
        },
        KMSMasterKeyArn: {
            shape: {
                type: 'string',
            },
        },
    },
};