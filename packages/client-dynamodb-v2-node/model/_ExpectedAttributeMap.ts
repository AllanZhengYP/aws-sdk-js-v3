import {MapModel as _MapModel_} from '@aws-sdk/types';
import {_ExpectedAttributeValue} from './_ExpectedAttributeValue';
import {_ExpectedAttributeValue as _ExpectedAttributeValue_Type} from '../types/_ExpectedAttributeValue';

export const _ExpectedAttributeMap: _MapModel_<_ExpectedAttributeValue_Type, any> = {
    parse: (data: any): {[key: string]: _ExpectedAttributeValue_Type} => {
        let rtn: any = {};
        for (const key of Object.keys(data)) {
            rtn[key] = _ExpectedAttributeValue.parse!(data[key]);
        }
        return rtn as {[key: string]: _ExpectedAttributeValue_Type};
    },
    serialize: (data: {[key: string]: _ExpectedAttributeValue_Type}): any => {
        let rtn: any = {};
        for (const key of Object.keys(data)) {
            rtn[key] = _ExpectedAttributeValue.parse!(data[key]);
        }
        return rtn;
    },
};