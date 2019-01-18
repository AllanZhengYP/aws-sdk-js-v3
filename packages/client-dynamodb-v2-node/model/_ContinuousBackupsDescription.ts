import {_PointInTimeRecoveryDescription} from './_PointInTimeRecoveryDescription';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_ContinuousBackupsDescription as _ContinuousBackupsDescription_Type} from '../types/_ContinuousBackupsDescription';

export const _ContinuousBackupsDescription: _StructureModel_<_ContinuousBackupsDescription_Type, any> = {
    parse: (data: any): _ContinuousBackupsDescription_Type => {
        let rtn: any = {};
        if (data.ContinuousBackupsStatus) rtn.ContinuousBackupsStatus = data.ContinuousBackupsStatus;
    if (data.PointInTimeRecoveryDescription) rtn.PointInTimeRecoveryDescription = _PointInTimeRecoveryDescription.parse!(data.PointInTimeRecoveryDescription);
        return rtn as _ContinuousBackupsDescription_Type;
    },
    serialize: (data: _ContinuousBackupsDescription_Type): any => {
    		if (!data.ContinuousBackupsStatus) {
        throw new Error('_ContinuousBackupsDescription has missing required parameter');
    }
        let rtn: any = {};
        if (data.ContinuousBackupsStatus) rtn.ContinuousBackupsStatus = data.ContinuousBackupsStatus;

    if (data.PointInTimeRecoveryDescription) rtn.PointInTimeRecoveryDescription = _PointInTimeRecoveryDescription.serialize!(data.PointInTimeRecoveryDescription as any);

        return rtn;
    },
};