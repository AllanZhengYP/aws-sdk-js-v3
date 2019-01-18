import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {GetRecordsInput as GetRecordsInput_Type} from '../types/GetRecordsInput';

export const GetRecordsInput: _OperationInputShapeModel_<GetRecordsInput_Type, any> = {
    serialize: (data: GetRecordsInput_Type): any => {
    		if (!data.ShardIterator) {
        throw new Error('GetRecordsInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.ShardIterator) rtn.ShardIterator = data.ShardIterator;

    if (data.Limit) rtn.Limit = data.Limit;

        return rtn;
    },
};