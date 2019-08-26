import * as _stream from "stream";
import * as __aws_sdk_types from "@aws-sdk/types";
import { InputTypesUnion } from "./types/InputTypesUnion";
import { OutputTypesUnion } from "./types/OutputTypesUnion";
import { contentLengthMiddleware } from "@aws-sdk/middleware-content-length";
import {
  SmithyConfiguration,
  SmithyConfigurationWithPlugin
} from "./SmithyConfiguration";
import { HTTPProtocol } from "@aws-sdk/http-protocol";
import { MiddlewareStack } from "@aws-sdk/middleware-stack";
import { NodeHttpHandler } from "@aws-sdk/node-http-handler";
import {
  HttpRequest,
  HttpResponse,
  HttpHandlerOptions,
  SerializeHandler,
  BuildHandlerArguments,
  BuildHandler,
  TransferProtocol
} from "@aws-sdk/types";

export class SmithyClient<
  RequestType = HttpRequest<_stream.Readable>,
  ResponseType = HttpResponse<_stream.Readable>,
  ProtocolHandlerOptions = HttpHandlerOptions
> {
  readonly config: SmithyConfiguration & {
    transferProtocol: __aws_sdk_types.TransferProtocol<
      RequestType,
      ResponseType,
      ProtocolHandlerOptions
    >;
  };
  readonly middlewareStack: __aws_sdk_types.MiddlewareStack<
    InputTypesUnion,
    OutputTypesUnion,
    RequestType
  >;
  constructor(
    configuration: SmithyConfigurationWithPlugin<
      RequestType,
      ResponseType,
      ProtocolHandlerOptions
    >
  );
  constructor(configuration: SmithyConfiguration);
  constructor(
    configuration:
      | SmithyConfiguration
      | SmithyConfigurationWithPlugin<
          RequestType,
          ResponseType,
          ProtocolHandlerOptions
        >
  ) {
    //this is simplified. You should follow the regular config resolver practices
    this.config = {
      ...(configuration.config !== undefined
        ? configuration.config
        : configuration),
      transferProtocol: new HTTPProtocol<_stream.Readable>({
        handler: new NodeHttpHandler()
      }) as any
    };
    this.middlewareStack = new MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      RequestType
    >();
  }

  /**
   * This will need to be revised when the command interface lands.
   */
  send<InputType extends InputTypesUnion, OutputType extends OutputTypesUnion>(
    command: __aws_sdk_types.Command<
      InputTypesUnion,
      InputType,
      OutputTypesUnion,
      OutputType,
      SmithyConfiguration,
      RequestType
    >
  ): Promise<OutputType>;
  send<InputType extends InputTypesUnion, OutputType extends OutputTypesUnion>(
    command: __aws_sdk_types.Command<
      InputTypesUnion,
      InputType,
      OutputTypesUnion,
      OutputType,
      SmithyConfiguration,
      RequestType
    >,
    cb: (err: any, data?: OutputType) => void
  ): void;
  send<InputType extends InputTypesUnion, OutputType extends OutputTypesUnion>(
    command: __aws_sdk_types.Command<
      InputTypesUnion,
      InputType,
      OutputTypesUnion,
      OutputType,
      SmithyConfiguration,
      RequestType
    >,
    cb?: (err: any, data?: OutputType) => void
  ): Promise<OutputType> | void {
    const handler = command.resolveMiddleware(
      this.middlewareStack,
      this.config
    );
    if (cb) {
      handler(command)
        .then((result: OutputType) => cb(null, result), (err: any) => cb(err))
        .catch(
          // prevent any errors thrown in the callback from triggering an
          // unhandled promise rejection
          () => {}
        );
    } else {
      return handler(command);
    }
  }
}

class FooProtocol {
  constructor(
    public readonly resolvedConfig = {
      handler: {
        handle: () => Promise.resolve({ response: "another protocol" })
      }
    },
    public readonly setRequest = () => {
      return {};
    }
  ) {}
}

const httpClient = new SmithyClient({
  credentials: { secretAccessKey: "xxx", accessKeyId: "xxx" },
  endpoint: "abc.com",
  region: "a"
});

/**client with specified protocol class */
const fooProtocolClient = new SmithyClient({
  transferProtocol: new FooProtocol(),
  config: {
    credentials: { secretAccessKey: "xxx", accessKeyId: "xxx" },
    endpoint: "abc.com",
    region: "a"
  }
});

const someMiddleware = (
  next: BuildHandler<any, any, HTTPProtocol<_stream.Readable>>
) => {
  return (args: BuildHandlerArguments<any, HTTPProtocol<_stream.Readable>>) => {
    return next(args);
  };
};

httpClient.middlewareStack.add(someMiddleware, { step: "build" }); //works!
fooProtocolClient.middlewareStack.add(someMiddleware, { step: "build" }); //doesn't work, which is good

const someMiddlewareFooProtocol = (
  next: BuildHandler<any, any, FooProtocol>
) => {
  return (args: BuildHandlerArguments<any, FooProtocol>) => {
    return next(args);
  };
};

fooProtocolClient.middlewareStack.add(someMiddlewareFooProtocol, {
  step: "build"
}); //works
