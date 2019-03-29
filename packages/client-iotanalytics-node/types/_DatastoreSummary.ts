/**
 * <p>A summary of information about a data store.</p>
 */
export interface _DatastoreSummary {
    /**
     * <p>The name of the data store.</p>
     */
    datastoreName?: string;

    /**
     * <p>The status of the data store.</p>
     */
    status?: 'CREATING'|'ACTIVE'|'DELETING'|string;

    /**
     * <p>When the data store was created.</p>
     */
    creationTime?: Date|string|number;

    /**
     * <p>The last time the data store was updated.</p>
     */
    lastUpdateTime?: Date|string|number;
}

export interface _UnmarshalledDatastoreSummary extends _DatastoreSummary {
    /**
     * <p>When the data store was created.</p>
     */
    creationTime?: Date;

    /**
     * <p>The last time the data store was updated.</p>
     */
    lastUpdateTime?: Date;
}