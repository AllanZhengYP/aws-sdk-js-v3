import {_TimeToLiveSpecification} from './_TimeToLiveSpecification';
import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {UpdateTimeToLiveInput as UpdateTimeToLiveInput_Type} from '../types/UpdateTimeToLiveInput';

export const UpdateTimeToLiveInput: _OperationInputShapeModel_<UpdateTimeToLiveInput_Type, any> = {
    serialize: (data: UpdateTimeToLiveInput_Type): any => {
    		if (!data.TableName||!data.TimeToLiveSpecification) {
        throw new Error('UpdateTimeToLiveInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.TableName) rtn.TableName = data.TableName;

    if (data.TimeToLiveSpecification) rtn.TimeToLiveSpecification = _TimeToLiveSpecification.serialize!(data.TimeToLiveSpecification as any);

        return rtn;
    },
};