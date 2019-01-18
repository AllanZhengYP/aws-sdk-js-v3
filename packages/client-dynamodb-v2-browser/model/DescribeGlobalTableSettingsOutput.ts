import {_ReplicaSettingsDescriptionList} from './_ReplicaSettingsDescriptionList';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {DescribeGlobalTableSettingsOutput as DescribeGlobalTableSettingsOutput_Type} from '../types/DescribeGlobalTableSettingsOutput';

export const DescribeGlobalTableSettingsOutput: _OperationOutputShapeModel_<DescribeGlobalTableSettingsOutput_Type, any> = {
    parse: (data: any): DescribeGlobalTableSettingsOutput_Type => {
        let rtn: any = {};
        if (data.GlobalTableName) rtn.GlobalTableName = data.GlobalTableName;
    if (data.ReplicaSettings) rtn.ReplicaSettings = _ReplicaSettingsDescriptionList.parse!(data.ReplicaSettings);
        return rtn as DescribeGlobalTableSettingsOutput_Type;
    },
};