import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {ContinuousBackupsUnavailableException as ContinuousBackupsUnavailableException_Type} from '../types/ContinuousBackupsUnavailableException';

export const ContinuousBackupsUnavailableException: _StructureModel_<ContinuousBackupsUnavailableException_Type, any> = {
    parse: (data: any): ContinuousBackupsUnavailableException_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as ContinuousBackupsUnavailableException_Type;
    },
    serialize: (data: ContinuousBackupsUnavailableException_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};