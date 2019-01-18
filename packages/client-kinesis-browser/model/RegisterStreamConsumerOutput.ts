import {_Consumer} from './_Consumer';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {RegisterStreamConsumerOutput as RegisterStreamConsumerOutput_Type} from '../types/RegisterStreamConsumerOutput';

export const RegisterStreamConsumerOutput: _OperationOutputShapeModel_<RegisterStreamConsumerOutput_Type, any> = {
    parse: (data: any): RegisterStreamConsumerOutput_Type => {
        let rtn: any = {};
        if (data.Consumer) rtn.Consumer = _Consumer.parse!(data.Consumer);
        return rtn as RegisterStreamConsumerOutput_Type;
    },
};