import {List as _List_} from '@aws-js-sdk-v3-prerelease/types';
import {_SamplingRuleRecord} from './_SamplingRuleRecord';

export const _SamplingRuleRecordList: _List_ = {
    type: 'list',
    member: {
        shape: _SamplingRuleRecord,
    },
};