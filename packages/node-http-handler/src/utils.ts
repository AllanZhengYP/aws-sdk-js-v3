import { Provider } from "@aws-sdk/types";

type NonFunctionTypes = string | number | bigint | boolean | symbol | undefined | object;

export const isProvider = <T>(input: T | Provider<T>): input is Provider<T> => {
  return typeof input === "function";
};

export const normalizeToProvider = <T extends NonFunctionTypes>(input: T | Provider<T>): Provider<T> => {
  if (isProvider(input)) {
    return input as Provider<T>;
  } else {
    return () => Promise.resolve(input);
  }
};
