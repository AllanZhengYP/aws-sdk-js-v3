import {Map} from "./Map";

describe('Map', () => {
    it('should emit a basic Map', () => {
        const map = new Map({
            type: 'map',
            name: 'MyMap',
            documentation: 'MyMap',
            key: {
                shape: {
                    type: 'string',
                    name: 'string',
                    documentation: 'string',
                },
            },
            value: {
                shape: {
                    type: 'boolean',
                    name: 'boolean',
                    documentation: 'boolean',
                },
            },
        }, 'json');

        expect(map.toString()).toEqual(`
import {MapModel as _MapModel_} from '@aws-sdk/types';

export const MyMap: _MapModel_<boolean, any> = {
    parse: (data: any): {[key: string]: boolean} => {
        let rtn: any = {};
        for (const key of Object.keys(data)) {
            rtn[key] = data[key];
        }
        return rtn as {[key: string]: boolean};
    },
    serialize: (data: {[key: string]: boolean}): any => {
        let rtn: any = {};
        for (const key of Object.keys(data)) {
            rtn[key] = data[key];
        }
        return rtn;
    },
};
        `.trim());
    });
});
