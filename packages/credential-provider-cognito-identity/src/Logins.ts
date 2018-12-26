import { Provider } from '@aws-js-sdk-v3-prerelease/types';

export interface Logins {
    [providerName: string]: string|Provider<string>;
}

export interface ResolvedLogins {
    [providerName: string]: string;
}
