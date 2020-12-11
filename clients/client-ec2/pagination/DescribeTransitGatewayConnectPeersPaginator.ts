import { EC2 } from "../EC2";
import { EC2Client } from "../EC2Client";
import {
  DescribeTransitGatewayConnectPeersCommand,
  DescribeTransitGatewayConnectPeersCommandInput,
  DescribeTransitGatewayConnectPeersCommandOutput,
} from "../commands/DescribeTransitGatewayConnectPeersCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeTransitGatewayConnectPeersCommandInput,
  ...args: any
): Promise<DescribeTransitGatewayConnectPeersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeTransitGatewayConnectPeersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EC2,
  input: DescribeTransitGatewayConnectPeersCommandInput,
  ...args: any
): Promise<DescribeTransitGatewayConnectPeersCommandOutput> => {
  // @ts-ignore
  return await client.describeTransitGatewayConnectPeers(input, ...args);
};
export async function* paginateDescribeTransitGatewayConnectPeers(
  config: EC2PaginationConfiguration,
  input: DescribeTransitGatewayConnectPeersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeTransitGatewayConnectPeersCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeTransitGatewayConnectPeersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof EC2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EC2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EC2 | EC2Client");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}