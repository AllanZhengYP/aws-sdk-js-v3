import { parseUrl } from "@aws-sdk/url-parser-node";
import { defaultUserAgent } from "@aws-sdk/util-user-agent-node";
import { name, version } from "./package.json";
import { ClientDefaults } from "./LexRuntimeServiceClient";
import { ClientDefaultValues as BrowserDefaults } from "./runtimeConfig.browser";

export const ClientDefaultValues: Required<ClientDefaults> = {
  ...BrowserDefaults,
  defaultUserAgent: `aws-sdk-js-v3-react-native ${name}/${version}`,
  urlParser: parseUrl,
  runtime: "react-native",
  signingName: "lex"
};