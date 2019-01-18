import {MapModel as _MapModel_} from '@aws-sdk/types';
import {_AttributeValueUpdate} from './_AttributeValueUpdate';
import {_AttributeValueUpdate as _AttributeValueUpdate_Type} from '../types/_AttributeValueUpdate';

export const _AttributeUpdates: _MapModel_<_AttributeValueUpdate_Type, any> = {
    parse: (data: any): {[key: string]: _AttributeValueUpdate_Type} => {
        let rtn: any = {};
        for (const key of Object.keys(data)) {
            rtn[key] = _AttributeValueUpdate.parse!(data[key]);
        }
        return rtn as {[key: string]: _AttributeValueUpdate_Type};
    },
    serialize: (data: {[key: string]: _AttributeValueUpdate_Type}): any => {
        let rtn: any = {};
        for (const key of Object.keys(data)) {
            rtn[key] = _AttributeValueUpdate.parse!(data[key]);
        }
        return rtn;
    },
};