import { DefaultsMode, Provider } from "@aws-sdk/types";

export const resolveDefaultsModeConfig = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  defaultsMode: Provider<DefaultsMode>
): Provider<Exclude<DefaultsMode, "auto">> => {
  // TODO: if set to "auto", resolve auto mode to "in-region", "cross-region", "standard"
  return () => Promise.resolve("standard");
};
