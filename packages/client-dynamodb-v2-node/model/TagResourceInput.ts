import {_TagList} from './_TagList';
import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {TagResourceInput as TagResourceInput_Type} from '../types/TagResourceInput';

export const TagResourceInput: _OperationInputShapeModel_<TagResourceInput_Type, any> = {
    serialize: (data: TagResourceInput_Type): any => {
    		if (!data.ResourceArn||!data.Tags) {
        throw new Error('TagResourceInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.ResourceArn) rtn.ResourceArn = data.ResourceArn;

    if (data.Tags) rtn.Tags = _TagList.serialize!(data.Tags as any);

        return rtn;
    },
};