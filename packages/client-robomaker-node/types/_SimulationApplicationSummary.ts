/**
 * <p>Summary information for a simulation application.</p>
 */
export interface _SimulationApplicationSummary {
    /**
     * <p>The name of the simulation application.</p>
     */
    name?: string;

    /**
     * <p>The Amazon Resource Name (ARN) of the simulation application.</p>
     */
    arn?: string;

    /**
     * <p>The version of the simulation application.</p>
     */
    version?: string;

    /**
     * <p>The time, in milliseconds since the epoch, when the simulation application was last updated.</p>
     */
    lastUpdatedAt?: Date|string|number;
}

export interface _UnmarshalledSimulationApplicationSummary extends _SimulationApplicationSummary {
    /**
     * <p>The time, in milliseconds since the epoch, when the simulation application was last updated.</p>
     */
    lastUpdatedAt?: Date;
}