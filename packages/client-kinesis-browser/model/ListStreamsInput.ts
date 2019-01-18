import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {ListStreamsInput as ListStreamsInput_Type} from '../types/ListStreamsInput';

export const ListStreamsInput: _OperationInputShapeModel_<ListStreamsInput_Type, any> = {
    serialize: (data: ListStreamsInput_Type): any => {
        let rtn: any = {};
        if (data.Limit) rtn.Limit = data.Limit;

    if (data.ExclusiveStartStreamName) rtn.ExclusiveStartStreamName = data.ExclusiveStartStreamName;

        return rtn;
    },
};