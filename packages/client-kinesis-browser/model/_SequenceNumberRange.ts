import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_SequenceNumberRange as _SequenceNumberRange_Type} from '../types/_SequenceNumberRange';

export const _SequenceNumberRange: _StructureModel_<_SequenceNumberRange_Type, any> = {
    parse: (data: any): _SequenceNumberRange_Type => {
        let rtn: any = {};
        if (data.StartingSequenceNumber) rtn.StartingSequenceNumber = data.StartingSequenceNumber;
    if (data.EndingSequenceNumber) rtn.EndingSequenceNumber = data.EndingSequenceNumber;
        return rtn as _SequenceNumberRange_Type;
    },
    serialize: (data: _SequenceNumberRange_Type): any => {
    		if (!data.StartingSequenceNumber) {
        throw new Error('_SequenceNumberRange has missing required parameter');
    }
        let rtn: any = {};
        if (data.StartingSequenceNumber) rtn.StartingSequenceNumber = data.StartingSequenceNumber;

    if (data.EndingSequenceNumber) rtn.EndingSequenceNumber = data.EndingSequenceNumber;

        return rtn;
    },
};