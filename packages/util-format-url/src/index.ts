import {
    HttpRequest,
    QueryParameterBag,
} from '@aws-js-sdk-v3-prerelease/types';
import { buildQueryString } from '@aws-js-sdk-v3-prerelease/querystring-builder';

export function formatUrl(request: HttpRequest): string {
    let {
        protocol, 
        path,
        hostname,
        port,
        query
    } = request;
    if(protocol && protocol.substr(-1) !== ':') {
        protocol += ':';
    }
    if (port) {
        hostname += `:${port}`;
    }
    if (path && path.charAt(0) !== '/') {
        path = `/${path}`
    }
    let queryString = query ? buildQueryString(query) : '';
    if (queryString && queryString[0] !== '?') {
        queryString = `?${queryString}`
    }
    return `${protocol}//${hostname}${path}${queryString}`
}
