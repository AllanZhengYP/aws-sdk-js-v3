import {
  RedshiftClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../RedshiftClient";
import {
  AuthorizeClusterSecurityGroupIngressMessage,
  AuthorizeClusterSecurityGroupIngressResult
} from "../models/index";
import {
  deserializeAws_queryAuthorizeClusterSecurityGroupIngressCommand,
  serializeAws_queryAuthorizeClusterSecurityGroupIngressCommand
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

export type AuthorizeClusterSecurityGroupIngressCommandInput = AuthorizeClusterSecurityGroupIngressMessage;
export type AuthorizeClusterSecurityGroupIngressCommandOutput = AuthorizeClusterSecurityGroupIngressResult;

export class AuthorizeClusterSecurityGroupIngressCommand extends $Command<
  AuthorizeClusterSecurityGroupIngressCommandInput,
  AuthorizeClusterSecurityGroupIngressCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(
    readonly input: AuthorizeClusterSecurityGroupIngressCommandInput
  ) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    AuthorizeClusterSecurityGroupIngressCommandInput,
    AuthorizeClusterSecurityGroupIngressCommandOutput
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
    input: AuthorizeClusterSecurityGroupIngressCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryAuthorizeClusterSecurityGroupIngressCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<AuthorizeClusterSecurityGroupIngressCommandOutput> {
    return deserializeAws_queryAuthorizeClusterSecurityGroupIngressCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}