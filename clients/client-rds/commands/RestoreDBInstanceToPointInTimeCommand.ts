import {
  RDSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../RDSClient";
import {
  RestoreDBInstanceToPointInTimeMessage,
  RestoreDBInstanceToPointInTimeResult
} from "../models/index";
import {
  deserializeAws_queryRestoreDBInstanceToPointInTimeCommand,
  serializeAws_queryRestoreDBInstanceToPointInTimeCommand
} from "../protocols/Aws_query";
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

export type RestoreDBInstanceToPointInTimeCommandInput = RestoreDBInstanceToPointInTimeMessage;
export type RestoreDBInstanceToPointInTimeCommandOutput = RestoreDBInstanceToPointInTimeResult;

export class RestoreDBInstanceToPointInTimeCommand extends $Command<
  RestoreDBInstanceToPointInTimeCommandInput,
  RestoreDBInstanceToPointInTimeCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RestoreDBInstanceToPointInTimeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    RestoreDBInstanceToPointInTimeCommandInput,
    RestoreDBInstanceToPointInTimeCommandOutput
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
    input: RestoreDBInstanceToPointInTimeCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryRestoreDBInstanceToPointInTimeCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<RestoreDBInstanceToPointInTimeCommandOutput> {
    return deserializeAws_queryRestoreDBInstanceToPointInTimeCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
