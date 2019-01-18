import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {ListTagsForStreamInput as ListTagsForStreamInput_Type} from '../types/ListTagsForStreamInput';

export const ListTagsForStreamInput: _OperationInputShapeModel_<ListTagsForStreamInput_Type, any> = {
    serialize: (data: ListTagsForStreamInput_Type): any => {
    		if (!data.StreamName) {
        throw new Error('ListTagsForStreamInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.StreamName) rtn.StreamName = data.StreamName;

    if (data.ExclusiveStartTagKey) rtn.ExclusiveStartTagKey = data.ExclusiveStartTagKey;

    if (data.Limit) rtn.Limit = data.Limit;

        return rtn;
    },
};