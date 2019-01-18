import {_LoginsList} from './_LoginsList';
import {toDate as _toDate_} from '@aws-sdk/protocol-timestamp';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {DescribeIdentityOutput as DescribeIdentityOutput_Type} from '../types/DescribeIdentityOutput';

export const DescribeIdentityOutput: _OperationOutputShapeModel_<DescribeIdentityOutput_Type, any> = {
    parse: (data: any): DescribeIdentityOutput_Type => {
        let rtn: any = {};
        if (data.IdentityId) rtn.IdentityId = data.IdentityId;
    if (data.Logins) rtn.Logins = _LoginsList.parse!(data.Logins);
    if (data.CreationDate) rtn.CreationDate = _toDate_(data.CreationDate);
    if (data.LastModifiedDate) rtn.LastModifiedDate = _toDate_(data.LastModifiedDate);
        return rtn as DescribeIdentityOutput_Type;
    },
};