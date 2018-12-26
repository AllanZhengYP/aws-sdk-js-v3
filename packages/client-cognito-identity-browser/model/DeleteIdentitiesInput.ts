import {_IdentityIdList} from './_IdentityIdList';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const DeleteIdentitiesInput: _Structure_ = {
    type: 'structure',
    required: [
        'IdentityIdsToDelete',
    ],
    members: {
        IdentityIdsToDelete: {
            shape: _IdentityIdList,
        },
    },
};