import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import {
  BatchDisassociateAssessmentReportEvidenceRequest,
  BatchDisassociateAssessmentReportEvidenceResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchDisassociateAssessmentReportEvidenceCommand,
  serializeAws_restJson1BatchDisassociateAssessmentReportEvidenceCommand,
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

export interface BatchDisassociateAssessmentReportEvidenceCommandInput
  extends BatchDisassociateAssessmentReportEvidenceRequest {}
export interface BatchDisassociateAssessmentReportEvidenceCommandOutput
  extends BatchDisassociateAssessmentReportEvidenceResponse,
    __MetadataBearer {}

/**
 * <p>
 *          Disassociates a list of evidence from the specified assessment report in AWS Audit Manager.
 *       </p>
 */
export class BatchDisassociateAssessmentReportEvidenceCommand extends $Command<
  BatchDisassociateAssessmentReportEvidenceCommandInput,
  BatchDisassociateAssessmentReportEvidenceCommandOutput,
  AuditManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchDisassociateAssessmentReportEvidenceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    BatchDisassociateAssessmentReportEvidenceCommandInput,
    BatchDisassociateAssessmentReportEvidenceCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "BatchDisassociateAssessmentReportEvidenceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDisassociateAssessmentReportEvidenceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchDisassociateAssessmentReportEvidenceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: BatchDisassociateAssessmentReportEvidenceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchDisassociateAssessmentReportEvidenceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDisassociateAssessmentReportEvidenceCommandOutput> {
    return deserializeAws_restJson1BatchDisassociateAssessmentReportEvidenceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
