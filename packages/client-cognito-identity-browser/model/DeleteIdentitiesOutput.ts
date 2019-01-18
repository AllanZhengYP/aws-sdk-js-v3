import {_UnprocessedIdentityIdList} from './_UnprocessedIdentityIdList';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {DeleteIdentitiesOutput as DeleteIdentitiesOutput_Type} from '../types/DeleteIdentitiesOutput';

export const DeleteIdentitiesOutput: _OperationOutputShapeModel_<DeleteIdentitiesOutput_Type, any> = {
    parse: (data: any): DeleteIdentitiesOutput_Type => {
        let rtn: any = {};
        if (data.UnprocessedIdentityIds) rtn.UnprocessedIdentityIds = _UnprocessedIdentityIdList.parse!(data.UnprocessedIdentityIds);
        return rtn as DeleteIdentitiesOutput_Type;
    },
};