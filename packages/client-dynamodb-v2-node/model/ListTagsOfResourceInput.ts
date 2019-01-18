import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {ListTagsOfResourceInput as ListTagsOfResourceInput_Type} from '../types/ListTagsOfResourceInput';

export const ListTagsOfResourceInput: _OperationInputShapeModel_<ListTagsOfResourceInput_Type, any> = {
    serialize: (data: ListTagsOfResourceInput_Type): any => {
    		if (!data.ResourceArn) {
        throw new Error('ListTagsOfResourceInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.ResourceArn) rtn.ResourceArn = data.ResourceArn;

    if (data.NextToken) rtn.NextToken = data.NextToken;

        return rtn;
    },
};