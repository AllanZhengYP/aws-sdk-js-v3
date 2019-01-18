import {_DeveloperUserIdentifierList} from './_DeveloperUserIdentifierList';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {LookupDeveloperIdentityOutput as LookupDeveloperIdentityOutput_Type} from '../types/LookupDeveloperIdentityOutput';

export const LookupDeveloperIdentityOutput: _OperationOutputShapeModel_<LookupDeveloperIdentityOutput_Type, any> = {
    parse: (data: any): LookupDeveloperIdentityOutput_Type => {
        let rtn: any = {};
        if (data.IdentityId) rtn.IdentityId = data.IdentityId;
    if (data.DeveloperUserIdentifierList) rtn.DeveloperUserIdentifierList = _DeveloperUserIdentifierList.parse!(data.DeveloperUserIdentifierList);
    if (data.NextToken) rtn.NextToken = data.NextToken;
        return rtn as LookupDeveloperIdentityOutput_Type;
    },
};