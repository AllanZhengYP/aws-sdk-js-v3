import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SnowballClientResolvedConfig
} from "../SnowballClient";
import {
  GetJobUnlockCodeRequest,
  GetJobUnlockCodeResult
} from "../models/index";
import {
  deserializeAws_json1_1GetJobUnlockCodeCommand,
  serializeAws_json1_1GetJobUnlockCodeCommand
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
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type GetJobUnlockCodeCommandInput = GetJobUnlockCodeRequest;
export type GetJobUnlockCodeCommandOutput = GetJobUnlockCodeResult;

export class GetJobUnlockCodeCommand extends $Command<
  GetJobUnlockCodeCommandInput,
  GetJobUnlockCodeCommandOutput,
  SnowballClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetJobUnlockCodeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowballClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetJobUnlockCodeCommandInput, GetJobUnlockCodeCommandOutput> {
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
    input: GetJobUnlockCodeCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetJobUnlockCodeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<GetJobUnlockCodeCommandOutput> {
    return deserializeAws_json1_1GetJobUnlockCodeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
