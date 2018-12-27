import {_TagKeyList} from './_TagKeyList';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const UntagResourceInput: _Structure_ = {
    type: 'structure',
    required: [
        'ResourceArn',
        'TagKeys',
    ],
    members: {
        ResourceArn: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        TagKeys: {
            shape: _TagKeyList,
        },
    },
};