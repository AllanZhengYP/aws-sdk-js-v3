import {_DifferenceList} from './_DifferenceList';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const GetDifferencesOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        differences: {
            shape: _DifferenceList,
        },
        NextToken: {
            shape: {
                type: 'string',
            },
        },
    },
};