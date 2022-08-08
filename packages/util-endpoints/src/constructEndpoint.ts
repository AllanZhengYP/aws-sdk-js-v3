import { isValidHostname } from "@aws-sdk/protocol-http";
import { HttpEndpoint } from "@aws-sdk/types";

import { evaluateFunction } from "./functions/evaluateFunction";
import { resolveReferenceValue } from "./resolveReferenceValue";
import { EndpointFunction, EndpointRule, Reference, TemplateString } from "./RuleSet";
import { EndpointParametersAndAssignments } from "./types";
import { isEndpointFunction, isReference } from "./utils";

export const constructEndpoint = (
  params: EndpointParametersAndAssignments,
  endpointRule: EndpointRule
): HttpEndpoint | undefined => {
  if (!endpointRule.endpoint) {
    return;
  }
  const url = populateURL(params, endpointRule.endpoint!.url);

  return {
    url,
    authSchemes: [], //TODO
    headers: {}, //TODO
  };
};

const populateURL = (
  params: EndpointParametersAndAssignments,
  model: TemplateString | Reference | EndpointFunction
): URL => {
  let template: TemplateString = "";
  if (typeof model === "string") {
    template = model;
  } else if (isEndpointFunction(model)) {
    // TODO: validate function returns an string. Might be guaranteed by model
    template = evaluateFunction(params, model) as string;
  } else if (isReference(model)) {
    // TODO: ditto
    template = resolveReferenceValue(params, model) as string;
  }
  Object.entries(params)
    .filter(([, value]) => typeof value === "string")
    .forEach(([key, value]) => {
      template = template.replace(`{${key}}`, value as string);
    });
  const url = new URL(template);
  if (isValidHostname(url.hostname)) {
    return url;
  } else {
    throw new Error(`Resolved hostname is not valid: ${url.hostname}`);
  }
};
