/**
 * <p/>
 */
export interface _RequestPaymentConfiguration {
  /**
   * <p>Specifies who pays for the download and request fees.</p>
   */
  Payer: "Requester" | "BucketOwner" | string;
}
export declare type _UnmarshalledRequestPaymentConfiguration = _RequestPaymentConfiguration;
