import {MapModel as _MapModel_} from '@aws-sdk/types';
import {_KeysAndAttributes} from './_KeysAndAttributes';
import {_KeysAndAttributes as _KeysAndAttributes_Type} from '../types/_KeysAndAttributes';

export const _BatchGetRequestMap: _MapModel_<_KeysAndAttributes_Type, any> = {
    parse: (data: any): {[key: string]: _KeysAndAttributes_Type} => {
        let rtn: any = {};
        for (const key of Object.keys(data)) {
            rtn[key] = _KeysAndAttributes.parse!(data[key]);
        }
        return rtn as {[key: string]: _KeysAndAttributes_Type};
    },
    serialize: (data: {[key: string]: _KeysAndAttributes_Type}): any => {
        let rtn: any = {};
        for (const key of Object.keys(data)) {
            rtn[key] = _KeysAndAttributes.parse!(data[key]);
        }
        return rtn;
    },
};