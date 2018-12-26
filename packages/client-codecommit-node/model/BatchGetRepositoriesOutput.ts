import {_RepositoryMetadataList} from './_RepositoryMetadataList';
import {_RepositoryNotFoundList} from './_RepositoryNotFoundList';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const BatchGetRepositoriesOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        repositories: {
            shape: _RepositoryMetadataList,
        },
        repositoriesNotFound: {
            shape: _RepositoryNotFoundList,
        },
    },
};