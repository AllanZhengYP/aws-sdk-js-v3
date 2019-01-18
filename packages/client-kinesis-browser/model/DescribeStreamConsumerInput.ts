import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {DescribeStreamConsumerInput as DescribeStreamConsumerInput_Type} from '../types/DescribeStreamConsumerInput';

export const DescribeStreamConsumerInput: _OperationInputShapeModel_<DescribeStreamConsumerInput_Type, any> = {
    serialize: (data: DescribeStreamConsumerInput_Type): any => {
        let rtn: any = {};
        if (data.StreamARN) rtn.StreamARN = data.StreamARN;

    if (data.ConsumerName) rtn.ConsumerName = data.ConsumerName;

    if (data.ConsumerARN) rtn.ConsumerARN = data.ConsumerARN;

        return rtn;
    },
};