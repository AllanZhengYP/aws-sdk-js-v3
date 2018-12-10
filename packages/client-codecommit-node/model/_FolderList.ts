import {List as _List_} from '@aws-js-sdk-v3-prerelease/types';
import {_Folder} from './_Folder';

export const _FolderList: _List_ = {
    type: 'list',
    member: {
        shape: _Folder,
    },
};