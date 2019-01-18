import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {UnlinkIdentityOutput as UnlinkIdentityOutput_Type} from '../types/UnlinkIdentityOutput';

export const UnlinkIdentityOutput: _OperationOutputShapeModel_<UnlinkIdentityOutput_Type, any> = {
    parse: (data: any): UnlinkIdentityOutput_Type => {
        let rtn: any = {};

        return rtn as UnlinkIdentityOutput_Type;
    },
};