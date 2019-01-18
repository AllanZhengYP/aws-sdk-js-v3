import {_TagList} from './_TagList';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {ListTagsOfResourceOutput as ListTagsOfResourceOutput_Type} from '../types/ListTagsOfResourceOutput';

export const ListTagsOfResourceOutput: _OperationOutputShapeModel_<ListTagsOfResourceOutput_Type, any> = {
    parse: (data: any): ListTagsOfResourceOutput_Type => {
        let rtn: any = {};
        if (data.Tags) rtn.Tags = _TagList.parse!(data.Tags);
    if (data.NextToken) rtn.NextToken = data.NextToken;
        return rtn as ListTagsOfResourceOutput_Type;
    },
};