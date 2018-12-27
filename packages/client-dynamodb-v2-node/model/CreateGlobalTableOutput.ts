import {_GlobalTableDescription} from './_GlobalTableDescription';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const CreateGlobalTableOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        GlobalTableDescription: {
            shape: _GlobalTableDescription,
        },
    },
};