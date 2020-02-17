import {
  ServiceInputTypes,
  ServiceOutputTypes,
  WorkSpacesClientResolvedConfig
} from "../WorkSpacesClient";
import {
  DescribeIpGroupsRequest,
  DescribeIpGroupsResult
} from "../models/index";
import {
  deserializeAws_json1_1DescribeIpGroupsCommand,
  serializeAws_json1_1DescribeIpGroupsCommand
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

export type DescribeIpGroupsCommandInput = DescribeIpGroupsRequest;
export type DescribeIpGroupsCommandOutput = DescribeIpGroupsResult;

export class DescribeIpGroupsCommand extends $Command<
  DescribeIpGroupsCommandInput,
  DescribeIpGroupsCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeIpGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeIpGroupsCommandInput, DescribeIpGroupsCommandOutput> {
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
    input: DescribeIpGroupsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeIpGroupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeIpGroupsCommandOutput> {
    return deserializeAws_json1_1DescribeIpGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
