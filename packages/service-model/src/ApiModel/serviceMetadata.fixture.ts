import {ServiceMetadata} from "@aws-js-sdk-v3-prerelease/types";

export const minimalValidServiceMetadata: ServiceMetadata = {
    apiVersion: 'string',
    endpointPrefix: 'string',
    protocol: 'json',
    serviceFullName: 'string',
    signatureVersion: 'v4',
    uid: 'string',
};

export const timestampValidServiceMetadata: ServiceMetadata = {
    apiVersion: 'string',
    endpointPrefix: 'string',
    protocol: 'json',
    serviceFullName: 'string',
    signatureVersion: 'v4',
    timestampFormat: 'rfc822',
    uid: 'string',
};