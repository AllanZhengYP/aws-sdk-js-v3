import {_RepositoryTriggersList} from './_RepositoryTriggersList';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const TestRepositoryTriggersInput: _Structure_ = {
    type: 'structure',
    required: [
        'repositoryName',
        'triggers',
    ],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        triggers: {
            shape: _RepositoryTriggersList,
        },
    },
};