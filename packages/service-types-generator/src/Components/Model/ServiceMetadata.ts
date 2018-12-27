import {Import} from '../Import';
import {IndentedSection} from "../IndentedSection";
import {ServiceMetadata as ServiceMetadataDefinition} from '@aws-js-sdk-v3-prerelease/types';
export class ServiceMetadata {
    constructor(private readonly metadata: ServiceMetadataDefinition) {}

    toString(): string {
        let metadata = Object.keys(this.metadata)
            .sort()
            .map((key) => {
                return `${key}: '${(this.metadata as any)[key]}'`;
            }).join(',\n');
        return `
${new Import('@aws-js-sdk-v3-prerelease/types', 'ServiceMetadata as _ServiceMetadata_')}

export const ServiceMetadata: _ServiceMetadata_ = {
${new IndentedSection(metadata)}
};
        `.trim();
    }
}