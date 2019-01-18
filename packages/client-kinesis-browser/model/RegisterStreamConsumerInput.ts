import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {RegisterStreamConsumerInput as RegisterStreamConsumerInput_Type} from '../types/RegisterStreamConsumerInput';

export const RegisterStreamConsumerInput: _OperationInputShapeModel_<RegisterStreamConsumerInput_Type, any> = {
    serialize: (data: RegisterStreamConsumerInput_Type): any => {
    		if (!data.StreamARN||!data.ConsumerName) {
        throw new Error('RegisterStreamConsumerInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.StreamARN) rtn.StreamARN = data.StreamARN;

    if (data.ConsumerName) rtn.ConsumerName = data.ConsumerName;

        return rtn;
    },
};