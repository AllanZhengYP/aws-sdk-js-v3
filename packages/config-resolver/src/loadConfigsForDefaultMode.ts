import { DefaultsModeConfigs, ResolvedDefaultsMode } from "@aws-sdk/types";

// TODO generate this file off sdk-default-configuration.json and copy
const defaultConfig: DefaultsModeConfigs = {
  retryMode: "legacy",
  connectionTimeout: 3000,
  requestTimeout: 3000,
};

export const loadConfigsForDefaultMode = (mode: ResolvedDefaultsMode): DefaultsModeConfigs => {
  switch (mode) {
    case "legacy":
      return defaultConfig;
    case "in-region":
      return defaultConfig;
    case "cross-region":
      return defaultConfig;
    case "mobile":
      return defaultConfig;
    case "standard":
      return defaultConfig;
    default:
      throw new Error(`Unsupported default mode ${mode}`);
  }
};
