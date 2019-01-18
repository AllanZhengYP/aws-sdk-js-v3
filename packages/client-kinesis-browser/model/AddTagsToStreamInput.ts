import {_TagMap} from './_TagMap';
import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {AddTagsToStreamInput as AddTagsToStreamInput_Type} from '../types/AddTagsToStreamInput';

export const AddTagsToStreamInput: _OperationInputShapeModel_<AddTagsToStreamInput_Type, any> = {
    serialize: (data: AddTagsToStreamInput_Type): any => {
    		if (!data.StreamName||!data.Tags) {
        throw new Error('AddTagsToStreamInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.StreamName) rtn.StreamName = data.StreamName;

    if (data.Tags) rtn.Tags = _TagMap.serialize!(data.Tags as any);

        return rtn;
    },
};