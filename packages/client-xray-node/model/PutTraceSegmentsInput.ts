import {_TraceSegmentDocumentList} from './_TraceSegmentDocumentList';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const PutTraceSegmentsInput: _Structure_ = {
    type: 'structure',
    required: [
        'TraceSegmentDocuments',
    ],
    members: {
        TraceSegmentDocuments: {
            shape: _TraceSegmentDocumentList,
        },
    },
};