import {ScanInput} from './ScanInput';
import {ScanOutput} from './ScanOutput';
import {ScanInput as ScanInput_Type} from '../types/ScanInput';
import {ScanOutput as ScanOutput_Type} from '../types/ScanOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const Scan: _Operation_<ScanInput_Type, ScanOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'Scan',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: ScanInput,
    output: ScanOutput,
    errors: [],
};