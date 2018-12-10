import {List as _List_} from '@aws-js-sdk-v3-prerelease/types';
import {_TelemetryRecord} from './_TelemetryRecord';

export const _TelemetryRecordList: _List_ = {
    type: 'list',
    member: {
        shape: _TelemetryRecord,
    },
};