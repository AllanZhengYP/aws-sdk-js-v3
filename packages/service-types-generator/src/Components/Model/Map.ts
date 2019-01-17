import {Import} from "../Import";
import {IndentedSection} from "../IndentedSection";
import {MemberRef} from "./MemberRef";
import {requiresImport, genericTypeName} from "./helpers";
import {CircularDependenciesMap} from "../helpers/detectCircularModelDependency";
import {TreeModelMap, TreeModelMember} from "@aws-sdk/build-types";
import { SupportedProtocol } from '@aws-sdk/types';

export class Map {
    private imports: Array<Import> = [new Import('@aws-sdk/types', 'MapModel as _MapModel_')];
    constructor(
        private readonly shape: TreeModelMap,
        private readonly protocol: SupportedProtocol,
    ) {}

    toString(): string {
        const properties: Array<string> = [];
        const {flattened, sensitive, value} = this.shape;
        if (flattened) {
            properties.push('flattened: true');
        }
        if (sensitive) {
            properties.push('sensitive: true');
        }

        properties.push(this.parse(this.shape.value, this.protocol));

        properties.push(this.serialize(this.shape.value, this.protocol));

        if (requiresImport(value.shape)) {
            const typeName = value.shape.name
            this.imports.push(new Import(`./${typeName}`, typeName));
            this.imports.push(new Import(`../types/${typeName}`, `${typeName} as ${typeName}_Type`));
        }
        const importStatements = [...new Set<string>(this.imports.map(singleImport => singleImport.toString()))];
        let toReturn = importStatements.reduce<string>((prev, singleImport) => prev += `${singleImport}\n`, '');
        toReturn += `
export const ${this.shape.name}: _MapModel_<${genericTypeName(value)}, any> = {
${new IndentedSection(properties.join(',\n'))},
};`;

        return toReturn.trim();
    }

    private parse(member: TreeModelMember, protocol: SupportedProtocol): string {
        if (protocol === 'json') {
            return `parse: (data: any): {[key: string]: ${genericTypeName(member)}} => {
    let rtn: any = {};
    for (const key of Object.keys(data)) {
        rtn[key] = ${this.assignValue(member, 'parse')};
    }
    return rtn as {[key: string]: ${genericTypeName(member)}};
}`
        }
        throw new Error('protocols other than json is not supported');
    }

    private assignValue(member: TreeModelMember, mode: 'parse'|'serialize'): string {
        if (requiresImport(member.shape)) {
            return `${member.shape.name}.${mode}!(data[key])`;
        }
        else if (member.shape.type === 'timestamp') {
            this.imports.push(new Import('@aws-sdk/protocol-timestamp', 'toDate as _toDate_'));
            return `_toDate_(data[key])`;
        }
        return 'data[key]';
    }

    private serialize(member: TreeModelMember, protocol: SupportedProtocol): string {
        if (protocol === 'json') {
            return `serialize: (data: {[key: string]: ${genericTypeName(member)}}): any => {
    let rtn: any = {};
    for (const key of Object.keys(data)) {
        rtn[key] = ${this.assignValue(member, 'serialize')};
    }
    return rtn;
}`
        }
        throw new Error('protocols other than json is not supported');
    }


}
