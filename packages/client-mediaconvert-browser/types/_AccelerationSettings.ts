/**
 * Accelerated transcoding is currently in private preview. Contact AWS for more information.
 */
export interface _AccelerationSettings {
    /**
     * Acceleration configuration for the job.
     */
    Mode: 'DISABLED'|'ENABLED'|string;
}

export type _UnmarshalledAccelerationSettings = _AccelerationSettings;