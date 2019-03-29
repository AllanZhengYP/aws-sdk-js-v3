import {_IotEventsDestinationConfiguration} from './_IotEventsDestinationConfiguration';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _DatasetContentDeliveryDestination: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        iotEventsDestinationConfiguration: {
            shape: _IotEventsDestinationConfiguration,
        },
    },
};