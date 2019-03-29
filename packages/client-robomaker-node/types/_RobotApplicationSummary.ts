/**
 * <p>Summary information for a robot application.</p>
 */
export interface _RobotApplicationSummary {
    /**
     * <p>The name of the robot application.</p>
     */
    name?: string;

    /**
     * <p>The Amazon Resource Name (ARN) of the robot.</p>
     */
    arn?: string;

    /**
     * <p>The version of the robot application.</p>
     */
    version?: string;

    /**
     * <p>The time, in milliseconds since the epoch, when the robot application was last updated.</p>
     */
    lastUpdatedAt?: Date|string|number;
}

export interface _UnmarshalledRobotApplicationSummary extends _RobotApplicationSummary {
    /**
     * <p>The time, in milliseconds since the epoch, when the robot application was last updated.</p>
     */
    lastUpdatedAt?: Date;
}