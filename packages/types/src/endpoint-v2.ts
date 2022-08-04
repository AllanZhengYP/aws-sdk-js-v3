import { AuthScheme } from "./auth";

export interface EndpointV2 {
  url: URL;
  attributes: {
    [key: string]: any;
    authSchemes?: AuthScheme[];
  };
  headers: Record<string, string>;
}

export type EndpointParameters = { [name: string]: undefined | string | boolean };
