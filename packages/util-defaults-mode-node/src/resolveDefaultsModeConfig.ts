import { DefaultsMode, Provider, ResolvedDefaultsMode } from "@aws-sdk/types";

export const resolveDefaultsModeConfig = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  defaultsMode?: DefaultsMode | Provider<DefaultsMode>
): Provider<ResolvedDefaultsMode> => {
  // TODO: if set to "auto", resolve auto mode to "in-region", "cross-region", "standard"
  return () => Promise.resolve("standard");
};
