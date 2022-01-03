import { chain, memoize } from "@aws-sdk/property-provider";
import { Provider } from "@aws-sdk/types";

import { fromEnv, GetterFromEnv } from "./fromEnv";
import { fromSharedConfigFiles, GetterFromConfig, SharedConfigInit } from "./fromSharedConfigFiles";
import { fromStatic, FromStaticConfig } from "./fromStatic";

export type LocalConfigOptions = SharedConfigInit;

export interface LoadedConfigSelectors<T> {
  /**
   * A getter function getting the config values from all the environment
   * variables.
   */
  environmentVariableSelector: GetterFromEnv<T>;
  /**
   * A getter function getting config values associated with the inferred
   * profile from shared INI files
   */
  configFileSelector: GetterFromConfig<T>;
  /**
   * Default value or getter
   */
  default?: FromStaticConfig<T>;
  /**
   * Async function providing default value.
   * This config overwrites the value from `default` config
   */
  defaultProvider?: Provider<T>;
}

export const loadConfig = <T = string>(
  selectors: LoadedConfigSelectors<T>,
  configuration: LocalConfigOptions = {}
): Provider<T> => {
  if (
    !Object.prototype.hasOwnProperty.call(selectors, "default") &&
    !Object.prototype.hasOwnProperty.call(selectors, "defaultProvider")
  ) {
    throw new Error("Cannot infer default value");
  }
  const { environmentVariableSelector, configFileSelector, default: defaultValue, defaultProvider } = selectors;
  return memoize(
    chain(
      fromEnv(environmentVariableSelector),
      fromSharedConfigFiles(configFileSelector, configuration),
      defaultProvider ? defaultProvider : fromStatic(defaultValue!)
    )
  );
};
