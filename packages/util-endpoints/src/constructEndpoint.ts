import { isValidHostname } from "@aws-sdk/protocol-http";
import { EndpointV2 } from "@aws-sdk/types";

import { evaluateFunction } from "./functions/evaluateFunction";
import { resolveReferenceValue } from "./resolveReferenceValue";
import { EndpointRule, Function, Reference, TemplateString } from "./RuleSet";
import { EndpointParametersAndAssignments } from "./types";

export const constructEndpoint = (
  params: EndpointParametersAndAssignments,
  endpointRule: EndpointRule
): EndpointV2 | undefined => {
  if (!endpointRule.endpoint) {
    return;
  }
  const url = populateURL(params, endpointRule.endpoint!.url);

  return {
    url,
    attributes: {
      authSchemes: [], //TODO
    },
    headers: {}, //TODO
  };
};

const isFunction = (model: any): model is Function => typeof model["fn"] === "string";
const isReference = (model: any): model is Reference => typeof model["ref"] === "string";

const populateURL = (params: EndpointParametersAndAssignments, model: TemplateString | Reference | Function): URL => {
  let template: TemplateString = "";
  if (typeof model === "string") {
    template = model;
  } else if (isFunction(model)) {
    // TODO: validate function returns an string. Might be guarantteed by model
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
