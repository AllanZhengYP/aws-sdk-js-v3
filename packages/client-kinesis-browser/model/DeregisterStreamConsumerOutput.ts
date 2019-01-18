import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {DeregisterStreamConsumerOutput as DeregisterStreamConsumerOutput_Type} from '../types/DeregisterStreamConsumerOutput';

export const DeregisterStreamConsumerOutput: _OperationOutputShapeModel_<DeregisterStreamConsumerOutput_Type, any> = {
    parse: (data: any): DeregisterStreamConsumerOutput_Type => {
        let rtn: any = {};

        return rtn as DeregisterStreamConsumerOutput_Type;
    },
};