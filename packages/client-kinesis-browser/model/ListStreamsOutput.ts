import {_StreamNameList} from './_StreamNameList';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {ListStreamsOutput as ListStreamsOutput_Type} from '../types/ListStreamsOutput';

export const ListStreamsOutput: _OperationOutputShapeModel_<ListStreamsOutput_Type, any> = {
    parse: (data: any): ListStreamsOutput_Type => {
        let rtn: any = {};
        if (data.StreamNames) rtn.StreamNames = _StreamNameList.parse!(data.StreamNames);
    if (data.HasMoreStreams) rtn.HasMoreStreams = data.HasMoreStreams;
        return rtn as ListStreamsOutput_Type;
    },
};