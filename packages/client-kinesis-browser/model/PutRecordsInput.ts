import {_PutRecordsRequestEntryList} from './_PutRecordsRequestEntryList';
import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {PutRecordsInput as PutRecordsInput_Type} from '../types/PutRecordsInput';

export const PutRecordsInput: _OperationInputShapeModel_<PutRecordsInput_Type, any> = {
    serialize: (data: PutRecordsInput_Type): any => {
    		if (!data.Records||!data.StreamName) {
        throw new Error('PutRecordsInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.Records) rtn.Records = _PutRecordsRequestEntryList.serialize!(data.Records as any);

    if (data.StreamName) rtn.StreamName = data.StreamName;

        return rtn;
    },
};