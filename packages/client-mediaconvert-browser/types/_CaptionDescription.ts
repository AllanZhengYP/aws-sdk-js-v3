import {_CaptionDestinationSettings, _UnmarshalledCaptionDestinationSettings} from './_CaptionDestinationSettings';

/**
 * Description of Caption output
 */
export interface _CaptionDescription {
    /**
     * Specifies which "Caption Selector":#inputs-caption_selector to use from each input when generating captions. The name should be of the format "Caption Selector <N>", which denotes that the Nth Caption Selector will be used from each input.
     */
    CaptionSelectorName?: string;

    /**
     * Indicates the language of the caption output track, using the ISO 639-2 or ISO 639-3 three-letter language code. For most captions output formats, the encoder puts this language information in the output captions metadata. If your output captions format is DVB-Sub or Burn in, the encoder uses this language information to choose the font language for rendering the captions text.
     */
    CustomLanguageCode?: string;

    /**
     * Specific settings required by destination type. Note that burnin_destination_settings are not available if the source of the caption data is Embedded or Teletext.
     */
    DestinationSettings?: _CaptionDestinationSettings;

    /**
     * Specify the language of this captions output track. For most captions output formats, the encoder puts this language information in the output captions metadata. If your output captions format is DVB-Sub or Burn in, the encoder uses this language information to choose the font language for rendering the captions text.
     */
    LanguageCode?: 'ENG'|'SPA'|'FRA'|'DEU'|'GER'|'ZHO'|'ARA'|'HIN'|'JPN'|'RUS'|'POR'|'ITA'|'URD'|'VIE'|'KOR'|'PAN'|'ABK'|'AAR'|'AFR'|'AKA'|'SQI'|'AMH'|'ARG'|'HYE'|'ASM'|'AVA'|'AVE'|'AYM'|'AZE'|'BAM'|'BAK'|'EUS'|'BEL'|'BEN'|'BIH'|'BIS'|'BOS'|'BRE'|'BUL'|'MYA'|'CAT'|'KHM'|'CHA'|'CHE'|'NYA'|'CHU'|'CHV'|'COR'|'COS'|'CRE'|'HRV'|'CES'|'DAN'|'DIV'|'NLD'|'DZO'|'ENM'|'EPO'|'EST'|'EWE'|'FAO'|'FIJ'|'FIN'|'FRM'|'FUL'|'GLA'|'GLG'|'LUG'|'KAT'|'ELL'|'GRN'|'GUJ'|'HAT'|'HAU'|'HEB'|'HER'|'HMO'|'HUN'|'ISL'|'IDO'|'IBO'|'IND'|'INA'|'ILE'|'IKU'|'IPK'|'GLE'|'JAV'|'KAL'|'KAN'|'KAU'|'KAS'|'KAZ'|'KIK'|'KIN'|'KIR'|'KOM'|'KON'|'KUA'|'KUR'|'LAO'|'LAT'|'LAV'|'LIM'|'LIN'|'LIT'|'LUB'|'LTZ'|'MKD'|'MLG'|'MSA'|'MAL'|'MLT'|'GLV'|'MRI'|'MAR'|'MAH'|'MON'|'NAU'|'NAV'|'NDE'|'NBL'|'NDO'|'NEP'|'SME'|'NOR'|'NOB'|'NNO'|'OCI'|'OJI'|'ORI'|'ORM'|'OSS'|'PLI'|'FAS'|'POL'|'PUS'|'QUE'|'QAA'|'RON'|'ROH'|'RUN'|'SMO'|'SAG'|'SAN'|'SRD'|'SRB'|'SNA'|'III'|'SND'|'SIN'|'SLK'|'SLV'|'SOM'|'SOT'|'SUN'|'SWA'|'SSW'|'SWE'|'TGL'|'TAH'|'TGK'|'TAM'|'TAT'|'TEL'|'THA'|'BOD'|'TIR'|'TON'|'TSO'|'TSN'|'TUR'|'TUK'|'TWI'|'UIG'|'UKR'|'UZB'|'VEN'|'VOL'|'WLN'|'CYM'|'FRY'|'WOL'|'XHO'|'YID'|'YOR'|'ZHA'|'ZUL'|'ORJ'|'QPC'|'TNG'|string;

    /**
     * Human readable information to indicate captions available for players (eg. English, or Spanish). Alphanumeric characters, spaces, and underscore are legal.
     */
    LanguageDescription?: string;
}

export interface _UnmarshalledCaptionDescription extends _CaptionDescription {
    /**
     * Specific settings required by destination type. Note that burnin_destination_settings are not available if the source of the caption data is Embedded or Teletext.
     */
    DestinationSettings?: _UnmarshalledCaptionDestinationSettings;
}