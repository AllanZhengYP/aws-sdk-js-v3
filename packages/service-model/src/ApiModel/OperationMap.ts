import {isOperation} from "./Operation";
import {isObjectMapOf} from "./isObjectMapOf";
import {Operation, OperationMap} from '@aws-js-sdk-v3-prerelease/build-types';

/**
 * @internal
 */
export function isOperationMap(arg: any): arg is OperationMap {
    return isObjectMapOf<Operation>(arg, isOperation);
}
