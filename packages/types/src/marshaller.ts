import { Member } from "./protocol";
import { HttpRequest } from "./http";
import { OperationModelon } from './protocol';
import { StructureModel, OperationInputShapeModel } from "./modelon";
export interface BodySerializer<Input, SerializedType = string> {
    /**
     * Converts the provided `input` into the serialized format described in the
     * provided `shape`.
     *
     * @param options Modeled and user-provided operation input to serialize.
     *
     * @throws if a node in the input cannot be converted into the type
     *          specified by the serialization model
     */
    build(options: BodySerializerBuildOptions<Input, SerializedType>): SerializedType;
}
export interface BodySerializerBuildOptions<Input, SerializedType=any> {
    /**
     * Whether the operation input contains a payload member.
     */
    hasPayload?: boolean;
    /**
     * The value to convert.
     */
    input: any;
    /**
     * The root input member of the operation used to serialize the body.
     * Should be either operation input or the input payload member.
     * Defaults to operation.input.
     */
    member?: OperationInputShapeModel<Input, SerializedType>;
    /**
     * Location name for the member.
     */
    memberName?: string;
    /**
     * The operation model to which the input should be converted.
     */
    operation: OperationModelon<Input, any, SerializedType>;
}

export interface RequestSerializer<Input, SerializedShape=any, StreamType = Uint8Array> {
    /**
     * Converts the provided `input` into an HTTP request
     *
     * @param operation The operation to be executed via the returned HTTP
     *                  request.
     * @param input     The user input to serialize.
     */
    serialize(operation: OperationModelon<Input, any, SerializedShape>, input: any): HttpRequest<StreamType>;
}
