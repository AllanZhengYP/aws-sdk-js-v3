import { BucketAlreadyExists } from "./BucketAlreadyExists";
import { BucketAlreadyOwnedByYou } from "./BucketAlreadyOwnedByYou";
export declare type CreateBucketExceptionsUnion =
  | BucketAlreadyExists
  | BucketAlreadyOwnedByYou;
