import { DefaultsModeConfigs, ResolvedDefaultsMode } from "@aws-sdk/types";

// TODO generate this file off sdk-default-configuration.json and copy
export const loadConfigsForDefaultMode = (mode: ResolvedDefaultsMode): DefaultsModeConfigs => {
  switch (mode) {
    case "legacy":
      return {};
    case "in-region":
      return {};
    case "cross-region":
      return {};
    case "mobile":
      return {};
    case "standard":
      return {};
    default:
      throw new Error(`Unsupported default mode ${mode}`);
  }
};
