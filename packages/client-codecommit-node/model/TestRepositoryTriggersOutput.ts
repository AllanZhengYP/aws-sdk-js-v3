import {_RepositoryTriggerNameList} from './_RepositoryTriggerNameList';
import {_RepositoryTriggerExecutionFailureList} from './_RepositoryTriggerExecutionFailureList';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const TestRepositoryTriggersOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        successfulExecutions: {
            shape: _RepositoryTriggerNameList,
        },
        failedExecutions: {
            shape: _RepositoryTriggerExecutionFailureList,
        },
    },
};