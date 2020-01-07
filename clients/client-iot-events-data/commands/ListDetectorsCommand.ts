import {
  IoTEventsDataClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../IoTEventsDataClient";
import { ListDetectorsRequest, ListDetectorsResponse } from "../models/index";
import {
  deserializeAws_restJson1_1ListDetectorsCommand,
  serializeAws_restJson1_1ListDetectorsCommand
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
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type ListDetectorsCommandInput = ListDetectorsRequest;
export type ListDetectorsCommandOutput = ListDetectorsResponse;

export class ListDetectorsCommand extends $Command<
  ListDetectorsCommandInput,
  ListDetectorsCommandOutput,
  IoTEventsDataClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDetectorsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTEventsDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDetectorsCommandInput, ListDetectorsCommandOutput> {
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
    input: ListDetectorsCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1ListDetectorsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<ListDetectorsCommandOutput> {
    return deserializeAws_restJson1_1ListDetectorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}