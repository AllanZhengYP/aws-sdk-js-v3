import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {DeleteStreamInput as DeleteStreamInput_Type} from '../types/DeleteStreamInput';

export const DeleteStreamInput: _OperationInputShapeModel_<DeleteStreamInput_Type, any> = {
    serialize: (data: DeleteStreamInput_Type): any => {
    		if (!data.StreamName) {
        throw new Error('DeleteStreamInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.StreamName) rtn.StreamName = data.StreamName;

    if (data.EnforceConsumerDeletion) rtn.EnforceConsumerDeletion = data.EnforceConsumerDeletion;

        return rtn;
    },
};