import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {DescribeLimitsOutput as DescribeLimitsOutput_Type} from '../types/DescribeLimitsOutput';

export const DescribeLimitsOutput: _OperationOutputShapeModel_<DescribeLimitsOutput_Type, any> = {
    parse: (data: any): DescribeLimitsOutput_Type => {
        let rtn: any = {};
        if (data.AccountMaxReadCapacityUnits) rtn.AccountMaxReadCapacityUnits = data.AccountMaxReadCapacityUnits;
    if (data.AccountMaxWriteCapacityUnits) rtn.AccountMaxWriteCapacityUnits = data.AccountMaxWriteCapacityUnits;
    if (data.TableMaxReadCapacityUnits) rtn.TableMaxReadCapacityUnits = data.TableMaxReadCapacityUnits;
    if (data.TableMaxWriteCapacityUnits) rtn.TableMaxWriteCapacityUnits = data.TableMaxWriteCapacityUnits;
        return rtn as DescribeLimitsOutput_Type;
    },
};