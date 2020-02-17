import {
  QuickSightClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../QuickSightClient";
import {
  ListDataSourcesRequest,
  ListDataSourcesResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1ListDataSourcesCommand,
  serializeAws_restJson1_1ListDataSourcesCommand
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
  HttpHandlerOptions as __HttpHandlerOptions,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export type ListDataSourcesCommandInput = ListDataSourcesRequest;
export type ListDataSourcesCommandOutput = ListDataSourcesResponse;

export class ListDataSourcesCommand extends $Command<
  ListDataSourcesCommandInput,
  ListDataSourcesCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDataSourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDataSourcesCommandInput, ListDataSourcesCommandOutput> {
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
    input: ListDataSourcesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1ListDataSourcesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDataSourcesCommandOutput> {
    return deserializeAws_restJson1_1ListDataSourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
