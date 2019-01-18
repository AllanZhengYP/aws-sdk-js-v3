import {_GlobalTableDescription} from './_GlobalTableDescription';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {DescribeGlobalTableOutput as DescribeGlobalTableOutput_Type} from '../types/DescribeGlobalTableOutput';

export const DescribeGlobalTableOutput: _OperationOutputShapeModel_<DescribeGlobalTableOutput_Type, any> = {
    parse: (data: any): DescribeGlobalTableOutput_Type => {
        let rtn: any = {};
        if (data.GlobalTableDescription) rtn.GlobalTableDescription = _GlobalTableDescription.parse!(data.GlobalTableDescription);
        return rtn as DescribeGlobalTableOutput_Type;
    },
};