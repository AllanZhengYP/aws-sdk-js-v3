import {toDate as _toDate_} from '@aws-sdk/protocol-timestamp';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_StartingPosition as _StartingPosition_Type} from '../types/_StartingPosition';

export const _StartingPosition: _StructureModel_<_StartingPosition_Type, any> = {
    parse: (data: any): _StartingPosition_Type => {
        let rtn: any = {};
        if (data.Type) rtn.Type = data.Type;
    if (data.SequenceNumber) rtn.SequenceNumber = data.SequenceNumber;
    if (data.Timestamp) rtn.Timestamp = _toDate_(data.Timestamp);
        return rtn as _StartingPosition_Type;
    },
    serialize: (data: _StartingPosition_Type): any => {
    		if (!data.Type) {
        throw new Error('_StartingPosition has missing required parameter');
    }
        let rtn: any = {};
        if (data.Type) rtn.Type = data.Type;

    if (data.SequenceNumber) rtn.SequenceNumber = data.SequenceNumber;

    if (data.Timestamp) rtn.Timestamp = _toDate_(data.Timestamp);

        return rtn;
    },
};