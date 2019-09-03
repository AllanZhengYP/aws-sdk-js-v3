import { HttpRequest } from "./httpRequest";
import { HttpResponse } from "./httpResponse";
import { TransferHandler } from "@aws-sdk/protocol";

export type HttpHandler<StreamType> = TransferHandler<
  HttpRequest<StreamType>,
  HttpResponse<StreamType>
>;
