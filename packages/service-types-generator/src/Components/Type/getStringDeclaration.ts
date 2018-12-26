import {TreeModelString} from "@aws-js-sdk-v3-prerelease/build-types";

export function getStringDeclaration(shape: TreeModelString): string {
    return shape.enum
        ? shape.enum.map(e => `'${e}'`).concat(['string']).join('|')
        : 'string';
}
