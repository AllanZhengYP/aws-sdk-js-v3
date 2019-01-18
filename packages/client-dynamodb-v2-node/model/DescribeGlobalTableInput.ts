import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {DescribeGlobalTableInput as DescribeGlobalTableInput_Type} from '../types/DescribeGlobalTableInput';

export const DescribeGlobalTableInput: _OperationInputShapeModel_<DescribeGlobalTableInput_Type, any> = {
    serialize: (data: DescribeGlobalTableInput_Type): any => {
    		if (!data.GlobalTableName) {
        throw new Error('DescribeGlobalTableInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.GlobalTableName) rtn.GlobalTableName = data.GlobalTableName;

        return rtn;
    },
};