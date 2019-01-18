import {toDate as _toDate_} from '@aws-sdk/protocol-timestamp';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_ProvisionedThroughputDescription as _ProvisionedThroughputDescription_Type} from '../types/_ProvisionedThroughputDescription';

export const _ProvisionedThroughputDescription: _StructureModel_<_ProvisionedThroughputDescription_Type, any> = {
    parse: (data: any): _ProvisionedThroughputDescription_Type => {
        let rtn: any = {};
        if (data.LastIncreaseDateTime) rtn.LastIncreaseDateTime = _toDate_(data.LastIncreaseDateTime);
    if (data.LastDecreaseDateTime) rtn.LastDecreaseDateTime = _toDate_(data.LastDecreaseDateTime);
    if (data.NumberOfDecreasesToday) rtn.NumberOfDecreasesToday = data.NumberOfDecreasesToday;
    if (data.ReadCapacityUnits) rtn.ReadCapacityUnits = data.ReadCapacityUnits;
    if (data.WriteCapacityUnits) rtn.WriteCapacityUnits = data.WriteCapacityUnits;
        return rtn as _ProvisionedThroughputDescription_Type;
    },
    serialize: (data: _ProvisionedThroughputDescription_Type): any => {
        let rtn: any = {};
        if (data.LastIncreaseDateTime) rtn.LastIncreaseDateTime = _toDate_(data.LastIncreaseDateTime);

    if (data.LastDecreaseDateTime) rtn.LastDecreaseDateTime = _toDate_(data.LastDecreaseDateTime);

    if (data.NumberOfDecreasesToday) rtn.NumberOfDecreasesToday = data.NumberOfDecreasesToday;

    if (data.ReadCapacityUnits) rtn.ReadCapacityUnits = data.ReadCapacityUnits;

    if (data.WriteCapacityUnits) rtn.WriteCapacityUnits = data.WriteCapacityUnits;

        return rtn;
    },
};