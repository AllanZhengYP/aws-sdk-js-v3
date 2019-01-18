import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {RemoveTagsFromStreamOutput as RemoveTagsFromStreamOutput_Type} from '../types/RemoveTagsFromStreamOutput';

export const RemoveTagsFromStreamOutput: _OperationOutputShapeModel_<RemoveTagsFromStreamOutput_Type, any> = {
    parse: (data: any): RemoveTagsFromStreamOutput_Type => {
        let rtn: any = {};

        return rtn as RemoveTagsFromStreamOutput_Type;
    },
};