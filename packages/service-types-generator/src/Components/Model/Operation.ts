import {HttpTrait} from "./HttpTrait";
import {Import} from "../Import";
import {IndentedSection} from "../IndentedSection";
import {TreeModelOperation} from '@aws-sdk/build-types';
import {MemberRef} from "./MemberRef";

export class Operation {
    constructor(private readonly operation: TreeModelOperation) {}

    toString(): string {
        const {
            input: {shape: {name: input}},
            output: {shape: {name: output}}
        } = this.operation;
        return `
${this.imports}

export const ${this.operation.name}: _Operation_<${input}_Type, ${output}_Type, any> = {
${this.getOperationDefinition()}
};
        `.trim();
    }

    private get imports(): string {
        const {errors, input, output} = this.operation;
        const shapes: Array<string> = [...new Set(
            [input.shape.name, output.shape.name]
                .concat(errors.map(member => member.shape.name))
        )];
        const inputName = input.shape.name;
        const outputName = output.shape.name;
        return shapes
            .map(shape => new Import(`./${shape}`, shape))
            .concat([
                new Import(`../types/${inputName}`, `${inputName} as ${inputName}_Type`),
                new Import(`../types/${outputName}`, `${outputName} as ${outputName}_Type`),
                new Import('@aws-sdk/types', 'OperationModelon as _Operation_'),
                new Import('./ServiceMetadata', 'ServiceMetadata')
            ])
            .join('\n');
    }

    private getOperationDefinition(): {toString(): string} {
        const {
            errors,
            http,
            name,
            input,
            output
        } = this.operation;

        return new IndentedSection(`
metadata: ServiceMetadata,
name: '${name}',
http: ${new HttpTrait(http)},
input: ${input.shape.name},
output: ${output.shape.name},
errors: ${this.getErrors()},
        `.trim());
    }

    private getErrors(): string {
        const {errors} = this.operation;
        if (errors.length === 0) {
            return '[]';
        }

        return `
[
${new IndentedSection(errors.map(member => new MemberRef(member)).join(',\n'))},
]
        `.trim();
    }
}
