import {_SpekeKeyProvider, _UnmarshalledSpekeKeyProvider} from './_SpekeKeyProvider';

/**
 * Specifies DRM settings for DASH outputs.
 */
export interface _DashIsoEncryptionSettings {
    /**
     * Settings for use with a SPEKE key provider
     */
    SpekeKeyProvider?: _SpekeKeyProvider;
}

export interface _UnmarshalledDashIsoEncryptionSettings extends _DashIsoEncryptionSettings {
    /**
     * Settings for use with a SPEKE key provider
     */
    SpekeKeyProvider?: _UnmarshalledSpekeKeyProvider;
}