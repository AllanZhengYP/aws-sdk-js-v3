/**
 * <p/>
 */
export interface _Stats {
  /**
   * <p>The total number of object bytes scanned.</p>
   */
  BytesScanned?: number;
  /**
   * <p>The total number of uncompressed object bytes processed.</p>
   */
  BytesProcessed?: number;
  /**
   * <p>The total number of bytes of records payload data returned.</p>
   */
  BytesReturned?: number;
}
export declare type _UnmarshalledStats = _Stats;
