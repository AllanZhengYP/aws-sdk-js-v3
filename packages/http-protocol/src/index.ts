import {
  HttpHandler,
  UrlParser,
  HttpRequest,
  HttpResponse,
  RequestSerializer,
  BodyLengthCalculator,
  TransferProtocol,
  HttpOptions
} from "@aws-sdk/types";
import { Stream } from "stream";

/**
 * all entries in resolved in resolved configuration
 */
interface HTTPProtocolResolvedConfiguration<StreamType, HttpHandlerOptions> {
  bodyLengthChecker: BodyLengthCalculator;
  ttl: number;
  maxRedirects: number;
  handler: HttpHandler<StreamType, HttpHandlerOptions>;
  keepAlive: boolean;
}

/**
 * When user create a http protocol instances, only handler is required
 */
type HTTPProtocolConfiguration<StreamType, HttpHandlerOptions> = Partial<
  HTTPProtocolResolvedConfiguration<StreamType, HttpHandlerOptions>
> & {
  handler: HTTPProtocolResolvedConfiguration<
    StreamType,
    HttpHandlerOptions
  >["handler"];
};

type HTTPHandlerOptions = HttpOptions;

export class HTTPProtocol<StreamType, HandlerOptions = HTTPHandlerOptions>
  implements
    TransferProtocol<
      HttpRequest<StreamType>,
      HttpResponse<StreamType>,
      HandlerOptions
    > {
  request?: HttpRequest<StreamType>;
  response?: HttpResponse<StreamType>;
  resolvedConfig: HTTPProtocolResolvedConfiguration<StreamType, HandlerOptions>;
  constructor(configs: HTTPProtocolConfiguration<StreamType, HandlerOptions>) {
    this.resolvedConfig = {
      ttl: configs.ttl || 1000,
      bodyLengthChecker: configs.bodyLengthChecker || (() => undefined),
      maxRedirects: configs.maxRedirects || 0,
      keepAlive: configs.keepAlive || true,
      handler: configs.handler
    };
  }

  setRequest(
    serializer: RequestSerializer<HttpRequest<StreamType>>,
    input: any
  ) {
    this.request = serializer.serialize(input, "http");
    /** Use existing serializer to demonstrate */
    return this.request;
  }
}

// export interface S3BaseConfiguration {}

// type S3ResolvedConfig = S3BaseConfiguration &
//   HTTPProtocol<{}>["resolvedConfig"] &
//   Authentication["resolvedConfig"];

// class S3Client extends AWSClient<HTTPProtocol, StreamType> {

//   public readonly config: S3ResolvedConfig = {}

//   public readonly middelwareStack = new MiddelwareStack<HTTPProtocol>()

// }

// class S3Client<P extends ApplicationProtocol> extends SmithyClient<P, StreamType> {

//   public readonly config: S3ResolvedConfig = {}

//   public readonly middelwareStack = new MiddelwareStack<HTTPProtocol>()

//   public static create(P protocol): S3Client<P>;
// }

// new SmithyClient({
//   serializer: S3Serialzier,
//   deserialzier:
//   auth

// })
