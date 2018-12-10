import {_RepositoryTriggersList} from './_RepositoryTriggersList';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const GetRepositoryTriggersOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        configurationId: {
            shape: {
                type: 'string',
            },
        },
        triggers: {
            shape: _RepositoryTriggersList,
        },
    },
};