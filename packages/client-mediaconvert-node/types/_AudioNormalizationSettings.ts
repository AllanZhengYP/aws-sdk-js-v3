/**
 * Advanced audio normalization settings.
 */
export interface _AudioNormalizationSettings {
    /**
     * Audio normalization algorithm to use. 1770-1 conforms to the CALM Act specification, 1770-2 conforms to the EBU R-128 specification.
     */
    Algorithm?: 'ITU_BS_1770_1'|'ITU_BS_1770_2'|string;

    /**
     * When enabled the output audio is corrected using the chosen algorithm. If disabled, the audio will be measured but not adjusted.
     */
    AlgorithmControl?: 'CORRECT_AUDIO'|'MEASURE_ONLY'|string;

    /**
     * Content measuring above this level will be corrected to the target level. Content measuring below this level will not be corrected. Gating only applies when not using real_time_correction.
     */
    CorrectionGateLevel?: number;

    /**
     * If set to LOG, log each output's audio track loudness to a CSV file.
     */
    LoudnessLogging?: 'LOG'|'DONT_LOG'|string;

    /**
     * If set to TRUE_PEAK, calculate and log the TruePeak for each output's audio track loudness.
     */
    PeakCalculation?: 'TRUE_PEAK'|'NONE'|string;

    /**
     * Target LKFS(loudness) to adjust volume to. If no value is entered, a default value will be used according to the chosen algorithm. The CALM Act (1770-1) recommends a target of -24 LKFS. The EBU R-128 specification (1770-2) recommends a target of -23 LKFS.
     */
    TargetLkfs?: number;
}

export type _UnmarshalledAudioNormalizationSettings = _AudioNormalizationSettings;