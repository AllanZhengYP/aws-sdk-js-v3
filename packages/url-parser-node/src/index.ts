import { parseQueryString } from '@aws-js-sdk-v3-prerelease/querystring-parser';
import { HttpEndpoint, QueryParameterBag, UrlParser } from '@aws-js-sdk-v3-prerelease/types';
import { parse } from 'url';

export const parseUrl: UrlParser = (url: string): HttpEndpoint => {
    const {
        hostname = 'localhost',
        pathname = '/',
        port,
        protocol = 'https:',
        search,
    } = parse(url);

    let query: QueryParameterBag|undefined;
    if (search) {
        query = parseQueryString(search);
    }

    return {
        hostname,
        port: port ? parseInt(port) : undefined,
        protocol,
        path: pathname,
        query,
    }
};
