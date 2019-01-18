import {DescribeBackupInput} from './DescribeBackupInput';
import {DescribeBackupOutput} from './DescribeBackupOutput';
import {DescribeBackupInput as DescribeBackupInput_Type} from '../types/DescribeBackupInput';
import {DescribeBackupOutput as DescribeBackupOutput_Type} from '../types/DescribeBackupOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DescribeBackup: _Operation_<DescribeBackupInput_Type, DescribeBackupOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'DescribeBackup',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: DescribeBackupInput,
    output: DescribeBackupOutput,
    errors: [],
};