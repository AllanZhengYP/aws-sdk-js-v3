import {SerializationModel} from "@aws-js-sdk-v3-prerelease/types";

export function requiresImport(shape: SerializationModel): boolean {
    return ['list', 'map', 'structure'].indexOf(shape.type) > -1;
}

