import { ResourceDataSyncSource } from "./models_0";
import { InventoryFilter, InventoryGroup, OpsFilter, OpsResultAttribute, ResultAttribute } from "./models_1";

export interface UpdateResourceDataSyncRequest {
  /**
   * <p>The name of the resource data sync you want to update.</p>
   */
  SyncName: string | undefined;

  /**
   * <p>The type of resource data sync. The supported <code>SyncType</code> is
   *    SyncFromSource.</p>
   */
  SyncType: string | undefined;

  /**
   * <p>Specify information about the data sources to synchronize.</p>
   */
  SyncSource: ResourceDataSyncSource | undefined;
}

export namespace UpdateResourceDataSyncRequest {
  export const filterSensitiveLog = (obj: UpdateResourceDataSyncRequest): any => ({
    ...obj,
  });
}

export interface UpdateResourceDataSyncResult {}

export namespace UpdateResourceDataSyncResult {
  export const filterSensitiveLog = (obj: UpdateResourceDataSyncResult): any => ({
    ...obj,
  });
}

/**
 * <p>The request body of the UpdateServiceSetting API action.</p>
 */
export interface UpdateServiceSettingRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the service setting to reset. For example,
   *     <code>arn:aws:ssm:us-east-1:111122223333:servicesetting/ssm/parameter-store/high-throughput-enabled</code>.
   *    The setting ID can be one of the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>/ssm/automation/customer-script-log-destination</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/ssm/automation/customer-script-log-group-name</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/ssm/parameter-store/default-parameter-tier</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/ssm/parameter-store/high-throughput-enabled</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/ssm/managed-instance/activation-tier</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  SettingId: string | undefined;

  /**
   * <p>The new value to specify for the service setting. For the
   *     <code>/ssm/parameter-store/default-parameter-tier</code> setting ID, the setting value can be
   *    one of the following.</p>
   *          <ul>
   *             <li>
   *                <p>Standard</p>
   *             </li>
   *             <li>
   *                <p>Advanced</p>
   *             </li>
   *             <li>
   *                <p>Intelligent-Tiering</p>
   *             </li>
   *          </ul>
   *          <p>For the <code>/ssm/parameter-store/high-throughput-enabled</code>, and
   *     <code>/ssm/managed-instance/activation-tier</code> setting IDs, the setting value can be true or
   *    false.</p>
   *          <p>For the <code>/ssm/automation/customer-script-log-destination</code> setting ID, the setting
   *    value can be CloudWatch.</p>
   *          <p>For the <code>/ssm/automation/customer-script-log-group-name</code> setting ID, the setting
   *    value can be the name of a CloudWatch Logs log group.</p>
   */
  SettingValue: string | undefined;
}

export namespace UpdateServiceSettingRequest {
  export const filterSensitiveLog = (obj: UpdateServiceSettingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The result body of the UpdateServiceSetting API action.</p>
 */
export interface UpdateServiceSettingResult {}

export namespace UpdateServiceSettingResult {
  export const filterSensitiveLog = (obj: UpdateServiceSettingResult): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the inventory type and attribute for the aggregation execution.</p>
 */
export interface InventoryAggregator {
  /**
   * <p>The inventory type and attribute name for aggregation.</p>
   */
  Expression?: string;

  /**
   * <p>Nested aggregators to further refine aggregation for an inventory type.</p>
   */
  Aggregators?: InventoryAggregator[];

  /**
   * <p>A user-defined set of one or more filters on which to aggregate inventory data. Groups
   *    return a count of resources that match and don't match the specified criteria.</p>
   */
  Groups?: InventoryGroup[];
}

export namespace InventoryAggregator {
  export const filterSensitiveLog = (obj: InventoryAggregator): any => ({
    ...obj,
  });
}

/**
 * <p>One or more aggregators for viewing counts of OpsItems using different dimensions such as
 *     <code>Source</code>, <code>CreatedTime</code>, or <code>Source and CreatedTime</code>, to name a
 *    few.</p>
 */
export interface OpsAggregator {
  /**
   * <p>Either a Range or Count aggregator for limiting an OpsItem summary.</p>
   */
  AggregatorType?: string;

  /**
   * <p>The data type name to use for viewing counts of OpsItems.</p>
   */
  TypeName?: string;

  /**
   * <p>The name of an OpsItem attribute on which to limit the count of OpsItems.</p>
   */
  AttributeName?: string;

  /**
   * <p>The aggregator value.</p>
   */
  Values?: { [key: string]: string };

  /**
   * <p>The aggregator filters.</p>
   */
  Filters?: OpsFilter[];

  /**
   * <p>A nested aggregator for viewing counts of OpsItems.</p>
   */
  Aggregators?: OpsAggregator[];
}

export namespace OpsAggregator {
  export const filterSensitiveLog = (obj: OpsAggregator): any => ({
    ...obj,
  });
}

export interface GetInventoryRequest {
  /**
   * <p>One or more filters. Use a filter to return a more specific list of results.</p>
   */
  Filters?: InventoryFilter[];

  /**
   * <p>Returns counts of inventory types based on one or more expressions. For example, if you
   *    aggregate by using an expression that uses the <code>AWS:InstanceInformation.PlatformType</code>
   *    type, you can see a count of how many Windows and Linux instances exist in your inventoried
   *    fleet.</p>
   */
  Aggregators?: InventoryAggregator[];

  /**
   * <p>The list of inventory item types to return.</p>
   */
  ResultAttributes?: ResultAttribute[];

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;
}

export namespace GetInventoryRequest {
  export const filterSensitiveLog = (obj: GetInventoryRequest): any => ({
    ...obj,
  });
}

export interface GetOpsSummaryRequest {
  /**
   * <p>Specify the name of a resource data sync to get.</p>
   */
  SyncName?: string;

  /**
   * <p>Optional filters used to scope down the returned OpsItems. </p>
   */
  Filters?: OpsFilter[];

  /**
   * <p>Optional aggregators that return counts of OpsItems based on one or more expressions.</p>
   */
  Aggregators?: OpsAggregator[];

  /**
   * <p>The OpsItem data type to return.</p>
   */
  ResultAttributes?: OpsResultAttribute[];

  /**
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;
}

export namespace GetOpsSummaryRequest {
  export const filterSensitiveLog = (obj: GetOpsSummaryRequest): any => ({
    ...obj,
  });
}
