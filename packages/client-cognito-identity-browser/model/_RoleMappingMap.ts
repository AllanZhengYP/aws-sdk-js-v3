import {MapModel as _MapModel_} from '@aws-sdk/types';
import {_RoleMapping} from './_RoleMapping';
import {_RoleMapping as _RoleMapping_Type} from '../types/_RoleMapping';

export const _RoleMappingMap: _MapModel_<_RoleMapping_Type, any> = {
    parse: (data: any): {[key: string]: _RoleMapping_Type} => {
        let rtn: any = {};
        for (const key of Object.keys(data)) {
            rtn[key] = _RoleMapping.parse!(data[key]);
        }
        return rtn as {[key: string]: _RoleMapping_Type};
    },
    serialize: (data: {[key: string]: _RoleMapping_Type}): any => {
        let rtn: any = {};
        for (const key of Object.keys(data)) {
            rtn[key] = _RoleMapping.parse!(data[key]);
        }
        return rtn;
    },
};