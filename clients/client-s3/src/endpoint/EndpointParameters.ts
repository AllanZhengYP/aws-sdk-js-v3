import { EndpointParameters as __EndpointParameters } from "@aws-sdk/types";
export interface EndpointParameters extends __EndpointParameters {
  region?: string;
  bucket?: string;
  isDualstackEnabled?: boolean;
}
