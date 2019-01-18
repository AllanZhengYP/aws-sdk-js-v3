import {_TagKeyList} from './_TagKeyList';
import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {RemoveTagsFromStreamInput as RemoveTagsFromStreamInput_Type} from '../types/RemoveTagsFromStreamInput';

export const RemoveTagsFromStreamInput: _OperationInputShapeModel_<RemoveTagsFromStreamInput_Type, any> = {
    serialize: (data: RemoveTagsFromStreamInput_Type): any => {
    		if (!data.StreamName||!data.TagKeys) {
        throw new Error('RemoveTagsFromStreamInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.StreamName) rtn.StreamName = data.StreamName;

    if (data.TagKeys) rtn.TagKeys = _TagKeyList.serialize!(data.TagKeys as any);

        return rtn;
    },
};