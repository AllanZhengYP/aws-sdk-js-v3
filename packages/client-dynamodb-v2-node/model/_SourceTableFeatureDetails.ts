import {_LocalSecondaryIndexes} from './_LocalSecondaryIndexes';
import {_GlobalSecondaryIndexes} from './_GlobalSecondaryIndexes';
import {_StreamSpecification} from './_StreamSpecification';
import {_TimeToLiveDescription} from './_TimeToLiveDescription';
import {_SSEDescription} from './_SSEDescription';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_SourceTableFeatureDetails as _SourceTableFeatureDetails_Type} from '../types/_SourceTableFeatureDetails';

export const _SourceTableFeatureDetails: _StructureModel_<_SourceTableFeatureDetails_Type, any> = {
    parse: (data: any): _SourceTableFeatureDetails_Type => {
        let rtn: any = {};
        if (data.LocalSecondaryIndexes) rtn.LocalSecondaryIndexes = _LocalSecondaryIndexes.parse!(data.LocalSecondaryIndexes);
    if (data.GlobalSecondaryIndexes) rtn.GlobalSecondaryIndexes = _GlobalSecondaryIndexes.parse!(data.GlobalSecondaryIndexes);
    if (data.StreamDescription) rtn.StreamDescription = _StreamSpecification.parse!(data.StreamDescription);
    if (data.TimeToLiveDescription) rtn.TimeToLiveDescription = _TimeToLiveDescription.parse!(data.TimeToLiveDescription);
    if (data.SSEDescription) rtn.SSEDescription = _SSEDescription.parse!(data.SSEDescription);
        return rtn as _SourceTableFeatureDetails_Type;
    },
    serialize: (data: _SourceTableFeatureDetails_Type): any => {
        let rtn: any = {};
        if (data.LocalSecondaryIndexes) rtn.LocalSecondaryIndexes = _LocalSecondaryIndexes.serialize!(data.LocalSecondaryIndexes as any);

    if (data.GlobalSecondaryIndexes) rtn.GlobalSecondaryIndexes = _GlobalSecondaryIndexes.serialize!(data.GlobalSecondaryIndexes as any);

    if (data.StreamDescription) rtn.StreamDescription = _StreamSpecification.serialize!(data.StreamDescription as any);

    if (data.TimeToLiveDescription) rtn.TimeToLiveDescription = _TimeToLiveDescription.serialize!(data.TimeToLiveDescription as any);

    if (data.SSEDescription) rtn.SSEDescription = _SSEDescription.serialize!(data.SSEDescription as any);

        return rtn;
    },
};