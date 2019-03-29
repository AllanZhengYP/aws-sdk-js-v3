/**
 * <p>Information about a robot software suite.</p>
 */
export interface _RobotSoftwareSuite {
    /**
     * <p>The name of the robot software suite.</p>
     */
    name?: 'ROS'|string;

    /**
     * <p>The version of the robot software suite.</p>
     */
    version?: 'Kinetic'|string;
}

export type _UnmarshalledRobotSoftwareSuite = _RobotSoftwareSuite;