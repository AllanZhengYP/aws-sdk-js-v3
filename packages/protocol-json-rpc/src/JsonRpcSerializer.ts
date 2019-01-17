import {
    HttpEndpoint,
    HttpRequest,
    RequestSerializer,
    OperationModelon,
} from '@aws-sdk/types';

export class JsonRpcSerializer<StreamType> implements
    RequestSerializer<StreamType>
{
    constructor(
        private readonly endpoint: HttpEndpoint,
    ) {}

    serialize<Input>(operation: OperationModelon<Input, any, any>, input: any): HttpRequest<never> {
        const {
            http: httpTrait,
            metadata: {
                jsonVersion,
                targetPrefix,
            },
            name,
        } = operation;

        return {
            ...this.endpoint,
            headers: {
                'X-Amz-Target': `${targetPrefix}.${name}`,
                'Content-Type': `application/x-amz-json-${jsonVersion}`,
            },
            body: JSON.stringify(operation.input.serialize(input)),
            path: httpTrait.requestUri,
            method: httpTrait.method,
        };
    }
}
