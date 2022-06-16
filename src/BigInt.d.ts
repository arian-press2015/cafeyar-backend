declare interface BigInt {
  /** Convert to BigInt to string from inside JSON.stringify */
  toJSON: () => string;
}
