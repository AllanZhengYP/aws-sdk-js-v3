import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {DescribeIdentityInput as DescribeIdentityInput_Type} from '../types/DescribeIdentityInput';

export const DescribeIdentityInput: _OperationInputShapeModel_<DescribeIdentityInput_Type, any> = {
    serialize: (data: DescribeIdentityInput_Type): any => {
    		if (!data.IdentityId) {
        throw new Error('DescribeIdentityInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.IdentityId) rtn.IdentityId = data.IdentityId;

        return rtn;
    },
};