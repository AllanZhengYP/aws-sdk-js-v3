import { HttpRequest } from "./http";
import { OperationModelon } from './protocol';

export interface RequestSerializer<StreamType = Uint8Array> {
    /**
     * Converts the provided `input` into an HTTP request
     *
     * @param operation The operation to be executed via the returned HTTP
     *                  request.
     * @param input     The user input to serialize.
     */
    serialize<Input, SerializedShape=any>(operation: OperationModelon<Input, any, SerializedShape>, input: any): HttpRequest<StreamType>;
}
