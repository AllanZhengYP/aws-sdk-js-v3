import { DefaultsModeConfigs, ResolvedDefaultsMode } from "@aws-sdk/types";

export const loadConfigsForDefaultMode = (mode: ResolvedDefaultsMode): DefaultsModeConfigs => {
  switch (mode) {
    case "standard":
      return {
        retryMode: "standard",
        connectionTimeout: 3100,
      };
    case "in-region":
      return {
        retryMode: "standard",
        connectionTimeout: 1100,
      };
    case "cross-region":
      return {
        retryMode: "standard",
        connectionTimeout: 3100,
      };
    case "mobile":
      return {
        retryMode: "standard",
        connectionTimeout: 30000,
      };
    default:
      return {};
  }
};
