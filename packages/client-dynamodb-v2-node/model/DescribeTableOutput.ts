import {_TableDescription} from './_TableDescription';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {DescribeTableOutput as DescribeTableOutput_Type} from '../types/DescribeTableOutput';

export const DescribeTableOutput: _OperationOutputShapeModel_<DescribeTableOutput_Type, any> = {
    parse: (data: any): DescribeTableOutput_Type => {
        let rtn: any = {};
        if (data.Table) rtn.Table = _TableDescription.parse!(data.Table);
        return rtn as DescribeTableOutput_Type;
    },
};