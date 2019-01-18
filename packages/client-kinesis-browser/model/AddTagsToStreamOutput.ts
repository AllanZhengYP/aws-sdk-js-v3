import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {AddTagsToStreamOutput as AddTagsToStreamOutput_Type} from '../types/AddTagsToStreamOutput';

export const AddTagsToStreamOutput: _OperationOutputShapeModel_<AddTagsToStreamOutput_Type, any> = {
    parse: (data: any): AddTagsToStreamOutput_Type => {
        let rtn: any = {};

        return rtn as AddTagsToStreamOutput_Type;
    },
};