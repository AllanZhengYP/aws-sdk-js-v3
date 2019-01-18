import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {BackupNotFoundException as BackupNotFoundException_Type} from '../types/BackupNotFoundException';

export const BackupNotFoundException: _StructureModel_<BackupNotFoundException_Type, any> = {
    parse: (data: any): BackupNotFoundException_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as BackupNotFoundException_Type;
    },
    serialize: (data: BackupNotFoundException_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};