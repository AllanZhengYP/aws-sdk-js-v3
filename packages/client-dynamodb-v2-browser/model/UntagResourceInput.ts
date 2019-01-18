import {_TagKeyList} from './_TagKeyList';
import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {UntagResourceInput as UntagResourceInput_Type} from '../types/UntagResourceInput';

export const UntagResourceInput: _OperationInputShapeModel_<UntagResourceInput_Type, any> = {
    serialize: (data: UntagResourceInput_Type): any => {
    		if (!data.ResourceArn||!data.TagKeys) {
        throw new Error('UntagResourceInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.ResourceArn) rtn.ResourceArn = data.ResourceArn;

    if (data.TagKeys) rtn.TagKeys = _TagKeyList.serialize!(data.TagKeys as any);

        return rtn;
    },
};