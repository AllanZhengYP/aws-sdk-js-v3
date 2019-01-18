import {toDate as _toDate_} from '@aws-sdk/protocol-timestamp';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_PointInTimeRecoveryDescription as _PointInTimeRecoveryDescription_Type} from '../types/_PointInTimeRecoveryDescription';

export const _PointInTimeRecoveryDescription: _StructureModel_<_PointInTimeRecoveryDescription_Type, any> = {
    parse: (data: any): _PointInTimeRecoveryDescription_Type => {
        let rtn: any = {};
        if (data.PointInTimeRecoveryStatus) rtn.PointInTimeRecoveryStatus = data.PointInTimeRecoveryStatus;
    if (data.EarliestRestorableDateTime) rtn.EarliestRestorableDateTime = _toDate_(data.EarliestRestorableDateTime);
    if (data.LatestRestorableDateTime) rtn.LatestRestorableDateTime = _toDate_(data.LatestRestorableDateTime);
        return rtn as _PointInTimeRecoveryDescription_Type;
    },
    serialize: (data: _PointInTimeRecoveryDescription_Type): any => {
        let rtn: any = {};
        if (data.PointInTimeRecoveryStatus) rtn.PointInTimeRecoveryStatus = data.PointInTimeRecoveryStatus;

    if (data.EarliestRestorableDateTime) rtn.EarliestRestorableDateTime = _toDate_(data.EarliestRestorableDateTime);

    if (data.LatestRestorableDateTime) rtn.LatestRestorableDateTime = _toDate_(data.LatestRestorableDateTime);

        return rtn;
    },
};