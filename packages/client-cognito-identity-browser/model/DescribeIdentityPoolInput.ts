import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {DescribeIdentityPoolInput as DescribeIdentityPoolInput_Type} from '../types/DescribeIdentityPoolInput';

export const DescribeIdentityPoolInput: _OperationInputShapeModel_<DescribeIdentityPoolInput_Type, any> = {
    serialize: (data: DescribeIdentityPoolInput_Type): any => {
    		if (!data.IdentityPoolId) {
        throw new Error('DescribeIdentityPoolInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.IdentityPoolId) rtn.IdentityPoolId = data.IdentityPoolId;

        return rtn;
    },
};