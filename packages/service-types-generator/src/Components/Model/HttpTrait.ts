import {HttpTrait as HttpTraitDefinition} from "@aws-js-sdk-v3-prerelease/types";

export class HttpTrait {
    constructor(private readonly httpTrait: HttpTraitDefinition) {}

    toString(): string {
        return `
{
    method: '${this.httpTrait.method}',
    requestUri: '${this.httpTrait.requestUri}',
}
        `.trim();
    }
}
