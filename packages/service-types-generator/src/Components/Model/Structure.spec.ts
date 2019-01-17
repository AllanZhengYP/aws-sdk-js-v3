import {Structure} from "./Structure";
import {TreeModelShape} from "@aws-sdk/build-types";

describe('Structure', () => {
    it(
        'should emit a minimal object with no extra imports when no members specified',
        () => {
            const structure = new Structure({
                type: 'structure',
                members: {},
                name: 'foo',
                documentation: 'documentation',
                required: [],
            }, 'json');

            expect(structure.toString()).toEqual(
`import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {foo as foo_Type} from '../types/foo';

export const foo: _StructureModel_<foo_Type, any> = {
    parse: (data: any): foo_Type => {
        let rtn: any = {};

        return rtn as foo_Type;
    },
    serialize: (data: foo_Type): any => {
        let rtn: any = {};

        return rtn;
    },
};`
            );
        }
    );
});
