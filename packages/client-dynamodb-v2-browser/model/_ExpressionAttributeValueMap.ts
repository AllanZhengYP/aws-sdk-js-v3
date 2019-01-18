import {MapModel as _MapModel_} from '@aws-sdk/types';
import {_AttributeValue} from './_AttributeValue';
import {_AttributeValue as _AttributeValue_Type} from '../types/_AttributeValue';

export const _ExpressionAttributeValueMap: _MapModel_<_AttributeValue_Type, any> = {
    parse: (data: any): {[key: string]: _AttributeValue_Type} => {
        let rtn: any = {};
        for (const key of Object.keys(data)) {
            rtn[key] = _AttributeValue.parse!(data[key]);
        }
        return rtn as {[key: string]: _AttributeValue_Type};
    },
    serialize: (data: {[key: string]: _AttributeValue_Type}): any => {
        let rtn: any = {};
        for (const key of Object.keys(data)) {
            rtn[key] = _AttributeValue.parse!(data[key]);
        }
        return rtn;
    },
};