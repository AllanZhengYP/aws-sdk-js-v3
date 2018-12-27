import {_FunctionList} from './_FunctionList';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const ListVersionsByFunctionOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        NextMarker: {
            shape: {
                type: 'string',
            },
        },
        Versions: {
            shape: _FunctionList,
        },
    },
};