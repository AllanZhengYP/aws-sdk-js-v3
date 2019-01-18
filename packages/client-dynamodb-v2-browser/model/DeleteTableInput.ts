import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {DeleteTableInput as DeleteTableInput_Type} from '../types/DeleteTableInput';

export const DeleteTableInput: _OperationInputShapeModel_<DeleteTableInput_Type, any> = {
    serialize: (data: DeleteTableInput_Type): any => {
    		if (!data.TableName) {
        throw new Error('DeleteTableInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.TableName) rtn.TableName = data.TableName;

        return rtn;
    },
};