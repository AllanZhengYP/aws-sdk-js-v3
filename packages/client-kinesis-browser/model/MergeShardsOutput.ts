import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {MergeShardsOutput as MergeShardsOutput_Type} from '../types/MergeShardsOutput';

export const MergeShardsOutput: _OperationOutputShapeModel_<MergeShardsOutput_Type, any> = {
    parse: (data: any): MergeShardsOutput_Type => {
        let rtn: any = {};

        return rtn as MergeShardsOutput_Type;
    },
};