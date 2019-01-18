import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {ProvisionedThroughputExceededException as ProvisionedThroughputExceededException_Type} from '../types/ProvisionedThroughputExceededException';

export const ProvisionedThroughputExceededException: _StructureModel_<ProvisionedThroughputExceededException_Type, any> = {
    parse: (data: any): ProvisionedThroughputExceededException_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as ProvisionedThroughputExceededException_Type;
    },
    serialize: (data: ProvisionedThroughputExceededException_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};