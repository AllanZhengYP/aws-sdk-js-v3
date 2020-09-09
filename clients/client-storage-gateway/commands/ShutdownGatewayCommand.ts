import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { ShutdownGatewayInput, ShutdownGatewayOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ShutdownGatewayCommand,
  serializeAws_json1_1ShutdownGatewayCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type ShutdownGatewayCommandInput = ShutdownGatewayInput;
export type ShutdownGatewayCommandOutput = ShutdownGatewayOutput & __MetadataBearer;

export class ShutdownGatewayCommand extends $Command<
  ShutdownGatewayCommandInput,
  ShutdownGatewayCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ShutdownGatewayCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ShutdownGatewayCommandInput, ShutdownGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ShutdownGatewayInput.filterSensitiveLog,
      outputFilterSensitiveLog: ShutdownGatewayOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ShutdownGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ShutdownGatewayCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ShutdownGatewayCommandOutput> {
    return deserializeAws_json1_1ShutdownGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
