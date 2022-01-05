import { DefaultsMode, Provider, ResolvedDefaultsMode } from "@aws-sdk/types";

export const resolveDefaultsModeConfig = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  defaultsMode?: DefaultsMode | Provider<DefaultsMode>
): Provider<ResolvedDefaultsMode> => {
  // TODO: throw if defaults mode is not auto or mobile
  return () => Promise.resolve("mobile");
};
