import {List} from "./List";

describe('List', () => {
    it('should emit a basic list', () => {
        const list = new List({
            type: 'list',
            name: 'MyList',
            documentation: 'MyList',
            member: {
                shape: {
                    type: 'boolean',
                    name: 'boolean',
                    documentation: 'boolean',
                },
            },
        }, 'json');

        expect(list.toString()).toEqual(`
import {ListModel as _ListModel_} from '@aws-sdk/types';

export const MyList: _ListModel_<boolean, any> = {
    parse: (data: any): Array<boolean> => {
        return (data as Array<boolean>)data.map(_item => _item);
    },

    serialize: (input: Array<boolean>): any => {
        return input.map(_item => _item);
    },
};
        `.trim());
    });
});
