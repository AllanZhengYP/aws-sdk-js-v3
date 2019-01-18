import {MapModel as _MapModel_} from '@aws-sdk/types';
import {_WriteRequests} from './_WriteRequests';
import {_WriteRequests as _WriteRequests_Type} from '../types/_WriteRequests';

export const _BatchWriteItemRequestMap: _MapModel_<_WriteRequests_Type, any> = {
    parse: (data: any): {[key: string]: _WriteRequests_Type} => {
        let rtn: any = {};
        for (const key of Object.keys(data)) {
            rtn[key] = _WriteRequests.parse!(data[key]);
        }
        return rtn as {[key: string]: _WriteRequests_Type};
    },
    serialize: (data: {[key: string]: _WriteRequests_Type}): any => {
        let rtn: any = {};
        for (const key of Object.keys(data)) {
            rtn[key] = _WriteRequests.parse!(data[key]);
        }
        return rtn;
    },
};