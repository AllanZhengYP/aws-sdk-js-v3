import {_IdentityIdList} from './_IdentityIdList';
import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {DeleteIdentitiesInput as DeleteIdentitiesInput_Type} from '../types/DeleteIdentitiesInput';

export const DeleteIdentitiesInput: _OperationInputShapeModel_<DeleteIdentitiesInput_Type, any> = {
    serialize: (data: DeleteIdentitiesInput_Type): any => {
    		if (!data.IdentityIdsToDelete) {
        throw new Error('DeleteIdentitiesInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.IdentityIdsToDelete) rtn.IdentityIdsToDelete = _IdentityIdList.serialize!(data.IdentityIdsToDelete as any);

        return rtn;
    },
};