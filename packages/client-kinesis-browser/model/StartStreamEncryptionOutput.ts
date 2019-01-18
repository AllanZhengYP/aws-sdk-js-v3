import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {StartStreamEncryptionOutput as StartStreamEncryptionOutput_Type} from '../types/StartStreamEncryptionOutput';

export const StartStreamEncryptionOutput: _OperationOutputShapeModel_<StartStreamEncryptionOutput_Type, any> = {
    parse: (data: any): StartStreamEncryptionOutput_Type => {
        let rtn: any = {};

        return rtn as StartStreamEncryptionOutput_Type;
    },
};