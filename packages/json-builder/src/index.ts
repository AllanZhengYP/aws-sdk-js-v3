import {isArrayBuffer} from '@aws-sdk/is-array-buffer';
import {epoch} from "@aws-sdk/protocol-timestamp";
import {isIterable} from "@aws-sdk/is-iterable";
import {
    BodySerializer,
    BodySerializerBuildOptions,
    Decoder,
    Encoder,
    OperationModel,
    SerializationModel,
    Structure as StructureShape,
    StructureModel
} from "@aws-sdk/types";

type Scalar = string|number|boolean|null;

interface Json {
    [index: string]: Scalar|Json|JsonArray;
}

interface JsonArray extends Array<Scalar|Json|JsonArray> {}

type JsonValue = Json|Scalar|JsonArray;

export class JsonBuilder implements BodySerializer<any, any> {
    constructor(
        private readonly base64Encoder: Encoder,
        private readonly utf8Decoder: Decoder
    ) {}

    public build({
        operation,
        member = operation.input,
        input
    }: BodySerializerBuildOptions<any, any>): string {
        return JSON.stringify(member.serialize(input));
    }
}
