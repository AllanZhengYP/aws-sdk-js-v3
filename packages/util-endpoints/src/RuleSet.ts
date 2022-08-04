export interface RuleSet {
  version: string;
  serviceId: string;
  parameters: Record<string, Parameter>;
  rules: (Rule | Function)[];
}

export type Parameter = StringParameter | BooleanParameter;

interface ParameterBase {
  builtIn?: string;
  required?: boolean;
  documentation?: string; // TODO: make interface more permissive
  deprecated?: {
    message?: string;
    since?: string;
  };
}

export interface StringParameter extends ParameterBase {
  type: "String";
  default?: string;
}

export interface BooleanParameter extends ParameterBase {
  type: "Boolean";
  default?: boolean;
}

export type Rule = EndpointRule | ErrorRule | TreeRule;

export interface EndpointRule {
  type: "endpoint";
  conditions: Condition[];
  endpoint?: Endpoint;
  documentation?: string;
}

export interface Reference {
  ref: string;
}

export interface Condition extends Function {
  assign?: string;
}

export interface Endpoint {
  url: string | Reference | Function;
  properties?: Record<string, EndpointProperty>;
  headers?: Record<string, (string | Reference | Function)[]>;
}

export type TemplateString = string;

export type EndpointProperty = TemplateString | boolean | EndpointProperty[] | { [name: string]: EndpointProperty };

export interface ErrorRule {
  type: "error";
  conditions: Condition[];
  error: TemplateString | Reference | Function;
  documentation?: string;
}

export interface TreeRule {
  type: "tree";
  conditions: Condition[];
  rules: Rule[];
  documentation?: string;
}

export interface Function {
  fn: string;
  argv: FunctionArg[];
}

export type FunctionArg = number | string | boolean | FunctionArg[] | Reference | Function;
