import {SerializationModel} from "@aws-sdk/types";
import {TreeModelMember} from '@aws-sdk/build-types';

export function requiresImport(shape: SerializationModel): boolean {
    return ['list', 'map', 'structure'].indexOf(shape.type) > -1;
}

export function generic(member: TreeModelMember): string {
    if (requiresImport(member.shape)) return member.shape.name;
    switch (member.shape.type) {
        case 'blob':
            return 'Uint8Array';
        case 'string':
        case 'boolean':
            return member.shape.type;
        case 'integer':
        case 'float':
            return 'number';
        case 'timestamp':
            return 'Date';
        default:
            return 'any'
    }
}

export function genericTypeName(member: TreeModelMember): string {
    return `${generic(member)}${requiresImport(member.shape) ? '_Type' : ''}`; 
}

