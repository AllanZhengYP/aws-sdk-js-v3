import { HttpEndpoint, QueryParameterBag, UrlParser } from '@aws-js-sdk-v3-prerelease/types';
import { parseUrl as browserUrlParser } from '@aws-js-sdk-v3-prerelease/url-parser-browser';
import { parseUrl as nodeUrlParser } from '@aws-js-sdk-v3-prerelease/url-parser-node';

declare const URL: any;

export const parseUrl: UrlParser = typeof URL !== 'undefined'
    ? browserUrlParser
    : nodeUrlParser;
