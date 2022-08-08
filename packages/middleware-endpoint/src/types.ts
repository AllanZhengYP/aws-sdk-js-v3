export interface EndpointParameterInstruction {
  [name: string]:
    | StaticContextParamInstruction
    | ContextParamInstruction
    | ClientContextParamInstruction
    | BuiltInParamInstruction;
}

interface StaticContextParamInstruction {
  type: "staticContextParams";
  value: string | boolean;
}

interface ContextParamInstruction {
  type: "contextParams";
  name: string; // The input structure's member name that has contextParams trait
}

interface ClientContextParamInstruction {
  type: "clientContextParams";
  name: string; // The client resolved config name that has clientContextParams trait
}

interface BuiltInParamInstruction {
  type: "builtInParams";
  name: string;
}
