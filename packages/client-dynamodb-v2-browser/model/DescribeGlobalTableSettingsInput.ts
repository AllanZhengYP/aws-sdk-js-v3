import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {DescribeGlobalTableSettingsInput as DescribeGlobalTableSettingsInput_Type} from '../types/DescribeGlobalTableSettingsInput';

export const DescribeGlobalTableSettingsInput: _OperationInputShapeModel_<DescribeGlobalTableSettingsInput_Type, any> = {
    serialize: (data: DescribeGlobalTableSettingsInput_Type): any => {
    		if (!data.GlobalTableName) {
        throw new Error('DescribeGlobalTableSettingsInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.GlobalTableName) rtn.GlobalTableName = data.GlobalTableName;

        return rtn;
    },
};