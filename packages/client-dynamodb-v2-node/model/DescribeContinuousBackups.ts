import {DescribeContinuousBackupsInput} from './DescribeContinuousBackupsInput';
import {DescribeContinuousBackupsOutput} from './DescribeContinuousBackupsOutput';
import {DescribeContinuousBackupsInput as DescribeContinuousBackupsInput_Type} from '../types/DescribeContinuousBackupsInput';
import {DescribeContinuousBackupsOutput as DescribeContinuousBackupsOutput_Type} from '../types/DescribeContinuousBackupsOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DescribeContinuousBackups: _Operation_<DescribeContinuousBackupsInput_Type, DescribeContinuousBackupsOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'DescribeContinuousBackups',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: DescribeContinuousBackupsInput,
    output: DescribeContinuousBackupsOutput,
    errors: [],
};