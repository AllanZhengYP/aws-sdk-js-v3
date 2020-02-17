import {
  ComprehendClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ComprehendClient";
import {
  DetectDominantLanguageRequest,
  DetectDominantLanguageResponse
} from "../models/index";
import {
  deserializeAws_json1_1DetectDominantLanguageCommand,
  serializeAws_json1_1DetectDominantLanguageCommand
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export type DetectDominantLanguageCommandInput = DetectDominantLanguageRequest;
export type DetectDominantLanguageCommandOutput = DetectDominantLanguageResponse;

export class DetectDominantLanguageCommand extends $Command<
  DetectDominantLanguageCommandInput,
  DetectDominantLanguageCommandOutput,
  ComprehendClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DetectDominantLanguageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DetectDominantLanguageCommandInput,
    DetectDominantLanguageCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DetectDominantLanguageCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DetectDominantLanguageCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DetectDominantLanguageCommandOutput> {
    return deserializeAws_json1_1DetectDominantLanguageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
