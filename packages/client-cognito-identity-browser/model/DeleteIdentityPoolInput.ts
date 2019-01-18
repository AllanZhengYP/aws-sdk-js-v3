import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {DeleteIdentityPoolInput as DeleteIdentityPoolInput_Type} from '../types/DeleteIdentityPoolInput';

export const DeleteIdentityPoolInput: _OperationInputShapeModel_<DeleteIdentityPoolInput_Type, any> = {
    serialize: (data: DeleteIdentityPoolInput_Type): any => {
    		if (!data.IdentityPoolId) {
        throw new Error('DeleteIdentityPoolInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.IdentityPoolId) rtn.IdentityPoolId = data.IdentityPoolId;

        return rtn;
    },
};