import {_Capacity} from './_Capacity';
import {_SecondaryIndexesCapacityMap} from './_SecondaryIndexesCapacityMap';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_ConsumedCapacity as _ConsumedCapacity_Type} from '../types/_ConsumedCapacity';

export const _ConsumedCapacity: _StructureModel_<_ConsumedCapacity_Type, any> = {
    parse: (data: any): _ConsumedCapacity_Type => {
        let rtn: any = {};
        if (data.TableName) rtn.TableName = data.TableName;
    if (data.CapacityUnits) rtn.CapacityUnits = data.CapacityUnits;
    if (data.Table) rtn.Table = _Capacity.parse!(data.Table);
    if (data.LocalSecondaryIndexes) rtn.LocalSecondaryIndexes = _SecondaryIndexesCapacityMap.parse!(data.LocalSecondaryIndexes);
    if (data.GlobalSecondaryIndexes) rtn.GlobalSecondaryIndexes = _SecondaryIndexesCapacityMap.parse!(data.GlobalSecondaryIndexes);
        return rtn as _ConsumedCapacity_Type;
    },
    serialize: (data: _ConsumedCapacity_Type): any => {
        let rtn: any = {};
        if (data.TableName) rtn.TableName = data.TableName;

    if (data.CapacityUnits) rtn.CapacityUnits = data.CapacityUnits;

    if (data.Table) rtn.Table = _Capacity.serialize!(data.Table as any);

    if (data.LocalSecondaryIndexes) rtn.LocalSecondaryIndexes = _SecondaryIndexesCapacityMap.serialize!(data.LocalSecondaryIndexes as any);

    if (data.GlobalSecondaryIndexes) rtn.GlobalSecondaryIndexes = _SecondaryIndexesCapacityMap.serialize!(data.GlobalSecondaryIndexes as any);

        return rtn;
    },
};