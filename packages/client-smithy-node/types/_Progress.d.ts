/**
 * <p/>
 */
export interface _Progress {
  /**
   * <p>The current number of object bytes scanned.</p>
   */
  BytesScanned?: number;
  /**
   * <p>The current number of uncompressed object bytes processed.</p>
   */
  BytesProcessed?: number;
  /**
   * <p>The current number of bytes of records payload data returned.</p>
   */
  BytesReturned?: number;
}
export declare type _UnmarshalledProgress = _Progress;
