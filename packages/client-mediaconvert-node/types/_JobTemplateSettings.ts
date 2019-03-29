import {_AvailBlanking, _UnmarshalledAvailBlanking} from './_AvailBlanking';
import {_EsamSettings, _UnmarshalledEsamSettings} from './_EsamSettings';
import {_InputTemplate, _UnmarshalledInputTemplate} from './_InputTemplate';
import {_MotionImageInserter, _UnmarshalledMotionImageInserter} from './_MotionImageInserter';
import {_NielsenConfiguration, _UnmarshalledNielsenConfiguration} from './_NielsenConfiguration';
import {_OutputGroup, _UnmarshalledOutputGroup} from './_OutputGroup';
import {_TimecodeConfig, _UnmarshalledTimecodeConfig} from './_TimecodeConfig';
import {_TimedMetadataInsertion, _UnmarshalledTimedMetadataInsertion} from './_TimedMetadataInsertion';

/**
 * JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.
 */
export interface _JobTemplateSettings {
    /**
     * When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time.
     */
    AdAvailOffset?: number;

    /**
     * Settings for ad avail blanking.  Video can be blanked or overlaid with an image, and audio muted during SCTE-35 triggered ad avails.
     */
    AvailBlanking?: _AvailBlanking;

    /**
     * Settings for Event Signaling And Messaging (ESAM).
     */
    Esam?: _EsamSettings;

    /**
     * Use Inputs (inputs) to define the source file used in the transcode job. There can only be one input in a job template.  Using the API, you can include multiple inputs when referencing a job template.
     */
    Inputs?: Array<_InputTemplate>|Iterable<_InputTemplate>;

    /**
     * Overlay motion graphics on top of your video. The motion graphics that you specify here appear on all outputs in all output groups.
     */
    MotionImageInserter?: _MotionImageInserter;

    /**
     * Settings for Nielsen Configuration
     */
    NielsenConfiguration?: _NielsenConfiguration;

    /**
     * (OutputGroups) contains one group of settings for each set of outputs that share a common package type. All unpackaged files (MPEG-4, MPEG-2 TS, Quicktime, MXF, and no container) are grouped in a single output group as well. Required in (OutputGroups) is a group of settings that apply to the whole group. This required object depends on the value you set for (Type) under (OutputGroups)>(OutputGroupSettings). Type, settings object pairs are as follows. * FILE_GROUP_SETTINGS, FileGroupSettings * HLS_GROUP_SETTINGS, HlsGroupSettings * DASH_ISO_GROUP_SETTINGS, DashIsoGroupSettings * MS_SMOOTH_GROUP_SETTINGS, MsSmoothGroupSettings * CMAF_GROUP_SETTINGS, CmafGroupSettings
     */
    OutputGroups?: Array<_OutputGroup>|Iterable<_OutputGroup>;

    /**
     * Contains settings used to acquire and adjust timecode information from inputs.
     */
    TimecodeConfig?: _TimecodeConfig;

    /**
     * Enable Timed metadata insertion (TimedMetadataInsertion) to include ID3 tags in your job. To include timed metadata, you must enable it here, enable it in each output container, and specify tags and timecodes in ID3 insertion (Id3Insertion) objects.
     */
    TimedMetadataInsertion?: _TimedMetadataInsertion;
}

export interface _UnmarshalledJobTemplateSettings extends _JobTemplateSettings {
    /**
     * Settings for ad avail blanking.  Video can be blanked or overlaid with an image, and audio muted during SCTE-35 triggered ad avails.
     */
    AvailBlanking?: _UnmarshalledAvailBlanking;

    /**
     * Settings for Event Signaling And Messaging (ESAM).
     */
    Esam?: _UnmarshalledEsamSettings;

    /**
     * Use Inputs (inputs) to define the source file used in the transcode job. There can only be one input in a job template.  Using the API, you can include multiple inputs when referencing a job template.
     */
    Inputs?: Array<_UnmarshalledInputTemplate>;

    /**
     * Overlay motion graphics on top of your video. The motion graphics that you specify here appear on all outputs in all output groups.
     */
    MotionImageInserter?: _UnmarshalledMotionImageInserter;

    /**
     * Settings for Nielsen Configuration
     */
    NielsenConfiguration?: _UnmarshalledNielsenConfiguration;

    /**
     * (OutputGroups) contains one group of settings for each set of outputs that share a common package type. All unpackaged files (MPEG-4, MPEG-2 TS, Quicktime, MXF, and no container) are grouped in a single output group as well. Required in (OutputGroups) is a group of settings that apply to the whole group. This required object depends on the value you set for (Type) under (OutputGroups)>(OutputGroupSettings). Type, settings object pairs are as follows. * FILE_GROUP_SETTINGS, FileGroupSettings * HLS_GROUP_SETTINGS, HlsGroupSettings * DASH_ISO_GROUP_SETTINGS, DashIsoGroupSettings * MS_SMOOTH_GROUP_SETTINGS, MsSmoothGroupSettings * CMAF_GROUP_SETTINGS, CmafGroupSettings
     */
    OutputGroups?: Array<_UnmarshalledOutputGroup>;

    /**
     * Contains settings used to acquire and adjust timecode information from inputs.
     */
    TimecodeConfig?: _UnmarshalledTimecodeConfig;

    /**
     * Enable Timed metadata insertion (TimedMetadataInsertion) to include ID3 tags in your job. To include timed metadata, you must enable it here, enable it in each output container, and specify tags and timecodes in ID3 insertion (Id3Insertion) objects.
     */
    TimedMetadataInsertion?: _UnmarshalledTimedMetadataInsertion;
}