import {
  DataExchangeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../DataExchangeClient";
import { DeleteAssetRequest } from "../models/index";
import {
  deserializeAws_restJson1_1DeleteAssetCommand,
  serializeAws_restJson1_1DeleteAssetCommand
} from "../protocols/Aws_restJson1_1";
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
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer
} from "@aws-sdk/types";

export type DeleteAssetCommandInput = DeleteAssetRequest;
export type DeleteAssetCommandOutput = __MetadataBearer;

export class DeleteAssetCommand extends $Command<
  DeleteAssetCommandInput,
  DeleteAssetCommandOutput,
  DataExchangeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteAssetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataExchangeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAssetCommandInput, DeleteAssetCommandOutput> {
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
    input: DeleteAssetCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1DeleteAssetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DeleteAssetCommandOutput> {
    return deserializeAws_restJson1_1DeleteAssetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}