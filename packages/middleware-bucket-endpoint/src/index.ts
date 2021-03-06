export * from "./bucketEndpointMiddleware";
export * from "./bucketHostname";
export * from "./configurations";
export {
  getArnResources,
  getPseudoRegion,
  getSuffixForArnEndpoint,
  validateOutpostService,
  validatePartition,
  validateAccountId,
  validateRegion,
  validateDNSHostLabel,
  validateNoDualstack,
  validateNoFIPS,
} from "./bucketHostnameUtils";
