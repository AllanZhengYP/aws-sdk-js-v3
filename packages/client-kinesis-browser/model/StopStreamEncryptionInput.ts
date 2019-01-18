import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {StopStreamEncryptionInput as StopStreamEncryptionInput_Type} from '../types/StopStreamEncryptionInput';

export const StopStreamEncryptionInput: _OperationInputShapeModel_<StopStreamEncryptionInput_Type, any> = {
    serialize: (data: StopStreamEncryptionInput_Type): any => {
    		if (!data.StreamName||!data.EncryptionType||!data.KeyId) {
        throw new Error('StopStreamEncryptionInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.StreamName) rtn.StreamName = data.StreamName;

    if (data.EncryptionType) rtn.EncryptionType = data.EncryptionType;

    if (data.KeyId) rtn.KeyId = data.KeyId;

        return rtn;
    },
};