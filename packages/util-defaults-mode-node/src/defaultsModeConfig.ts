import { LoadedConfigSelectors } from "@aws-sdk/node-config-provider";
import { DefaultsMode } from "@aws-sdk/types";

const AWS_DEFAULTS_MODE_ENV = "AWS_DEFAULTS_MODE";
const AWS_DEFAULTS_MODE_CONFIG = "defaults_mode";

export const NODE_DEFAULTS_MODE_CONFIG_OPTIONS: LoadedConfigSelectors<DefaultsMode> = {
  environmentVariableSelector: (env) => {
    // TODO: validate value
    return env[AWS_DEFAULTS_MODE_ENV] as DefaultsMode;
  },
  configFileSelector: (profile) => {
    // TODO: validate value
    return profile[AWS_DEFAULTS_MODE_CONFIG] as DefaultsMode;
  },
  default: "legacy",
};
