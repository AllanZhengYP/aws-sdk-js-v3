import {_EncryptionConfig} from './_EncryptionConfig';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const PutEncryptionConfigOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        EncryptionConfig: {
            shape: _EncryptionConfig,
        },
    },
};