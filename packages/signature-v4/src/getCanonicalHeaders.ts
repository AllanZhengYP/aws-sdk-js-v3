import { HttpRequest, HeaderBag } from "@aws-sdk/types";
import {
  ALWAYS_UNSIGNABLE_HEADERS,
  PROXY_HEADER_PATTERN,
  SEC_HEADER_PATTERN
} from "./constants";

/**
 * @internal
 */
export function getCanonicalHeaders(
  { headers }: HttpRequest,
  unsignableHeaders?: Set<string>
): HeaderBag {
  const canonical: HeaderBag = {};
  for (let headerName of Object.keys(headers).sort()) {
    const canonicalHeaderName = headerName.toLowerCase();
    if (
      canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS ||
      (unsignableHeaders && unsignableHeaders.has(canonicalHeaderName)) ||
      PROXY_HEADER_PATTERN.test(canonicalHeaderName) ||
      SEC_HEADER_PATTERN.test(canonicalHeaderName)
    ) {
      continue;
    }

    canonical[canonicalHeaderName] = headers[headerName]
      .trim()
      .replace(/\s+/g, " ");
  }

  return canonical;
}
