import {_BackupDetails} from './_BackupDetails';
import {_SourceTableDetails} from './_SourceTableDetails';
import {_SourceTableFeatureDetails} from './_SourceTableFeatureDetails';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_BackupDescription as _BackupDescription_Type} from '../types/_BackupDescription';

export const _BackupDescription: _StructureModel_<_BackupDescription_Type, any> = {
    parse: (data: any): _BackupDescription_Type => {
        let rtn: any = {};
        if (data.BackupDetails) rtn.BackupDetails = _BackupDetails.parse!(data.BackupDetails);
    if (data.SourceTableDetails) rtn.SourceTableDetails = _SourceTableDetails.parse!(data.SourceTableDetails);
    if (data.SourceTableFeatureDetails) rtn.SourceTableFeatureDetails = _SourceTableFeatureDetails.parse!(data.SourceTableFeatureDetails);
        return rtn as _BackupDescription_Type;
    },
    serialize: (data: _BackupDescription_Type): any => {
        let rtn: any = {};
        if (data.BackupDetails) rtn.BackupDetails = _BackupDetails.serialize!(data.BackupDetails as any);

    if (data.SourceTableDetails) rtn.SourceTableDetails = _SourceTableDetails.serialize!(data.SourceTableDetails as any);

    if (data.SourceTableFeatureDetails) rtn.SourceTableFeatureDetails = _SourceTableFeatureDetails.serialize!(data.SourceTableFeatureDetails as any);

        return rtn;
    },
};