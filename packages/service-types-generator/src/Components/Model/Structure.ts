import {Import} from "../Import";
import {IndentedSection} from "../IndentedSection";
import {MemberRef} from "./MemberRef";
import {requiresImport} from "./helpers";
import {CircularDependenciesMap} from "../helpers/detectCircularModelDependency";
import {TreeModelStructure, TreeModelMember} from "@aws-sdk/build-types";
import {SupportedProtocol} from '@aws-sdk/types';

export class Structure {
    private imports: Array<Import> = [];
    constructor(
        private readonly shape: TreeModelStructure,
        private readonly protocol: SupportedProtocol,
    ) {}

    toString(): string {
        const {payload, sensitive, topLevel} = this.shape;
        const properties: Array<string> = [];
        if (payload) {
            properties.push(`payload: '${payload}'`);
        }
        if (sensitive) {
            properties.push(`sensitive: true`);
        }

        if (topLevel !== 'input') properties.push(this.parse(this.shape, this.protocol));

        if (topLevel !== 'output') properties.push(this.serialize(this.shape, this.protocol));

        const modelType = this.getType(this.shape);

        return `
${this.printImports()}

export const ${this.shape.name}: ${modelType} = {
${new IndentedSection(properties.join(',\n'))},
};
        `.trim();
    }

    private parse(shape: TreeModelStructure, protocol: SupportedProtocol): string {
        const {members, name} = shape;
        if (protocol === 'json') {
            return `parse: (data: any): ${name}_Type => {
    let rtn: any = {};
    ${this.parserAssignMembers(members)}
    return rtn as ${name}_Type;
}`
        }
        throw new Error('protocols other than json is not supported');
    }

    private serialize(shape: TreeModelStructure, protocol: SupportedProtocol): string {
        const {members, name, required} = shape;
        if (protocol === 'json') {
            return `serialize: (data: ${name}_Type): any => {${required.length > 0 ? '\n\t\t' + this.validateRequired(shape) : ''}
    let rtn: any = {};
    ${this.serializerAssignMembers(members)}
    return rtn;
}`
        }
        throw new Error('protocols other than json is not supported');
    }

    private getType(shape: TreeModelStructure): string {
        const {topLevel, name} = shape;
        if (topLevel === 'input') {
            this.imports.push(new Import('@aws-sdk/types', 'OperationInputShapeModel as _OperationInputShapeModel_'));
            return `_OperationInputShapeModel_<${name}_Type, any>`;
        }
        else if (topLevel === 'output') {
            this.imports.push(new Import('@aws-sdk/types', 'OperationOutputShapeModel as _OperationOutputShapeModel_'));
            return `_OperationOutputShapeModel_<${name}_Type, any>`;
        }
        this.imports.push(new Import('@aws-sdk/types', 'StructureModel as _StructureModel_'));
        return `_StructureModel_<${name}_Type, any>`;
    }

    private parserAssignMembers(members: {[key: string]: TreeModelMember}): string {
        const strArray: Array<string> = [];
        for (const memberName of Object.keys(members)) {
            const member = members[memberName];
            strArray.push(`if (data.${memberName}) rtn.${memberName} = ${this.parserAssignMembersValue(memberName, member)};`);
        }
        return strArray.join('\n');
    }

    private parserAssignMembersValue(memberName: string, member: TreeModelMember): string {
        if (requiresImport(member.shape)) return `${member.shape.name}.parse!(data.${memberName})`;
        else if (member.shape.type === 'timestamp') {
            this.imports.push(new Import('@aws-sdk/protocol-timestamp', 'toDate as _toDate_'));
            return `_toDate_(data.${memberName})`;
        }
        return `data.${memberName}`;
    }

    private serializerAssignMembers(members: {[key: string]: TreeModelMember}): string {
        const strArray: Array<string> = [];
        for (const memberName of Object.keys(members)) {
            const member = members[memberName];
            strArray.push(`if (data.${memberName}) rtn.${memberName} = ${this.serializerAssignMembersValue(memberName, member)};\n`);
        }
        return strArray.join('\n');
    }

    private serializerAssignMembersValue(memberName: string, member: TreeModelMember): string {
        if (requiresImport(member.shape)) return `${member.shape.name}.serialize!(data.${memberName} as any)`;
        else if (member.shape.type === 'timestamp') {
            this.imports.push(new Import('@aws-sdk/protocol-timestamp', 'toDate as _toDate_'));
            return `_toDate_(data.${memberName})`;
        }
        return `data.${memberName}`;
    }

    private validateRequired(shape: TreeModelStructure): string {
        return `if (${shape.required.map(requiredShape => `!data.${requiredShape}`).join('||')}) {
    throw new Error('${shape.name} has missing required parameter');
}`
    }

    private printImports(): string {
        const shapes: Array<string> = [...new Set(
            Object.keys(this.shape.members)
                .map(memberName => this.shape.members[memberName].shape)
                .filter(shape => requiresImport(shape))
                .map(shape => shape.name)
        )];
        let importStr = shapes
            .map(shape => new Import(`./${shape}`, shape))
            .concat([
                ...this.imports,
                new Import(`../types/${this.shape.name}`, `${this.shape.name} as ${this.shape.name}_Type`),
            ]);
        return importStr.join('\n');
    }
}
