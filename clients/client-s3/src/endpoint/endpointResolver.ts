import { EndpointV2, Logger } from "@aws-sdk/types";
import { endpointProvider } from "@aws-sdk/util-endpoints";

import { EndpointParameters } from "./EndpointParameters";
import { ruleSet } from "./ruleset";

export const defaultEndpointResolver = (param: EndpointParameters, context: { logger?: Logger } = {}): EndpointV2 => {
  // TODO cache.
  return endpointProvider(param, ruleSet, context);
};
