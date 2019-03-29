/**
 * <p>A summary of information about a channel.</p>
 */
export interface _ChannelSummary {
    /**
     * <p>The name of the channel.</p>
     */
    channelName?: string;

    /**
     * <p>The status of the channel.</p>
     */
    status?: 'CREATING'|'ACTIVE'|'DELETING'|string;

    /**
     * <p>When the channel was created.</p>
     */
    creationTime?: Date|string|number;

    /**
     * <p>The last time the channel was updated.</p>
     */
    lastUpdateTime?: Date|string|number;
}

export interface _UnmarshalledChannelSummary extends _ChannelSummary {
    /**
     * <p>When the channel was created.</p>
     */
    creationTime?: Date;

    /**
     * <p>The last time the channel was updated.</p>
     */
    lastUpdateTime?: Date;
}