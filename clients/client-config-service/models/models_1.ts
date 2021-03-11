import { QueryInfo, ResourceKey, Tag } from "./models_0";

export interface SelectResourceConfigResponse {
  /**
   * <p>Returns the results for the SQL query.</p>
   */
  Results?: string[];

  /**
   * <p>Returns the <code>QueryInfo</code> object.</p>
   */
  QueryInfo?: QueryInfo;

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response. </p>
   */
  NextToken?: string;
}

export namespace SelectResourceConfigResponse {
  export const filterSensitiveLog = (obj: SelectResourceConfigResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface StartConfigRulesEvaluationRequest {
  /**
   * <p>The list of names of AWS Config rules that you want to run
   * 			evaluations for.</p>
   */
  ConfigRuleNames?: string[];
}

export namespace StartConfigRulesEvaluationRequest {
  export const filterSensitiveLog = (obj: StartConfigRulesEvaluationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output when you start the evaluation for the specified AWS
 * 			Config rule.</p>
 */
export interface StartConfigRulesEvaluationResponse {}

export namespace StartConfigRulesEvaluationResponse {
  export const filterSensitiveLog = (obj: StartConfigRulesEvaluationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the <a>StartConfigurationRecorder</a>
 * 			action.</p>
 */
export interface StartConfigurationRecorderRequest {
  /**
   * <p>The name of the recorder object that records each configuration
   * 			change made to the resources.</p>
   */
  ConfigurationRecorderName: string | undefined;
}

export namespace StartConfigurationRecorderRequest {
  export const filterSensitiveLog = (obj: StartConfigurationRecorderRequest): any => ({
    ...obj,
  });
}

export interface StartRemediationExecutionRequest {
  /**
   * <p>The list of names of AWS Config rules that you want to run remediation execution for.</p>
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>A list of resource keys to be processed with the current request. Each element in the list consists of the resource type and resource ID. </p>
   */
  ResourceKeys: ResourceKey[] | undefined;
}

export namespace StartRemediationExecutionRequest {
  export const filterSensitiveLog = (obj: StartRemediationExecutionRequest): any => ({
    ...obj,
  });
}

export interface StartRemediationExecutionResponse {
  /**
   * <p>Returns a failure message. For example, the resource is already compliant.</p>
   */
  FailureMessage?: string;

  /**
   * <p>For resources that have failed to start execution, the API returns a resource key object.</p>
   */
  FailedItems?: ResourceKey[];
}

export namespace StartRemediationExecutionResponse {
  export const filterSensitiveLog = (obj: StartRemediationExecutionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the <a>StopConfigurationRecorder</a> action.</p>
 */
export interface StopConfigurationRecorderRequest {
  /**
   * <p>The name of the recorder object that records each configuration change made to the resources.</p>
   */
  ConfigurationRecorderName: string | undefined;
}

export namespace StopConfigurationRecorderRequest {
  export const filterSensitiveLog = (obj: StopConfigurationRecorderRequest): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the supported resources are <code>ConfigRule</code>, <code>ConfigurationAggregator</code> and <code>AggregatorAuthorization</code>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>An array of tag object.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the supported resources are <code>ConfigRule</code>, <code>ConfigurationAggregator</code> and <code>AggregatorAuthorization</code>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The keys of the tags to be removed.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}
