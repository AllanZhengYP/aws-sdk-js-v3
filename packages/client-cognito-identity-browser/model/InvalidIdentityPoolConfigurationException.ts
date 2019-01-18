import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {InvalidIdentityPoolConfigurationException as InvalidIdentityPoolConfigurationException_Type} from '../types/InvalidIdentityPoolConfigurationException';

export const InvalidIdentityPoolConfigurationException: _StructureModel_<InvalidIdentityPoolConfigurationException_Type, any> = {
    parse: (data: any): InvalidIdentityPoolConfigurationException_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as InvalidIdentityPoolConfigurationException_Type;
    },
    serialize: (data: InvalidIdentityPoolConfigurationException_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};