import {List as _List_} from '@aws-js-sdk-v3-prerelease/types';
import {_AttributeValue} from './_AttributeValue';

export const _AttributeValueList: _List_ = {
    type: 'list',
    member: {
        shape: _AttributeValue,
    },
};