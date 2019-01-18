import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {DeregisterStreamConsumerInput as DeregisterStreamConsumerInput_Type} from '../types/DeregisterStreamConsumerInput';

export const DeregisterStreamConsumerInput: _OperationInputShapeModel_<DeregisterStreamConsumerInput_Type, any> = {
    serialize: (data: DeregisterStreamConsumerInput_Type): any => {
        let rtn: any = {};
        if (data.StreamARN) rtn.StreamARN = data.StreamARN;

    if (data.ConsumerName) rtn.ConsumerName = data.ConsumerName;

    if (data.ConsumerARN) rtn.ConsumerARN = data.ConsumerARN;

        return rtn;
    },
};