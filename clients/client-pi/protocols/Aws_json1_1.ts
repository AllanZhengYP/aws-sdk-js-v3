import {
  DescribeDimensionKeysCommandInput,
  DescribeDimensionKeysCommandOutput
} from "../commands/DescribeDimensionKeysCommand";
import {
  GetResourceMetricsCommandInput,
  GetResourceMetricsCommandOutput
} from "../commands/GetResourceMetricsCommand";
import {
  DataPoint,
  DescribeDimensionKeysRequest,
  DescribeDimensionKeysResponse,
  DimensionGroup,
  DimensionKeyDescription,
  GetResourceMetricsRequest,
  GetResourceMetricsResponse,
  InternalServiceError,
  InvalidArgumentException,
  MetricKeyDataPoints,
  MetricQuery,
  NotAuthorizedException,
  ResponsePartitionKey,
  ResponseResourceMetricKey
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1DescribeDimensionKeysCommand(
  input: DescribeDimensionKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "PerformanceInsightsv20180227.DescribeDimensionKeys";
  let body: any = {};
  const wrappedBody: any = {
    DescribeDimensionKeysRequest: serializeAws_json1_1DescribeDimensionKeysRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeDimensionKeys",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetResourceMetricsCommand(
  input: GetResourceMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PerformanceInsightsv20180227.GetResourceMetrics";
  let body: any = {};
  const wrappedBody: any = {
    GetResourceMetricsRequest: serializeAws_json1_1GetResourceMetricsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetResourceMetrics",
    headers: headers,
    body: body
  });
}

export async function deserializeAws_json1_1DescribeDimensionKeysCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDimensionKeysCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeDimensionKeysCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDimensionKeysResponse(
    data.DescribeDimensionKeysResponse,
    context
  );
  const response: DescribeDimensionKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDimensionKeysResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeDimensionKeysCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDimensionKeysCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "amazonaws.pi.shared#InternalServiceError":
      response = await deserializeAws_json1_1InternalServiceErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArgumentException":
    case "amazonaws.pi.shared#InvalidArgumentException":
      response = await deserializeAws_json1_1InvalidArgumentExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotAuthorizedException":
    case "amazonaws.pi.shared#NotAuthorizedException":
      response = await deserializeAws_json1_1NotAuthorizedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `amazonaws.pi.v20180227#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetResourceMetricsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceMetricsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetResourceMetricsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetResourceMetricsResponse(
    data.GetResourceMetricsResponse,
    context
  );
  const response: GetResourceMetricsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetResourceMetricsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetResourceMetricsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceMetricsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "amazonaws.pi.shared#InternalServiceError":
      response = await deserializeAws_json1_1InternalServiceErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArgumentException":
    case "amazonaws.pi.shared#InvalidArgumentException":
      response = await deserializeAws_json1_1InvalidArgumentExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotAuthorizedException":
    case "amazonaws.pi.shared#NotAuthorizedException":
      response = await deserializeAws_json1_1NotAuthorizedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `amazonaws.pi.v20180227#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_1InternalServiceErrorResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServiceError> => {
  const deserialized: any = deserializeAws_json1_1InternalServiceError(
    output.body,
    context
  );
  const contents: InternalServiceError = {
    __type: "InternalServiceError",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidArgumentExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidArgumentException> => {
  const deserialized: any = deserializeAws_json1_1InvalidArgumentException(
    output.body,
    context
  );
  const contents: InvalidArgumentException = {
    __type: "InvalidArgumentException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1NotAuthorizedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NotAuthorizedException> => {
  const deserialized: any = deserializeAws_json1_1NotAuthorizedException(
    output.body,
    context
  );
  const contents: NotAuthorizedException = {
    __type: "NotAuthorizedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1DescribeDimensionKeysRequest = (
  input: DescribeDimensionKeysRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EndTime !== undefined) {
    bodyParams["EndTime"] = Math.round(input.EndTime.getTime() / 1000);
  }
  if (input.Filter !== undefined) {
    bodyParams["Filter"] = serializeAws_json1_1MetricQueryFilterMap(
      input.Filter,
      context
    );
  }
  if (input.GroupBy !== undefined) {
    bodyParams["GroupBy"] = serializeAws_json1_1DimensionGroup(
      input.GroupBy,
      context
    );
  }
  if (input.Identifier !== undefined) {
    bodyParams["Identifier"] = input.Identifier;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.Metric !== undefined) {
    bodyParams["Metric"] = input.Metric;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.PartitionBy !== undefined) {
    bodyParams["PartitionBy"] = serializeAws_json1_1DimensionGroup(
      input.PartitionBy,
      context
    );
  }
  if (input.PeriodInSeconds !== undefined) {
    bodyParams["PeriodInSeconds"] = input.PeriodInSeconds;
  }
  if (input.ServiceType !== undefined) {
    bodyParams["ServiceType"] = input.ServiceType;
  }
  if (input.StartTime !== undefined) {
    bodyParams["StartTime"] = Math.round(input.StartTime.getTime() / 1000);
  }
  return bodyParams;
};

const serializeAws_json1_1DimensionGroup = (
  input: DimensionGroup,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Dimensions !== undefined) {
    bodyParams["Dimensions"] = serializeAws_json1_1StringList(
      input.Dimensions,
      context
    );
  }
  if (input.Group !== undefined) {
    bodyParams["Group"] = input.Group;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  return bodyParams;
};

const serializeAws_json1_1GetResourceMetricsRequest = (
  input: GetResourceMetricsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EndTime !== undefined) {
    bodyParams["EndTime"] = Math.round(input.EndTime.getTime() / 1000);
  }
  if (input.Identifier !== undefined) {
    bodyParams["Identifier"] = input.Identifier;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.MetricQueries !== undefined) {
    bodyParams["MetricQueries"] = serializeAws_json1_1MetricQueryList(
      input.MetricQueries,
      context
    );
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.PeriodInSeconds !== undefined) {
    bodyParams["PeriodInSeconds"] = input.PeriodInSeconds;
  }
  if (input.ServiceType !== undefined) {
    bodyParams["ServiceType"] = input.ServiceType;
  }
  if (input.StartTime !== undefined) {
    bodyParams["StartTime"] = Math.round(input.StartTime.getTime() / 1000);
  }
  return bodyParams;
};

const serializeAws_json1_1MetricQuery = (
  input: MetricQuery,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Filter !== undefined) {
    bodyParams["Filter"] = serializeAws_json1_1MetricQueryFilterMap(
      input.Filter,
      context
    );
  }
  if (input.GroupBy !== undefined) {
    bodyParams["GroupBy"] = serializeAws_json1_1DimensionGroup(
      input.GroupBy,
      context
    );
  }
  if (input.Metric !== undefined) {
    bodyParams["Metric"] = input.Metric;
  }
  return bodyParams;
};

const serializeAws_json1_1MetricQueryFilterMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1MetricQueryList = (
  input: Array<MetricQuery>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1MetricQuery(entry, context)
  );
};

const serializeAws_json1_1StringList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const deserializeAws_json1_1InternalServiceError = (
  output: any,
  context: __SerdeContext
): InternalServiceError => {
  let contents: any = {
    __type: "InternalServiceError",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidArgumentException = (
  output: any,
  context: __SerdeContext
): InvalidArgumentException => {
  let contents: any = {
    __type: "InvalidArgumentException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1NotAuthorizedException = (
  output: any,
  context: __SerdeContext
): NotAuthorizedException => {
  let contents: any = {
    __type: "NotAuthorizedException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1DataPoint = (
  output: any,
  context: __SerdeContext
): DataPoint => {
  let contents: any = {
    __type: "DataPoint",
    Timestamp: undefined,
    Value: undefined
  };
  if (output.Timestamp !== undefined) {
    contents.Timestamp = new Date(
      output.Timestamp % 1 != 0
        ? Math.round(output.Timestamp * 1000)
        : output.Timestamp
    );
  }
  if (output.Value !== undefined) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1DataPointsList = (
  output: any,
  context: __SerdeContext
): Array<DataPoint> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DataPoint(entry, context)
  );
};

const deserializeAws_json1_1DescribeDimensionKeysResponse = (
  output: any,
  context: __SerdeContext
): DescribeDimensionKeysResponse => {
  let contents: any = {
    __type: "DescribeDimensionKeysResponse",
    AlignedEndTime: undefined,
    AlignedStartTime: undefined,
    Keys: undefined,
    NextToken: undefined,
    PartitionKeys: undefined
  };
  if (output.AlignedEndTime !== undefined) {
    contents.AlignedEndTime = new Date(
      output.AlignedEndTime % 1 != 0
        ? Math.round(output.AlignedEndTime * 1000)
        : output.AlignedEndTime
    );
  }
  if (output.AlignedStartTime !== undefined) {
    contents.AlignedStartTime = new Date(
      output.AlignedStartTime % 1 != 0
        ? Math.round(output.AlignedStartTime * 1000)
        : output.AlignedStartTime
    );
  }
  if (output.Keys !== undefined) {
    contents.Keys = deserializeAws_json1_1DimensionKeyDescriptionList(
      output.Keys,
      context
    );
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.PartitionKeys !== undefined) {
    contents.PartitionKeys = deserializeAws_json1_1ResponsePartitionKeyList(
      output.PartitionKeys,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DimensionKeyDescription = (
  output: any,
  context: __SerdeContext
): DimensionKeyDescription => {
  let contents: any = {
    __type: "DimensionKeyDescription",
    Dimensions: undefined,
    Partitions: undefined,
    Total: undefined
  };
  if (output.Dimensions !== undefined) {
    contents.Dimensions = deserializeAws_json1_1DimensionMap(
      output.Dimensions,
      context
    );
  }
  if (output.Partitions !== undefined) {
    contents.Partitions = deserializeAws_json1_1MetricValuesList(
      output.Partitions,
      context
    );
  }
  if (output.Total !== undefined) {
    contents.Total = output.Total;
  }
  return contents;
};

const deserializeAws_json1_1DimensionKeyDescriptionList = (
  output: any,
  context: __SerdeContext
): Array<DimensionKeyDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DimensionKeyDescription(entry, context)
  );
};

const deserializeAws_json1_1DimensionMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1GetResourceMetricsResponse = (
  output: any,
  context: __SerdeContext
): GetResourceMetricsResponse => {
  let contents: any = {
    __type: "GetResourceMetricsResponse",
    AlignedEndTime: undefined,
    AlignedStartTime: undefined,
    Identifier: undefined,
    MetricList: undefined,
    NextToken: undefined
  };
  if (output.AlignedEndTime !== undefined) {
    contents.AlignedEndTime = new Date(
      output.AlignedEndTime % 1 != 0
        ? Math.round(output.AlignedEndTime * 1000)
        : output.AlignedEndTime
    );
  }
  if (output.AlignedStartTime !== undefined) {
    contents.AlignedStartTime = new Date(
      output.AlignedStartTime % 1 != 0
        ? Math.round(output.AlignedStartTime * 1000)
        : output.AlignedStartTime
    );
  }
  if (output.Identifier !== undefined) {
    contents.Identifier = output.Identifier;
  }
  if (output.MetricList !== undefined) {
    contents.MetricList = deserializeAws_json1_1MetricKeyDataPointsList(
      output.MetricList,
      context
    );
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1MetricKeyDataPoints = (
  output: any,
  context: __SerdeContext
): MetricKeyDataPoints => {
  let contents: any = {
    __type: "MetricKeyDataPoints",
    DataPoints: undefined,
    Key: undefined
  };
  if (output.DataPoints !== undefined) {
    contents.DataPoints = deserializeAws_json1_1DataPointsList(
      output.DataPoints,
      context
    );
  }
  if (output.Key !== undefined) {
    contents.Key = deserializeAws_json1_1ResponseResourceMetricKey(
      output.Key,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1MetricKeyDataPointsList = (
  output: any,
  context: __SerdeContext
): Array<MetricKeyDataPoints> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1MetricKeyDataPoints(entry, context)
  );
};

const deserializeAws_json1_1MetricValuesList = (
  output: any,
  context: __SerdeContext
): Array<number> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ResponsePartitionKey = (
  output: any,
  context: __SerdeContext
): ResponsePartitionKey => {
  let contents: any = {
    __type: "ResponsePartitionKey",
    Dimensions: undefined
  };
  if (output.Dimensions !== undefined) {
    contents.Dimensions = deserializeAws_json1_1DimensionMap(
      output.Dimensions,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ResponsePartitionKeyList = (
  output: any,
  context: __SerdeContext
): Array<ResponsePartitionKey> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ResponsePartitionKey(entry, context)
  );
};

const deserializeAws_json1_1ResponseResourceMetricKey = (
  output: any,
  context: __SerdeContext
): ResponseResourceMetricKey => {
  let contents: any = {
    __type: "ResponseResourceMetricKey",
    Dimensions: undefined,
    Metric: undefined
  };
  if (output.Dimensions !== undefined) {
    contents.Dimensions = deserializeAws_json1_1DimensionMap(
      output.Dimensions,
      context
    );
  }
  if (output.Metric !== undefined) {
    contents.Metric = output.Metric;
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
