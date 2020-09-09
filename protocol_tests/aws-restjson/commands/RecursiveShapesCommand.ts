import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { RecursiveShapesInputOutput } from "../models/models_0";
import {
  deserializeAws_restJson1RecursiveShapesCommand,
  serializeAws_restJson1RecursiveShapesCommand,
} from "../protocols/Aws_restJson1";
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

export type RecursiveShapesCommandInput = RecursiveShapesInputOutput;
export type RecursiveShapesCommandOutput = RecursiveShapesInputOutput & __MetadataBearer;

export class RecursiveShapesCommand extends $Command<
  RecursiveShapesCommandInput,
  RecursiveShapesCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RecursiveShapesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RestJsonProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RecursiveShapesCommandInput, RecursiveShapesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: RecursiveShapesInputOutput.filterSensitiveLog,
      outputFilterSensitiveLog: RecursiveShapesInputOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RecursiveShapesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RecursiveShapesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RecursiveShapesCommandOutput> {
    return deserializeAws_restJson1RecursiveShapesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
