import {_Endpoints} from './_Endpoints';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {DescribeEndpointsOutput as DescribeEndpointsOutput_Type} from '../types/DescribeEndpointsOutput';

export const DescribeEndpointsOutput: _OperationOutputShapeModel_<DescribeEndpointsOutput_Type, any> = {
    parse: (data: any): DescribeEndpointsOutput_Type => {
        let rtn: any = {};
        if (data.Endpoints) rtn.Endpoints = _Endpoints.parse!(data.Endpoints);
        return rtn as DescribeEndpointsOutput_Type;
    },
};