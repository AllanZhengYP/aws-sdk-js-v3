import {_IotEventsDestinationConfiguration, _UnmarshalledIotEventsDestinationConfiguration} from './_IotEventsDestinationConfiguration';

/**
 * <p>The destination to which data set contents are delivered.</p>
 */
export interface _DatasetContentDeliveryDestination {
    /**
     * <p>Configuration information for delivery of data set contents to AWS IoT Events.</p>
     */
    iotEventsDestinationConfiguration?: _IotEventsDestinationConfiguration;
}

export interface _UnmarshalledDatasetContentDeliveryDestination extends _DatasetContentDeliveryDestination {
    /**
     * <p>Configuration information for delivery of data set contents to AWS IoT Events.</p>
     */
    iotEventsDestinationConfiguration?: _UnmarshalledIotEventsDestinationConfiguration;
}