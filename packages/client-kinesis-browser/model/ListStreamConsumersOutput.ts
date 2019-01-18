import {_ConsumerList} from './_ConsumerList';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {ListStreamConsumersOutput as ListStreamConsumersOutput_Type} from '../types/ListStreamConsumersOutput';

export const ListStreamConsumersOutput: _OperationOutputShapeModel_<ListStreamConsumersOutput_Type, any> = {
    parse: (data: any): ListStreamConsumersOutput_Type => {
        let rtn: any = {};
        if (data.Consumers) rtn.Consumers = _ConsumerList.parse!(data.Consumers);
    if (data.NextToken) rtn.NextToken = data.NextToken;
        return rtn as ListStreamConsumersOutput_Type;
    },
};