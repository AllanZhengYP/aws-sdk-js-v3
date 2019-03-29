/**
 * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AC3.
 */
export interface _Ac3Settings {
    /**
     * Average bitrate in bits/second. Valid bitrates depend on the coding mode.
     */
    Bitrate?: number;

    /**
     * Specifies the "Bitstream Mode" (bsmod) for the emitted AC-3 stream. See ATSC A/52-2012 for background on these values.
     */
    BitstreamMode?: 'COMPLETE_MAIN'|'COMMENTARY'|'DIALOGUE'|'EMERGENCY'|'HEARING_IMPAIRED'|'MUSIC_AND_EFFECTS'|'VISUALLY_IMPAIRED'|'VOICE_OVER'|string;

    /**
     * Dolby Digital coding mode. Determines number of channels.
     */
    CodingMode?: 'CODING_MODE_1_0'|'CODING_MODE_1_1'|'CODING_MODE_2_0'|'CODING_MODE_3_2_LFE'|string;

    /**
     * Sets the dialnorm for the output. If blank and input audio is Dolby Digital, dialnorm will be passed through.
     */
    Dialnorm?: number;

    /**
     * If set to FILM_STANDARD, adds dynamic range compression signaling to the output bitstream as defined in the Dolby Digital specification.
     */
    DynamicRangeCompressionProfile?: 'FILM_STANDARD'|'NONE'|string;

    /**
     * Applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with 3_2_LFE coding mode.
     */
    LfeFilter?: 'ENABLED'|'DISABLED'|string;

    /**
     * When set to FOLLOW_INPUT, encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used.
     */
    MetadataControl?: 'FOLLOW_INPUT'|'USE_CONFIGURED'|string;

    /**
     * Sample rate in hz. Sample rate is always 48000.
     */
    SampleRate?: number;
}

export type _UnmarshalledAc3Settings = _Ac3Settings;