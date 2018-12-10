import {_RepositoryNameIdPairList} from './_RepositoryNameIdPairList';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const ListRepositoriesOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        repositories: {
            shape: _RepositoryNameIdPairList,
        },
        nextToken: {
            shape: {
                type: 'string',
            },
        },
    },
};