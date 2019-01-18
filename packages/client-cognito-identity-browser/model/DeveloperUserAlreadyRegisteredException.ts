import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {DeveloperUserAlreadyRegisteredException as DeveloperUserAlreadyRegisteredException_Type} from '../types/DeveloperUserAlreadyRegisteredException';

export const DeveloperUserAlreadyRegisteredException: _StructureModel_<DeveloperUserAlreadyRegisteredException_Type, any> = {
    parse: (data: any): DeveloperUserAlreadyRegisteredException_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as DeveloperUserAlreadyRegisteredException_Type;
    },
    serialize: (data: DeveloperUserAlreadyRegisteredException_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};