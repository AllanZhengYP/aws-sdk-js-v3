import {
    Member,
    OperationModel,
    OperationModelon,
} from "./protocol";
import {
    HttpResponse, 
    ResolvedHttpResponse,
} from "./http";
import {MetadataBearer} from './response';
import {ServiceException} from './exception';
import { OperationOutputShapeModel } from "./modelon";

export interface ResponseParser<StreamType = Uint8Array> {
    /**
     * Converts the output of an operation into JavaScript types.
     *
     * @param operation The operation model describing the structure of the HTTP
     *                  response received
     * @param input     The HTTP response received from the service
     */
    parse<OutputType extends MetadataBearer>(
        operation: OperationModelon<any, OutputType>,
        input: HttpResponse<StreamType>
    ): Promise<OutputType>;
}

/**
 * A function that converts a stream into an array of bytes.
 */
export interface StreamCollector<StreamType> {
    (stream: StreamType): Promise<Uint8Array>;
}

/**
 * A function that parses the http response when http status code > 299,
 * parse the error response according to response and throw the ServiceException
 */
export interface ServiceExceptionParser {
    (operation: OperationModelon<any, any>, response: ResolvedHttpResponse): ServiceException
}
