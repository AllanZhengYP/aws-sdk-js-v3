import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {StopStreamEncryptionOutput as StopStreamEncryptionOutput_Type} from '../types/StopStreamEncryptionOutput';

export const StopStreamEncryptionOutput: _OperationOutputShapeModel_<StopStreamEncryptionOutput_Type, any> = {
    parse: (data: any): StopStreamEncryptionOutput_Type => {
        let rtn: any = {};

        return rtn as StopStreamEncryptionOutput_Type;
    },
};