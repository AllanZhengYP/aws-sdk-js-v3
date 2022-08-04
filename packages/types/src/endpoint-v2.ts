import { AuthScheme } from "./auth";

export interface HttpEndpoint {
  url: URL;
  authSchemes: AuthScheme[];
  headers: Record<string, string>;
}

export type EndpointParameters = { [name: string]: string | boolean };
