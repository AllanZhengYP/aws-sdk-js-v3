import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {DescribeContinuousBackupsInput as DescribeContinuousBackupsInput_Type} from '../types/DescribeContinuousBackupsInput';

export const DescribeContinuousBackupsInput: _OperationInputShapeModel_<DescribeContinuousBackupsInput_Type, any> = {
    serialize: (data: DescribeContinuousBackupsInput_Type): any => {
    		if (!data.TableName) {
        throw new Error('DescribeContinuousBackupsInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.TableName) rtn.TableName = data.TableName;

        return rtn;
    },
};