import {_SamplingStatisticsDocumentList} from './_SamplingStatisticsDocumentList';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const GetSamplingTargetsInput: _Structure_ = {
    type: 'structure',
    required: [
        'SamplingStatisticsDocuments',
    ],
    members: {
        SamplingStatisticsDocuments: {
            shape: _SamplingStatisticsDocumentList,
        },
    },
};