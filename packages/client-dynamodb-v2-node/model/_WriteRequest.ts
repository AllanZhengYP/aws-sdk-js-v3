import {_PutRequest} from './_PutRequest';
import {_DeleteRequest} from './_DeleteRequest';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_WriteRequest as _WriteRequest_Type} from '../types/_WriteRequest';

export const _WriteRequest: _StructureModel_<_WriteRequest_Type, any> = {
    parse: (data: any): _WriteRequest_Type => {
        let rtn: any = {};
        if (data.PutRequest) rtn.PutRequest = _PutRequest.parse!(data.PutRequest);
    if (data.DeleteRequest) rtn.DeleteRequest = _DeleteRequest.parse!(data.DeleteRequest);
        return rtn as _WriteRequest_Type;
    },
    serialize: (data: _WriteRequest_Type): any => {
        let rtn: any = {};
        if (data.PutRequest) rtn.PutRequest = _PutRequest.serialize!(data.PutRequest as any);

    if (data.DeleteRequest) rtn.DeleteRequest = _DeleteRequest.serialize!(data.DeleteRequest as any);

        return rtn;
    },
};