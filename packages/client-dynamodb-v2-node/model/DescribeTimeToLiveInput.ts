import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {DescribeTimeToLiveInput as DescribeTimeToLiveInput_Type} from '../types/DescribeTimeToLiveInput';

export const DescribeTimeToLiveInput: _OperationInputShapeModel_<DescribeTimeToLiveInput_Type, any> = {
    serialize: (data: DescribeTimeToLiveInput_Type): any => {
    		if (!data.TableName) {
        throw new Error('DescribeTimeToLiveInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.TableName) rtn.TableName = data.TableName;

        return rtn;
    },
};