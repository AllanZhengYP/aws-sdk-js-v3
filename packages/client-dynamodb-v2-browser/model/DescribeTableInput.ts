import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {DescribeTableInput as DescribeTableInput_Type} from '../types/DescribeTableInput';

export const DescribeTableInput: _OperationInputShapeModel_<DescribeTableInput_Type, any> = {
    serialize: (data: DescribeTableInput_Type): any => {
    		if (!data.TableName) {
        throw new Error('DescribeTableInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.TableName) rtn.TableName = data.TableName;

        return rtn;
    },
};