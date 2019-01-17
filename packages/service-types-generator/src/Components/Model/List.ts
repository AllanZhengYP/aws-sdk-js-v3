import {Import} from "../Import";
import {IndentedSection} from "../IndentedSection";
import {requiresImport, genericTypeName} from "./helpers";
import {TreeModelList, TreeModelMember} from "@aws-sdk/build-types";
import {SupportedProtocol} from '@aws-sdk/types';

export class List {
    private imports: Array<Import> = [new Import('@aws-sdk/types', 'ListModel as _ListModel_')];
    constructor(
        private readonly shape: TreeModelList,
        private readonly protocol: SupportedProtocol,
    ) {}

    toString(): string {
        const {flattened, member, min, sensitive} = this.shape;
        const props: Array<string> = [];

        if (sensitive) {
            props.push('sensitive: true');
        }

        props.push(this.parse(member, this.protocol));

        props.push(this.serialize(member, this.protocol));

        if (requiresImport(member.shape)) {
            const {name} = member.shape;
            this.imports.push(new Import(`../types/${name}`, `${name} as ${name}_Type`));
            this.imports.push(new Import(`./${name}`, name));
        }
        const midProductGeneric = this.midProductGeneric(this.protocol);
        let toReturn = this.imports.reduce<string>((prev, singleImport) => prev += `${singleImport.toString()}\n`, '');
        toReturn += `
export const ${this.shape.name}: _ListModel_<${genericTypeName(member)}${midProductGeneric ? `, ${midProductGeneric}` : ''}> = {
${new IndentedSection(props.join(',\n'))},
};`;

        return toReturn.trim();
    }

    private parse(member: TreeModelMember, protocol: SupportedProtocol): string {
        if (protocol === 'json') {
            return `parse: (data: any): Array<${genericTypeName(member)}> => {
    return (data as Array<${genericTypeName(member)}>).map(${this.parserMapFunction(member)});
}`
        }
        throw Error('protocols other than json is not supported');
    }

    private serialize(member: TreeModelMember, protocol: SupportedProtocol): string {
        if (protocol === 'json') {
            return  `
serialize: (input: Array<${genericTypeName(member)}>): any => {
    return input.map(${this.serializerMapFunction(member)});
}`
        }
        throw Error('protocols other than json is not supported');
    }

    private midProductGeneric(protocol: SupportedProtocol): string | undefined {
        switch (protocol) {
            case 'json':
                return 'any'
            default:
                break;
        }
    }

    private parserMapFunction(member: TreeModelMember): string {
        if (requiresImport(member.shape)) return `_item => ${member.shape.name}.parse!(_item)`;
        switch (member.shape.type) {
            case 'timestamp':
                this.imports.push(new Import('@aws-sdk/protocol-timestamp', 'toDate as _toDate_'));
                return `_item => _toDate_(_item)`;
            default:
                return `_item => _item`;
        }
    }

    private serializerMapFunction(member: TreeModelMember): string {
        if (requiresImport(member.shape)) return `_item => ${member.shape.name}.serialize!(_item)`;
        switch (member.shape.type) {
            case 'timestamp':
                this.imports.push(new Import('@aws-sdk/protocol-timestamp', 'epoch as _epoch_'));
                return `_item => _epoch_(_item)`;
            default:
                return `_item => _item`;
        }
    }
}