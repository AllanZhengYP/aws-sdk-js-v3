import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {MergeDeveloperIdentitiesOutput as MergeDeveloperIdentitiesOutput_Type} from '../types/MergeDeveloperIdentitiesOutput';

export const MergeDeveloperIdentitiesOutput: _OperationOutputShapeModel_<MergeDeveloperIdentitiesOutput_Type, any> = {
    parse: (data: any): MergeDeveloperIdentitiesOutput_Type => {
        let rtn: any = {};
        if (data.IdentityId) rtn.IdentityId = data.IdentityId;
        return rtn as MergeDeveloperIdentitiesOutput_Type;
    },
};