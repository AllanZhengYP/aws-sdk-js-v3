import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_AutoScalingPolicyDescription as _AutoScalingPolicyDescription_Type} from '../types/_AutoScalingPolicyDescription';
import {_AutoScalingPolicyDescription} from './_AutoScalingPolicyDescription';

export const _AutoScalingPolicyDescriptionList: _ListModel_<_AutoScalingPolicyDescription_Type, any> = {
    parse: (data: any): Array<_AutoScalingPolicyDescription_Type> => {
        return (data as Array<_AutoScalingPolicyDescription_Type>).map(_item => _AutoScalingPolicyDescription.parse!(_item));
    },

    serialize: (input: Array<_AutoScalingPolicyDescription_Type>): any => {
        return input.map(_item => _AutoScalingPolicyDescription.serialize!(_item));
    },
};