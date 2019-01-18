import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {BackupInUseException as BackupInUseException_Type} from '../types/BackupInUseException';

export const BackupInUseException: _StructureModel_<BackupInUseException_Type, any> = {
    parse: (data: any): BackupInUseException_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as BackupInUseException_Type;
    },
    serialize: (data: BackupInUseException_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};