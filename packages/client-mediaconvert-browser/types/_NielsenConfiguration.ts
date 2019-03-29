/**
 * Settings for Nielsen Configuration
 */
export interface _NielsenConfiguration {
    /**
     * Use Nielsen Configuration (NielsenConfiguration) to set the Nielsen measurement system breakout code. Supported values are 0, 3, 7, and 9.
     */
    BreakoutCode?: number;

    /**
     * Use Distributor ID (DistributorID) to specify the distributor ID that is assigned to your organization by Neilsen.
     */
    DistributorId?: string;
}

export type _UnmarshalledNielsenConfiguration = _NielsenConfiguration;