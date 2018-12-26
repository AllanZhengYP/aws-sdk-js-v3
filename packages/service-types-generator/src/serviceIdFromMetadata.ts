import {ServiceMetadata} from '@aws-js-sdk-v3-prerelease/types';

export function serviceIdFromMetadata(metadata: ServiceMetadata): string {
    const {
        serviceAbbreviation,
        serviceFullName,
        serviceId,
    } = metadata;

    return serviceId || (
        (serviceAbbreviation || serviceFullName)
            .replace(/^(aws|amazon)/i, '')
            .trim()
    );
}
