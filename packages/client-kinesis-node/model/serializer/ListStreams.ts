import { HttpRequest } from "@aws-sdk/protocol-http";

export function ListTablesSerializer(
  input: any,
  protocol?: string
): HttpRequest<any> {
  switch (protocol) {
    case "json_rpc":
      return ListTablesJsonRpcSerialize(input);
    default:
      throw new Error("Unknown protocol, use json_rpc");
  }
}

function ListTablesJsonRpcSerialize(input: any): HttpRequest<any> {
  return new HttpRequest({
    method: "GET",
    hostname: "kinesis.us-east-1.amazonaws.com",
    protocol: "https:",
    body: "{}",
    headers: {
      "X-Amz-Target": "Kinesis_20131202.ListStreams"
    }
  });
}
