import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {CreateStreamInput as CreateStreamInput_Type} from '../types/CreateStreamInput';

export const CreateStreamInput: _OperationInputShapeModel_<CreateStreamInput_Type, any> = {
    serialize: (data: CreateStreamInput_Type): any => {
    		if (!data.StreamName||!data.ShardCount) {
        throw new Error('CreateStreamInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.StreamName) rtn.StreamName = data.StreamName;

    if (data.ShardCount) rtn.ShardCount = data.ShardCount;

        return rtn;
    },
};