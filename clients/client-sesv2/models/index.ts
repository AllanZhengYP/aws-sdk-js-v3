import * as _smithy from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 *
 *         <p>An object that contains information about your account's suppression preferences.</p>
 *
 */
export interface SuppressionAttributes {
  __type?: "SuppressionAttributes";
  /**
   *
   *         <p>A list of reasons to suppress email addresses. The only valid reasons are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>COMPLAINT</code> – Amazon SES will suppress an email address that receives a complaint.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>BOUNCE</code> – Amazon SES will suppress an email address that hard bounces.</p>
   *             </li>
   *          </ul>
   *
   */
  SuppressedReasons?: Array<SuppressionListReason | string>;
}

export namespace SuppressionAttributes {
  export function isa(o: any): o is SuppressionAttributes {
    return _smithy.isa(o, "SuppressionAttributes");
  }
}

export enum SuppressionListReason {
  BOUNCE = "BOUNCE",
  COMPLAINT = "COMPLAINT"
}

/**
 *
 *         <p>An object that contains information about your account's suppression preferences.</p>
 *
 */
export interface SuppressionOptions {
  __type?: "SuppressionOptions";
  /**
   *
   *         <p>A list of reasons to suppress email addresses. The only valid reasons are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>COMPLAINT</code> – Amazon SES will suppress an email address that receives a complaint.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>BOUNCE</code> – Amazon SES will suppress an email address that hard bounces.</p>
   *             </li>
   *          </ul>
   *
   */
  SuppressedReasons?: Array<SuppressionListReason | string>;
}

export namespace SuppressionOptions {
  export function isa(o: any): o is SuppressionOptions {
    return _smithy.isa(o, "SuppressionOptions");
  }
}

/**
 *
 *         <p>An object that defines the tags that are associated with a resource.
 *                 A <i>tag</i> is a label that you optionally define and associate with
 *             a resource. Tags can help you categorize and manage resources in different ways, such as
 *             by purpose, owner, environment, or other criteria. A resource can have as many as 50
 *             tags.</p>
 *         <p>Each tag consists of a required <i>tag key</i> and an
 *                 associated <i>tag value</i>, both of which you define. A tag key is a
 *             general label that acts as a category for a more specific tag value. A tag value acts as
 *             a descriptor within a tag key. A tag key can contain as many as 128 characters. A tag
 *             value can contain as many as 256 characters. The characters can be Unicode letters,
 *             digits, white space, or one of the following symbols: _ . : / = + -. The following
 *             additional restrictions apply to tags:</p>
 *         <ul>
 *             <li>
 *                 <p>Tag keys and values are case sensitive.</p>
 *             </li>
 *             <li>
 *                 <p>For each associated resource, each tag key must be unique and it can have only
 *                     one value.</p>
 *             </li>
 *             <li>
 *                 <p>The <code>aws:</code> prefix is reserved for use by AWS; you can’t use it in
 *                     any tag keys or values that you define. In addition, you can't edit or remove
 *                     tag keys or values that use this prefix. Tags that use this prefix don’t count
 *                     against the limit of 50 tags per resource.</p>
 *             </li>
 *             <li>
 *                 <p>You can associate tags with public or shared resources, but the tags are
 *                     available only for your AWS account, not any other accounts that share the
 *                     resource. In addition, the tags are available only for resources that are
 *                     located in the specified AWS Region for your AWS account.</p>
 *             </li>
 *          </ul>
 *
 */
export interface Tag {
  __type?: "Tag";
  /**
   *
   *         <p>One part of a key-value pair that defines a tag. The maximum length of a tag key is
   *             128 characters. The minimum length is 1 character.</p>
   *
   */
  Key: string | undefined;

  /**
   *
   *         <p>The optional part of a key-value pair that defines a tag. The maximum length of a tag
   *             value is 256 characters. The minimum length is 0 characters. If you don't want a
   *             resource to have a specific tag value, don't specify a value for this parameter. If you
   *             don't specify a value, Amazon SES sets the value to an empty string.</p>
   *
   */
  Value: string | undefined;
}

export namespace Tag {
  export function isa(o: any): o is Tag {
    return _smithy.isa(o, "Tag");
  }
}

/**
 *
 *         <p>The message can't be sent because the account's ability to send email has been
 *             permanently restricted.</p>
 *
 */
export interface AccountSuspendedException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "AccountSuspendedException";
  name: "AccountSuspendedException";
  $fault: "client";
  message?: string;
}

export namespace AccountSuspendedException {
  export function isa(o: any): o is AccountSuspendedException {
    return _smithy.isa(o, "AccountSuspendedException");
  }
}

/**
 *
 *         <p>The resource specified in your request already exists.</p>
 *
 */
export interface AlreadyExistsException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "AlreadyExistsException";
  name: "AlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace AlreadyExistsException {
  export function isa(o: any): o is AlreadyExistsException {
    return _smithy.isa(o, "AlreadyExistsException");
  }
}

/**
 *
 *         <p>The input you provided is invalid.</p>
 *
 */
export interface BadRequestException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "BadRequestException";
  name: "BadRequestException";
  $fault: "client";
  message?: string;
}

export namespace BadRequestException {
  export function isa(o: any): o is BadRequestException {
    return _smithy.isa(o, "BadRequestException");
  }
}

export enum BehaviorOnMxFailure {
  REJECT_MESSAGE = "REJECT_MESSAGE",
  USE_DEFAULT_VALUE = "USE_DEFAULT_VALUE"
}

/**
 *
 *         <p>An object that contains information about a blacklisting event that impacts one of the
 *             dedicated IP addresses that is associated with your account.</p>
 *
 */
export interface BlacklistEntry {
  __type?: "BlacklistEntry";
  /**
   *
   *         <p>Additional information about the blacklisting event, as provided by the blacklist
   *             maintainer.</p>
   *
   */
  Description?: string;

  /**
   *
   *         <p>The time when the blacklisting event occurred, shown in Unix time format.</p>
   *
   */
  ListingTime?: Date;

  /**
   *
   *         <p>The name of the blacklist that the IP address appears on.</p>
   *
   */
  RblName?: string;
}

export namespace BlacklistEntry {
  export function isa(o: any): o is BlacklistEntry {
    return _smithy.isa(o, "BlacklistEntry");
  }
}

/**
 *
 *         <p>Represents the body of the email message.</p>
 *
 */
export interface Body {
  __type?: "Body";
  /**
   *
   *         <p>An object that represents the version of the message that is displayed in email
   *             clients that support HTML. HTML messages can include formatted text, hyperlinks, images,
   *             and more. </p>
   *
   */
  Html?: Content;

  /**
   *
   *         <p>An object that represents the version of the message that is displayed in email
   *             clients that don't support HTML, or clients where the recipient has disabled HTML
   *             rendering.</p>
   *
   */
  Text?: Content;
}

export namespace Body {
  export function isa(o: any): o is Body {
    return _smithy.isa(o, "Body");
  }
}

/**
 *
 *         <p>An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to
 *             monitor and gain insights on your email sending metrics.</p>
 *
 */
export interface CloudWatchDestination {
  __type?: "CloudWatchDestination";
  /**
   *
   *         <p>An array of objects that define the dimensions to use when you send email events to
   *             Amazon CloudWatch.</p>
   *
   */
  DimensionConfigurations: Array<CloudWatchDimensionConfiguration> | undefined;
}

export namespace CloudWatchDestination {
  export function isa(o: any): o is CloudWatchDestination {
    return _smithy.isa(o, "CloudWatchDestination");
  }
}

/**
 *
 *         <p>An object that defines the dimension configuration to use when you send email events
 *             to Amazon CloudWatch.</p>
 *
 */
export interface CloudWatchDimensionConfiguration {
  __type?: "CloudWatchDimensionConfiguration";
  /**
   *
   *         <p>The default value of the dimension that is published to Amazon CloudWatch if you don't provide the
   *             value of the dimension when you send an email. This value has to meet the following
   *             criteria:</p>
   *         <ul>
   *             <li>
   *                 <p>It can only contain ASCII letters (a–z, A–Z), numbers (0–9),
   *                     underscores (_), or dashes (-).</p>
   *             </li>
   *             <li>
   *                 <p>It can contain no more than 256 characters.</p>
   *             </li>
   *          </ul>
   *
   */
  DefaultDimensionValue: string | undefined;

  /**
   *
   *         <p>The name of an Amazon CloudWatch dimension associated with an email sending metric. The name has to
   *             meet the following criteria:</p>
   *         <ul>
   *             <li>
   *                 <p>It can only contain ASCII letters (a–z, A–Z), numbers (0–9),
   *                     underscores (_), or dashes (-).</p>
   *             </li>
   *             <li>
   *                 <p>It can contain no more than 256 characters.</p>
   *             </li>
   *          </ul>
   *
   */
  DimensionName: string | undefined;

  /**
   *
   *         <p>The location where the Amazon SES API v2 finds the value of a dimension to publish to Amazon CloudWatch. If
   *             you want to use the message tags that you specify using an
   *                 <code>X-SES-MESSAGE-TAGS</code> header or a parameter to the <code>SendEmail</code>
   *             or <code>SendRawEmail</code> API, choose <code>messageTag</code>. If you want to use
   *             your own email headers, choose <code>emailHeader</code>. If you want to use link tags,
   *             choose <code>linkTags</code>.</p>
   *
   */
  DimensionValueSource: DimensionValueSource | string | undefined;
}

export namespace CloudWatchDimensionConfiguration {
  export function isa(o: any): o is CloudWatchDimensionConfiguration {
    return _smithy.isa(o, "CloudWatchDimensionConfiguration");
  }
}

/**
 *
 *         <p>The resource is being modified by another operation or thread.</p>
 *
 */
export interface ConcurrentModificationException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ConcurrentModificationException";
  name: "ConcurrentModificationException";
  $fault: "server";
  message?: string;
}

export namespace ConcurrentModificationException {
  export function isa(o: any): o is ConcurrentModificationException {
    return _smithy.isa(o, "ConcurrentModificationException");
  }
}

/**
 *
 *         <p>An object that represents the content of the email, and optionally a character set
 *             specification.</p>
 *
 */
export interface Content {
  __type?: "Content";
  /**
   *
   *         <p>The character set for the content. Because of the constraints of the SMTP protocol,
   *             the Amazon SES API v2 uses 7-bit ASCII by default. If the text includes characters outside of the
   *             ASCII range, you have to specify a character set. For example, you could specify
   *                 <code>UTF-8</code>, <code>ISO-8859-1</code>, or <code>Shift_JIS</code>.</p>
   *
   */
  Charset?: string;

  /**
   *
   *         <p>The content of the message itself.</p>
   *
   */
  Data: string | undefined;
}

export namespace Content {
  export function isa(o: any): o is Content {
    return _smithy.isa(o, "Content");
  }
}

/**
 *
 *         <p>A request to add an event destination to a configuration set.</p>
 *
 */
export interface CreateConfigurationSetEventDestinationRequest {
  __type?: "CreateConfigurationSetEventDestinationRequest";
  /**
   *
   *         <p>The name of the configuration set that you want to add an event destination to.</p>
   *
   */
  ConfigurationSetName: string | undefined;

  /**
   *
   *         <p>An object that defines the event destination.</p>
   *
   */
  EventDestination: EventDestinationDefinition | undefined;

  /**
   *
   *         <p>A name that identifies the event destination within the configuration set.</p>
   *
   */
  EventDestinationName: string | undefined;
}

export namespace CreateConfigurationSetEventDestinationRequest {
  export function isa(
    o: any
  ): o is CreateConfigurationSetEventDestinationRequest {
    return _smithy.isa(o, "CreateConfigurationSetEventDestinationRequest");
  }
}

/**
 *
 *         <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 *
 */
export interface CreateConfigurationSetEventDestinationResponse
  extends $MetadataBearer {
  __type?: "CreateConfigurationSetEventDestinationResponse";
}

export namespace CreateConfigurationSetEventDestinationResponse {
  export function isa(
    o: any
  ): o is CreateConfigurationSetEventDestinationResponse {
    return _smithy.isa(o, "CreateConfigurationSetEventDestinationResponse");
  }
}

/**
 *
 *         <p>A request to create a configuration set.</p>
 *
 */
export interface CreateConfigurationSetRequest {
  __type?: "CreateConfigurationSetRequest";
  /**
   *
   *         <p>The name of the configuration set.</p>
   *
   */
  ConfigurationSetName: string | undefined;

  /**
   *
   *         <p>An object that defines the dedicated IP pool that is used to send emails that you send
   *             using the configuration set.</p>
   *
   */
  DeliveryOptions?: DeliveryOptions;

  /**
   *
   *         <p>An object that defines whether or not Amazon SES collects reputation metrics for the emails
   *             that you send that use the configuration set.</p>
   *
   */
  ReputationOptions?: ReputationOptions;

  /**
   *
   *         <p>An object that defines whether or not Amazon SES can send email that you send using the
   *             configuration set.</p>
   *
   */
  SendingOptions?: SendingOptions;

  /**
   *
   *         <p>An object that contains information about your account's suppression preferences.</p>
   *
   */
  SuppressionOptions?: SuppressionOptions;

  /**
   *
   *         <p>An array of objects that define the tags (keys and values) that you want to associate
   *             with the configuration set.</p>
   *
   */
  Tags?: Array<Tag>;

  /**
   *
   *         <p>An object that defines the open and click tracking options for emails that you send
   *             using the configuration set.</p>
   *
   */
  TrackingOptions?: TrackingOptions;
}

export namespace CreateConfigurationSetRequest {
  export function isa(o: any): o is CreateConfigurationSetRequest {
    return _smithy.isa(o, "CreateConfigurationSetRequest");
  }
}

/**
 *
 *         <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 *
 */
export interface CreateConfigurationSetResponse extends $MetadataBearer {
  __type?: "CreateConfigurationSetResponse";
}

export namespace CreateConfigurationSetResponse {
  export function isa(o: any): o is CreateConfigurationSetResponse {
    return _smithy.isa(o, "CreateConfigurationSetResponse");
  }
}

/**
 *
 *         <p>A request to create a new dedicated IP pool.</p>
 *
 */
export interface CreateDedicatedIpPoolRequest {
  __type?: "CreateDedicatedIpPoolRequest";
  /**
   *
   *         <p>The name of the dedicated IP pool.</p>
   *
   */
  PoolName: string | undefined;

  /**
   *
   *         <p>An object that defines the tags (keys and values) that you want to associate with the
   *             pool.</p>
   *
   */
  Tags?: Array<Tag>;
}

export namespace CreateDedicatedIpPoolRequest {
  export function isa(o: any): o is CreateDedicatedIpPoolRequest {
    return _smithy.isa(o, "CreateDedicatedIpPoolRequest");
  }
}

/**
 *
 *         <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 *
 */
export interface CreateDedicatedIpPoolResponse extends $MetadataBearer {
  __type?: "CreateDedicatedIpPoolResponse";
}

export namespace CreateDedicatedIpPoolResponse {
  export function isa(o: any): o is CreateDedicatedIpPoolResponse {
    return _smithy.isa(o, "CreateDedicatedIpPoolResponse");
  }
}

/**
 *
 *         <p>A request to perform a predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will
 *             be handled by various email providers around the world. When you perform a predictive inbox placement test, you
 *             provide a sample message that contains the content that you plan to send to your
 *             customers. We send that message to special email addresses spread across several major
 *             email providers around the world. The test takes about 24 hours to complete. When the
 *             test is complete, you can use the <code>GetDeliverabilityTestReport</code> operation to
 *             view the results of the test.</p>
 *
 */
export interface CreateDeliverabilityTestReportRequest {
  __type?: "CreateDeliverabilityTestReportRequest";
  /**
   *
   *         <p>The HTML body of the message that you sent when you performed the predictive inbox placement test.</p>
   *
   */
  Content: EmailContent | undefined;

  /**
   *
   *         <p>The email address that the predictive inbox placement test email was sent from.</p>
   *
   */
  FromEmailAddress: string | undefined;

  /**
   *
   *         <p>A unique name that helps you to identify the predictive inbox placement test when you retrieve the
   *             results.</p>
   *
   */
  ReportName?: string;

  /**
   *
   *         <p>An array of objects that define the tags (keys and values) that you want to associate
   *             with the predictive inbox placement test.</p>
   *
   */
  Tags?: Array<Tag>;
}

export namespace CreateDeliverabilityTestReportRequest {
  export function isa(o: any): o is CreateDeliverabilityTestReportRequest {
    return _smithy.isa(o, "CreateDeliverabilityTestReportRequest");
  }
}

/**
 *
 *         <p>Information about the predictive inbox placement test that you created.</p>
 *
 */
export interface CreateDeliverabilityTestReportResponse
  extends $MetadataBearer {
  __type?: "CreateDeliverabilityTestReportResponse";
  /**
   *
   *         <p>The status of the predictive inbox placement test. If the status is <code>IN_PROGRESS</code>, then the predictive inbox placement test
   *             is currently running. Predictive inbox placement tests are usually complete within 24 hours of creating the
   *             test. If the status is <code>COMPLETE</code>, then the test is finished, and you can use
   *             the <code>GetDeliverabilityTestReport</code> to view the results of the test.</p>
   *
   */
  DeliverabilityTestStatus: DeliverabilityTestStatus | string | undefined;

  /**
   *
   *         <p>A unique string that identifies the predictive inbox placement test.</p>
   *
   */
  ReportId: string | undefined;
}

export namespace CreateDeliverabilityTestReportResponse {
  export function isa(o: any): o is CreateDeliverabilityTestReportResponse {
    return _smithy.isa(o, "CreateDeliverabilityTestReportResponse");
  }
}

/**
 *
 *         <p>A request to begin the verification process for an email identity (an email address or
 *             domain).</p>
 *
 */
export interface CreateEmailIdentityRequest {
  __type?: "CreateEmailIdentityRequest";
  /**
   *
   *         <p>The email address or domain that you want to verify.</p>
   *
   */
  EmailIdentity: string | undefined;

  /**
   *
   *         <p>An array of objects that define the tags (keys and values) that you want to associate
   *             with the email identity.</p>
   *
   */
  Tags?: Array<Tag>;
}

export namespace CreateEmailIdentityRequest {
  export function isa(o: any): o is CreateEmailIdentityRequest {
    return _smithy.isa(o, "CreateEmailIdentityRequest");
  }
}

/**
 *
 *         <p>If the email identity is a domain, this object contains tokens that you can use to
 *             create a set of CNAME records. To sucessfully verify your domain, you have to add these
 *             records to the DNS configuration for your domain.</p>
 *         <p>If the email identity is an email address, this object is empty. </p>
 *
 */
export interface CreateEmailIdentityResponse extends $MetadataBearer {
  __type?: "CreateEmailIdentityResponse";
  /**
   *
   *         <p>An object that contains information about the DKIM attributes for the identity. This
   *             object includes the tokens that you use to create the CNAME records that are required to
   *             complete the DKIM verification process.</p>
   *
   */
  DkimAttributes?: DkimAttributes;

  /**
   *
   *         <p>The email identity type.</p>
   *
   */
  IdentityType?: IdentityType | string;

  /**
   *
   *         <p>Specifies whether or not the identity is verified. You can only send email from
   *             verified email addresses or domains. For more information about verifying identities,
   *             see the <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-email-manage-verify.html">Amazon Pinpoint User Guide</a>.</p>
   *
   */
  VerifiedForSendingStatus?: boolean;
}

export namespace CreateEmailIdentityResponse {
  export function isa(o: any): o is CreateEmailIdentityResponse {
    return _smithy.isa(o, "CreateEmailIdentityResponse");
  }
}

/**
 *
 *         <p>An object that contains information about the volume of email sent on each day of the
 *             analysis period.</p>
 *
 */
export interface DailyVolume {
  __type?: "DailyVolume";
  /**
   *
   *         <p>An object that contains inbox placement metrics for a specified day in the analysis
   *             period, broken out by the recipient's email provider.</p>
   *
   */
  DomainIspPlacements?: Array<DomainIspPlacement>;

  /**
   *
   *         <p>The date that the DailyVolume metrics apply to, in Unix time.</p>
   *
   */
  StartDate?: Date;

  /**
   *
   *         <p>An object that contains inbox placement metrics for a specific day in the analysis
   *             period.</p>
   *
   */
  VolumeStatistics?: VolumeStatistics;
}

export namespace DailyVolume {
  export function isa(o: any): o is DailyVolume {
    return _smithy.isa(o, "DailyVolume");
  }
}

/**
 *
 *         <p>Contains information about a dedicated IP address that is associated with your Amazon SES API v2
 *             account.</p>
 *         <p>To learn more about requesting dedicated IP addresses, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/dedicated-ip-case.html">Requesting and Relinquishing
 *                 Dedicated IP Addresses</a> in the <i>Amazon SES Developer
 *             Guide</i>.</p>
 *
 */
export interface DedicatedIp {
  __type?: "DedicatedIp";
  /**
   *
   *         <p>An IPv4 address.</p>
   *
   */
  Ip: string | undefined;

  /**
   *
   *         <p>The name of the dedicated IP pool that the IP address is associated with.</p>
   *
   */
  PoolName?: string;

  /**
   *
   *         <p>Indicates how complete the dedicated IP warm-up process is. When this value equals 1,
   *             the address has completed the warm-up process and is ready for use.</p>
   *
   */
  WarmupPercentage: number | undefined;

  /**
   *
   *         <p>The warm-up status of a dedicated IP address. The status can have one of the following
   *             values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>IN_PROGRESS</code> – The IP address isn't ready to use because the
   *                     dedicated IP warm-up process is ongoing.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DONE</code> – The dedicated IP warm-up process is complete, and
   *                     the IP address is ready to use.</p>
   *             </li>
   *          </ul>
   *
   */
  WarmupStatus: WarmupStatus | string | undefined;
}

export namespace DedicatedIp {
  export function isa(o: any): o is DedicatedIp {
    return _smithy.isa(o, "DedicatedIp");
  }
}

/**
 *
 *         <p>A request to delete an event destination from a configuration set.</p>
 *
 */
export interface DeleteConfigurationSetEventDestinationRequest {
  __type?: "DeleteConfigurationSetEventDestinationRequest";
  /**
   *
   *         <p>The name of the configuration set that contains the event destination that you want to
   *             delete.</p>
   *
   */
  ConfigurationSetName: string | undefined;

  /**
   *
   *         <p>The name of the event destination that you want to delete.</p>
   *
   */
  EventDestinationName: string | undefined;
}

export namespace DeleteConfigurationSetEventDestinationRequest {
  export function isa(
    o: any
  ): o is DeleteConfigurationSetEventDestinationRequest {
    return _smithy.isa(o, "DeleteConfigurationSetEventDestinationRequest");
  }
}

/**
 *
 *         <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 *
 */
export interface DeleteConfigurationSetEventDestinationResponse
  extends $MetadataBearer {
  __type?: "DeleteConfigurationSetEventDestinationResponse";
}

export namespace DeleteConfigurationSetEventDestinationResponse {
  export function isa(
    o: any
  ): o is DeleteConfigurationSetEventDestinationResponse {
    return _smithy.isa(o, "DeleteConfigurationSetEventDestinationResponse");
  }
}

/**
 *
 *         <p>A request to delete a configuration set.</p>
 *
 */
export interface DeleteConfigurationSetRequest {
  __type?: "DeleteConfigurationSetRequest";
  /**
   *
   *         <p>The name of the configuration set that you want to delete.</p>
   *
   */
  ConfigurationSetName: string | undefined;
}

export namespace DeleteConfigurationSetRequest {
  export function isa(o: any): o is DeleteConfigurationSetRequest {
    return _smithy.isa(o, "DeleteConfigurationSetRequest");
  }
}

/**
 *
 *         <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 *
 */
export interface DeleteConfigurationSetResponse extends $MetadataBearer {
  __type?: "DeleteConfigurationSetResponse";
}

export namespace DeleteConfigurationSetResponse {
  export function isa(o: any): o is DeleteConfigurationSetResponse {
    return _smithy.isa(o, "DeleteConfigurationSetResponse");
  }
}

/**
 *
 *         <p>A request to delete a dedicated IP pool.</p>
 *
 */
export interface DeleteDedicatedIpPoolRequest {
  __type?: "DeleteDedicatedIpPoolRequest";
  /**
   *
   *         <p>The name of the dedicated IP pool that you want to delete.</p>
   *
   */
  PoolName: string | undefined;
}

export namespace DeleteDedicatedIpPoolRequest {
  export function isa(o: any): o is DeleteDedicatedIpPoolRequest {
    return _smithy.isa(o, "DeleteDedicatedIpPoolRequest");
  }
}

/**
 *
 *         <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 *
 */
export interface DeleteDedicatedIpPoolResponse extends $MetadataBearer {
  __type?: "DeleteDedicatedIpPoolResponse";
}

export namespace DeleteDedicatedIpPoolResponse {
  export function isa(o: any): o is DeleteDedicatedIpPoolResponse {
    return _smithy.isa(o, "DeleteDedicatedIpPoolResponse");
  }
}

/**
 *
 *         <p>A request to delete an existing email identity. When you delete an identity, you lose
 *             the ability to send email from that identity. You can restore your ability to send email
 *             by completing the verification process for the identity again.</p>
 *
 */
export interface DeleteEmailIdentityRequest {
  __type?: "DeleteEmailIdentityRequest";
  /**
   *
   *         <p>The identity (that is, the email address or domain) that you want to delete.</p>
   *
   */
  EmailIdentity: string | undefined;
}

export namespace DeleteEmailIdentityRequest {
  export function isa(o: any): o is DeleteEmailIdentityRequest {
    return _smithy.isa(o, "DeleteEmailIdentityRequest");
  }
}

/**
 *
 *         <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 *
 */
export interface DeleteEmailIdentityResponse extends $MetadataBearer {
  __type?: "DeleteEmailIdentityResponse";
}

export namespace DeleteEmailIdentityResponse {
  export function isa(o: any): o is DeleteEmailIdentityResponse {
    return _smithy.isa(o, "DeleteEmailIdentityResponse");
  }
}

/**
 *
 *         <p>A request to delete a suppressed email destination.</p>
 *
 */
export interface DeleteSuppressedDestinationRequest {
  __type?: "DeleteSuppressedDestinationRequest";
  /**
   *
   *         <p>The suppressed email destination to delete.</p>
   *
   */
  EmailAddress: string | undefined;
}

export namespace DeleteSuppressedDestinationRequest {
  export function isa(o: any): o is DeleteSuppressedDestinationRequest {
    return _smithy.isa(o, "DeleteSuppressedDestinationRequest");
  }
}

/**
 *
 *         <p>An HTTP 200 response if the request succeeds, or an error message if the request fails.</p>
 *
 */
export interface DeleteSuppressedDestinationResponse extends $MetadataBearer {
  __type?: "DeleteSuppressedDestinationResponse";
}

export namespace DeleteSuppressedDestinationResponse {
  export function isa(o: any): o is DeleteSuppressedDestinationResponse {
    return _smithy.isa(o, "DeleteSuppressedDestinationResponse");
  }
}

export enum DeliverabilityDashboardAccountStatus {
  ACTIVE = "ACTIVE",
  DISABLED = "DISABLED",
  PENDING_EXPIRATION = "PENDING_EXPIRATION"
}

/**
 *
 *         <p>An object that contains metadata related to a predictive inbox placement test.</p>
 *
 */
export interface DeliverabilityTestReport {
  __type?: "DeliverabilityTestReport";
  /**
   *
   *         <p>The date and time when the predictive inbox placement test was created, in Unix time format.</p>
   *
   */
  CreateDate?: Date;

  /**
   *
   *         <p>The status of the predictive inbox placement test. If the status is <code>IN_PROGRESS</code>, then the predictive inbox placement test
   *             is currently running. Predictive inbox placement tests are usually complete within 24 hours of creating the
   *             test. If the status is <code>COMPLETE</code>, then the test is finished, and you can use
   *             the <code>GetDeliverabilityTestReport</code> to view the results of the test.</p>
   *
   */
  DeliverabilityTestStatus?: DeliverabilityTestStatus | string;

  /**
   *
   *         <p>The sender address that you specified for the predictive inbox placement test.</p>
   *
   */
  FromEmailAddress?: string;

  /**
   *
   *         <p>A unique string that identifies the predictive inbox placement test.</p>
   *
   */
  ReportId?: string;

  /**
   *
   *         <p>A name that helps you identify a predictive inbox placement test report.</p>
   *
   */
  ReportName?: string;

  /**
   *
   *         <p>The subject line for an email that you submitted in a predictive inbox placement test.</p>
   *
   */
  Subject?: string;
}

export namespace DeliverabilityTestReport {
  export function isa(o: any): o is DeliverabilityTestReport {
    return _smithy.isa(o, "DeliverabilityTestReport");
  }
}

export enum DeliverabilityTestStatus {
  COMPLETED = "COMPLETED",
  IN_PROGRESS = "IN_PROGRESS"
}

/**
 *
 *         <p>Used to associate a configuration set with a dedicated IP pool.</p>
 *
 */
export interface DeliveryOptions {
  __type?: "DeliveryOptions";
  /**
   *
   *         <p>The name of the dedicated IP pool that you want to associate with the configuration
   *             set.</p>
   *
   */
  SendingPoolName?: string;

  /**
   *
   *         <p>Specifies whether messages that use the configuration set are required to use
   *             Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only
   *             delivered if a TLS connection can be established. If the value is <code>Optional</code>,
   *             messages can be delivered in plain text if a TLS connection can't be established.</p>
   *
   */
  TlsPolicy?: TlsPolicy | string;
}

export namespace DeliveryOptions {
  export function isa(o: any): o is DeliveryOptions {
    return _smithy.isa(o, "DeliveryOptions");
  }
}

/**
 *
 *         <p>An object that describes the recipients for an email.</p>
 *
 */
export interface Destination {
  __type?: "Destination";
  /**
   *
   *         <p>An array that contains the email addresses of the "BCC" (blind carbon copy) recipients
   *             for the email.</p>
   *
   */
  BccAddresses?: Array<string>;

  /**
   *
   *         <p>An array that contains the email addresses of the "CC" (carbon copy) recipients for
   *             the email.</p>
   *
   */
  CcAddresses?: Array<string>;

  /**
   *
   *         <p>An array that contains the email addresses of the "To" recipients for the
   *             email.</p>
   *
   */
  ToAddresses?: Array<string>;
}

export namespace Destination {
  export function isa(o: any): o is Destination {
    return _smithy.isa(o, "Destination");
  }
}

export enum DimensionValueSource {
  EMAIL_HEADER = "EMAIL_HEADER",
  LINK_TAG = "LINK_TAG",
  MESSAGE_TAG = "MESSAGE_TAG"
}

/**
 *
 *         <p>An object that contains information about the DKIM configuration for an email
 *             identity.</p>
 *
 */
export interface DkimAttributes {
  __type?: "DkimAttributes";
  /**
   *
   *         <p>If the value is <code>true</code>, then the messages that you send from the identity
   *             are signed using DKIM. If the value is <code>false</code>, then the messages that you
   *             send from the identity aren't DKIM-signed.</p>
   *
   */
  SigningEnabled?: boolean;

  /**
   *
   *         <p>Describes whether or not Amazon SES has successfully located the DKIM records in the DNS
   *             records for the domain. The status can be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>PENDING</code> – Amazon SES hasn't yet detected the DKIM records in the
   *                     DNS configuration for the domain, but will continue to attempt to locate
   *                     them.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SUCCESS</code> – Amazon SES located the DKIM records in the DNS
   *                     configuration for the domain and determined that they're correct. You can now
   *                     send DKIM-signed email from the identity.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>FAILED</code> – Amazon SES wasn't able to locate the DKIM records in
   *                     the DNS settings for the domain, and won't continue to search for them.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>TEMPORARY_FAILURE</code> – A temporary issue occurred, which
   *                     prevented Amazon SES from determining the DKIM status for the domain.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>NOT_STARTED</code> – Amazon SES hasn't yet started searching for the
   *                     DKIM records in the DKIM records for the domain.</p>
   *             </li>
   *          </ul>
   *
   */
  Status?: DkimStatus | string;

  /**
   *
   *         <p>A set of unique strings that you use to create a set of CNAME records that you add to
   *             the DNS configuration for your domain. When Amazon SES detects these records in the DNS
   *             configuration for your domain, the DKIM authentication process is complete. Amazon SES
   *             usually detects these records within about 72 hours of adding them to the DNS
   *             configuration for your domain.</p>
   *
   */
  Tokens?: Array<string>;
}

export namespace DkimAttributes {
  export function isa(o: any): o is DkimAttributes {
    return _smithy.isa(o, "DkimAttributes");
  }
}

export enum DkimStatus {
  FAILED = "FAILED",
  NOT_STARTED = "NOT_STARTED",
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  TEMPORARY_FAILURE = "TEMPORARY_FAILURE"
}

/**
 *
 *         <p>An object that contains the deliverability data for a specific campaign. This data is
 *             available for a campaign only if the campaign sent email by using a domain that the
 *             Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code>
 *             operation).</p>
 *
 */
export interface DomainDeliverabilityCampaign {
  __type?: "DomainDeliverabilityCampaign";
  /**
   *
   *         <p>The unique identifier for the campaign. The Deliverability dashboard automatically generates
   *             and assigns this identifier to a campaign.</p>
   *
   */
  CampaignId?: string;

  /**
   *
   *         <p>The percentage of email messages that were deleted by recipients, without being opened
   *             first. Due to technical limitations, this value only includes recipients who opened the
   *             message by using an email client that supports images.</p>
   *
   */
  DeleteRate?: number;

  /**
   *
   *         <p>The major email providers who handled the email message.</p>
   *
   */
  Esps?: Array<string>;

  /**
   *
   *         <p>The first time, in Unix time format, when the email message was delivered to any
   *             recipient's inbox. This value can help you determine how long it took for a campaign to
   *             deliver an email message.</p>
   *
   */
  FirstSeenDateTime?: Date;

  /**
   *
   *         <p>The verified email address that the email message was sent from.</p>
   *
   */
  FromAddress?: string;

  /**
   *
   *         <p>The URL of an image that contains a snapshot of the email message that was
   *             sent.</p>
   *
   */
  ImageUrl?: string;

  /**
   *
   *         <p>The number of email messages that were delivered to recipients’ inboxes.</p>
   *
   */
  InboxCount?: number;

  /**
   *
   *         <p>The last time, in Unix time format, when the email message was delivered to any
   *             recipient's inbox. This value can help you determine how long it took for a campaign to
   *             deliver an email message.</p>
   *
   */
  LastSeenDateTime?: Date;

  /**
   *
   *         <p>The projected number of recipients that the email message was sent to.</p>
   *
   */
  ProjectedVolume?: number;

  /**
   *
   *         <p>The percentage of email messages that were opened and then deleted by recipients. Due
   *             to technical limitations, this value only includes recipients who opened the message by
   *             using an email client that supports images.</p>
   *
   */
  ReadDeleteRate?: number;

  /**
   *
   *         <p>The percentage of email messages that were opened by recipients. Due to technical
   *             limitations, this value only includes recipients who opened the message by using an
   *             email client that supports images.</p>
   *
   */
  ReadRate?: number;

  /**
   *
   *         <p>The IP addresses that were used to send the email message.</p>
   *
   */
  SendingIps?: Array<string>;

  /**
   *
   *         <p>The number of email messages that were delivered to recipients' spam or junk mail
   *             folders.</p>
   *
   */
  SpamCount?: number;

  /**
   *
   *         <p>The subject line, or title, of the email message.</p>
   *
   */
  Subject?: string;
}

export namespace DomainDeliverabilityCampaign {
  export function isa(o: any): o is DomainDeliverabilityCampaign {
    return _smithy.isa(o, "DomainDeliverabilityCampaign");
  }
}

/**
 *
 *         <p>An object that contains information about the Deliverability dashboard subscription for a
 *             verified domain that you use to send email and currently has an active Deliverability dashboard
 *             subscription. If a Deliverability dashboard subscription is active for a domain, you gain access
 *             to reputation, inbox placement, and other metrics for the domain.</p>
 *
 */
export interface DomainDeliverabilityTrackingOption {
  __type?: "DomainDeliverabilityTrackingOption";
  /**
   *
   *         <p>A verified domain that’s associated with your AWS account and currently has an
   *             active Deliverability dashboard subscription.</p>
   *
   */
  Domain?: string;

  /**
   *
   *         <p>An object that contains information about the inbox placement data settings for the
   *             domain.</p>
   *
   */
  InboxPlacementTrackingOption?: InboxPlacementTrackingOption;

  /**
   *
   *         <p>The date, in Unix time format, when you enabled the Deliverability dashboard for the
   *             domain.</p>
   *
   */
  SubscriptionStartDate?: Date;
}

export namespace DomainDeliverabilityTrackingOption {
  export function isa(o: any): o is DomainDeliverabilityTrackingOption {
    return _smithy.isa(o, "DomainDeliverabilityTrackingOption");
  }
}

/**
 *
 *         <p>An object that contains inbox placement data for email sent from one of your email
 *             domains to a specific email provider.</p>
 *
 */
export interface DomainIspPlacement {
  __type?: "DomainIspPlacement";
  /**
   *
   *         <p>The percentage of messages that were sent from the selected domain to the specified
   *             email provider that arrived in recipients' inboxes.</p>
   *
   */
  InboxPercentage?: number;

  /**
   *
   *         <p>The total number of messages that were sent from the selected domain to the specified
   *             email provider that arrived in recipients' inboxes.</p>
   *
   */
  InboxRawCount?: number;

  /**
   *
   *         <p>The name of the email provider that the inbox placement data applies to.</p>
   *
   */
  IspName?: string;

  /**
   *
   *         <p>The percentage of messages that were sent from the selected domain to the specified
   *             email provider that arrived in recipients' spam or junk mail folders.</p>
   *
   */
  SpamPercentage?: number;

  /**
   *
   *         <p>The total number of messages that were sent from the selected domain to the specified
   *             email provider that arrived in recipients' spam or junk mail folders.</p>
   *
   */
  SpamRawCount?: number;
}

export namespace DomainIspPlacement {
  export function isa(o: any): o is DomainIspPlacement {
    return _smithy.isa(o, "DomainIspPlacement");
  }
}

/**
 *
 *         <p>An object that defines the entire content of the email, including the message headers
 *             and the body content. You can create a simple email message, in which you specify the
 *             subject and the text and HTML versions of the message body. You can also create raw
 *             messages, in which you specify a complete MIME-formatted message. Raw messages can
 *             include attachments and custom headers.</p>
 *
 */
export interface EmailContent {
  __type?: "EmailContent";
  /**
   *
   *         <p>The raw email message. The message has to meet the following criteria:</p>
   *         <ul>
   *             <li>
   *                 <p>The message has to contain a header and a body, separated by one blank
   *                     line.</p>
   *             </li>
   *             <li>
   *                 <p>All of the required header fields must be present in the message.</p>
   *             </li>
   *             <li>
   *                 <p>Each part of a multipart MIME message must be formatted properly.</p>
   *             </li>
   *             <li>
   *                 <p>If you include attachments, they must be in a file format that the Amazon SES API v2
   *                     supports.
   *                     </p>
   *             </li>
   *             <li>
   *                 <p>The entire message must be Base64 encoded.</p>
   *             </li>
   *             <li>
   *                 <p>If any of the MIME parts in your message contain content that is outside of
   *                     the 7-bit ASCII character range, you should encode that content to ensure that
   *                     recipients' email clients render the message properly.</p>
   *             </li>
   *             <li>
   *                 <p>The length of any single line of text in the message can't exceed 1,000
   *                     characters. This restriction is defined in <a href="https://tools.ietf.org/html/rfc5321">RFC 5321</a>.</p>
   *             </li>
   *          </ul>
   *
   */
  Raw?: RawMessage;

  /**
   *
   *         <p>The simple email message. The message consists of a subject and a message body.</p>
   *
   */
  Simple?: Message;

  /**
   *
   *         <p>The template to use for the email message.</p>
   *
   */
  Template?: Template;
}

export namespace EmailContent {
  export function isa(o: any): o is EmailContent {
    return _smithy.isa(o, "EmailContent");
  }
}

/**
 *
 *         <p>In the Amazon SES API v2, <i>events</i> include message sends, deliveries, opens,
 *             clicks, bounces, and complaints. <i>Event destinations</i> are places that
 *             you can send information about these events to. For example, you can send event data to
 *             Amazon SNS to receive notifications when you receive bounces or complaints, or you can use
 *             Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
 *
 */
export interface EventDestination {
  __type?: "EventDestination";
  /**
   *
   *         <p>An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to
   *             monitor and gain insights on your email sending metrics.</p>
   *
   */
  CloudWatchDestination?: CloudWatchDestination;

  /**
   *
   *         <p>If <code>true</code>, the event destination is enabled. When the event destination is
   *             enabled, the specified event types are sent to the destinations in this
   *                 <code>EventDestinationDefinition</code>.</p>
   *         <p>If <code>false</code>, the event destination is disabled. When the event destination
   *             is disabled, events aren't sent to the specified destinations.</p>
   *
   */
  Enabled?: boolean;

  /**
   *
   *         <p>An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to
   *             stream data to other services, such as Amazon S3 and Amazon Redshift.</p>
   *
   */
  KinesisFirehoseDestination?: KinesisFirehoseDestination;

  /**
   *
   *         <p>The types of events that Amazon SES sends to the specified event destinations.</p>
   *
   */
  MatchingEventTypes: Array<EventType | string> | undefined;

  /**
   *
   *         <p>A name that identifies the event destination.</p>
   *
   */
  Name: string | undefined;

  /**
   *
   *         <p>An object that defines an Amazon Pinpoint project destination for email events. You can send
   *             email event data to a Amazon Pinpoint project to view metrics using the Transactional Messaging
   *             dashboards that are built in to Amazon Pinpoint. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/analytics-transactional-messages.html">Transactional
   *                 Messaging Charts</a> in the <i>Amazon Pinpoint User Guide</i>.</p>
   *
   */
  PinpointDestination?: PinpointDestination;

  /**
   *
   *         <p>An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to
   *             send notification when certain email events occur.</p>
   *
   */
  SnsDestination?: SnsDestination;
}

export namespace EventDestination {
  export function isa(o: any): o is EventDestination {
    return _smithy.isa(o, "EventDestination");
  }
}

/**
 *
 *         <p>An object that defines the event destination. Specifically, it defines which services
 *             receive events from emails sent using the configuration set that the event destination
 *             is associated with. Also defines the types of events that are sent to the event
 *             destination.</p>
 *
 */
export interface EventDestinationDefinition {
  __type?: "EventDestinationDefinition";
  /**
   *
   *         <p>An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to
   *             monitor and gain insights on your email sending metrics.</p>
   *
   */
  CloudWatchDestination?: CloudWatchDestination;

  /**
   *
   *         <p>If <code>true</code>, the event destination is enabled. When the event destination is
   *             enabled, the specified event types are sent to the destinations in this
   *                 <code>EventDestinationDefinition</code>.</p>
   *         <p>If <code>false</code>, the event destination is disabled. When the event destination
   *             is disabled, events aren't sent to the specified destinations.</p>
   *
   */
  Enabled?: boolean;

  /**
   *
   *         <p>An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to
   *             stream data to other services, such as Amazon S3 and Amazon Redshift.</p>
   *
   */
  KinesisFirehoseDestination?: KinesisFirehoseDestination;

  /**
   *
   *         <p>An array that specifies which events the Amazon SES API v2 should send to the destinations in
   *             this <code>EventDestinationDefinition</code>.</p>
   *
   */
  MatchingEventTypes?: Array<EventType | string>;

  /**
   *
   *         <p>An object that defines an Amazon Pinpoint project destination for email events. You can send
   *             email event data to a Amazon Pinpoint project to view metrics using the Transactional Messaging
   *             dashboards that are built in to Amazon Pinpoint. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/analytics-transactional-messages.html">Transactional
   *                 Messaging Charts</a> in the <i>Amazon Pinpoint User Guide</i>.</p>
   *
   */
  PinpointDestination?: PinpointDestination;

  /**
   *
   *         <p>An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to
   *             send notification when certain email events occur.</p>
   *
   */
  SnsDestination?: SnsDestination;
}

export namespace EventDestinationDefinition {
  export function isa(o: any): o is EventDestinationDefinition {
    return _smithy.isa(o, "EventDestinationDefinition");
  }
}

export enum EventType {
  BOUNCE = "BOUNCE",
  CLICK = "CLICK",
  COMPLAINT = "COMPLAINT",
  DELIVERY = "DELIVERY",
  OPEN = "OPEN",
  REJECT = "REJECT",
  RENDERING_FAILURE = "RENDERING_FAILURE",
  SEND = "SEND"
}

/**
 *
 *         <p>A request to obtain information about the email-sending capabilities of your Amazon SES
 *             account.</p>
 *
 */
export interface GetAccountRequest {
  __type?: "GetAccountRequest";
}

export namespace GetAccountRequest {
  export function isa(o: any): o is GetAccountRequest {
    return _smithy.isa(o, "GetAccountRequest");
  }
}

/**
 *
 *         <p>A list of details about the email-sending capabilities of your Amazon SES account in the
 *             current AWS Region.</p>
 *
 */
export interface GetAccountResponse extends $MetadataBearer {
  __type?: "GetAccountResponse";
  /**
   *
   *         <p>Indicates whether or not the automatic warm-up feature is enabled for dedicated IP
   *             addresses that are associated with your account.</p>
   *
   */
  DedicatedIpAutoWarmupEnabled?: boolean;

  /**
   *
   *         <p>The reputation status of your Amazon SES account. The status can be one of the
   *             following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>HEALTHY</code> – There are no reputation-related issues that
   *                     currently impact your account.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>PROBATION</code> – We've identified potential issues with your Amazon SES
   *                     account. We're placing your account under review while you work on correcting
   *                     these issues.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SHUTDOWN</code> – Your account's ability to send email is
   *                     currently paused because of an issue with the email sent from your account. When
   *                     you correct the issue, you can contact us and request that your account's
   *                     ability to send email is resumed.</p>
   *             </li>
   *          </ul>
   *
   */
  EnforcementStatus?: string;

  /**
   *
   *         <p>Indicates whether or not your account has production access in the current AWS
   *             Region.</p>
   *         <p>If the value is <code>false</code>, then your account is in the
   *                 <i>sandbox</i>. When your account is in the sandbox, you can only send
   *             email to verified identities. Additionally, the maximum number of emails you can send in
   *             a 24-hour period (your sending quota) is 200, and the maximum number of emails you can
   *             send per second (your maximum sending rate) is 1.</p>
   *         <p>If the value is <code>true</code>, then your account has production access. When your
   *             account has production access, you can send email to any address. The sending quota and
   *             maximum sending rate for your account vary based on your specific use case.</p>
   *
   */
  ProductionAccessEnabled?: boolean;

  /**
   *
   *         <p>An object that contains information about the per-day and per-second sending limits
   *             for your Amazon SES account in the current AWS Region.</p>
   *
   */
  SendQuota?: SendQuota;

  /**
   *
   *         <p>Indicates whether or not email sending is enabled for your Amazon SES account in the
   *             current AWS Region.</p>
   *
   */
  SendingEnabled?: boolean;

  /**
   *
   *         <p>An object that contains information about your account's suppression preferences.</p>
   *
   */
  SuppressionAttributes?: SuppressionAttributes;
}

export namespace GetAccountResponse {
  export function isa(o: any): o is GetAccountResponse {
    return _smithy.isa(o, "GetAccountResponse");
  }
}

/**
 *
 *         <p>A request to retrieve a list of the blacklists that your dedicated IP addresses appear
 *             on.</p>
 *
 */
export interface GetBlacklistReportsRequest {
  __type?: "GetBlacklistReportsRequest";
  /**
   *
   *         <p>A list of IP addresses that you want to retrieve blacklist information about. You can
   *             only specify the dedicated IP addresses that you use to send email using Amazon SES or
   *             Amazon Pinpoint.</p>
   *
   */
  BlacklistItemNames: Array<string> | undefined;
}

export namespace GetBlacklistReportsRequest {
  export function isa(o: any): o is GetBlacklistReportsRequest {
    return _smithy.isa(o, "GetBlacklistReportsRequest");
  }
}

/**
 *
 *         <p>An object that contains information about blacklist events.</p>
 *
 */
export interface GetBlacklistReportsResponse extends $MetadataBearer {
  __type?: "GetBlacklistReportsResponse";
  /**
   *
   *         <p>An object that contains information about a blacklist that one of your dedicated IP
   *             addresses appears on.</p>
   *
   */
  BlacklistReport: { [key: string]: Array<BlacklistEntry> } | undefined;
}

export namespace GetBlacklistReportsResponse {
  export function isa(o: any): o is GetBlacklistReportsResponse {
    return _smithy.isa(o, "GetBlacklistReportsResponse");
  }
}

/**
 *
 *         <p>A request to obtain information about the event destinations for a configuration
 *             set.</p>
 *
 */
export interface GetConfigurationSetEventDestinationsRequest {
  __type?: "GetConfigurationSetEventDestinationsRequest";
  /**
   *
   *         <p>The name of the configuration set that contains the event destination.</p>
   *
   */
  ConfigurationSetName: string | undefined;
}

export namespace GetConfigurationSetEventDestinationsRequest {
  export function isa(
    o: any
  ): o is GetConfigurationSetEventDestinationsRequest {
    return _smithy.isa(o, "GetConfigurationSetEventDestinationsRequest");
  }
}

/**
 *
 *         <p>Information about an event destination for a configuration set.</p>
 *
 */
export interface GetConfigurationSetEventDestinationsResponse
  extends $MetadataBearer {
  __type?: "GetConfigurationSetEventDestinationsResponse";
  /**
   *
   *         <p>An array that includes all of the events destinations that have been configured for
   *             the configuration set.</p>
   *
   */
  EventDestinations?: Array<EventDestination>;
}

export namespace GetConfigurationSetEventDestinationsResponse {
  export function isa(
    o: any
  ): o is GetConfigurationSetEventDestinationsResponse {
    return _smithy.isa(o, "GetConfigurationSetEventDestinationsResponse");
  }
}

/**
 *
 *         <p>A request to obtain information about a configuration set.</p>
 *
 */
export interface GetConfigurationSetRequest {
  __type?: "GetConfigurationSetRequest";
  /**
   *
   *         <p>The name of the configuration set that you want to obtain more information
   *             about.</p>
   *
   */
  ConfigurationSetName: string | undefined;
}

export namespace GetConfigurationSetRequest {
  export function isa(o: any): o is GetConfigurationSetRequest {
    return _smithy.isa(o, "GetConfigurationSetRequest");
  }
}

/**
 *
 *         <p>Information about a configuration set.</p>
 *
 */
export interface GetConfigurationSetResponse extends $MetadataBearer {
  __type?: "GetConfigurationSetResponse";
  /**
   *
   *         <p>The name of the configuration set.</p>
   *
   */
  ConfigurationSetName?: string;

  /**
   *
   *         <p>An object that defines the dedicated IP pool that is used to send emails that you send
   *             using the configuration set.</p>
   *
   */
  DeliveryOptions?: DeliveryOptions;

  /**
   *
   *         <p>An object that defines whether or not Amazon SES collects reputation metrics for the emails
   *             that you send that use the configuration set.</p>
   *
   */
  ReputationOptions?: ReputationOptions;

  /**
   *
   *         <p>An object that defines whether or not Amazon SES can send email that you send using the
   *             configuration set.</p>
   *
   */
  SendingOptions?: SendingOptions;

  /**
   *
   *         <p>An object that contains information about your account's suppression preferences.</p>
   *
   */
  SuppressionOptions?: SuppressionOptions;

  /**
   *
   *         <p>An array of objects that define the tags (keys and values) that are associated with
   *             the configuration set.</p>
   *
   */
  Tags?: Array<Tag>;

  /**
   *
   *         <p>An object that defines the open and click tracking options for emails that you send
   *             using the configuration set.</p>
   *
   */
  TrackingOptions?: TrackingOptions;
}

export namespace GetConfigurationSetResponse {
  export function isa(o: any): o is GetConfigurationSetResponse {
    return _smithy.isa(o, "GetConfigurationSetResponse");
  }
}

/**
 *
 *         <p>A request to obtain more information about a dedicated IP address.</p>
 *
 */
export interface GetDedicatedIpRequest {
  __type?: "GetDedicatedIpRequest";
  /**
   *
   *         <p>The IP address that you want to obtain more information about. The value you specify
   *             has to be a dedicated IP address that's assocaited with your AWS account.</p>
   *
   */
  Ip: string | undefined;
}

export namespace GetDedicatedIpRequest {
  export function isa(o: any): o is GetDedicatedIpRequest {
    return _smithy.isa(o, "GetDedicatedIpRequest");
  }
}

/**
 *
 *         <p>Information about a dedicated IP address.</p>
 *
 */
export interface GetDedicatedIpResponse extends $MetadataBearer {
  __type?: "GetDedicatedIpResponse";
  /**
   *
   *         <p>An object that contains information about a dedicated IP address.</p>
   *
   */
  DedicatedIp?: DedicatedIp;
}

export namespace GetDedicatedIpResponse {
  export function isa(o: any): o is GetDedicatedIpResponse {
    return _smithy.isa(o, "GetDedicatedIpResponse");
  }
}

/**
 *
 *         <p>A request to obtain more information about dedicated IP pools.</p>
 *
 */
export interface GetDedicatedIpsRequest {
  __type?: "GetDedicatedIpsRequest";
  /**
   *
   *         <p>A token returned from a previous call to <code>GetDedicatedIps</code> to indicate the
   *             position of the dedicated IP pool in the list of IP pools.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *         <p>The number of results to show in a single call to <code>GetDedicatedIpsRequest</code>.
   *             If the number of results is larger than the number you specified in this parameter, then
   *             the response includes a <code>NextToken</code> element, which you can use to obtain
   *             additional results.</p>
   *
   */
  PageSize?: number;

  /**
   *
   *         <p>The name of the IP pool that the dedicated IP address is associated with.</p>
   *
   */
  PoolName?: string;
}

export namespace GetDedicatedIpsRequest {
  export function isa(o: any): o is GetDedicatedIpsRequest {
    return _smithy.isa(o, "GetDedicatedIpsRequest");
  }
}

/**
 *
 *         <p>Information about the dedicated IP addresses that are associated with your AWS
 *             account.</p>
 *
 */
export interface GetDedicatedIpsResponse extends $MetadataBearer {
  __type?: "GetDedicatedIpsResponse";
  /**
   *
   *         <p>A list of dedicated IP addresses that are associated with your AWS account.</p>
   *
   */
  DedicatedIps?: Array<DedicatedIp>;

  /**
   *
   *         <p>A token that indicates that there are additional dedicated IP addresses to list. To
   *             view additional addresses, issue another request to <code>GetDedicatedIps</code>,
   *             passing this token in the <code>NextToken</code> parameter.</p>
   *
   */
  NextToken?: string;
}

export namespace GetDedicatedIpsResponse {
  export function isa(o: any): o is GetDedicatedIpsResponse {
    return _smithy.isa(o, "GetDedicatedIpsResponse");
  }
}

/**
 *
 *         <p>Retrieve information about the status of the Deliverability dashboard for your AWS account.
 *             When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and
 *             other metrics for your domains. You also gain the ability to perform predictive inbox placement tests.</p>
 *
 *         <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition
 *             to any other fees that you accrue by using Amazon SES and other AWS services. For more
 *             information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
 *
 */
export interface GetDeliverabilityDashboardOptionsRequest {
  __type?: "GetDeliverabilityDashboardOptionsRequest";
}

export namespace GetDeliverabilityDashboardOptionsRequest {
  export function isa(o: any): o is GetDeliverabilityDashboardOptionsRequest {
    return _smithy.isa(o, "GetDeliverabilityDashboardOptionsRequest");
  }
}

/**
 *
 *         <p>An object that shows the status of the Deliverability dashboard.</p>
 *
 */
export interface GetDeliverabilityDashboardOptionsResponse
  extends $MetadataBearer {
  __type?: "GetDeliverabilityDashboardOptionsResponse";
  /**
   *
   *         <p>The current status of your Deliverability dashboard subscription. If this value is
   *                 <code>PENDING_EXPIRATION</code>, your subscription is scheduled to expire at the end
   *             of the current calendar month.</p>
   *
   */
  AccountStatus?: DeliverabilityDashboardAccountStatus | string;

  /**
   *
   *         <p>An array of objects, one for each verified domain that you use to send email and
   *             currently has an active Deliverability dashboard subscription that isn’t scheduled to expire at
   *             the end of the current calendar month.</p>
   *
   */
  ActiveSubscribedDomains?: Array<DomainDeliverabilityTrackingOption>;

  /**
   *
   *         <p>Specifies whether the Deliverability dashboard is enabled. If this value is <code>true</code>,
   *             the dashboard is enabled.</p>
   *
   */
  DashboardEnabled: boolean | undefined;

  /**
   *
   *         <p>An array of objects, one for each verified domain that you use to send email and
   *             currently has an active Deliverability dashboard subscription that's scheduled to expire at the
   *             end of the current calendar month.</p>
   *
   */
  PendingExpirationSubscribedDomains?: Array<
    DomainDeliverabilityTrackingOption
  >;

  /**
   *
   *         <p>The date, in Unix time format, when your current subscription to the Deliverability dashboard
   *             is scheduled to expire, if your subscription is scheduled to expire at the end of the
   *             current calendar month. This value is null if you have an active subscription that isn’t
   *             due to expire at the end of the month.</p>
   *
   */
  SubscriptionExpiryDate?: Date;
}

export namespace GetDeliverabilityDashboardOptionsResponse {
  export function isa(o: any): o is GetDeliverabilityDashboardOptionsResponse {
    return _smithy.isa(o, "GetDeliverabilityDashboardOptionsResponse");
  }
}

/**
 *
 *         <p>A request to retrieve the results of a predictive inbox placement test.</p>
 *
 */
export interface GetDeliverabilityTestReportRequest {
  __type?: "GetDeliverabilityTestReportRequest";
  /**
   *
   *         <p>A unique string that identifies the predictive inbox placement test.</p>
   *
   */
  ReportId: string | undefined;
}

export namespace GetDeliverabilityTestReportRequest {
  export function isa(o: any): o is GetDeliverabilityTestReportRequest {
    return _smithy.isa(o, "GetDeliverabilityTestReportRequest");
  }
}

/**
 *
 *         <p>The results of the predictive inbox placement test.</p>
 *
 */
export interface GetDeliverabilityTestReportResponse extends $MetadataBearer {
  __type?: "GetDeliverabilityTestReportResponse";
  /**
   *
   *         <p>An object that contains the results of the predictive inbox placement test.</p>
   *
   */
  DeliverabilityTestReport: DeliverabilityTestReport | undefined;

  /**
   *
   *         <p>An object that describes how the test email was handled by several email providers,
   *             including Gmail, Hotmail, Yahoo, AOL, and others.</p>
   *
   */
  IspPlacements: Array<IspPlacement> | undefined;

  /**
   *
   *         <p>An object that contains the message that you sent when you performed this
   *             predictive inbox placement test.</p>
   *
   */
  Message?: string;

  /**
   *
   *         <p>An object that specifies how many test messages that were sent during the predictive inbox placement test were
   *             delivered to recipients' inboxes, how many were sent to recipients' spam folders, and
   *             how many weren't delivered.</p>
   *
   */
  OverallPlacement: PlacementStatistics | undefined;

  /**
   *
   *         <p>An array of objects that define the tags (keys and values) that are associated with
   *             the predictive inbox placement test.</p>
   *
   */
  Tags?: Array<Tag>;
}

export namespace GetDeliverabilityTestReportResponse {
  export function isa(o: any): o is GetDeliverabilityTestReportResponse {
    return _smithy.isa(o, "GetDeliverabilityTestReportResponse");
  }
}

/**
 *
 *         <p>Retrieve all the deliverability data for a specific campaign. This data is available
 *             for a campaign only if the campaign sent email by using a domain that the
 *             Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code>
 *             operation).</p>
 *
 */
export interface GetDomainDeliverabilityCampaignRequest {
  __type?: "GetDomainDeliverabilityCampaignRequest";
  /**
   *
   *         <p>The unique identifier for the campaign. The Deliverability dashboard automatically generates
   *             and assigns this identifier to a campaign.</p>
   *
   */
  CampaignId: string | undefined;
}

export namespace GetDomainDeliverabilityCampaignRequest {
  export function isa(o: any): o is GetDomainDeliverabilityCampaignRequest {
    return _smithy.isa(o, "GetDomainDeliverabilityCampaignRequest");
  }
}

/**
 *
 *         <p>An object that contains all the deliverability data for a specific campaign. This data
 *             is available for a campaign only if the campaign sent email by using a domain that the
 *             Deliverability dashboard is enabled for.</p>
 *
 */
export interface GetDomainDeliverabilityCampaignResponse
  extends $MetadataBearer {
  __type?: "GetDomainDeliverabilityCampaignResponse";
  /**
   *
   *         <p>An object that contains the deliverability data for the campaign.</p>
   *
   */
  DomainDeliverabilityCampaign: DomainDeliverabilityCampaign | undefined;
}

export namespace GetDomainDeliverabilityCampaignResponse {
  export function isa(o: any): o is GetDomainDeliverabilityCampaignResponse {
    return _smithy.isa(o, "GetDomainDeliverabilityCampaignResponse");
  }
}

/**
 *
 *         <p>A request to obtain deliverability metrics for a domain.</p>
 *
 */
export interface GetDomainStatisticsReportRequest {
  __type?: "GetDomainStatisticsReportRequest";
  /**
   *
   *         <p>The domain that you want to obtain deliverability metrics for.</p>
   *
   */
  Domain: string | undefined;

  /**
   *
   *         <p>The last day (in Unix time) that you want to obtain domain deliverability metrics for.
   *             The <code>EndDate</code> that you specify has to be less than or equal to 30 days after
   *             the <code>StartDate</code>.</p>
   *
   */
  EndDate: Date | undefined;

  /**
   *
   *         <p>The first day (in Unix time) that you want to obtain domain deliverability metrics
   *             for.</p>
   *
   */
  StartDate: Date | undefined;
}

export namespace GetDomainStatisticsReportRequest {
  export function isa(o: any): o is GetDomainStatisticsReportRequest {
    return _smithy.isa(o, "GetDomainStatisticsReportRequest");
  }
}

/**
 *
 *         <p>An object that includes statistics that are related to the domain that you
 *             specified.</p>
 *
 */
export interface GetDomainStatisticsReportResponse extends $MetadataBearer {
  __type?: "GetDomainStatisticsReportResponse";
  /**
   *
   *         <p>An object that contains deliverability metrics for the domain that you specified. This
   *             object contains data for each day, starting on the <code>StartDate</code> and ending on
   *             the <code>EndDate</code>.</p>
   *
   */
  DailyVolumes: Array<DailyVolume> | undefined;

  /**
   *
   *         <p>An object that contains deliverability metrics for the domain that you specified. The
   *             data in this object is a summary of all of the data that was collected from the
   *                 <code>StartDate</code> to the <code>EndDate</code>.</p>
   *
   */
  OverallVolume: OverallVolume | undefined;
}

export namespace GetDomainStatisticsReportResponse {
  export function isa(o: any): o is GetDomainStatisticsReportResponse {
    return _smithy.isa(o, "GetDomainStatisticsReportResponse");
  }
}

/**
 *
 *         <p>A request to return details about an email identity.</p>
 *
 */
export interface GetEmailIdentityRequest {
  __type?: "GetEmailIdentityRequest";
  /**
   *
   *         <p>The email identity that you want to retrieve details for.</p>
   *
   */
  EmailIdentity: string | undefined;
}

export namespace GetEmailIdentityRequest {
  export function isa(o: any): o is GetEmailIdentityRequest {
    return _smithy.isa(o, "GetEmailIdentityRequest");
  }
}

/**
 *
 *         <p>Details about an email identity.</p>
 *
 */
export interface GetEmailIdentityResponse extends $MetadataBearer {
  __type?: "GetEmailIdentityResponse";
  /**
   *
   *         <p>An object that contains information about the DKIM attributes for the identity. This
   *             object includes the tokens that you use to create the CNAME records that are required to
   *             complete the DKIM verification process.</p>
   *
   */
  DkimAttributes?: DkimAttributes;

  /**
   *
   *         <p>The feedback forwarding configuration for the identity.</p>
   *         <p>If the value is <code>true</code>, you receive email notifications when bounce or
   *             complaint events occur. These notifications are sent to the address that you specified
   *             in the <code>Return-Path</code> header of the original email.</p>
   *         <p>You're required to have a method of tracking bounces and complaints. If you haven't
   *             set up another mechanism for receiving bounce or complaint notifications (for example,
   *             by setting up an event destination), you receive an email notification when these events
   *             occur (even if this setting is disabled).</p>
   *
   */
  FeedbackForwardingStatus?: boolean;

  /**
   *
   *         <p>The email identity type.</p>
   *
   */
  IdentityType?: IdentityType | string;

  /**
   *
   *         <p>An object that contains information about the Mail-From attributes for the email
   *             identity.</p>
   *
   */
  MailFromAttributes?: MailFromAttributes;

  /**
   *
   *         <p>An array of objects that define the tags (keys and values) that are associated with
   *             the email identity.</p>
   *
   */
  Tags?: Array<Tag>;

  /**
   *
   *         <p>Specifies whether or not the identity is verified. You can only send email from
   *             verified email addresses or domains. For more information about verifying identities,
   *             see the <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-email-manage-verify.html">Amazon Pinpoint User Guide</a>.</p>
   *
   */
  VerifiedForSendingStatus?: boolean;
}

export namespace GetEmailIdentityResponse {
  export function isa(o: any): o is GetEmailIdentityResponse {
    return _smithy.isa(o, "GetEmailIdentityResponse");
  }
}

/**
 *
 *         <p>A request to get a suppressed email destination.</p>
 *
 */
export interface GetSuppressedDestinationRequest {
  __type?: "GetSuppressedDestinationRequest";
  /**
   *
   *         <p>Email destination to fetch from the suppression list.</p>
   *
   */
  EmailAddress: string | undefined;
}

export namespace GetSuppressedDestinationRequest {
  export function isa(o: any): o is GetSuppressedDestinationRequest {
    return _smithy.isa(o, "GetSuppressedDestinationRequest");
  }
}

/**
 *
 *         <p>Information about the suppressed email destination.</p>
 *
 */
export interface GetSuppressedDestinationResponse extends $MetadataBearer {
  __type?: "GetSuppressedDestinationResponse";
  /**
   *
   *         <p>An object containing information about the suppressed email destination.</p>
   *
   */
  SuppressedDestination: SuppressedDestination | undefined;
}

export namespace GetSuppressedDestinationResponse {
  export function isa(o: any): o is GetSuppressedDestinationResponse {
    return _smithy.isa(o, "GetSuppressedDestinationResponse");
  }
}

/**
 *
 *         <p>Information about an email identity.</p>
 *
 */
export interface IdentityInfo {
  __type?: "IdentityInfo";
  /**
   *
   *         <p>The address or domain of the identity.</p>
   *
   */
  IdentityName?: string;

  /**
   *
   *         <p>The email identity type. The identity type can be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>EMAIL_ADDRESS</code> – The identity is an email address.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DOMAIN</code> – The identity is a domain.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>MANAGED_DOMAIN</code> – The identity is a domain that is managed
   *                     by AWS.</p>
   *             </li>
   *          </ul>
   *
   */
  IdentityType?: IdentityType | string;

  /**
   *
   *         <p>Indicates whether or not you can send email from the identity.</p>
   *         <p>An <i>identity</i> is an email address or domain that you send email
   *             from. Before you can send email from an identity, you have to demostrate that you own
   *             the identity, and that you authorize Amazon SES to send email from that identity.</p>
   *
   */
  SendingEnabled?: boolean;
}

export namespace IdentityInfo {
  export function isa(o: any): o is IdentityInfo {
    return _smithy.isa(o, "IdentityInfo");
  }
}

export enum IdentityType {
  DOMAIN = "DOMAIN",
  EMAIL_ADDRESS = "EMAIL_ADDRESS",
  MANAGED_DOMAIN = "MANAGED_DOMAIN"
}

/**
 *
 *         <p>An object that contains information about the inbox placement data settings for a
 *             verified domain that’s associated with your AWS account. This data is available only
 *             if you enabled the Deliverability dashboard for the domain.</p>
 *
 */
export interface InboxPlacementTrackingOption {
  __type?: "InboxPlacementTrackingOption";
  /**
   *
   *         <p>Specifies whether inbox placement data is being tracked for the domain.</p>
   *
   */
  Global?: boolean;

  /**
   *
   *         <p>An array of strings, one for each major email provider that the inbox placement data
   *             applies to.</p>
   *
   */
  TrackedIsps?: Array<string>;
}

export namespace InboxPlacementTrackingOption {
  export function isa(o: any): o is InboxPlacementTrackingOption {
    return _smithy.isa(o, "InboxPlacementTrackingOption");
  }
}

/**
 *
 *         <p>The specified request includes an invalid or expired token. Please attempt to get a new token.</p>
 *
 */
export interface InvalidNextTokenException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidNextTokenException";
  name: "InvalidNextTokenException";
  $fault: "client";
  message?: string;
}

export namespace InvalidNextTokenException {
  export function isa(o: any): o is InvalidNextTokenException {
    return _smithy.isa(o, "InvalidNextTokenException");
  }
}

/**
 *
 *         <p>An object that describes how email sent during the predictive inbox placement test was handled by a certain
 *             email provider.</p>
 *
 */
export interface IspPlacement {
  __type?: "IspPlacement";
  /**
   *
   *         <p>The name of the email provider that the inbox placement data applies to.</p>
   *
   */
  IspName?: string;

  /**
   *
   *         <p>An object that contains inbox placement metrics for a specific email provider.</p>
   *
   */
  PlacementStatistics?: PlacementStatistics;
}

export namespace IspPlacement {
  export function isa(o: any): o is IspPlacement {
    return _smithy.isa(o, "IspPlacement");
  }
}

/**
 *
 *         <p>An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to
 *             stream data to other services, such as Amazon S3 and Amazon Redshift.</p>
 *
 */
export interface KinesisFirehoseDestination {
  __type?: "KinesisFirehoseDestination";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the Amazon Kinesis Data Firehose stream that the Amazon SES API v2 sends email
   *             events to.</p>
   *
   */
  DeliveryStreamArn: string | undefined;

  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the IAM role that the Amazon SES API v2 uses to send email
   *             events to the Amazon Kinesis Data Firehose stream.</p>
   *
   */
  IamRoleArn: string | undefined;
}

export namespace KinesisFirehoseDestination {
  export function isa(o: any): o is KinesisFirehoseDestination {
    return _smithy.isa(o, "KinesisFirehoseDestination");
  }
}

/**
 *
 *         <p>There are too many instances of the specified resource type.</p>
 *
 */
export interface LimitExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "LimitExceededException";
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return _smithy.isa(o, "LimitExceededException");
  }
}

/**
 *
 *         <p>A request to obtain a list of configuration sets for your Amazon SES account in the current
 *             AWS Region.</p>
 *
 */
export interface ListConfigurationSetsRequest {
  __type?: "ListConfigurationSetsRequest";
  /**
   *
   *         <p>A token returned from a previous call to <code>ListConfigurationSets</code> to
   *             indicate the position in the list of configuration sets.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *         <p>The number of results to show in a single call to <code>ListConfigurationSets</code>.
   *             If the number of results is larger than the number you specified in this parameter, then
   *             the response includes a <code>NextToken</code> element, which you can use to obtain
   *             additional results.</p>
   *
   */
  PageSize?: number;
}

export namespace ListConfigurationSetsRequest {
  export function isa(o: any): o is ListConfigurationSetsRequest {
    return _smithy.isa(o, "ListConfigurationSetsRequest");
  }
}

/**
 *
 *         <p>A list of configuration sets in your Amazon SES account in the current AWS Region.</p>
 *
 */
export interface ListConfigurationSetsResponse extends $MetadataBearer {
  __type?: "ListConfigurationSetsResponse";
  /**
   *
   *         <p>An array that contains all of the configuration sets in your Amazon SES account in the
   *             current AWS Region.</p>
   *
   */
  ConfigurationSets?: Array<string>;

  /**
   *
   *         <p>A token that indicates that there are additional configuration sets to list. To view
   *             additional configuration sets, issue another request to
   *                 <code>ListConfigurationSets</code>, and pass this token in the
   *                 <code>NextToken</code> parameter.</p>
   *
   */
  NextToken?: string;
}

export namespace ListConfigurationSetsResponse {
  export function isa(o: any): o is ListConfigurationSetsResponse {
    return _smithy.isa(o, "ListConfigurationSetsResponse");
  }
}

/**
 *
 *         <p>A request to obtain a list of dedicated IP pools.</p>
 *
 */
export interface ListDedicatedIpPoolsRequest {
  __type?: "ListDedicatedIpPoolsRequest";
  /**
   *
   *         <p>A token returned from a previous call to <code>ListDedicatedIpPools</code> to indicate
   *             the position in the list of dedicated IP pools.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *         <p>The number of results to show in a single call to <code>ListDedicatedIpPools</code>.
   *             If the number of results is larger than the number you specified in this parameter, then
   *             the response includes a <code>NextToken</code> element, which you can use to obtain
   *             additional results.</p>
   *
   */
  PageSize?: number;
}

export namespace ListDedicatedIpPoolsRequest {
  export function isa(o: any): o is ListDedicatedIpPoolsRequest {
    return _smithy.isa(o, "ListDedicatedIpPoolsRequest");
  }
}

/**
 *
 *         <p>A list of dedicated IP pools.</p>
 *
 */
export interface ListDedicatedIpPoolsResponse extends $MetadataBearer {
  __type?: "ListDedicatedIpPoolsResponse";
  /**
   *
   *         <p>A list of all of the dedicated IP pools that are associated with your AWS account in
   *             the current Region.</p>
   *
   */
  DedicatedIpPools?: Array<string>;

  /**
   *
   *         <p>A token that indicates that there are additional IP pools to list. To view additional
   *             IP pools, issue another request to <code>ListDedicatedIpPools</code>, passing this token
   *             in the <code>NextToken</code> parameter.</p>
   *
   */
  NextToken?: string;
}

export namespace ListDedicatedIpPoolsResponse {
  export function isa(o: any): o is ListDedicatedIpPoolsResponse {
    return _smithy.isa(o, "ListDedicatedIpPoolsResponse");
  }
}

/**
 *
 *         <p>A request to list all of the predictive inbox placement tests that you've performed.</p>
 *
 */
export interface ListDeliverabilityTestReportsRequest {
  __type?: "ListDeliverabilityTestReportsRequest";
  /**
   *
   *         <p>A token returned from a previous call to <code>ListDeliverabilityTestReports</code> to
   *             indicate the position in the list of predictive inbox placement tests.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *         <p>The number of results to show in a single call to
   *                 <code>ListDeliverabilityTestReports</code>. If the number of results is larger than
   *             the number you specified in this parameter, then the response includes a
   *                 <code>NextToken</code> element, which you can use to obtain additional
   *             results.</p>
   *         <p>The value you specify has to be at least 0, and can be no more than 1000.</p>
   *
   */
  PageSize?: number;
}

export namespace ListDeliverabilityTestReportsRequest {
  export function isa(o: any): o is ListDeliverabilityTestReportsRequest {
    return _smithy.isa(o, "ListDeliverabilityTestReportsRequest");
  }
}

/**
 *
 *         <p>A list of the predictive inbox placement test reports that are available for your account, regardless of
 *             whether or not those tests are complete.</p>
 *
 */
export interface ListDeliverabilityTestReportsResponse extends $MetadataBearer {
  __type?: "ListDeliverabilityTestReportsResponse";
  /**
   *
   *         <p>An object that contains a lists of predictive inbox placement tests that you've performed.</p>
   *
   */
  DeliverabilityTestReports: Array<DeliverabilityTestReport> | undefined;

  /**
   *
   *         <p>A token that indicates that there are additional predictive inbox placement tests to list. To view additional
   *             predictive inbox placement tests, issue another request to <code>ListDeliverabilityTestReports</code>, and pass
   *             this token in the <code>NextToken</code> parameter.</p>
   *
   */
  NextToken?: string;
}

export namespace ListDeliverabilityTestReportsResponse {
  export function isa(o: any): o is ListDeliverabilityTestReportsResponse {
    return _smithy.isa(o, "ListDeliverabilityTestReportsResponse");
  }
}

/**
 *
 *         <p>Retrieve deliverability data for all the campaigns that used a specific domain to send
 *             email during a specified time range. This data is available for a domain only if you
 *             enabled the Deliverability dashboard.</p>
 *
 */
export interface ListDomainDeliverabilityCampaignsRequest {
  __type?: "ListDomainDeliverabilityCampaignsRequest";
  /**
   *
   *         <p>The last day, in Unix time format, that you want to obtain deliverability data for.
   *             This value has to be less than or equal to 30 days after the value of the
   *                 <code>StartDate</code> parameter.</p>
   *
   */
  EndDate: Date | undefined;

  /**
   *
   *         <p>A token that’s returned from a previous call to the
   *                 <code>ListDomainDeliverabilityCampaigns</code> operation. This token indicates the
   *             position of a campaign in the list of campaigns.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *         <p>The maximum number of results to include in response to a single call to the
   *                 <code>ListDomainDeliverabilityCampaigns</code> operation. If the number of results
   *             is larger than the number that you specify in this parameter, the response includes a
   *                 <code>NextToken</code> element, which you can use to obtain additional
   *             results.</p>
   *
   */
  PageSize?: number;

  /**
   *
   *         <p>The first day, in Unix time format, that you want to obtain deliverability data
   *             for.</p>
   *
   */
  StartDate: Date | undefined;

  /**
   *
   *         <p>The domain to obtain deliverability data for.</p>
   *
   */
  SubscribedDomain: string | undefined;
}

export namespace ListDomainDeliverabilityCampaignsRequest {
  export function isa(o: any): o is ListDomainDeliverabilityCampaignsRequest {
    return _smithy.isa(o, "ListDomainDeliverabilityCampaignsRequest");
  }
}

/**
 *
 *         <p>An array of objects that provide deliverability data for all the campaigns that used a
 *             specific domain to send email during a specified time range. This data is available for
 *             a domain only if you enabled the Deliverability dashboard for the domain.</p>
 *
 */
export interface ListDomainDeliverabilityCampaignsResponse
  extends $MetadataBearer {
  __type?: "ListDomainDeliverabilityCampaignsResponse";
  /**
   *
   *         <p>An array of responses, one for each campaign that used the domain to send email during
   *             the specified time range.</p>
   *
   */
  DomainDeliverabilityCampaigns:
    | Array<DomainDeliverabilityCampaign>
    | undefined;

  /**
   *
   *         <p>A token that’s returned from a previous call to the
   *                 <code>ListDomainDeliverabilityCampaigns</code> operation. This token indicates the
   *             position of the campaign in the list of campaigns.</p>
   *
   */
  NextToken?: string;
}

export namespace ListDomainDeliverabilityCampaignsResponse {
  export function isa(o: any): o is ListDomainDeliverabilityCampaignsResponse {
    return _smithy.isa(o, "ListDomainDeliverabilityCampaignsResponse");
  }
}

/**
 *
 *         <p>A request to list all of the email identities associated with your AWS account. This
 *             list includes identities that you've already verified, identities that are unverified,
 *             and identities that were verified in the past, but are no longer verified.</p>
 *
 */
export interface ListEmailIdentitiesRequest {
  __type?: "ListEmailIdentitiesRequest";
  /**
   *
   *         <p>A token returned from a previous call to <code>ListEmailIdentities</code> to indicate
   *             the position in the list of identities.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *         <p>The number of results to show in a single call to <code>ListEmailIdentities</code>. If
   *             the number of results is larger than the number you specified in this parameter, then
   *             the response includes a <code>NextToken</code> element, which you can use to obtain
   *             additional results.</p>
   *         <p>The value you specify has to be at least 0, and can be no more than 1000.</p>
   *
   */
  PageSize?: number;
}

export namespace ListEmailIdentitiesRequest {
  export function isa(o: any): o is ListEmailIdentitiesRequest {
    return _smithy.isa(o, "ListEmailIdentitiesRequest");
  }
}

/**
 *
 *         <p>A list of all of the identities that you've attempted to verify, regardless of whether
 *             or not those identities were successfully verified.</p>
 *
 */
export interface ListEmailIdentitiesResponse extends $MetadataBearer {
  __type?: "ListEmailIdentitiesResponse";
  /**
   *
   *         <p>An array that includes all of the email identities associated with your AWS
   *             account.</p>
   *
   */
  EmailIdentities?: Array<IdentityInfo>;

  /**
   *
   *         <p>A token that indicates that there are additional configuration sets to list. To view
   *             additional configuration sets, issue another request to
   *             <code>ListEmailIdentities</code>, and pass this token in the <code>NextToken</code>
   *             parameter.</p>
   *
   */
  NextToken?: string;
}

export namespace ListEmailIdentitiesResponse {
  export function isa(o: any): o is ListEmailIdentitiesResponse {
    return _smithy.isa(o, "ListEmailIdentitiesResponse");
  }
}

/**
 *
 *         <p>A request to obtain a list of suppressed email destinations.</p>
 *
 */
export interface ListSuppressedDestinationsRequest {
  __type?: "ListSuppressedDestinationsRequest";
  /**
   *
   *         <p>Filters email destinations suppressed after the given time.</p>
   *
   */
  EndDate?: Date;

  /**
   *
   *         <p>A token returned from a previous call to <code>ListSuppressedDestinations</code> to
   *             indicate the position in the list of suppressed email destinations.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *         <p>The number of results to show in a single call to <code>ListSuppressedDestinations</code>.
   *             If the number of results is larger than the number you specified in this parameter, then
   *             the response includes a <code>NextToken</code> element, which you can use to obtain
   *             additional results.</p>
   *
   */
  PageSize?: number;

  /**
   *
   *         <p>Filters email destinations suppressed by the given reasons.</p>
   *
   */
  Reasons?: Array<SuppressionListReason | string>;

  /**
   *
   *         <p>Filters email destinations suppressed before the given time.</p>
   *
   */
  StartDate?: Date;
}

export namespace ListSuppressedDestinationsRequest {
  export function isa(o: any): o is ListSuppressedDestinationsRequest {
    return _smithy.isa(o, "ListSuppressedDestinationsRequest");
  }
}

/**
 *
 *         <p>A list of suppressed email destinations.</p>
 *
 */
export interface ListSuppressedDestinationsResponse extends $MetadataBearer {
  __type?: "ListSuppressedDestinationsResponse";
  /**
   *
   *         <p>A token that indicates that there are additional suppressed destinations to list. To view
   *             additional suppressed destinations, issue another request to <code>ListSuppressedDestinations</code>,
   *             and pass this token in the <code>NextToken</code> parameter.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *         <p>A list of summaries, each containing a summary for a suppressed email destination.</p>
   *
   */
  SuppressedDestinationSummaries?: Array<SuppressedDestinationSummary>;
}

export namespace ListSuppressedDestinationsResponse {
  export function isa(o: any): o is ListSuppressedDestinationsResponse {
    return _smithy.isa(o, "ListSuppressedDestinationsResponse");
  }
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the resource that you want to retrieve tag
   *             information for.</p>
   *
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export function isa(o: any): o is ListTagsForResourceRequest {
    return _smithy.isa(o, "ListTagsForResourceRequest");
  }
}

export interface ListTagsForResourceResponse extends $MetadataBearer {
  __type?: "ListTagsForResourceResponse";
  /**
   *
   *         <p>An array that lists all the tags that are associated with the resource. Each tag
   *             consists of a required tag key (<code>Key</code>) and an associated tag value
   *                 (<code>Value</code>)</p>
   *
   */
  Tags: Array<Tag> | undefined;
}

export namespace ListTagsForResourceResponse {
  export function isa(o: any): o is ListTagsForResourceResponse {
    return _smithy.isa(o, "ListTagsForResourceResponse");
  }
}

/**
 *
 *         <p>A list of attributes that are associated with a MAIL FROM domain.</p>
 *
 */
export interface MailFromAttributes {
  __type?: "MailFromAttributes";
  /**
   *
   *         <p>The action that you want to take if the required MX record can't be found when you
   *             send an email. When you set this value to <code>UseDefaultValue</code>, the mail is sent
   *             using <i>amazonses.com</i> as the MAIL FROM domain. When you set this
   *             value to <code>RejectMessage</code>, the Amazon SES API v2 returns a
   *                 <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the
   *             email.</p>
   *         <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the
   *                 <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code>
   *             states.</p>
   *
   */
  BehaviorOnMxFailure: BehaviorOnMxFailure | string | undefined;

  /**
   *
   *         <p>The name of a domain that an email identity uses as a custom MAIL FROM domain.</p>
   *
   */
  MailFromDomain: string | undefined;

  /**
   *
   *         <p>The status of the MAIL FROM domain. This status can have the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>PENDING</code> – Amazon SES hasn't started searching for the MX record
   *                     yet.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SUCCESS</code> – Amazon SES detected the required MX record for the
   *                     MAIL FROM domain.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>FAILED</code> – Amazon SES can't find the required MX record, or the
   *                     record no longer exists.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>TEMPORARY_FAILURE</code> – A temporary issue occurred, which
   *                     prevented Amazon SES from determining the status of the MAIL FROM domain.</p>
   *             </li>
   *          </ul>
   *
   */
  MailFromDomainStatus: MailFromDomainStatus | string | undefined;
}

export namespace MailFromAttributes {
  export function isa(o: any): o is MailFromAttributes {
    return _smithy.isa(o, "MailFromAttributes");
  }
}

/**
 *
 *         <p>The message can't be sent because the sending domain isn't verified.</p>
 *
 */
export interface MailFromDomainNotVerifiedException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "MailFromDomainNotVerifiedException";
  name: "MailFromDomainNotVerifiedException";
  $fault: "client";
  message?: string;
}

export namespace MailFromDomainNotVerifiedException {
  export function isa(o: any): o is MailFromDomainNotVerifiedException {
    return _smithy.isa(o, "MailFromDomainNotVerifiedException");
  }
}

export enum MailFromDomainStatus {
  FAILED = "FAILED",
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  TEMPORARY_FAILURE = "TEMPORARY_FAILURE"
}

/**
 *
 *         <p>Represents the email message that you're sending. The <code>Message</code> object
 *             consists of a subject line and a message body.</p>
 *
 */
export interface Message {
  __type?: "Message";
  /**
   *
   *         <p>The body of the message. You can specify an HTML version of the message, a text-only
   *             version of the message, or both.</p>
   *
   */
  Body: Body | undefined;

  /**
   *
   *         <p>The subject line of the email. The subject line can only contain 7-bit ASCII
   *             characters. However, you can specify non-ASCII characters in the subject line by using
   *             encoded-word syntax, as described in <a href="https://tools.ietf.org/html/rfc2047">RFC 2047</a>.</p>
   *
   */
  Subject: Content | undefined;
}

export namespace Message {
  export function isa(o: any): o is Message {
    return _smithy.isa(o, "Message");
  }
}

/**
 *
 *         <p>The message can't be sent because it contains invalid content.</p>
 *
 */
export interface MessageRejected
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "MessageRejected";
  name: "MessageRejected";
  $fault: "client";
  message?: string;
}

export namespace MessageRejected {
  export function isa(o: any): o is MessageRejected {
    return _smithy.isa(o, "MessageRejected");
  }
}

/**
 *
 *         <p>Contains the name and value of a tag that you apply to an email. You can use message
 *             tags when you publish email sending events.
 *             </p>
 *
 */
export interface MessageTag {
  __type?: "MessageTag";
  /**
   *
   *         <p>The name of the message tag. The message tag name has to meet the following
   *             criteria:</p>
   *         <ul>
   *             <li>
   *                 <p>It can only contain ASCII letters (a–z, A–Z), numbers (0–9),
   *                     underscores (_), or dashes (-).</p>
   *             </li>
   *             <li>
   *                 <p>It can contain no more than 256 characters.</p>
   *             </li>
   *          </ul>
   *
   */
  Name: string | undefined;

  /**
   *
   *         <p>The value of the message tag. The message tag value has to meet the following
   *             criteria:</p>
   *         <ul>
   *             <li>
   *                 <p>It can only contain ASCII letters (a–z, A–Z), numbers (0–9),
   *                     underscores (_), or dashes (-).</p>
   *             </li>
   *             <li>
   *                 <p>It can contain no more than 256 characters.</p>
   *             </li>
   *          </ul>
   *
   */
  Value: string | undefined;
}

export namespace MessageTag {
  export function isa(o: any): o is MessageTag {
    return _smithy.isa(o, "MessageTag");
  }
}

/**
 *
 *         <p>The resource you attempted to access doesn't exist.</p>
 *
 */
export interface NotFoundException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "NotFoundException";
  name: "NotFoundException";
  $fault: "client";
  message?: string;
}

export namespace NotFoundException {
  export function isa(o: any): o is NotFoundException {
    return _smithy.isa(o, "NotFoundException");
  }
}

/**
 *
 *         <p>An object that contains information about email that was sent from the selected
 *             domain.</p>
 *
 */
export interface OverallVolume {
  __type?: "OverallVolume";
  /**
   *
   *         <p>An object that contains inbox and junk mail placement metrics for individual email
   *             providers.</p>
   *
   */
  DomainIspPlacements?: Array<DomainIspPlacement>;

  /**
   *
   *         <p>The percentage of emails that were sent from the domain that were read by their
   *             recipients.</p>
   *
   */
  ReadRatePercent?: number;

  /**
   *
   *         <p>An object that contains information about the numbers of messages that arrived in
   *             recipients' inboxes and junk mail folders.</p>
   *
   */
  VolumeStatistics?: VolumeStatistics;
}

export namespace OverallVolume {
  export function isa(o: any): o is OverallVolume {
    return _smithy.isa(o, "OverallVolume");
  }
}

/**
 *
 *         <p>An object that defines an Amazon Pinpoint project destination for email events. You can send
 *             email event data to a Amazon Pinpoint project to view metrics using the Transactional Messaging
 *             dashboards that are built in to Amazon Pinpoint. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/analytics-transactional-messages.html">Transactional
 *                 Messaging Charts</a> in the <i>Amazon Pinpoint User Guide</i>.</p>
 *
 */
export interface PinpointDestination {
  __type?: "PinpointDestination";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the Amazon Pinpoint project that you want to send email
   *             events to.</p>
   *
   */
  ApplicationArn?: string;
}

export namespace PinpointDestination {
  export function isa(o: any): o is PinpointDestination {
    return _smithy.isa(o, "PinpointDestination");
  }
}

/**
 *
 *         <p>An object that contains inbox placement data for an email provider.</p>
 *
 */
export interface PlacementStatistics {
  __type?: "PlacementStatistics";
  /**
   *
   *         <p>The percentage of emails that were authenticated by using DomainKeys Identified Mail
   *             (DKIM) during the predictive inbox placement test.</p>
   *
   */
  DkimPercentage?: number;

  /**
   *
   *         <p>The percentage of emails that arrived in recipients' inboxes during the predictive inbox placement test.</p>
   *
   */
  InboxPercentage?: number;

  /**
   *
   *         <p>The percentage of emails that didn't arrive in recipients' inboxes at all during the
   *             predictive inbox placement test.</p>
   *
   */
  MissingPercentage?: number;

  /**
   *
   *         <p>The percentage of emails that arrived in recipients' spam or junk mail folders during
   *             the predictive inbox placement test.</p>
   *
   */
  SpamPercentage?: number;

  /**
   *
   *         <p>The percentage of emails that were authenticated by using Sender Policy Framework
   *             (SPF) during the predictive inbox placement test.</p>
   *
   */
  SpfPercentage?: number;
}

export namespace PlacementStatistics {
  export function isa(o: any): o is PlacementStatistics {
    return _smithy.isa(o, "PlacementStatistics");
  }
}

/**
 *
 *         <p>A request to enable or disable the automatic IP address warm-up feature.</p>
 *
 */
export interface PutAccountDedicatedIpWarmupAttributesRequest {
  __type?: "PutAccountDedicatedIpWarmupAttributesRequest";
  /**
   *
   *         <p>Enables or disables the automatic warm-up feature for dedicated IP addresses that are
   *             associated with your Amazon SES account in the current AWS Region. Set to <code>true</code>
   *             to enable the automatic warm-up feature, or set to <code>false</code> to disable
   *             it.</p>
   *
   */
  AutoWarmupEnabled?: boolean;
}

export namespace PutAccountDedicatedIpWarmupAttributesRequest {
  export function isa(
    o: any
  ): o is PutAccountDedicatedIpWarmupAttributesRequest {
    return _smithy.isa(o, "PutAccountDedicatedIpWarmupAttributesRequest");
  }
}

/**
 *
 *         <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 *
 */
export interface PutAccountDedicatedIpWarmupAttributesResponse
  extends $MetadataBearer {
  __type?: "PutAccountDedicatedIpWarmupAttributesResponse";
}

export namespace PutAccountDedicatedIpWarmupAttributesResponse {
  export function isa(
    o: any
  ): o is PutAccountDedicatedIpWarmupAttributesResponse {
    return _smithy.isa(o, "PutAccountDedicatedIpWarmupAttributesResponse");
  }
}

/**
 *
 *         <p>A request to change the ability of your account to send email.</p>
 *
 */
export interface PutAccountSendingAttributesRequest {
  __type?: "PutAccountSendingAttributesRequest";
  /**
   *
   *         <p>Enables or disables your account's ability to send email. Set to <code>true</code> to
   *             enable email sending, or set to <code>false</code> to disable email sending.</p>
   *         <note>
   *             <p>If AWS paused your account's ability to send email, you can't use this operation
   *                 to resume your account's ability to send email.</p>
   *         </note>
   *
   */
  SendingEnabled?: boolean;
}

export namespace PutAccountSendingAttributesRequest {
  export function isa(o: any): o is PutAccountSendingAttributesRequest {
    return _smithy.isa(o, "PutAccountSendingAttributesRequest");
  }
}

/**
 *
 *         <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 *
 */
export interface PutAccountSendingAttributesResponse extends $MetadataBearer {
  __type?: "PutAccountSendingAttributesResponse";
}

export namespace PutAccountSendingAttributesResponse {
  export function isa(o: any): o is PutAccountSendingAttributesResponse {
    return _smithy.isa(o, "PutAccountSendingAttributesResponse");
  }
}

/**
 *
 *         <p>A request to change your account's suppression preferences.</p>
 *
 */
export interface PutAccountSuppressionAttributesRequest {
  __type?: "PutAccountSuppressionAttributesRequest";
  /**
   *
   *         <p>A list of reasons to suppress email addresses. The only valid reasons are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>COMPLAINT</code> – Amazon SES will suppress an email address that receives a complaint.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>BOUNCE</code> – Amazon SES will suppress an email address that hard bounces.</p>
   *             </li>
   *          </ul>
   *
   */
  SuppressedReasons?: Array<SuppressionListReason | string>;
}

export namespace PutAccountSuppressionAttributesRequest {
  export function isa(o: any): o is PutAccountSuppressionAttributesRequest {
    return _smithy.isa(o, "PutAccountSuppressionAttributesRequest");
  }
}

/**
 *
 *         <p>An HTTP 200 response if the request succeeds, or an error message if the request fails.</p>
 *
 */
export interface PutAccountSuppressionAttributesResponse
  extends $MetadataBearer {
  __type?: "PutAccountSuppressionAttributesResponse";
}

export namespace PutAccountSuppressionAttributesResponse {
  export function isa(o: any): o is PutAccountSuppressionAttributesResponse {
    return _smithy.isa(o, "PutAccountSuppressionAttributesResponse");
  }
}

/**
 *
 *         <p>A request to associate a configuration set with a dedicated IP pool.</p>
 *
 */
export interface PutConfigurationSetDeliveryOptionsRequest {
  __type?: "PutConfigurationSetDeliveryOptionsRequest";
  /**
   *
   *         <p>The name of the configuration set that you want to associate with a dedicated IP
   *             pool.</p>
   *
   */
  ConfigurationSetName: string | undefined;

  /**
   *
   *         <p>The name of the dedicated IP pool that you want to associate with the configuration
   *             set.</p>
   *
   */
  SendingPoolName?: string;

  /**
   *
   *         <p>Specifies whether messages that use the configuration set are required to use
   *             Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only
   *             delivered if a TLS connection can be established. If the value is <code>Optional</code>,
   *             messages can be delivered in plain text if a TLS connection can't be established.</p>
   *
   */
  TlsPolicy?: TlsPolicy | string;
}

export namespace PutConfigurationSetDeliveryOptionsRequest {
  export function isa(o: any): o is PutConfigurationSetDeliveryOptionsRequest {
    return _smithy.isa(o, "PutConfigurationSetDeliveryOptionsRequest");
  }
}

/**
 *
 *         <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 *
 */
export interface PutConfigurationSetDeliveryOptionsResponse
  extends $MetadataBearer {
  __type?: "PutConfigurationSetDeliveryOptionsResponse";
}

export namespace PutConfigurationSetDeliveryOptionsResponse {
  export function isa(o: any): o is PutConfigurationSetDeliveryOptionsResponse {
    return _smithy.isa(o, "PutConfigurationSetDeliveryOptionsResponse");
  }
}

/**
 *
 *         <p>A request to enable or disable tracking of reputation metrics for a configuration
 *             set.</p>
 *
 */
export interface PutConfigurationSetReputationOptionsRequest {
  __type?: "PutConfigurationSetReputationOptionsRequest";
  /**
   *
   *         <p>The name of the configuration set that you want to enable or disable reputation metric
   *             tracking for.</p>
   *
   */
  ConfigurationSetName: string | undefined;

  /**
   *
   *         <p>If <code>true</code>, tracking of reputation metrics is enabled for the configuration
   *             set. If <code>false</code>, tracking of reputation metrics is disabled for the
   *             configuration set.</p>
   *
   */
  ReputationMetricsEnabled?: boolean;
}

export namespace PutConfigurationSetReputationOptionsRequest {
  export function isa(
    o: any
  ): o is PutConfigurationSetReputationOptionsRequest {
    return _smithy.isa(o, "PutConfigurationSetReputationOptionsRequest");
  }
}

/**
 *
 *         <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 *
 */
export interface PutConfigurationSetReputationOptionsResponse
  extends $MetadataBearer {
  __type?: "PutConfigurationSetReputationOptionsResponse";
}

export namespace PutConfigurationSetReputationOptionsResponse {
  export function isa(
    o: any
  ): o is PutConfigurationSetReputationOptionsResponse {
    return _smithy.isa(o, "PutConfigurationSetReputationOptionsResponse");
  }
}

/**
 *
 *         <p>A request to enable or disable the ability of Amazon SES to send emails that use a specific
 *             configuration set.</p>
 *
 */
export interface PutConfigurationSetSendingOptionsRequest {
  __type?: "PutConfigurationSetSendingOptionsRequest";
  /**
   *
   *         <p>The name of the configuration set that you want to enable or disable email sending
   *             for.</p>
   *
   */
  ConfigurationSetName: string | undefined;

  /**
   *
   *         <p>If <code>true</code>, email sending is enabled for the configuration set. If
   *                 <code>false</code>, email sending is disabled for the configuration set.</p>
   *
   */
  SendingEnabled?: boolean;
}

export namespace PutConfigurationSetSendingOptionsRequest {
  export function isa(o: any): o is PutConfigurationSetSendingOptionsRequest {
    return _smithy.isa(o, "PutConfigurationSetSendingOptionsRequest");
  }
}

/**
 *
 *         <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 *
 */
export interface PutConfigurationSetSendingOptionsResponse
  extends $MetadataBearer {
  __type?: "PutConfigurationSetSendingOptionsResponse";
}

export namespace PutConfigurationSetSendingOptionsResponse {
  export function isa(o: any): o is PutConfigurationSetSendingOptionsResponse {
    return _smithy.isa(o, "PutConfigurationSetSendingOptionsResponse");
  }
}

/**
 *
 *         <p>A request to change your account's suppression preferences for an specific configuration set.</p>
 *
 */
export interface PutConfigurationSetSuppressionOptionsRequest {
  __type?: "PutConfigurationSetSuppressionOptionsRequest";
  /**
   *
   *         <p>The name of the configuration set that you want to enable or disable email sending
   *             for.</p>
   *
   */
  ConfigurationSetName: string | undefined;

  /**
   *
   *         <p>A list of reasons to suppress email addresses. The only valid reasons are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>COMPLAINT</code> – Amazon SES will suppress an email address that receives a complaint.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>BOUNCE</code> – Amazon SES will suppress an email address that hard bounces.</p>
   *             </li>
   *          </ul>
   *
   */
  SuppressedReasons?: Array<SuppressionListReason | string>;
}

export namespace PutConfigurationSetSuppressionOptionsRequest {
  export function isa(
    o: any
  ): o is PutConfigurationSetSuppressionOptionsRequest {
    return _smithy.isa(o, "PutConfigurationSetSuppressionOptionsRequest");
  }
}

/**
 *
 *         <p>An HTTP 200 response if the request succeeds, or an error message if the request fails.</p>
 *
 */
export interface PutConfigurationSetSuppressionOptionsResponse
  extends $MetadataBearer {
  __type?: "PutConfigurationSetSuppressionOptionsResponse";
}

export namespace PutConfigurationSetSuppressionOptionsResponse {
  export function isa(
    o: any
  ): o is PutConfigurationSetSuppressionOptionsResponse {
    return _smithy.isa(o, "PutConfigurationSetSuppressionOptionsResponse");
  }
}

/**
 *
 *         <p>A request to add a custom domain for tracking open and click events to a configuration
 *             set.</p>
 *
 */
export interface PutConfigurationSetTrackingOptionsRequest {
  __type?: "PutConfigurationSetTrackingOptionsRequest";
  /**
   *
   *         <p>The name of the configuration set that you want to add a custom tracking domain
   *             to.</p>
   *
   */
  ConfigurationSetName: string | undefined;

  /**
   *
   *         <p>The domain that you want to use to track open and click events.</p>
   *
   */
  CustomRedirectDomain?: string;
}

export namespace PutConfigurationSetTrackingOptionsRequest {
  export function isa(o: any): o is PutConfigurationSetTrackingOptionsRequest {
    return _smithy.isa(o, "PutConfigurationSetTrackingOptionsRequest");
  }
}

/**
 *
 *         <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 *
 */
export interface PutConfigurationSetTrackingOptionsResponse
  extends $MetadataBearer {
  __type?: "PutConfigurationSetTrackingOptionsResponse";
}

export namespace PutConfigurationSetTrackingOptionsResponse {
  export function isa(o: any): o is PutConfigurationSetTrackingOptionsResponse {
    return _smithy.isa(o, "PutConfigurationSetTrackingOptionsResponse");
  }
}

/**
 *
 *         <p>A request to move a dedicated IP address to a dedicated IP pool.</p>
 *
 */
export interface PutDedicatedIpInPoolRequest {
  __type?: "PutDedicatedIpInPoolRequest";
  /**
   *
   *         <p>The name of the IP pool that you want to add the dedicated IP address to. You have to
   *             specify an IP pool that already exists.</p>
   *
   */
  DestinationPoolName: string | undefined;

  /**
   *
   *         <p>The IP address that you want to move to the dedicated IP pool. The value you specify
   *             has to be a dedicated IP address that's associated with your AWS account.</p>
   *
   */
  Ip: string | undefined;
}

export namespace PutDedicatedIpInPoolRequest {
  export function isa(o: any): o is PutDedicatedIpInPoolRequest {
    return _smithy.isa(o, "PutDedicatedIpInPoolRequest");
  }
}

/**
 *
 *         <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 *
 */
export interface PutDedicatedIpInPoolResponse extends $MetadataBearer {
  __type?: "PutDedicatedIpInPoolResponse";
}

export namespace PutDedicatedIpInPoolResponse {
  export function isa(o: any): o is PutDedicatedIpInPoolResponse {
    return _smithy.isa(o, "PutDedicatedIpInPoolResponse");
  }
}

/**
 *
 *         <p>A request to change the warm-up attributes for a dedicated IP address. This operation
 *             is useful when you want to resume the warm-up process for an existing IP address.</p>
 *
 */
export interface PutDedicatedIpWarmupAttributesRequest {
  __type?: "PutDedicatedIpWarmupAttributesRequest";
  /**
   *
   *         <p>The dedicated IP address that you want to update the warm-up attributes for.</p>
   *
   */
  Ip: string | undefined;

  /**
   *
   *         <p>The warm-up percentage that you want to associate with the dedicated IP
   *             address.</p>
   *
   */
  WarmupPercentage: number | undefined;
}

export namespace PutDedicatedIpWarmupAttributesRequest {
  export function isa(o: any): o is PutDedicatedIpWarmupAttributesRequest {
    return _smithy.isa(o, "PutDedicatedIpWarmupAttributesRequest");
  }
}

/**
 *
 *         <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 *
 */
export interface PutDedicatedIpWarmupAttributesResponse
  extends $MetadataBearer {
  __type?: "PutDedicatedIpWarmupAttributesResponse";
}

export namespace PutDedicatedIpWarmupAttributesResponse {
  export function isa(o: any): o is PutDedicatedIpWarmupAttributesResponse {
    return _smithy.isa(o, "PutDedicatedIpWarmupAttributesResponse");
  }
}

/**
 *
 *         <p>Enable or disable the Deliverability dashboard. When you enable the Deliverability dashboard, you gain
 *             access to reputation, deliverability, and other metrics for the domains that you use to
 *             send email using Amazon SES API v2. You also gain the ability to perform predictive inbox placement tests.</p>
 *         <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition
 *             to any other fees that you accrue by using Amazon SES and other AWS services. For more
 *             information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
 *
 */
export interface PutDeliverabilityDashboardOptionRequest {
  __type?: "PutDeliverabilityDashboardOptionRequest";
  /**
   *
   *         <p>Specifies whether to enable the Deliverability dashboard. To enable the dashboard, set this
   *             value to <code>true</code>.</p>
   *
   */
  DashboardEnabled: boolean | undefined;

  /**
   *
   *         <p>An array of objects, one for each verified domain that you use to send email and
   *             enabled the Deliverability dashboard for.</p>
   *
   */
  SubscribedDomains?: Array<DomainDeliverabilityTrackingOption>;
}

export namespace PutDeliverabilityDashboardOptionRequest {
  export function isa(o: any): o is PutDeliverabilityDashboardOptionRequest {
    return _smithy.isa(o, "PutDeliverabilityDashboardOptionRequest");
  }
}

/**
 *
 *         <p>A response that indicates whether the Deliverability dashboard is enabled.</p>
 *
 */
export interface PutDeliverabilityDashboardOptionResponse
  extends $MetadataBearer {
  __type?: "PutDeliverabilityDashboardOptionResponse";
}

export namespace PutDeliverabilityDashboardOptionResponse {
  export function isa(o: any): o is PutDeliverabilityDashboardOptionResponse {
    return _smithy.isa(o, "PutDeliverabilityDashboardOptionResponse");
  }
}

/**
 *
 *         <p>A request to enable or disable DKIM signing of email that you send from an email
 *             identity.</p>
 *
 */
export interface PutEmailIdentityDkimAttributesRequest {
  __type?: "PutEmailIdentityDkimAttributesRequest";
  /**
   *
   *         <p>The email identity that you want to change the DKIM settings for.</p>
   *
   */
  EmailIdentity: string | undefined;

  /**
   *
   *         <p>Sets the DKIM signing configuration for the identity.</p>
   *         <p>When you set this value <code>true</code>, then the messages that are sent from the
   *             identity are signed using DKIM. If you set this value to <code>false</code>, your
   *             messages are sent without DKIM signing.</p>
   *
   */
  SigningEnabled?: boolean;
}

export namespace PutEmailIdentityDkimAttributesRequest {
  export function isa(o: any): o is PutEmailIdentityDkimAttributesRequest {
    return _smithy.isa(o, "PutEmailIdentityDkimAttributesRequest");
  }
}

/**
 *
 *         <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 *
 */
export interface PutEmailIdentityDkimAttributesResponse
  extends $MetadataBearer {
  __type?: "PutEmailIdentityDkimAttributesResponse";
}

export namespace PutEmailIdentityDkimAttributesResponse {
  export function isa(o: any): o is PutEmailIdentityDkimAttributesResponse {
    return _smithy.isa(o, "PutEmailIdentityDkimAttributesResponse");
  }
}

/**
 *
 *         <p>A request to set the attributes that control how bounce and complaint events are
 *             processed.</p>
 *
 */
export interface PutEmailIdentityFeedbackAttributesRequest {
  __type?: "PutEmailIdentityFeedbackAttributesRequest";
  /**
   *
   *         <p>Sets the feedback forwarding configuration for the identity.</p>
   *         <p>If the value is <code>true</code>, you receive email notifications when bounce or
   *             complaint events occur. These notifications are sent to the address that you specified
   *             in the <code>Return-Path</code> header of the original email.</p>
   *         <p>You're required to have a method of tracking bounces and complaints. If you haven't
   *             set up another mechanism for receiving bounce or complaint notifications (for example,
   *             by setting up an event destination), you receive an email notification when these events
   *             occur (even if this setting is disabled).</p>
   *
   */
  EmailForwardingEnabled?: boolean;

  /**
   *
   *         <p>The email identity that you want to configure bounce and complaint feedback forwarding
   *             for.</p>
   *
   */
  EmailIdentity: string | undefined;
}

export namespace PutEmailIdentityFeedbackAttributesRequest {
  export function isa(o: any): o is PutEmailIdentityFeedbackAttributesRequest {
    return _smithy.isa(o, "PutEmailIdentityFeedbackAttributesRequest");
  }
}

/**
 *
 *         <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 *
 */
export interface PutEmailIdentityFeedbackAttributesResponse
  extends $MetadataBearer {
  __type?: "PutEmailIdentityFeedbackAttributesResponse";
}

export namespace PutEmailIdentityFeedbackAttributesResponse {
  export function isa(o: any): o is PutEmailIdentityFeedbackAttributesResponse {
    return _smithy.isa(o, "PutEmailIdentityFeedbackAttributesResponse");
  }
}

/**
 *
 *         <p>A request to configure the custom MAIL FROM domain for a verified identity.</p>
 *
 */
export interface PutEmailIdentityMailFromAttributesRequest {
  __type?: "PutEmailIdentityMailFromAttributesRequest";
  /**
   *
   *         <p>The action that you want to take if the required MX record isn't found when you send
   *             an email. When you set this value to <code>UseDefaultValue</code>, the mail is sent
   *             using <i>amazonses.com</i> as the MAIL FROM domain. When you set this
   *             value to <code>RejectMessage</code>, the Amazon SES API v2 returns a
   *                 <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the
   *             email.</p>
   *         <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the
   *                 <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code>
   *             states.</p>
   *
   */
  BehaviorOnMxFailure?: BehaviorOnMxFailure | string;

  /**
   *
   *         <p>The verified email identity that you want to set up the custom MAIL FROM domain
   *             for.</p>
   *
   */
  EmailIdentity: string | undefined;

  /**
   *
   *         <p> The custom MAIL FROM domain that you want the verified identity to use. The MAIL FROM
   *             domain must meet the following criteria:</p>
   *         <ul>
   *             <li>
   *                 <p>It has to be a subdomain of the verified identity.</p>
   *             </li>
   *             <li>
   *                 <p>It can't be used to receive email.</p>
   *             </li>
   *             <li>
   *                 <p>It can't be used in a "From" address if the MAIL FROM domain is a destination
   *                     for feedback forwarding emails.</p>
   *             </li>
   *          </ul>
   *
   */
  MailFromDomain?: string;
}

export namespace PutEmailIdentityMailFromAttributesRequest {
  export function isa(o: any): o is PutEmailIdentityMailFromAttributesRequest {
    return _smithy.isa(o, "PutEmailIdentityMailFromAttributesRequest");
  }
}

/**
 *
 *         <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 *
 */
export interface PutEmailIdentityMailFromAttributesResponse
  extends $MetadataBearer {
  __type?: "PutEmailIdentityMailFromAttributesResponse";
}

export namespace PutEmailIdentityMailFromAttributesResponse {
  export function isa(o: any): o is PutEmailIdentityMailFromAttributesResponse {
    return _smithy.isa(o, "PutEmailIdentityMailFromAttributesResponse");
  }
}

/**
 *
 *         <p>A request to suppress an email destination.</p>
 *
 */
export interface PutSuppressedDestinationRequest {
  __type?: "PutSuppressedDestinationRequest";
  /**
   *
   *         <p>Email destination to be suppressed.</p>
   *
   */
  EmailAddress: string | undefined;

  /**
   *
   *         <p>Reason for which the email destination is suppressed.</p>
   *
   */
  Reason: SuppressionListReason | string | undefined;
}

export namespace PutSuppressedDestinationRequest {
  export function isa(o: any): o is PutSuppressedDestinationRequest {
    return _smithy.isa(o, "PutSuppressedDestinationRequest");
  }
}

/**
 *
 *         <p>An HTTP 200 response if the request succeeds, or an error message if the request fails.</p>
 *
 */
export interface PutSuppressedDestinationResponse extends $MetadataBearer {
  __type?: "PutSuppressedDestinationResponse";
}

export namespace PutSuppressedDestinationResponse {
  export function isa(o: any): o is PutSuppressedDestinationResponse {
    return _smithy.isa(o, "PutSuppressedDestinationResponse");
  }
}

/**
 *
 *         <p>The raw email message.</p>
 *
 */
export interface RawMessage {
  __type?: "RawMessage";
  /**
   *
   *         <p>The raw email message. The message has to meet the following criteria:</p>
   *         <ul>
   *             <li>
   *                 <p>The message has to contain a header and a body, separated by one blank
   *                     line.</p>
   *             </li>
   *             <li>
   *                 <p>All of the required header fields must be present in the message.</p>
   *             </li>
   *             <li>
   *                 <p>Each part of a multipart MIME message must be formatted properly.</p>
   *             </li>
   *             <li>
   *                 <p>Attachments must be in a file format that the Amazon SES API v2 supports.
   *                     </p>
   *             </li>
   *             <li>
   *                 <p>The entire message must be Base64 encoded.</p>
   *             </li>
   *             <li>
   *                 <p>If any of the MIME parts in your message contain content that is outside of
   *                     the 7-bit ASCII character range, you should encode that content to ensure that
   *                     recipients' email clients render the message properly.</p>
   *             </li>
   *             <li>
   *                 <p>The length of any single line of text in the message can't exceed 1,000
   *                     characters. This restriction is defined in <a href="https://tools.ietf.org/html/rfc5321">RFC 5321</a>.</p>
   *             </li>
   *          </ul>
   *
   */
  Data: Uint8Array | undefined;
}

export namespace RawMessage {
  export function isa(o: any): o is RawMessage {
    return _smithy.isa(o, "RawMessage");
  }
}

/**
 *
 *         <p>Enable or disable collection of reputation metrics for emails that you send using this
 *             configuration set in the current AWS Region. </p>
 *
 */
export interface ReputationOptions {
  __type?: "ReputationOptions";
  /**
   *
   *         <p>The date and time (in Unix time) when the reputation metrics were last given a fresh
   *             start. When your account is given a fresh start, your reputation metrics are calculated
   *             starting from the date of the fresh start.</p>
   *
   */
  LastFreshStart?: Date;

  /**
   *
   *         <p>If <code>true</code>, tracking of reputation metrics is enabled for the configuration
   *             set. If <code>false</code>, tracking of reputation metrics is disabled for the
   *             configuration set.</p>
   *
   */
  ReputationMetricsEnabled?: boolean;
}

export namespace ReputationOptions {
  export function isa(o: any): o is ReputationOptions {
    return _smithy.isa(o, "ReputationOptions");
  }
}

/**
 *
 *         <p>A request to send an email message.</p>
 *
 */
export interface SendEmailRequest {
  __type?: "SendEmailRequest";
  /**
   *
   *         <p>The name of the configuration set that you want to use when sending the email.</p>
   *
   *
   */
  ConfigurationSetName?: string;

  /**
   *
   *         <p>An object that contains the body of the message. You can send either a Simple message
   *             or a Raw message.</p>
   *
   */
  Content: EmailContent | undefined;

  /**
   *
   *         <p>An object that contains the recipients of the email message.</p>
   *
   */
  Destination: Destination | undefined;

  /**
   *
   *         <p>A list of tags, in the form of name/value pairs, to apply to an email that you send
   *             using the <code>SendEmail</code> operation. Tags correspond to characteristics of the
   *             email that you define, so that you can publish email sending events. </p>
   *
   */
  EmailTags?: Array<MessageTag>;

  /**
   *
   *         <p>The address that you want bounce and complaint notifications to be sent to.</p>
   *
   */
  FeedbackForwardingEmailAddress?: string;

  /**
   *
   *         <p>The email address that you want to use as the "From" address for the email. The
   *             address that you specify has to be verified.
   *             </p>
   *
   */
  FromEmailAddress?: string;

  /**
   *
   *         <p>The "Reply-to" email addresses for the message. When the recipient replies to the
   *             message, each Reply-to address receives the reply.</p>
   *
   */
  ReplyToAddresses?: Array<string>;
}

export namespace SendEmailRequest {
  export function isa(o: any): o is SendEmailRequest {
    return _smithy.isa(o, "SendEmailRequest");
  }
}

/**
 *
 *         <p>A unique message ID that you receive when an email is accepted for sending.</p>
 *
 */
export interface SendEmailResponse extends $MetadataBearer {
  __type?: "SendEmailResponse";
  /**
   *
   *         <p>A unique identifier for the message that is generated when the message is
   *             accepted.</p>
   *         <note>
   *             <p>It is possible for the Amazon SES API v2 to accept a message without sending it. This can
   *                 happen when the message that you're trying to send has an attachment contains a
   *                 virus, or when you send a templated email that contains invalid personalization
   *                 content, for example.</p>
   *         </note>
   *
   */
  MessageId?: string;
}

export namespace SendEmailResponse {
  export function isa(o: any): o is SendEmailResponse {
    return _smithy.isa(o, "SendEmailResponse");
  }
}

/**
 *
 *         <p>An object that contains information about the per-day and per-second sending limits
 *             for your Amazon SES account in the current AWS Region.</p>
 *
 */
export interface SendQuota {
  __type?: "SendQuota";
  /**
   *
   *         <p>The maximum number of emails that you can send in the current AWS Region over a
   *             24-hour period. This value is also called your <i>sending
   *             quota</i>.</p>
   *
   */
  Max24HourSend?: number;

  /**
   *
   *         <p>The maximum number of emails that you can send per second in the current AWS Region.
   *             This value is also called your <i>maximum sending rate</i> or your
   *                 <i>maximum TPS (transactions per second) rate</i>.</p>
   *
   */
  MaxSendRate?: number;

  /**
   *
   *         <p>The number of emails sent from your Amazon SES account in the current AWS Region over the
   *             past 24 hours.</p>
   *
   */
  SentLast24Hours?: number;
}

export namespace SendQuota {
  export function isa(o: any): o is SendQuota {
    return _smithy.isa(o, "SendQuota");
  }
}

/**
 *
 *         <p>Used to enable or disable email sending for messages that use this configuration set
 *             in the current AWS Region.</p>
 *
 */
export interface SendingOptions {
  __type?: "SendingOptions";
  /**
   *
   *         <p>If <code>true</code>, email sending is enabled for the configuration set. If
   *                 <code>false</code>, email sending is disabled for the configuration set.</p>
   *
   */
  SendingEnabled?: boolean;
}

export namespace SendingOptions {
  export function isa(o: any): o is SendingOptions {
    return _smithy.isa(o, "SendingOptions");
  }
}

/**
 *
 *         <p>The message can't be sent because the account's ability to send email is currently
 *             paused.</p>
 *
 */
export interface SendingPausedException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "SendingPausedException";
  name: "SendingPausedException";
  $fault: "client";
  message?: string;
}

export namespace SendingPausedException {
  export function isa(o: any): o is SendingPausedException {
    return _smithy.isa(o, "SendingPausedException");
  }
}

/**
 *
 *         <p>An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to
 *             send notification when certain email events occur.</p>
 *
 */
export interface SnsDestination {
  __type?: "SnsDestination";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the Amazon SNS topic that you want to publish email
   *             events to. For more information about Amazon SNS topics, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html">Amazon SNS Developer
   *                 Guide</a>.</p>
   *
   */
  TopicArn: string | undefined;
}

export namespace SnsDestination {
  export function isa(o: any): o is SnsDestination {
    return _smithy.isa(o, "SnsDestination");
  }
}

/**
 *
 *         <p>An object containing information about the suppressed email destination.</p>
 *
 */
export interface SuppressedDestination {
  __type?: "SuppressedDestination";
  /**
   *
   *         <p>
   *             <code>Optional</code> value with information about the sources of the suppression.</p>
   *
   */
  Attributes?: SuppressedDestinationAttributes;

  /**
   *
   *         <p>The suppressed email destination.</p>
   *
   */
  EmailAddress: string | undefined;

  /**
   *
   *         <p>The last time the suppressed destination was updated.</p>
   *
   */
  LastUpdateTime: Date | undefined;

  /**
   *
   *         <p>The reason for which the email destination is suppressed.</p>
   *
   */
  Reason: SuppressionListReason | string | undefined;
}

export namespace SuppressedDestination {
  export function isa(o: any): o is SuppressedDestination {
    return _smithy.isa(o, "SuppressedDestination");
  }
}

/**
 *
 *         <p>An object containing additional attributes related to a suppressed destination.</p>
 *
 */
export interface SuppressedDestinationAttributes {
  __type?: "SuppressedDestinationAttributes";
  /**
   *
   *         <p>A unique identifier of the suppression cause.</p>
   *
   */
  FeedbackId?: string;

  /**
   *
   *         <p>A unique identifier of the message that caused the suppression of the email destination.</p>
   *
   */
  MessageId?: string;
}

export namespace SuppressedDestinationAttributes {
  export function isa(o: any): o is SuppressedDestinationAttributes {
    return _smithy.isa(o, "SuppressedDestinationAttributes");
  }
}

/**
 *
 *         <p>A summary for the suppressed email destination.</p>
 *
 */
export interface SuppressedDestinationSummary {
  __type?: "SuppressedDestinationSummary";
  /**
   *
   *         <p>The suppressed email destination.</p>
   *
   */
  EmailAddress: string | undefined;

  /**
   *
   *         <p>The last time the suppressed destination was updated.</p>
   *
   */
  LastUpdateTime: Date | undefined;

  /**
   *
   *         <p>The reason for which the email destination is suppressed.</p>
   *
   */
  Reason: SuppressionListReason | string | undefined;
}

export namespace SuppressedDestinationSummary {
  export function isa(o: any): o is SuppressedDestinationSummary {
    return _smithy.isa(o, "SuppressedDestinationSummary");
  }
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the resource that you want to add one or more tags
   *             to.</p>
   *
   */
  ResourceArn: string | undefined;

  /**
   *
   *         <p>A list of the tags that you want to add to the resource. A tag consists of a required
   *             tag key (<code>Key</code>) and an associated tag value (<code>Value</code>). The maximum
   *             length of a tag key is 128 characters. The maximum length of a tag value is 256
   *             characters.</p>
   *
   */
  Tags: Array<Tag> | undefined;
}

export namespace TagResourceRequest {
  export function isa(o: any): o is TagResourceRequest {
    return _smithy.isa(o, "TagResourceRequest");
  }
}

export interface TagResourceResponse extends $MetadataBearer {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export function isa(o: any): o is TagResourceResponse {
    return _smithy.isa(o, "TagResourceResponse");
  }
}

/**
 *
 *         <p>An object that defines the email template to use for an email message, and the values
 *             to use for any message variables in that template. An <i>email
 *                 template</i> is a type of message template that contains content that you
 *             want to define, save, and reuse in email messages that you send.</p>
 *
 */
export interface Template {
  __type?: "Template";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the template.</p>
   *
   */
  TemplateArn?: string;

  /**
   *
   *         <p>An object that defines the values to use for message variables in the template. This
   *             object is a set of key-value pairs. Each key defines a message variable in the template.
   *             The corresponding value defines the value to use for that variable.</p>
   *
   */
  TemplateData?: string;
}

export namespace Template {
  export function isa(o: any): o is Template {
    return _smithy.isa(o, "Template");
  }
}

export enum TlsPolicy {
  OPTIONAL = "OPTIONAL",
  REQUIRE = "REQUIRE"
}

/**
 *
 *         <p>Too many requests have been made to the operation.</p>
 *
 */
export interface TooManyRequestsException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "TooManyRequestsException";
  name: "TooManyRequestsException";
  $fault: "client";
  message?: string;
}

export namespace TooManyRequestsException {
  export function isa(o: any): o is TooManyRequestsException {
    return _smithy.isa(o, "TooManyRequestsException");
  }
}

/**
 *
 *         <p>An object that defines the tracking options for a configuration set. When you use the
 *             Amazon SES API v2 to send an email, it contains an invisible image that's used to track when
 *             recipients open your email. If your email contains links, those links are changed
 *             slightly in order to track when recipients click them.</p>
 *         <p>These images and links include references to a domain operated by AWS. You can
 *             optionally configure the Amazon SES to use a domain that you operate for these images and
 *             links.</p>
 *
 */
export interface TrackingOptions {
  __type?: "TrackingOptions";
  /**
   *
   *         <p>The domain that you want to use for tracking open and click events.</p>
   *
   */
  CustomRedirectDomain: string | undefined;
}

export namespace TrackingOptions {
  export function isa(o: any): o is TrackingOptions {
    return _smithy.isa(o, "TrackingOptions");
  }
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the resource that you want to remove one or more
   *             tags from.</p>
   *
   */
  ResourceArn: string | undefined;

  /**
   *
   *         <p>The tags (tag keys) that you want to remove from the resource. When you specify a tag
   *             key, the action removes both that key and its associated tag value.</p>
   *         <p>To remove more than one tag from the resource, append the <code>TagKeys</code>
   *             parameter and argument for each additional tag to remove, separated by an ampersand. For
   *             example:
   *                 <code>/v2/email/tags?ResourceArn=ResourceArn&TagKeys=Key1&TagKeys=Key2</code>
   *         </p>
   *
   */
  TagKeys: Array<string> | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return _smithy.isa(o, "UntagResourceRequest");
  }
}

export interface UntagResourceResponse extends $MetadataBearer {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export function isa(o: any): o is UntagResourceResponse {
    return _smithy.isa(o, "UntagResourceResponse");
  }
}

/**
 *
 *         <p>A request to change the settings for an event destination for a configuration
 *             set.</p>
 *
 */
export interface UpdateConfigurationSetEventDestinationRequest {
  __type?: "UpdateConfigurationSetEventDestinationRequest";
  /**
   *
   *         <p>The name of the configuration set that contains the event destination that you want to
   *             modify.</p>
   *
   */
  ConfigurationSetName: string | undefined;

  /**
   *
   *         <p>An object that defines the event destination.</p>
   *
   */
  EventDestination: EventDestinationDefinition | undefined;

  /**
   *
   *         <p>The name of the event destination that you want to modify.</p>
   *
   */
  EventDestinationName: string | undefined;
}

export namespace UpdateConfigurationSetEventDestinationRequest {
  export function isa(
    o: any
  ): o is UpdateConfigurationSetEventDestinationRequest {
    return _smithy.isa(o, "UpdateConfigurationSetEventDestinationRequest");
  }
}

/**
 *
 *         <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 *
 */
export interface UpdateConfigurationSetEventDestinationResponse
  extends $MetadataBearer {
  __type?: "UpdateConfigurationSetEventDestinationResponse";
}

export namespace UpdateConfigurationSetEventDestinationResponse {
  export function isa(
    o: any
  ): o is UpdateConfigurationSetEventDestinationResponse {
    return _smithy.isa(o, "UpdateConfigurationSetEventDestinationResponse");
  }
}

/**
 *
 *         <p>An object that contains information about the amount of email that was delivered to
 *             recipients.</p>
 *
 */
export interface VolumeStatistics {
  __type?: "VolumeStatistics";
  /**
   *
   *         <p>The total number of emails that arrived in recipients' inboxes.</p>
   *
   */
  InboxRawCount?: number;

  /**
   *
   *         <p>An estimate of the percentage of emails sent from the current domain that will arrive
   *             in recipients' inboxes.</p>
   *
   */
  ProjectedInbox?: number;

  /**
   *
   *         <p>An estimate of the percentage of emails sent from the current domain that will arrive
   *             in recipients' spam or junk mail folders.</p>
   *
   */
  ProjectedSpam?: number;

  /**
   *
   *         <p>The total number of emails that arrived in recipients' spam or junk mail
   *             folders.</p>
   *
   */
  SpamRawCount?: number;
}

export namespace VolumeStatistics {
  export function isa(o: any): o is VolumeStatistics {
    return _smithy.isa(o, "VolumeStatistics");
  }
}

export enum WarmupStatus {
  DONE = "DONE",
  IN_PROGRESS = "IN_PROGRESS"
}
