import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {TagResourceOutput as TagResourceOutput_Type} from '../types/TagResourceOutput';

export const TagResourceOutput: _OperationOutputShapeModel_<TagResourceOutput_Type, any> = {
    parse: (data: any): TagResourceOutput_Type => {
        let rtn: any = {};

        return rtn as TagResourceOutput_Type;
    },
};