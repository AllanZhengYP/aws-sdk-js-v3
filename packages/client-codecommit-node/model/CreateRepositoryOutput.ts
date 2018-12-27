import {_RepositoryMetadata} from './_RepositoryMetadata';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const CreateRepositoryOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        repositoryMetadata: {
            shape: _RepositoryMetadata,
        },
    },
};