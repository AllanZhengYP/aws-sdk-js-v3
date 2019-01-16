import {Import} from "../Import";
import {MemberRef} from "./MemberRef";
import {IndentedSection} from "../IndentedSection";
import {requiresImport} from "./helpers";
import {TreeModelList, TreeModelMember} from "@aws-sdk/build-types";
import {SupportedProtocol} from '@aws-sdk/types';

export class List {
    constructor(
        private readonly shape: TreeModelList,
        private readonly protocol: SupportedProtocol,
    ) {}

    toString(): string {
        let imports: Array<Import> = [new Import('@aws-sdk/types', 'ListModel as _ListModel_')];
        const {flattened, member, min, sensitive} = this.shape;
        const props: Array<string> = [];

        if (sensitive) {
            props.push('sensitive: true');
        }

        props.push(this.parse(member, this.protocol));

        props.push(this.serialize(member, this.protocol));

        if (requiresImport(member.shape)) {
            const {name} = member.shape;
            imports.push(new Import(`./${name}`, name));
        }
        const midProductGeneric = this.midProductGeneric(this.protocol);
        let toReturn = imports.reduce<string>((prev, singleImport) => prev += `${singleImport.toString()}\n`, '');
        toReturn += `
export const ${this.shape.name}: _ListModel_<${this.arrayGeneric(member)}${midProductGeneric ? `, ${midProductGeneric}` : ''}> = {
${new IndentedSection(props.join(',\n'))},
};`;

        return toReturn.trim();
    }

    parse(member: TreeModelMember, protocol: SupportedProtocol): string {
        if (protocol === 'json') {
            return `parse: (data: Array<any>): Array<${this.arrayGeneric(member)}> => {
    return data.map(${this.parserMapFunction(member)});
}`
        }
        throw Error('protocols other than json is not supported');
    }

    serialize(member: TreeModelMember, protocol: SupportedProtocol): string {
        if (protocol === 'json') {
            return  `
serialize: (input: Array<${this.arrayGeneric(member)}>): any => {
    return input.map(${this.serializerMapFunction(member)});
}`
        }
        throw Error('protocols other than json is not supported');
    }

    arrayGeneric(member: TreeModelMember): string {
        if (requiresImport(member.shape)) return member.shape.name;
        switch (member.shape.type) {
            case 'blob':
                return 'Uint8Array';
            case 'string':
            case 'boolean':
                return member.shape.type;
            case 'integer':
            case 'float':
                return 'number';
            case 'timestamp':
                return 'Date';
            default:
                return 'any'
        }
    }

    midProductGeneric(protocol: SupportedProtocol): string | undefined {
        switch (protocol) {
            case 'json':
                return 'any'
            default:
                break;
        }
    }

    parserMapFunction(member: TreeModelMember): string {
        if (requiresImport(member.shape)) return `_item => ${member.shape.name}.parse(_item)`;
        switch (member.shape.type) {
            case 'timestamp':
                return `_item => _toDate_(_item)`;
            default:
                return `_item => _item`;
        }
    }

    serializerMapFunction(member: TreeModelMember): string {
        if (requiresImport(member.shape)) return `_item => ${member.shape.name}.serialize(_item)`;
        switch (member.shape.type) {
            case 'timestamp':
                return `_item => _epoch_(_item)`;
            default:
                return `_item => _item`;
        }
    }
}
