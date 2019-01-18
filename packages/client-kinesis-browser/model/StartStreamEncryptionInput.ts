import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {StartStreamEncryptionInput as StartStreamEncryptionInput_Type} from '../types/StartStreamEncryptionInput';

export const StartStreamEncryptionInput: _OperationInputShapeModel_<StartStreamEncryptionInput_Type, any> = {
    serialize: (data: StartStreamEncryptionInput_Type): any => {
    		if (!data.StreamName||!data.EncryptionType||!data.KeyId) {
        throw new Error('StartStreamEncryptionInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.StreamName) rtn.StreamName = data.StreamName;

    if (data.EncryptionType) rtn.EncryptionType = data.EncryptionType;

    if (data.KeyId) rtn.KeyId = data.KeyId;

        return rtn;
    },
};