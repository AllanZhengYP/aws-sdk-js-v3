import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {DescribeStreamInput as DescribeStreamInput_Type} from '../types/DescribeStreamInput';

export const DescribeStreamInput: _OperationInputShapeModel_<DescribeStreamInput_Type, any> = {
    serialize: (data: DescribeStreamInput_Type): any => {
    		if (!data.StreamName) {
        throw new Error('DescribeStreamInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.StreamName) rtn.StreamName = data.StreamName;

    if (data.Limit) rtn.Limit = data.Limit;

    if (data.ExclusiveStartShardId) rtn.ExclusiveStartShardId = data.ExclusiveStartShardId;

        return rtn;
    },
};