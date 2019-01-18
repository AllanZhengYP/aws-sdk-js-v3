import {MapModel as _MapModel_} from '@aws-sdk/types';

export const _RolesMap: _MapModel_<string, any> = {
    parse: (data: any): {[key: string]: string} => {
        let rtn: any = {};
        for (const key of Object.keys(data)) {
            rtn[key] = data[key];
        }
        return rtn as {[key: string]: string};
    },
    serialize: (data: {[key: string]: string}): any => {
        let rtn: any = {};
        for (const key of Object.keys(data)) {
            rtn[key] = data[key];
        }
        return rtn;
    },
};