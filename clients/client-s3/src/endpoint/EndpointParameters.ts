import { EndpointParameters as __EndpointParameters } from "@aws-sdk/types";
export interface EndpointParameters extends __EndpointParameters {
  bucket?: string;
  region?: string;
  useFipsEndpoint?: boolean;
  useDualStackEndpoint?: boolean;
  endpoint?: string;
  forcePathStyle?: boolean;
  useAccelerateEndpoint?: boolean;
  disableAccessPoints?: boolean;
  disableMRAP?: boolean;
}
