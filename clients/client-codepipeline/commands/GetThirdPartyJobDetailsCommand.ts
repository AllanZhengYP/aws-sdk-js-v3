import {
  CodePipelineClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CodePipelineClient";
import {
  GetThirdPartyJobDetailsInput,
  GetThirdPartyJobDetailsOutput
} from "../models/index";
import {
  deserializeAws_json1_1GetThirdPartyJobDetailsCommand,
  serializeAws_json1_1GetThirdPartyJobDetailsCommand
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

export type GetThirdPartyJobDetailsCommandInput = GetThirdPartyJobDetailsInput;
export type GetThirdPartyJobDetailsCommandOutput = GetThirdPartyJobDetailsOutput;

export class GetThirdPartyJobDetailsCommand extends $Command<
  GetThirdPartyJobDetailsCommandInput,
  GetThirdPartyJobDetailsCommandOutput,
  CodePipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetThirdPartyJobDetailsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodePipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetThirdPartyJobDetailsCommandInput,
    GetThirdPartyJobDetailsCommandOutput
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
    input: GetThirdPartyJobDetailsCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetThirdPartyJobDetailsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<GetThirdPartyJobDetailsCommandOutput> {
    return deserializeAws_json1_1GetThirdPartyJobDetailsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}