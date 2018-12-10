import {Map as _Map_} from '@aws-js-sdk-v3-prerelease/types';
import {_RoleMapping} from './_RoleMapping';

export const _RoleMappingMap: _Map_ = {
    type: 'map',
    key: {
        shape: {
            type: 'string',
            min: 1,
        },
    },
    value: {
        shape: _RoleMapping,
    },
};