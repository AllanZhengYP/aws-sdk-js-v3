import {
    BodySerializer,
    HttpEndpoint,
    HttpRequest,
    OperationModel,
    RequestSerializer,
    OperationModelon,
} from '@aws-sdk/types';

export class JsonRpcSerializer<Input, StreamType> implements
    RequestSerializer<Input, any, StreamType>
{
    constructor(
        private readonly endpoint: HttpEndpoint,
        private readonly bodySerializer: BodySerializer<Input>
    ) {}

    serialize(operation: OperationModelon<Input, any, any>, input: any): HttpRequest<never> {
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
            body: this.bodySerializer.build({operation, input}),
            path: httpTrait.requestUri,
            method: httpTrait.method,
        };
    }
}
