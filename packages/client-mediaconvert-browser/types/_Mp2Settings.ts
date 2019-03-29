/**
 * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value MP2.
 */
export interface _Mp2Settings {
    /**
     * Average bitrate in bits/second.
     */
    Bitrate?: number;

    /**
     * Set Channels to specify the number of channels in this output audio track. Choosing Mono in the console will give you 1 output channel; choosing Stereo will give you 2. In the API, valid values are 1 and 2.
     */
    Channels?: number;

    /**
     * Sample rate in hz.
     */
    SampleRate?: number;
}

export type _UnmarshalledMp2Settings = _Mp2Settings;