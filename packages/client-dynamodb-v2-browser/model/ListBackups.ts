import {ListBackupsInput} from './ListBackupsInput';
import {ListBackupsOutput} from './ListBackupsOutput';
import {ListBackupsInput as ListBackupsInput_Type} from '../types/ListBackupsInput';
import {ListBackupsOutput as ListBackupsOutput_Type} from '../types/ListBackupsOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListBackups: _Operation_<ListBackupsInput_Type, ListBackupsOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'ListBackups',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: ListBackupsInput,
    output: ListBackupsOutput,
    errors: [],
};