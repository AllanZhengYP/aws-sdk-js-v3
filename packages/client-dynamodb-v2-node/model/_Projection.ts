import {_NonKeyAttributeNameList} from './_NonKeyAttributeNameList';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const _Projection: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        ProjectionType: {
            shape: {
                type: 'string',
            },
        },
        NonKeyAttributes: {
            shape: _NonKeyAttributeNameList,
        },
    },
};