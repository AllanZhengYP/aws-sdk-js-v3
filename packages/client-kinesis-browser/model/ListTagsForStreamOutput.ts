import {_TagList} from './_TagList';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {ListTagsForStreamOutput as ListTagsForStreamOutput_Type} from '../types/ListTagsForStreamOutput';

export const ListTagsForStreamOutput: _OperationOutputShapeModel_<ListTagsForStreamOutput_Type, any> = {
    parse: (data: any): ListTagsForStreamOutput_Type => {
        let rtn: any = {};
        if (data.Tags) rtn.Tags = _TagList.parse!(data.Tags);
    if (data.HasMoreTags) rtn.HasMoreTags = data.HasMoreTags;
        return rtn as ListTagsForStreamOutput_Type;
    },
};