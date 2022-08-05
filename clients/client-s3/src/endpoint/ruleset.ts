import { RuleSet } from "@aws-sdk/util-endpoints";

export const ruleSet: RuleSet = {
  version: "1.0",
  serviceId: "s3",
  parameters: {
    Bucket: {
      required: false,
      type: "String",
    },
    Region: {
      builtIn: "AWS::Region",
      required: false,
      type: "String",
    },
    UseFIPS: {
      builtIn: "AWS::UseFIPS",
      required: true,
      default: false,
      type: "Boolean",
    },
    UseDualStack: {
      builtIn: "AWS::UseDualStack",
      required: true,
      default: false,
      type: "Boolean",
    },
    Endpoint: {
      builtIn: "SDK::Endpoint",
      required: false,
      type: "String",
    },
    ForcePathStyle: {
      builtIn: "S3::ForcePathStyle",
      required: false,
      type: "Boolean",
    },
    Accelerate: {
      builtIn: "S3::Accelerate",
      required: true,
      default: false,
      type: "Boolean",
    },
    DisableAccessPoints: {
      required: false,
      type: "Boolean",
    },
    DisableMRAP: {
      required: false,
      type: "Boolean",
    },
  },
  rules: [
    {
      type: "tree",
      conditions: [],
      rules: [
        {
          type: "tree",
          conditions: [
            {
              fn: "isSet",
              argv: [
                {
                  ref: "Region",
                },
              ],
            },
          ],
          rules: [
            {
              type: "tree",
              conditions: [],
              rules: [
                {
                  type: "tree",
                  conditions: [
                    {
                      fn: "isSet",
                      argv: [
                        {
                          ref: "Bucket",
                        },
                      ],
                    },
                  ],
                  rules: [
                    {
                      type: "error",
                      conditions: [
                        {
                          fn: "isSet",
                          argv: [
                            {
                              ref: "Endpoint",
                            },
                          ],
                        },
                        {
                          fn: "not",
                          argv: [
                            {
                              fn: "isSet",
                              argv: [
                                {
                                  fn: "parseURL",
                                  argv: [
                                    {
                                      ref: "Endpoint",
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                      error: "Custom endpoint `{Endpoint}` was not a valid URI",
                    },
                    {
                      type: "tree",
                      conditions: [],
                      rules: [
                        {
                          type: "tree",
                          conditions: [
                            {
                              fn: "substring",
                              argv: [
                                {
                                  ref: "Bucket",
                                },
                                49,
                                50,
                                true,
                              ],
                              assign: "hardwareType",
                            },
                            {
                              fn: "substring",
                              argv: [
                                {
                                  ref: "Bucket",
                                },
                                8,
                                12,
                                true,
                              ],
                              assign: "regionPrefix",
                            },
                            {
                              fn: "substring",
                              argv: [
                                {
                                  ref: "Bucket",
                                },
                                0,
                                7,
                                true,
                              ],
                              assign: "abbaSuffix",
                            },
                            {
                              fn: "substring",
                              argv: [
                                {
                                  ref: "Bucket",
                                },
                                32,
                                49,
                                true,
                              ],
                              assign: "outpostId",
                            },
                            {
                              fn: "partition",
                              argv: [
                                {
                                  ref: "Region",
                                },
                              ],
                              assign: "regionPartition",
                            },
                            {
                              fn: "stringEquals",
                              argv: [
                                {
                                  ref: "abbaSuffix",
                                },
                                "--op-s3",
                              ],
                            },
                          ],
                          rules: [
                            {
                              type: "tree",
                              conditions: [
                                {
                                  fn: "isValidHostLabel",
                                  argv: [
                                    {
                                      ref: "outpostId",
                                    },
                                    false,
                                  ],
                                },
                              ],
                              rules: [
                                {
                                  type: "tree",
                                  conditions: [],
                                  rules: [
                                    {
                                      type: "tree",
                                      conditions: [
                                        {
                                          fn: "stringEquals",
                                          argv: [
                                            {
                                              ref: "hardwareType",
                                            },
                                            "e",
                                          ],
                                        },
                                      ],
                                      rules: [
                                        {
                                          type: "tree",
                                          conditions: [
                                            {
                                              fn: "stringEquals",
                                              argv: [
                                                {
                                                  ref: "regionPrefix",
                                                },
                                                "beta",
                                              ],
                                            },
                                          ],
                                          rules: [
                                            {
                                              type: "error",
                                              conditions: [
                                                {
                                                  fn: "not",
                                                  argv: [
                                                    {
                                                      fn: "isSet",
                                                      argv: [
                                                        {
                                                          ref: "Endpoint",
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                              ],
                                              error: "Expected a endpoint to be specified but no endpoint was found",
                                            },
                                            {
                                              type: "endpoint",
                                              conditions: [
                                                {
                                                  fn: "isSet",
                                                  argv: [
                                                    {
                                                      ref: "Endpoint",
                                                    },
                                                  ],
                                                },
                                                {
                                                  fn: "parseURL",
                                                  argv: [
                                                    {
                                                      ref: "Endpoint",
                                                    },
                                                  ],
                                                  assign: "url",
                                                },
                                              ],
                                              endpoint: {
                                                url: "https://{Bucket}.ec2.{url#authority}",
                                                properties: {
                                                  authSchemes: [
                                                    {
                                                      signingScope: "{Region}",
                                                      signingName: "s3-outposts",
                                                      name: "v4",
                                                    },
                                                  ],
                                                },
                                                headers: {},
                                              },
                                            },
                                          ],
                                        },
                                        {
                                          type: "endpoint",
                                          conditions: [],
                                          endpoint: {
                                            url: "https://{Bucket}.ec2.s3-outposts.{Region}.{regionPartition#dnsSuffix}",
                                            properties: {
                                              authSchemes: [
                                                {
                                                  signingScope: "{Region}",
                                                  signingName: "s3-outposts",
                                                  name: "v4",
                                                },
                                              ],
                                            },
                                            headers: {},
                                          },
                                        },
                                      ],
                                    },
                                    {
                                      type: "tree",
                                      conditions: [
                                        {
                                          fn: "stringEquals",
                                          argv: [
                                            {
                                              ref: "hardwareType",
                                            },
                                            "o",
                                          ],
                                        },
                                      ],
                                      rules: [
                                        {
                                          type: "tree",
                                          conditions: [
                                            {
                                              fn: "stringEquals",
                                              argv: [
                                                {
                                                  ref: "regionPrefix",
                                                },
                                                "beta",
                                              ],
                                            },
                                          ],
                                          rules: [
                                            {
                                              type: "error",
                                              conditions: [
                                                {
                                                  fn: "not",
                                                  argv: [
                                                    {
                                                      fn: "isSet",
                                                      argv: [
                                                        {
                                                          ref: "Endpoint",
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                              ],
                                              error: "Expected a endpoint to be specified but no endpoint was found",
                                            },
                                            {
                                              type: "endpoint",
                                              conditions: [
                                                {
                                                  fn: "isSet",
                                                  argv: [
                                                    {
                                                      ref: "Endpoint",
                                                    },
                                                  ],
                                                },
                                                {
                                                  fn: "parseURL",
                                                  argv: [
                                                    {
                                                      ref: "Endpoint",
                                                    },
                                                  ],
                                                  assign: "url",
                                                },
                                              ],
                                              endpoint: {
                                                url: "https://{Bucket}.op-{outpostId}.{url#authority}",
                                                properties: {
                                                  authSchemes: [
                                                    {
                                                      signingScope: "{Region}",
                                                      signingName: "s3-outposts",
                                                      name: "v4",
                                                    },
                                                  ],
                                                },
                                                headers: {},
                                              },
                                            },
                                          ],
                                        },
                                        {
                                          type: "endpoint",
                                          conditions: [],
                                          endpoint: {
                                            url: "https://{Bucket}.op-{outpostId}.s3-outposts.{Region}.{regionPartition#dnsSuffix}",
                                            properties: {
                                              authSchemes: [
                                                {
                                                  signingScope: "{Region}",
                                                  signingName: "s3-outposts",
                                                  name: "v4",
                                                },
                                              ],
                                            },
                                            headers: {},
                                          },
                                        },
                                      ],
                                    },
                                    {
                                      type: "error",
                                      conditions: [],
                                      error:
                                        'Unrecognized hardware type: "Expected hardware type o or e but got {hardwareType}"',
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              type: "error",
                              conditions: [],
                              error: "Invalid ARN: The outpost Id must only contain a-z, A-Z, 0-9 and `-`.",
                            },
                          ],
                        },
                        {
                          type: "tree",
                          conditions: [
                            {
                              fn: "isSet",
                              argv: [
                                {
                                  ref: "ForcePathStyle",
                                },
                              ],
                            },
                            {
                              fn: "booleanEquals",
                              argv: [
                                {
                                  ref: "ForcePathStyle",
                                },
                                true,
                              ],
                            },
                          ],
                          rules: [
                            {
                              type: "tree",
                              conditions: [],
                              rules: [
                                {
                                  type: "error",
                                  conditions: [
                                    {
                                      fn: "parseArn",
                                      argv: [
                                        {
                                          ref: "Bucket",
                                        },
                                      ],
                                    },
                                  ],
                                  error: "Path-style addressing cannot be used with ARN buckets",
                                },
                                {
                                  type: "tree",
                                  conditions: [],
                                  rules: [
                                    {
                                      type: "error",
                                      conditions: [
                                        {
                                          fn: "booleanEquals",
                                          argv: [
                                            {
                                              ref: "UseDualStack",
                                            },
                                            true,
                                          ],
                                        },
                                        {
                                          fn: "isSet",
                                          argv: [
                                            {
                                              ref: "Endpoint",
                                            },
                                          ],
                                        },
                                      ],
                                      error: "Cannot set dual-stack in combination with a custom endpoint.",
                                    },
                                    {
                                      type: "tree",
                                      conditions: [],
                                      rules: [
                                        {
                                          type: "tree",
                                          conditions: [
                                            {
                                              fn: "partition",
                                              argv: [
                                                {
                                                  ref: "Region",
                                                },
                                              ],
                                              assign: "partitionResult",
                                            },
                                          ],
                                          rules: [
                                            {
                                              type: "tree",
                                              conditions: [],
                                              rules: [
                                                {
                                                  type: "tree",
                                                  conditions: [
                                                    {
                                                      fn: "booleanEquals",
                                                      argv: [
                                                        {
                                                          ref: "Accelerate",
                                                        },
                                                        false,
                                                      ],
                                                    },
                                                  ],
                                                  rules: [
                                                    {
                                                      type: "tree",
                                                      conditions: [],
                                                      rules: [
                                                        {
                                                          type: "tree",
                                                          conditions: [
                                                            {
                                                              fn: "booleanEquals",
                                                              argv: [
                                                                {
                                                                  ref: "UseFIPS",
                                                                },
                                                                false,
                                                              ],
                                                            },
                                                          ],
                                                          rules: [
                                                            {
                                                              type: "tree",
                                                              conditions: [],
                                                              rules: [
                                                                {
                                                                  type: "endpoint",
                                                                  conditions: [
                                                                    {
                                                                      fn: "booleanEquals",
                                                                      argv: [
                                                                        {
                                                                          ref: "UseDualStack",
                                                                        },
                                                                        true,
                                                                      ],
                                                                    },
                                                                    {
                                                                      fn: "not",
                                                                      argv: [
                                                                        {
                                                                          fn: "isSet",
                                                                          argv: [
                                                                            {
                                                                              ref: "Endpoint",
                                                                            },
                                                                          ],
                                                                        },
                                                                      ],
                                                                    },
                                                                  ],
                                                                  endpoint: {
                                                                    url: "https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}/{Bucket}",
                                                                    properties: {
                                                                      authSchemes: [
                                                                        {
                                                                          signingScope: "{Region}",
                                                                          signingName: "s3",
                                                                          name: "v4",
                                                                        },
                                                                      ],
                                                                    },
                                                                    headers: {},
                                                                  },
                                                                },
                                                                {
                                                                  type: "endpoint",
                                                                  conditions: [
                                                                    {
                                                                      fn: "booleanEquals",
                                                                      argv: [
                                                                        {
                                                                          ref: "UseDualStack",
                                                                        },
                                                                        false,
                                                                      ],
                                                                    },
                                                                    {
                                                                      fn: "isSet",
                                                                      argv: [
                                                                        {
                                                                          ref: "Endpoint",
                                                                        },
                                                                      ],
                                                                    },
                                                                    {
                                                                      fn: "parseURL",
                                                                      argv: [
                                                                        {
                                                                          ref: "Endpoint",
                                                                        },
                                                                      ],
                                                                      assign: "url",
                                                                    },
                                                                  ],
                                                                  endpoint: {
                                                                    url: "{url#scheme}://{url#authority}{url#normalizedPath}{Bucket}",
                                                                    properties: {
                                                                      authSchemes: [
                                                                        {
                                                                          signingScope: "{Region}",
                                                                          signingName: "s3",
                                                                          name: "v4",
                                                                        },
                                                                      ],
                                                                    },
                                                                    headers: {},
                                                                  },
                                                                },
                                                                {
                                                                  type: "endpoint",
                                                                  conditions: [
                                                                    {
                                                                      fn: "booleanEquals",
                                                                      argv: [
                                                                        {
                                                                          ref: "UseDualStack",
                                                                        },
                                                                        false,
                                                                      ],
                                                                    },
                                                                    {
                                                                      fn: "not",
                                                                      argv: [
                                                                        {
                                                                          fn: "isSet",
                                                                          argv: [
                                                                            {
                                                                              ref: "Endpoint",
                                                                            },
                                                                          ],
                                                                        },
                                                                      ],
                                                                    },
                                                                  ],
                                                                  endpoint: {
                                                                    url: "https://s3.{Region}.{partitionResult#dnsSuffix}/{Bucket}",
                                                                    properties: {
                                                                      authSchemes: [
                                                                        {
                                                                          signingScope: "{Region}",
                                                                          signingName: "s3",
                                                                          name: "v4",
                                                                        },
                                                                      ],
                                                                    },
                                                                    headers: {},
                                                                  },
                                                                },
                                                              ],
                                                            },
                                                          ],
                                                        },
                                                        {
                                                          type: "error",
                                                          conditions: [],
                                                          error: "Path-style addressing cannot be used with FIPS",
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                                {
                                                  type: "error",
                                                  conditions: [],
                                                  error: "Path-style addressing cannot be used with S3 Accelerate",
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          type: "error",
                                          conditions: [],
                                          error: "A valid partition could not be determined",
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "tree",
                          conditions: [
                            {
                              fn: "isValidHostLabel",
                              argv: [
                                {
                                  ref: "Bucket",
                                },
                                true,
                              ],
                            },
                          ],
                          rules: [
                            {
                              type: "tree",
                              conditions: [
                                {
                                  fn: "partition",
                                  argv: [
                                    {
                                      ref: "Region",
                                    },
                                  ],
                                  assign: "partitionResult",
                                },
                              ],
                              rules: [
                                {
                                  type: "tree",
                                  conditions: [],
                                  rules: [
                                    {
                                      type: "tree",
                                      conditions: [
                                        {
                                          fn: "isValidHostLabel",
                                          argv: [
                                            {
                                              ref: "Region",
                                            },
                                            false,
                                          ],
                                        },
                                      ],
                                      rules: [
                                        {
                                          type: "tree",
                                          conditions: [],
                                          rules: [
                                            {
                                              type: "error",
                                              conditions: [
                                                {
                                                  fn: "booleanEquals",
                                                  argv: [
                                                    {
                                                      ref: "UseFIPS",
                                                    },
                                                    true,
                                                  ],
                                                },
                                                {
                                                  fn: "stringEquals",
                                                  argv: [
                                                    {
                                                      fn: "getAttr",
                                                      argv: [
                                                        {
                                                          ref: "partitionResult",
                                                        },
                                                        "name",
                                                      ],
                                                    },
                                                    "aws-cn",
                                                  ],
                                                },
                                              ],
                                              error: "Partition does not support FIPS",
                                            },
                                            {
                                              type: "tree",
                                              conditions: [],
                                              rules: [
                                                {
                                                  type: "error",
                                                  conditions: [
                                                    {
                                                      fn: "booleanEquals",
                                                      argv: [
                                                        {
                                                          ref: "Accelerate",
                                                        },
                                                        true,
                                                      ],
                                                    },
                                                    {
                                                      fn: "booleanEquals",
                                                      argv: [
                                                        {
                                                          ref: "UseFIPS",
                                                        },
                                                        true,
                                                      ],
                                                    },
                                                  ],
                                                  error: "Accelerate cannot be used with FIPS",
                                                },
                                                {
                                                  type: "tree",
                                                  conditions: [],
                                                  rules: [
                                                    {
                                                      type: "error",
                                                      conditions: [
                                                        {
                                                          fn: "booleanEquals",
                                                          argv: [
                                                            {
                                                              ref: "Accelerate",
                                                            },
                                                            true,
                                                          ],
                                                        },
                                                        {
                                                          fn: "stringEquals",
                                                          argv: [
                                                            {
                                                              fn: "getAttr",
                                                              argv: [
                                                                {
                                                                  ref: "partitionResult",
                                                                },
                                                                "name",
                                                              ],
                                                            },
                                                            "aws-cn",
                                                          ],
                                                        },
                                                      ],
                                                      error: "S3 Accelerate cannot be used in this region",
                                                    },
                                                    {
                                                      type: "tree",
                                                      conditions: [],
                                                      rules: [
                                                        {
                                                          type: "error",
                                                          conditions: [
                                                            {
                                                              fn: "isSet",
                                                              argv: [
                                                                {
                                                                  ref: "Endpoint",
                                                                },
                                                              ],
                                                            },
                                                            {
                                                              fn: "booleanEquals",
                                                              argv: [
                                                                {
                                                                  ref: "UseDualStack",
                                                                },
                                                                true,
                                                              ],
                                                            },
                                                          ],
                                                          error:
                                                            "Host override cannot be combined with Dualstack, FIPS, or S3 Accelerate",
                                                        },
                                                        {
                                                          type: "tree",
                                                          conditions: [],
                                                          rules: [
                                                            {
                                                              type: "error",
                                                              conditions: [
                                                                {
                                                                  fn: "isSet",
                                                                  argv: [
                                                                    {
                                                                      ref: "Endpoint",
                                                                    },
                                                                  ],
                                                                },
                                                                {
                                                                  fn: "booleanEquals",
                                                                  argv: [
                                                                    {
                                                                      ref: "UseFIPS",
                                                                    },
                                                                    true,
                                                                  ],
                                                                },
                                                              ],
                                                              error:
                                                                "Host override cannot be combined with Dualstack, FIPS, or S3 Accelerate",
                                                            },
                                                            {
                                                              type: "tree",
                                                              conditions: [],
                                                              rules: [
                                                                {
                                                                  type: "error",
                                                                  conditions: [
                                                                    {
                                                                      fn: "isSet",
                                                                      argv: [
                                                                        {
                                                                          ref: "Endpoint",
                                                                        },
                                                                      ],
                                                                    },
                                                                    {
                                                                      fn: "booleanEquals",
                                                                      argv: [
                                                                        {
                                                                          ref: "Accelerate",
                                                                        },
                                                                        true,
                                                                      ],
                                                                    },
                                                                  ],
                                                                  error:
                                                                    "Host override cannot be combined with Dualstack, FIPS, or S3 Accelerate",
                                                                },
                                                                {
                                                                  type: "tree",
                                                                  conditions: [],
                                                                  rules: [
                                                                    {
                                                                      type: "endpoint",
                                                                      conditions: [
                                                                        {
                                                                          fn: "booleanEquals",
                                                                          argv: [
                                                                            {
                                                                              ref: "UseDualStack",
                                                                            },
                                                                            true,
                                                                          ],
                                                                        },
                                                                        {
                                                                          fn: "booleanEquals",
                                                                          argv: [
                                                                            {
                                                                              ref: "UseFIPS",
                                                                            },
                                                                            true,
                                                                          ],
                                                                        },
                                                                        {
                                                                          fn: "booleanEquals",
                                                                          argv: [
                                                                            {
                                                                              ref: "Accelerate",
                                                                            },
                                                                            false,
                                                                          ],
                                                                        },
                                                                        {
                                                                          fn: "not",
                                                                          argv: [
                                                                            {
                                                                              fn: "isSet",
                                                                              argv: [
                                                                                {
                                                                                  ref: "Endpoint",
                                                                                },
                                                                              ],
                                                                            },
                                                                          ],
                                                                        },
                                                                      ],
                                                                      endpoint: {
                                                                        url: "https://{Bucket}.s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}",
                                                                        properties: {
                                                                          authSchemes: [
                                                                            {
                                                                              signingScope: "{Region}",
                                                                              signingName: "s3",
                                                                              name: "v4",
                                                                            },
                                                                          ],
                                                                        },
                                                                        headers: {},
                                                                      },
                                                                    },
                                                                    {
                                                                      type: "endpoint",
                                                                      conditions: [
                                                                        {
                                                                          fn: "booleanEquals",
                                                                          argv: [
                                                                            {
                                                                              ref: "UseDualStack",
                                                                            },
                                                                            false,
                                                                          ],
                                                                        },
                                                                        {
                                                                          fn: "booleanEquals",
                                                                          argv: [
                                                                            {
                                                                              ref: "UseFIPS",
                                                                            },
                                                                            true,
                                                                          ],
                                                                        },
                                                                        {
                                                                          fn: "booleanEquals",
                                                                          argv: [
                                                                            {
                                                                              ref: "Accelerate",
                                                                            },
                                                                            false,
                                                                          ],
                                                                        },
                                                                        {
                                                                          fn: "not",
                                                                          argv: [
                                                                            {
                                                                              fn: "isSet",
                                                                              argv: [
                                                                                {
                                                                                  ref: "Endpoint",
                                                                                },
                                                                              ],
                                                                            },
                                                                          ],
                                                                        },
                                                                      ],
                                                                      endpoint: {
                                                                        url: "https://{Bucket}.s3-fips.{Region}.{partitionResult#dnsSuffix}",
                                                                        properties: {
                                                                          authSchemes: [
                                                                            {
                                                                              signingScope: "{Region}",
                                                                              signingName: "s3",
                                                                              name: "v4",
                                                                            },
                                                                          ],
                                                                        },
                                                                        headers: {},
                                                                      },
                                                                    },
                                                                    {
                                                                      type: "endpoint",
                                                                      conditions: [
                                                                        {
                                                                          fn: "booleanEquals",
                                                                          argv: [
                                                                            {
                                                                              ref: "UseDualStack",
                                                                            },
                                                                            true,
                                                                          ],
                                                                        },
                                                                        {
                                                                          fn: "booleanEquals",
                                                                          argv: [
                                                                            {
                                                                              ref: "UseFIPS",
                                                                            },
                                                                            false,
                                                                          ],
                                                                        },
                                                                        {
                                                                          fn: "booleanEquals",
                                                                          argv: [
                                                                            {
                                                                              ref: "Accelerate",
                                                                            },
                                                                            true,
                                                                          ],
                                                                        },
                                                                        {
                                                                          fn: "not",
                                                                          argv: [
                                                                            {
                                                                              fn: "isSet",
                                                                              argv: [
                                                                                {
                                                                                  ref: "Endpoint",
                                                                                },
                                                                              ],
                                                                            },
                                                                          ],
                                                                        },
                                                                      ],
                                                                      endpoint: {
                                                                        url: "https://{Bucket}.s3-accelerate.dualstack.{partitionResult#dnsSuffix}",
                                                                        properties: {
                                                                          authSchemes: [
                                                                            {
                                                                              signingScope: "{Region}",
                                                                              signingName: "s3",
                                                                              name: "v4",
                                                                            },
                                                                          ],
                                                                        },
                                                                        headers: {},
                                                                      },
                                                                    },
                                                                    {
                                                                      type: "endpoint",
                                                                      conditions: [
                                                                        {
                                                                          fn: "booleanEquals",
                                                                          argv: [
                                                                            {
                                                                              ref: "UseDualStack",
                                                                            },
                                                                            true,
                                                                          ],
                                                                        },
                                                                        {
                                                                          fn: "booleanEquals",
                                                                          argv: [
                                                                            {
                                                                              ref: "UseFIPS",
                                                                            },
                                                                            false,
                                                                          ],
                                                                        },
                                                                        {
                                                                          fn: "booleanEquals",
                                                                          argv: [
                                                                            {
                                                                              ref: "Accelerate",
                                                                            },
                                                                            false,
                                                                          ],
                                                                        },
                                                                        {
                                                                          fn: "not",
                                                                          argv: [
                                                                            {
                                                                              fn: "isSet",
                                                                              argv: [
                                                                                {
                                                                                  ref: "Endpoint",
                                                                                },
                                                                              ],
                                                                            },
                                                                          ],
                                                                        },
                                                                      ],
                                                                      endpoint: {
                                                                        url: "https://{Bucket}.s3.dualstack.{Region}.{partitionResult#dnsSuffix}",
                                                                        properties: {
                                                                          authSchemes: [
                                                                            {
                                                                              signingScope: "{Region}",
                                                                              signingName: "s3",
                                                                              name: "v4",
                                                                            },
                                                                          ],
                                                                        },
                                                                        headers: {},
                                                                      },
                                                                    },
                                                                    {
                                                                      type: "endpoint",
                                                                      conditions: [
                                                                        {
                                                                          fn: "booleanEquals",
                                                                          argv: [
                                                                            {
                                                                              ref: "UseDualStack",
                                                                            },
                                                                            false,
                                                                          ],
                                                                        },
                                                                        {
                                                                          fn: "booleanEquals",
                                                                          argv: [
                                                                            {
                                                                              ref: "UseFIPS",
                                                                            },
                                                                            false,
                                                                          ],
                                                                        },
                                                                        {
                                                                          fn: "booleanEquals",
                                                                          argv: [
                                                                            {
                                                                              ref: "Accelerate",
                                                                            },
                                                                            false,
                                                                          ],
                                                                        },
                                                                        {
                                                                          fn: "isSet",
                                                                          argv: [
                                                                            {
                                                                              ref: "Endpoint",
                                                                            },
                                                                          ],
                                                                        },
                                                                        {
                                                                          fn: "parseURL",
                                                                          argv: [
                                                                            {
                                                                              ref: "Endpoint",
                                                                            },
                                                                          ],
                                                                          assign: "url",
                                                                        },
                                                                        {
                                                                          fn: "booleanEquals",
                                                                          argv: [
                                                                            {
                                                                              fn: "getAttr",
                                                                              argv: [
                                                                                {
                                                                                  ref: "url",
                                                                                },
                                                                                "isIp",
                                                                              ],
                                                                            },
                                                                            true,
                                                                          ],
                                                                        },
                                                                      ],
                                                                      endpoint: {
                                                                        url: "{url#scheme}://{url#authority}{url#normalizedPath}{Bucket}",
                                                                        properties: {
                                                                          authSchemes: [
                                                                            {
                                                                              signingScope: "{Region}",
                                                                              signingName: "s3",
                                                                              name: "v4",
                                                                            },
                                                                          ],
                                                                        },
                                                                        headers: {},
                                                                      },
                                                                    },
                                                                    {
                                                                      type: "endpoint",
                                                                      conditions: [
                                                                        {
                                                                          fn: "booleanEquals",
                                                                          argv: [
                                                                            {
                                                                              ref: "UseDualStack",
                                                                            },
                                                                            false,
                                                                          ],
                                                                        },
                                                                        {
                                                                          fn: "booleanEquals",
                                                                          argv: [
                                                                            {
                                                                              ref: "UseFIPS",
                                                                            },
                                                                            false,
                                                                          ],
                                                                        },
                                                                        {
                                                                          fn: "booleanEquals",
                                                                          argv: [
                                                                            {
                                                                              ref: "Accelerate",
                                                                            },
                                                                            false,
                                                                          ],
                                                                        },
                                                                        {
                                                                          fn: "isSet",
                                                                          argv: [
                                                                            {
                                                                              ref: "Endpoint",
                                                                            },
                                                                          ],
                                                                        },
                                                                        {
                                                                          fn: "parseURL",
                                                                          argv: [
                                                                            {
                                                                              ref: "Endpoint",
                                                                            },
                                                                          ],
                                                                          assign: "url",
                                                                        },
                                                                        {
                                                                          fn: "booleanEquals",
                                                                          argv: [
                                                                            {
                                                                              fn: "getAttr",
                                                                              argv: [
                                                                                {
                                                                                  ref: "url",
                                                                                },
                                                                                "isIp",
                                                                              ],
                                                                            },
                                                                            false,
                                                                          ],
                                                                        },
                                                                      ],
                                                                      endpoint: {
                                                                        url: "{url#scheme}://{Bucket}.{url#authority}{url#path}",
                                                                        properties: {
                                                                          authSchemes: [
                                                                            {
                                                                              signingScope: "{Region}",
                                                                              signingName: "s3",
                                                                              name: "v4",
                                                                            },
                                                                          ],
                                                                        },
                                                                        headers: {},
                                                                      },
                                                                    },
                                                                    {
                                                                      type: "endpoint",
                                                                      conditions: [
                                                                        {
                                                                          fn: "booleanEquals",
                                                                          argv: [
                                                                            {
                                                                              ref: "UseDualStack",
                                                                            },
                                                                            false,
                                                                          ],
                                                                        },
                                                                        {
                                                                          fn: "booleanEquals",
                                                                          argv: [
                                                                            {
                                                                              ref: "UseFIPS",
                                                                            },
                                                                            false,
                                                                          ],
                                                                        },
                                                                        {
                                                                          fn: "booleanEquals",
                                                                          argv: [
                                                                            {
                                                                              ref: "Accelerate",
                                                                            },
                                                                            true,
                                                                          ],
                                                                        },
                                                                        {
                                                                          fn: "not",
                                                                          argv: [
                                                                            {
                                                                              fn: "isSet",
                                                                              argv: [
                                                                                {
                                                                                  ref: "Endpoint",
                                                                                },
                                                                              ],
                                                                            },
                                                                          ],
                                                                        },
                                                                      ],
                                                                      endpoint: {
                                                                        url: "https://{Bucket}.s3-accelerate.{partitionResult#dnsSuffix}",
                                                                        properties: {
                                                                          authSchemes: [
                                                                            {
                                                                              signingScope: "{Region}",
                                                                              signingName: "s3",
                                                                              name: "v4",
                                                                            },
                                                                          ],
                                                                        },
                                                                        headers: {},
                                                                      },
                                                                    },
                                                                    {
                                                                      type: "endpoint",
                                                                      conditions: [
                                                                        {
                                                                          fn: "booleanEquals",
                                                                          argv: [
                                                                            {
                                                                              ref: "UseDualStack",
                                                                            },
                                                                            false,
                                                                          ],
                                                                        },
                                                                        {
                                                                          fn: "booleanEquals",
                                                                          argv: [
                                                                            {
                                                                              ref: "UseFIPS",
                                                                            },
                                                                            false,
                                                                          ],
                                                                        },
                                                                        {
                                                                          fn: "booleanEquals",
                                                                          argv: [
                                                                            {
                                                                              ref: "Accelerate",
                                                                            },
                                                                            false,
                                                                          ],
                                                                        },
                                                                        {
                                                                          fn: "not",
                                                                          argv: [
                                                                            {
                                                                              fn: "isSet",
                                                                              argv: [
                                                                                {
                                                                                  ref: "Endpoint",
                                                                                },
                                                                              ],
                                                                            },
                                                                          ],
                                                                        },
                                                                      ],
                                                                      endpoint: {
                                                                        url: "https://{Bucket}.s3.{Region}.{partitionResult#dnsSuffix}",
                                                                        properties: {
                                                                          authSchemes: [
                                                                            {
                                                                              signingScope: "{Region}",
                                                                              signingName: "s3",
                                                                              name: "v4",
                                                                            },
                                                                          ],
                                                                        },
                                                                        headers: {},
                                                                      },
                                                                    },
                                                                  ],
                                                                },
                                                              ],
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      type: "error",
                                      conditions: [],
                                      error: "Region was not a valid host label",
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              type: "error",
                              conditions: [],
                              error: "A valid partition could not be determined",
                            },
                          ],
                        },
                        {
                          type: "tree",
                          conditions: [
                            {
                              fn: "parseArn",
                              argv: [
                                {
                                  ref: "Bucket",
                                },
                              ],
                              assign: "bucketArn",
                            },
                          ],
                          rules: [
                            {
                              type: "tree",
                              conditions: [
                                {
                                  fn: "getAttr",
                                  argv: [
                                    {
                                      ref: "bucketArn",
                                    },
                                    "resourceId[0]",
                                  ],
                                  assign: "arnType",
                                },
                              ],
                              rules: [
                                {
                                  type: "tree",
                                  conditions: [],
                                  rules: [
                                    {
                                      type: "tree",
                                      conditions: [
                                        {
                                          fn: "stringEquals",
                                          argv: [
                                            {
                                              ref: "arnType",
                                            },
                                            "accesspoint",
                                          ],
                                        },
                                      ],
                                      rules: [
                                        {
                                          type: "tree",
                                          conditions: [
                                            {
                                              fn: "getAttr",
                                              argv: [
                                                {
                                                  ref: "bucketArn",
                                                },
                                                "resourceId[1]",
                                              ],
                                              assign: "accessPointName",
                                            },
                                          ],
                                          rules: [
                                            {
                                              type: "tree",
                                              conditions: [],
                                              rules: [
                                                {
                                                  type: "tree",
                                                  conditions: [
                                                    {
                                                      fn: "getAttr",
                                                      argv: [
                                                        {
                                                          ref: "bucketArn",
                                                        },
                                                        "region",
                                                      ],
                                                    },
                                                  ],
                                                  rules: [
                                                    {
                                                      type: "tree",
                                                      conditions: [
                                                        {
                                                          fn: "stringEquals",
                                                          argv: [
                                                            {
                                                              ref: "arnType",
                                                            },
                                                            "accesspoint",
                                                          ],
                                                        },
                                                      ],
                                                      rules: [
                                                        {
                                                          type: "tree",
                                                          conditions: [
                                                            {
                                                              fn: "getAttr",
                                                              argv: [
                                                                {
                                                                  ref: "bucketArn",
                                                                },
                                                                "region",
                                                              ],
                                                            },
                                                          ],
                                                          rules: [
                                                            {
                                                              type: "tree",
                                                              conditions: [],
                                                              rules: [
                                                                {
                                                                  type: "error",
                                                                  conditions: [
                                                                    {
                                                                      fn: "isSet",
                                                                      argv: [
                                                                        {
                                                                          ref: "DisableAccessPoints",
                                                                        },
                                                                      ],
                                                                    },
                                                                    {
                                                                      fn: "booleanEquals",
                                                                      argv: [
                                                                        {
                                                                          ref: "DisableAccessPoints",
                                                                        },
                                                                        true,
                                                                      ],
                                                                    },
                                                                  ],
                                                                  error:
                                                                    "Access points are not supported for this operation",
                                                                },
                                                                {
                                                                  type: "tree",
                                                                  conditions: [],
                                                                  rules: [
                                                                    {
                                                                      type: "tree",
                                                                      conditions: [
                                                                        {
                                                                          fn: "not",
                                                                          argv: [
                                                                            {
                                                                              fn: "isSet",
                                                                              argv: [
                                                                                {
                                                                                  fn: "getAttr",
                                                                                  argv: [
                                                                                    {
                                                                                      ref: "bucketArn",
                                                                                    },
                                                                                    "resourceId[2]",
                                                                                  ],
                                                                                },
                                                                              ],
                                                                            },
                                                                          ],
                                                                        },
                                                                      ],
                                                                      rules: [
                                                                        {
                                                                          type: "tree",
                                                                          conditions: [],
                                                                          rules: [
                                                                            {
                                                                              type: "tree",
                                                                              conditions: [
                                                                                {
                                                                                  fn: "partition",
                                                                                  argv: [
                                                                                    {
                                                                                      fn: "getAttr",
                                                                                      argv: [
                                                                                        {
                                                                                          ref: "bucketArn",
                                                                                        },
                                                                                        "region",
                                                                                      ],
                                                                                    },
                                                                                  ],
                                                                                  assign: "bucketPartition",
                                                                                },
                                                                              ],
                                                                              rules: [
                                                                                {
                                                                                  type: "tree",
                                                                                  conditions: [],
                                                                                  rules: [
                                                                                    {
                                                                                      type: "tree",
                                                                                      conditions: [
                                                                                        {
                                                                                          fn: "stringEquals",
                                                                                          argv: [
                                                                                            {
                                                                                              fn: "getAttr",
                                                                                              argv: [
                                                                                                {
                                                                                                  ref: "bucketArn",
                                                                                                },
                                                                                                "service",
                                                                                              ],
                                                                                            },
                                                                                            "s3",
                                                                                          ],
                                                                                        },
                                                                                      ],
                                                                                      rules: [
                                                                                        {
                                                                                          type: "tree",
                                                                                          conditions: [],
                                                                                          rules: [
                                                                                            {
                                                                                              type: "tree",
                                                                                              conditions: [
                                                                                                {
                                                                                                  fn: "isValidHostLabel",
                                                                                                  argv: [
                                                                                                    {
                                                                                                      fn: "getAttr",
                                                                                                      argv: [
                                                                                                        {
                                                                                                          ref: "bucketArn",
                                                                                                        },
                                                                                                        "accountId",
                                                                                                      ],
                                                                                                    },
                                                                                                    false,
                                                                                                  ],
                                                                                                },
                                                                                              ],
                                                                                              rules: [
                                                                                                {
                                                                                                  type: "tree",
                                                                                                  conditions: [],
                                                                                                  rules: [
                                                                                                    {
                                                                                                      type: "tree",
                                                                                                      conditions: [
                                                                                                        {
                                                                                                          fn: "isValidHostLabel",
                                                                                                          argv: [
                                                                                                            {
                                                                                                              ref: "accessPointName",
                                                                                                            },
                                                                                                            false,
                                                                                                          ],
                                                                                                        },
                                                                                                      ],
                                                                                                      rules: [
                                                                                                        {
                                                                                                          type: "tree",
                                                                                                          conditions:
                                                                                                            [],
                                                                                                          rules: [
                                                                                                            {
                                                                                                              type: "error",
                                                                                                              conditions:
                                                                                                                [
                                                                                                                  {
                                                                                                                    fn: "booleanEquals",
                                                                                                                    argv: [
                                                                                                                      {
                                                                                                                        ref: "Accelerate",
                                                                                                                      },
                                                                                                                      true,
                                                                                                                    ],
                                                                                                                  },
                                                                                                                ],
                                                                                                              error:
                                                                                                                "Access Points do not support S3 Accelerate",
                                                                                                            },
                                                                                                            {
                                                                                                              type: "tree",
                                                                                                              conditions:
                                                                                                                [],
                                                                                                              rules: [
                                                                                                                {
                                                                                                                  type: "error",
                                                                                                                  conditions:
                                                                                                                    [
                                                                                                                      {
                                                                                                                        fn: "booleanEquals",
                                                                                                                        argv: [
                                                                                                                          {
                                                                                                                            ref: "UseFIPS",
                                                                                                                          },
                                                                                                                          true,
                                                                                                                        ],
                                                                                                                      },
                                                                                                                      {
                                                                                                                        fn: "stringEquals",
                                                                                                                        argv: [
                                                                                                                          {
                                                                                                                            fn: "getAttr",
                                                                                                                            argv: [
                                                                                                                              {
                                                                                                                                ref: "bucketPartition",
                                                                                                                              },
                                                                                                                              "name",
                                                                                                                            ],
                                                                                                                          },
                                                                                                                          "aws-cn",
                                                                                                                        ],
                                                                                                                      },
                                                                                                                    ],
                                                                                                                  error:
                                                                                                                    "Partition does not support FIPS",
                                                                                                                },
                                                                                                                {
                                                                                                                  type: "tree",
                                                                                                                  conditions:
                                                                                                                    [],
                                                                                                                  rules:
                                                                                                                    [
                                                                                                                      {
                                                                                                                        type: "error",
                                                                                                                        conditions:
                                                                                                                          [
                                                                                                                            {
                                                                                                                              fn: "booleanEquals",
                                                                                                                              argv: [
                                                                                                                                {
                                                                                                                                  ref: "UseDualStack",
                                                                                                                                },
                                                                                                                                true,
                                                                                                                              ],
                                                                                                                            },
                                                                                                                            {
                                                                                                                              fn: "isSet",
                                                                                                                              argv: [
                                                                                                                                {
                                                                                                                                  ref: "Endpoint",
                                                                                                                                },
                                                                                                                              ],
                                                                                                                            },
                                                                                                                          ],
                                                                                                                        error:
                                                                                                                          "DualStack cannot be combined with a Host override (PrivateLink)",
                                                                                                                      },
                                                                                                                      {
                                                                                                                        type: "tree",
                                                                                                                        conditions:
                                                                                                                          [],
                                                                                                                        rules:
                                                                                                                          [
                                                                                                                            {
                                                                                                                              type: "endpoint",
                                                                                                                              conditions:
                                                                                                                                [
                                                                                                                                  {
                                                                                                                                    fn: "booleanEquals",
                                                                                                                                    argv: [
                                                                                                                                      {
                                                                                                                                        ref: "UseFIPS",
                                                                                                                                      },
                                                                                                                                      true,
                                                                                                                                    ],
                                                                                                                                  },
                                                                                                                                  {
                                                                                                                                    fn: "booleanEquals",
                                                                                                                                    argv: [
                                                                                                                                      {
                                                                                                                                        ref: "UseDualStack",
                                                                                                                                      },
                                                                                                                                      true,
                                                                                                                                    ],
                                                                                                                                  },
                                                                                                                                ],
                                                                                                                              endpoint:
                                                                                                                                {
                                                                                                                                  url: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint-fips.dualstack.{bucketArn#region}.{bucketPartition#dnsSuffix}",
                                                                                                                                  properties:
                                                                                                                                    {
                                                                                                                                      authSchemes:
                                                                                                                                        [
                                                                                                                                          {
                                                                                                                                            signingScope:
                                                                                                                                              "{bucketArn#region}",
                                                                                                                                            signingName:
                                                                                                                                              "s3",
                                                                                                                                            name: "v4",
                                                                                                                                          },
                                                                                                                                        ],
                                                                                                                                    },
                                                                                                                                  headers:
                                                                                                                                    {},
                                                                                                                                },
                                                                                                                            },
                                                                                                                            {
                                                                                                                              type: "endpoint",
                                                                                                                              conditions:
                                                                                                                                [
                                                                                                                                  {
                                                                                                                                    fn: "booleanEquals",
                                                                                                                                    argv: [
                                                                                                                                      {
                                                                                                                                        ref: "UseFIPS",
                                                                                                                                      },
                                                                                                                                      true,
                                                                                                                                    ],
                                                                                                                                  },
                                                                                                                                  {
                                                                                                                                    fn: "booleanEquals",
                                                                                                                                    argv: [
                                                                                                                                      {
                                                                                                                                        ref: "UseDualStack",
                                                                                                                                      },
                                                                                                                                      false,
                                                                                                                                    ],
                                                                                                                                  },
                                                                                                                                ],
                                                                                                                              endpoint:
                                                                                                                                {
                                                                                                                                  url: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint-fips.{bucketArn#region}.{bucketPartition#dnsSuffix}",
                                                                                                                                  properties:
                                                                                                                                    {
                                                                                                                                      authSchemes:
                                                                                                                                        [
                                                                                                                                          {
                                                                                                                                            signingScope:
                                                                                                                                              "{bucketArn#region}",
                                                                                                                                            signingName:
                                                                                                                                              "s3",
                                                                                                                                            name: "v4",
                                                                                                                                          },
                                                                                                                                        ],
                                                                                                                                    },
                                                                                                                                  headers:
                                                                                                                                    {},
                                                                                                                                },
                                                                                                                            },
                                                                                                                            {
                                                                                                                              type: "endpoint",
                                                                                                                              conditions:
                                                                                                                                [
                                                                                                                                  {
                                                                                                                                    fn: "booleanEquals",
                                                                                                                                    argv: [
                                                                                                                                      {
                                                                                                                                        ref: "UseFIPS",
                                                                                                                                      },
                                                                                                                                      false,
                                                                                                                                    ],
                                                                                                                                  },
                                                                                                                                  {
                                                                                                                                    fn: "booleanEquals",
                                                                                                                                    argv: [
                                                                                                                                      {
                                                                                                                                        ref: "UseDualStack",
                                                                                                                                      },
                                                                                                                                      true,
                                                                                                                                    ],
                                                                                                                                  },
                                                                                                                                ],
                                                                                                                              endpoint:
                                                                                                                                {
                                                                                                                                  url: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint.dualstack.{bucketArn#region}.{bucketPartition#dnsSuffix}",
                                                                                                                                  properties:
                                                                                                                                    {
                                                                                                                                      authSchemes:
                                                                                                                                        [
                                                                                                                                          {
                                                                                                                                            signingScope:
                                                                                                                                              "{bucketArn#region}",
                                                                                                                                            signingName:
                                                                                                                                              "s3",
                                                                                                                                            name: "v4",
                                                                                                                                          },
                                                                                                                                        ],
                                                                                                                                    },
                                                                                                                                  headers:
                                                                                                                                    {},
                                                                                                                                },
                                                                                                                            },
                                                                                                                            {
                                                                                                                              type: "endpoint",
                                                                                                                              conditions:
                                                                                                                                [
                                                                                                                                  {
                                                                                                                                    fn: "booleanEquals",
                                                                                                                                    argv: [
                                                                                                                                      {
                                                                                                                                        ref: "UseFIPS",
                                                                                                                                      },
                                                                                                                                      false,
                                                                                                                                    ],
                                                                                                                                  },
                                                                                                                                  {
                                                                                                                                    fn: "booleanEquals",
                                                                                                                                    argv: [
                                                                                                                                      {
                                                                                                                                        ref: "UseDualStack",
                                                                                                                                      },
                                                                                                                                      false,
                                                                                                                                    ],
                                                                                                                                  },
                                                                                                                                  {
                                                                                                                                    fn: "isSet",
                                                                                                                                    argv: [
                                                                                                                                      {
                                                                                                                                        ref: "Endpoint",
                                                                                                                                      },
                                                                                                                                    ],
                                                                                                                                  },
                                                                                                                                  {
                                                                                                                                    fn: "parseURL",
                                                                                                                                    argv: [
                                                                                                                                      {
                                                                                                                                        ref: "Endpoint",
                                                                                                                                      },
                                                                                                                                    ],
                                                                                                                                    assign:
                                                                                                                                      "url",
                                                                                                                                  },
                                                                                                                                ],
                                                                                                                              endpoint:
                                                                                                                                {
                                                                                                                                  url: "https://{accessPointName}-{bucketArn#accountId}.{url#authority}",
                                                                                                                                  properties:
                                                                                                                                    {
                                                                                                                                      authSchemes:
                                                                                                                                        [
                                                                                                                                          {
                                                                                                                                            signingScope:
                                                                                                                                              "{bucketArn#region}",
                                                                                                                                            signingName:
                                                                                                                                              "s3",
                                                                                                                                            name: "v4",
                                                                                                                                          },
                                                                                                                                        ],
                                                                                                                                    },
                                                                                                                                  headers:
                                                                                                                                    {},
                                                                                                                                },
                                                                                                                            },
                                                                                                                            {
                                                                                                                              type: "endpoint",
                                                                                                                              conditions:
                                                                                                                                [
                                                                                                                                  {
                                                                                                                                    fn: "booleanEquals",
                                                                                                                                    argv: [
                                                                                                                                      {
                                                                                                                                        ref: "UseFIPS",
                                                                                                                                      },
                                                                                                                                      false,
                                                                                                                                    ],
                                                                                                                                  },
                                                                                                                                  {
                                                                                                                                    fn: "booleanEquals",
                                                                                                                                    argv: [
                                                                                                                                      {
                                                                                                                                        ref: "UseDualStack",
                                                                                                                                      },
                                                                                                                                      false,
                                                                                                                                    ],
                                                                                                                                  },
                                                                                                                                ],
                                                                                                                              endpoint:
                                                                                                                                {
                                                                                                                                  url: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint.{bucketArn#region}.{bucketPartition#dnsSuffix}",
                                                                                                                                  properties:
                                                                                                                                    {
                                                                                                                                      authSchemes:
                                                                                                                                        [
                                                                                                                                          {
                                                                                                                                            signingScope:
                                                                                                                                              "{bucketArn#region}",
                                                                                                                                            signingName:
                                                                                                                                              "s3",
                                                                                                                                            name: "v4",
                                                                                                                                          },
                                                                                                                                        ],
                                                                                                                                    },
                                                                                                                                  headers:
                                                                                                                                    {},
                                                                                                                                },
                                                                                                                            },
                                                                                                                          ],
                                                                                                                      },
                                                                                                                    ],
                                                                                                                },
                                                                                                              ],
                                                                                                            },
                                                                                                          ],
                                                                                                        },
                                                                                                      ],
                                                                                                    },
                                                                                                    {
                                                                                                      type: "error",
                                                                                                      conditions: [],
                                                                                                      error:
                                                                                                        "Invalid ARN: The access point name may only contain a-z, A-Z, 0-9 and `-`. Found: {accessPointName}",
                                                                                                    },
                                                                                                  ],
                                                                                                },
                                                                                              ],
                                                                                            },
                                                                                            {
                                                                                              type: "error",
                                                                                              conditions: [],
                                                                                              error:
                                                                                                "Invalid ARN: The account id may only contain a-z, A-Z, 0-9 and `-`. Found: {bucketArn#accountId}",
                                                                                            },
                                                                                          ],
                                                                                        },
                                                                                      ],
                                                                                    },
                                                                                    {
                                                                                      type: "error",
                                                                                      conditions: [],
                                                                                      error:
                                                                                        "Invalid ARN: The ARN was not for the S3 service, found: {bucketArn#service}",
                                                                                    },
                                                                                  ],
                                                                                },
                                                                              ],
                                                                            },
                                                                            {
                                                                              type: "error",
                                                                              conditions: [],
                                                                              error:
                                                                                "Could not load partition for ARN region `{bucketArn#region}`",
                                                                            },
                                                                          ],
                                                                        },
                                                                      ],
                                                                    },
                                                                    {
                                                                      type: "error",
                                                                      conditions: [],
                                                                      error:
                                                                        "Invalid ARN: The ARN may only contain a single resource component after `accesspoint`.",
                                                                    },
                                                                  ],
                                                                },
                                                              ],
                                                            },
                                                          ],
                                                        },
                                                        {
                                                          type: "error",
                                                          conditions: [],
                                                          error: "Invalid ARN: bucket ARN is missing a region",
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                                {
                                                  type: "tree",
                                                  conditions: [],
                                                  rules: [
                                                    {
                                                      type: "tree",
                                                      conditions: [
                                                        {
                                                          fn: "isValidHostLabel",
                                                          argv: [
                                                            {
                                                              ref: "accessPointName",
                                                            },
                                                            true,
                                                          ],
                                                        },
                                                      ],
                                                      rules: [
                                                        {
                                                          type: "tree",
                                                          conditions: [],
                                                          rules: [
                                                            {
                                                              type: "error",
                                                              conditions: [
                                                                {
                                                                  fn: "booleanEquals",
                                                                  argv: [
                                                                    {
                                                                      ref: "UseDualStack",
                                                                    },
                                                                    true,
                                                                  ],
                                                                },
                                                              ],
                                                              error: "S3 MRAP does not support dual-stack",
                                                            },
                                                            {
                                                              type: "tree",
                                                              conditions: [],
                                                              rules: [
                                                                {
                                                                  type: "error",
                                                                  conditions: [
                                                                    {
                                                                      fn: "booleanEquals",
                                                                      argv: [
                                                                        {
                                                                          ref: "UseFIPS",
                                                                        },
                                                                        true,
                                                                      ],
                                                                    },
                                                                  ],
                                                                  error: "S3 MRAP does not support FIPS",
                                                                },
                                                                {
                                                                  type: "tree",
                                                                  conditions: [],
                                                                  rules: [
                                                                    {
                                                                      type: "error",
                                                                      conditions: [
                                                                        {
                                                                          fn: "booleanEquals",
                                                                          argv: [
                                                                            {
                                                                              ref: "Accelerate",
                                                                            },
                                                                            true,
                                                                          ],
                                                                        },
                                                                      ],
                                                                      error: "S3 MRAP does not support S3 Accelerate",
                                                                    },
                                                                    {
                                                                      type: "tree",
                                                                      conditions: [],
                                                                      rules: [
                                                                        {
                                                                          type: "error",
                                                                          conditions: [
                                                                            {
                                                                              fn: "isSet",
                                                                              argv: [
                                                                                {
                                                                                  ref: "DisableMRAP",
                                                                                },
                                                                              ],
                                                                            },
                                                                            {
                                                                              fn: "booleanEquals",
                                                                              argv: [
                                                                                {
                                                                                  ref: "DisableMRAP",
                                                                                },
                                                                                true,
                                                                              ],
                                                                            },
                                                                          ],
                                                                          error:
                                                                            "Invalid configuration: Multi-Region Access Point ARNs are disabled.",
                                                                        },
                                                                        {
                                                                          type: "tree",
                                                                          conditions: [],
                                                                          rules: [
                                                                            {
                                                                              type: "tree",
                                                                              conditions: [
                                                                                {
                                                                                  fn: "partition",
                                                                                  argv: [
                                                                                    {
                                                                                      ref: "Region",
                                                                                    },
                                                                                  ],
                                                                                  assign: "mrapPartition",
                                                                                },
                                                                              ],
                                                                              rules: [
                                                                                {
                                                                                  type: "endpoint",
                                                                                  conditions: [],
                                                                                  endpoint: {
                                                                                    url: "https://{accessPointName}.accesspoint.s3-global.{mrapPartition#dnsSuffix}",
                                                                                    properties: {
                                                                                      authSchemes: [
                                                                                        {
                                                                                          signingScope: "*",
                                                                                          name: "v4a",
                                                                                        },
                                                                                      ],
                                                                                    },
                                                                                    headers: {
                                                                                      "x-amz-region-set": ["*"],
                                                                                    },
                                                                                  },
                                                                                },
                                                                              ],
                                                                            },
                                                                            {
                                                                              type: "error",
                                                                              conditions: [],
                                                                              error: "{Region} was not a valid region",
                                                                            },
                                                                          ],
                                                                        },
                                                                      ],
                                                                    },
                                                                  ],
                                                                },
                                                              ],
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                    },
                                                    {
                                                      type: "error",
                                                      conditions: [],
                                                      error: "Invalid Access Point Name",
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          type: "error",
                                          conditions: [],
                                          error:
                                            "Invalid ARN: Expected a resource of the format `accesspoint:<accesspoint name>` but no name was provided",
                                        },
                                      ],
                                    },
                                    {
                                      type: "tree",
                                      conditions: [
                                        {
                                          fn: "stringEquals",
                                          argv: [
                                            {
                                              fn: "getAttr",
                                              argv: [
                                                {
                                                  ref: "bucketArn",
                                                },
                                                "service",
                                              ],
                                            },
                                            "s3-outposts",
                                          ],
                                        },
                                      ],
                                      rules: [
                                        {
                                          type: "error",
                                          conditions: [
                                            {
                                              fn: "booleanEquals",
                                              argv: [
                                                {
                                                  ref: "UseDualStack",
                                                },
                                                true,
                                              ],
                                            },
                                          ],
                                          error: "S3 Outposts does not support Dual-stack",
                                        },
                                        {
                                          type: "tree",
                                          conditions: [],
                                          rules: [
                                            {
                                              type: "error",
                                              conditions: [
                                                {
                                                  fn: "booleanEquals",
                                                  argv: [
                                                    {
                                                      ref: "UseFIPS",
                                                    },
                                                    true,
                                                  ],
                                                },
                                              ],
                                              error: "S3 Outposts does not support FIPS",
                                            },
                                            {
                                              type: "tree",
                                              conditions: [],
                                              rules: [
                                                {
                                                  type: "error",
                                                  conditions: [
                                                    {
                                                      fn: "booleanEquals",
                                                      argv: [
                                                        {
                                                          ref: "Accelerate",
                                                        },
                                                        true,
                                                      ],
                                                    },
                                                  ],
                                                  error: "S3 Outposts does not support S3 Accelerate",
                                                },
                                                {
                                                  type: "tree",
                                                  conditions: [],
                                                  rules: [
                                                    {
                                                      type: "tree",
                                                      conditions: [
                                                        {
                                                          fn: "getAttr",
                                                          argv: [
                                                            {
                                                              ref: "bucketArn",
                                                            },
                                                            "resourceId[1]",
                                                          ],
                                                          assign: "outpostId",
                                                        },
                                                      ],
                                                      rules: [
                                                        {
                                                          type: "tree",
                                                          conditions: [],
                                                          rules: [
                                                            {
                                                              type: "tree",
                                                              conditions: [
                                                                {
                                                                  fn: "isValidHostLabel",
                                                                  argv: [
                                                                    {
                                                                      ref: "outpostId",
                                                                    },
                                                                    false,
                                                                  ],
                                                                },
                                                              ],
                                                              rules: [
                                                                {
                                                                  type: "tree",
                                                                  conditions: [],
                                                                  rules: [
                                                                    {
                                                                      type: "tree",
                                                                      conditions: [
                                                                        {
                                                                          fn: "partition",
                                                                          argv: [
                                                                            {
                                                                              fn: "getAttr",
                                                                              argv: [
                                                                                {
                                                                                  ref: "bucketArn",
                                                                                },
                                                                                "region",
                                                                              ],
                                                                            },
                                                                          ],
                                                                          assign: "bucketPartition",
                                                                        },
                                                                      ],
                                                                      rules: [
                                                                        {
                                                                          type: "tree",
                                                                          conditions: [],
                                                                          rules: [
                                                                            {
                                                                              type: "tree",
                                                                              conditions: [
                                                                                {
                                                                                  fn: "isValidHostLabel",
                                                                                  argv: [
                                                                                    {
                                                                                      fn: "getAttr",
                                                                                      argv: [
                                                                                        {
                                                                                          ref: "bucketArn",
                                                                                        },
                                                                                        "accountId",
                                                                                      ],
                                                                                    },
                                                                                    false,
                                                                                  ],
                                                                                },
                                                                              ],
                                                                              rules: [
                                                                                {
                                                                                  type: "tree",
                                                                                  conditions: [],
                                                                                  rules: [
                                                                                    {
                                                                                      type: "tree",
                                                                                      conditions: [
                                                                                        {
                                                                                          fn: "getAttr",
                                                                                          argv: [
                                                                                            {
                                                                                              ref: "bucketArn",
                                                                                            },
                                                                                            "resourceId[2]",
                                                                                          ],
                                                                                          assign: "outpostType",
                                                                                        },
                                                                                      ],
                                                                                      rules: [
                                                                                        {
                                                                                          type: "tree",
                                                                                          conditions: [],
                                                                                          rules: [
                                                                                            {
                                                                                              type: "tree",
                                                                                              conditions: [
                                                                                                {
                                                                                                  fn: "getAttr",
                                                                                                  argv: [
                                                                                                    {
                                                                                                      ref: "bucketArn",
                                                                                                    },
                                                                                                    "resourceId[3]",
                                                                                                  ],
                                                                                                  assign:
                                                                                                    "accessPointName",
                                                                                                },
                                                                                              ],
                                                                                              rules: [
                                                                                                {
                                                                                                  type: "tree",
                                                                                                  conditions: [],
                                                                                                  rules: [
                                                                                                    {
                                                                                                      type: "tree",
                                                                                                      conditions: [
                                                                                                        {
                                                                                                          fn: "stringEquals",
                                                                                                          argv: [
                                                                                                            {
                                                                                                              ref: "outpostType",
                                                                                                            },
                                                                                                            "accesspoint",
                                                                                                          ],
                                                                                                        },
                                                                                                      ],
                                                                                                      rules: [
                                                                                                        {
                                                                                                          type: "endpoint",
                                                                                                          conditions:
                                                                                                            [],
                                                                                                          endpoint: {
                                                                                                            url: "https://{accessPointName}-{bucketArn#accountId}.{outpostId}.s3-outposts.{bucketArn#region}.{bucketPartition#dnsSuffix}",
                                                                                                            properties:
                                                                                                              {
                                                                                                                authSchemes:
                                                                                                                  [
                                                                                                                    {
                                                                                                                      signingScope:
                                                                                                                        "{bucketArn#region}",
                                                                                                                      signingName:
                                                                                                                        "s3-outposts",
                                                                                                                      name: "v4",
                                                                                                                    },
                                                                                                                  ],
                                                                                                              },
                                                                                                            headers: {},
                                                                                                          },
                                                                                                        },
                                                                                                      ],
                                                                                                    },
                                                                                                    {
                                                                                                      type: "error",
                                                                                                      conditions: [],
                                                                                                      error:
                                                                                                        "Expected an outpost type `accesspoint`, found {outpostType}",
                                                                                                    },
                                                                                                  ],
                                                                                                },
                                                                                              ],
                                                                                            },
                                                                                            {
                                                                                              type: "error",
                                                                                              conditions: [],
                                                                                              error:
                                                                                                "Invalid ARN: expected an access point name",
                                                                                            },
                                                                                          ],
                                                                                        },
                                                                                      ],
                                                                                    },
                                                                                    {
                                                                                      type: "error",
                                                                                      conditions: [],
                                                                                      error:
                                                                                        "Invalid ARN: Expected a 4-component resource",
                                                                                    },
                                                                                  ],
                                                                                },
                                                                              ],
                                                                            },
                                                                            {
                                                                              type: "error",
                                                                              conditions: [],
                                                                              error:
                                                                                "Invalid ARN: The account id may only contain a-z, A-Z, 0-9 and `-`. Found: {bucketArn#accountId}",
                                                                            },
                                                                          ],
                                                                        },
                                                                      ],
                                                                    },
                                                                    {
                                                                      type: "error",
                                                                      conditions: [],
                                                                      error:
                                                                        "Could not load partition for ARN region {bucketArn#region}",
                                                                    },
                                                                  ],
                                                                },
                                                              ],
                                                            },
                                                            {
                                                              type: "error",
                                                              conditions: [],
                                                              error:
                                                                "Invalid ARN: The outpost Id must only contain a-z, A-Z, 0-9 and `-`.",
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                    },
                                                    {
                                                      type: "error",
                                                      conditions: [],
                                                      error: "Invalid ARN: The Outpost Id was not set",
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      type: "error",
                                      conditions: [],
                                      error: "Invalid ARN: Unrecognized format: {Bucket} (type: {arnType})",
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              type: "error",
                              conditions: [],
                              error: "Invalid ARN: No ARN type specified",
                            },
                          ],
                        },
                        {
                          type: "tree",
                          conditions: [],
                          rules: [
                            {
                              type: "error",
                              conditions: [
                                {
                                  fn: "booleanEquals",
                                  argv: [
                                    {
                                      ref: "UseDualStack",
                                    },
                                    true,
                                  ],
                                },
                                {
                                  fn: "isSet",
                                  argv: [
                                    {
                                      ref: "Endpoint",
                                    },
                                  ],
                                },
                              ],
                              error: "Cannot set dual-stack in combination with a custom endpoint.",
                            },
                            {
                              type: "tree",
                              conditions: [],
                              rules: [
                                {
                                  type: "tree",
                                  conditions: [
                                    {
                                      fn: "partition",
                                      argv: [
                                        {
                                          ref: "Region",
                                        },
                                      ],
                                      assign: "partitionResult",
                                    },
                                  ],
                                  rules: [
                                    {
                                      type: "tree",
                                      conditions: [],
                                      rules: [
                                        {
                                          type: "tree",
                                          conditions: [
                                            {
                                              fn: "booleanEquals",
                                              argv: [
                                                {
                                                  ref: "Accelerate",
                                                },
                                                false,
                                              ],
                                            },
                                          ],
                                          rules: [
                                            {
                                              type: "tree",
                                              conditions: [],
                                              rules: [
                                                {
                                                  type: "tree",
                                                  conditions: [
                                                    {
                                                      fn: "booleanEquals",
                                                      argv: [
                                                        {
                                                          ref: "UseFIPS",
                                                        },
                                                        false,
                                                      ],
                                                    },
                                                  ],
                                                  rules: [
                                                    {
                                                      type: "tree",
                                                      conditions: [],
                                                      rules: [
                                                        {
                                                          type: "endpoint",
                                                          conditions: [
                                                            {
                                                              fn: "booleanEquals",
                                                              argv: [
                                                                {
                                                                  ref: "UseDualStack",
                                                                },
                                                                true,
                                                              ],
                                                            },
                                                            {
                                                              fn: "not",
                                                              argv: [
                                                                {
                                                                  fn: "isSet",
                                                                  argv: [
                                                                    {
                                                                      ref: "Endpoint",
                                                                    },
                                                                  ],
                                                                },
                                                              ],
                                                            },
                                                          ],
                                                          endpoint: {
                                                            url: "https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}/{Bucket}",
                                                            properties: {
                                                              authSchemes: [
                                                                {
                                                                  signingScope: "{Region}",
                                                                  signingName: "s3",
                                                                  name: "v4",
                                                                },
                                                              ],
                                                            },
                                                            headers: {},
                                                          },
                                                        },
                                                        {
                                                          type: "endpoint",
                                                          conditions: [
                                                            {
                                                              fn: "booleanEquals",
                                                              argv: [
                                                                {
                                                                  ref: "UseDualStack",
                                                                },
                                                                false,
                                                              ],
                                                            },
                                                            {
                                                              fn: "isSet",
                                                              argv: [
                                                                {
                                                                  ref: "Endpoint",
                                                                },
                                                              ],
                                                            },
                                                            {
                                                              fn: "parseURL",
                                                              argv: [
                                                                {
                                                                  ref: "Endpoint",
                                                                },
                                                              ],
                                                              assign: "url",
                                                            },
                                                          ],
                                                          endpoint: {
                                                            url: "{url#scheme}://{url#authority}{url#normalizedPath}{Bucket}",
                                                            properties: {
                                                              authSchemes: [
                                                                {
                                                                  signingScope: "{Region}",
                                                                  signingName: "s3",
                                                                  name: "v4",
                                                                },
                                                              ],
                                                            },
                                                            headers: {},
                                                          },
                                                        },
                                                        {
                                                          type: "endpoint",
                                                          conditions: [
                                                            {
                                                              fn: "booleanEquals",
                                                              argv: [
                                                                {
                                                                  ref: "UseDualStack",
                                                                },
                                                                false,
                                                              ],
                                                            },
                                                            {
                                                              fn: "not",
                                                              argv: [
                                                                {
                                                                  fn: "isSet",
                                                                  argv: [
                                                                    {
                                                                      ref: "Endpoint",
                                                                    },
                                                                  ],
                                                                },
                                                              ],
                                                            },
                                                          ],
                                                          endpoint: {
                                                            url: "https://s3.{Region}.{partitionResult#dnsSuffix}/{Bucket}",
                                                            properties: {
                                                              authSchemes: [
                                                                {
                                                                  signingScope: "{Region}",
                                                                  signingName: "s3",
                                                                  name: "v4",
                                                                },
                                                              ],
                                                            },
                                                            headers: {},
                                                          },
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                                {
                                                  type: "error",
                                                  conditions: [],
                                                  error: "Path-style addressing cannot be used with FIPS",
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          type: "error",
                                          conditions: [],
                                          error: "Path-style addressing cannot be used with S3 Accelerate",
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  type: "error",
                                  conditions: [],
                                  error: "A valid partition could not be determined",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "tree",
                  conditions: [
                    {
                      fn: "not",
                      argv: [
                        {
                          fn: "isSet",
                          argv: [
                            {
                              ref: "Bucket",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                  rules: [
                    {
                      type: "tree",
                      conditions: [
                        {
                          fn: "partition",
                          argv: [
                            {
                              ref: "Region",
                            },
                          ],
                          assign: "partitionResult",
                        },
                      ],
                      rules: [
                        {
                          type: "tree",
                          conditions: [],
                          rules: [
                            {
                              type: "error",
                              conditions: [
                                {
                                  fn: "booleanEquals",
                                  argv: [
                                    {
                                      ref: "UseFIPS",
                                    },
                                    true,
                                  ],
                                },
                                {
                                  fn: "stringEquals",
                                  argv: [
                                    {
                                      fn: "getAttr",
                                      argv: [
                                        {
                                          ref: "partitionResult",
                                        },
                                        "name",
                                      ],
                                    },
                                    "aws-cn",
                                  ],
                                },
                              ],
                              error: "Partition does not support FIPS",
                            },
                            {
                              type: "tree",
                              conditions: [],
                              rules: [
                                {
                                  type: "endpoint",
                                  conditions: [
                                    {
                                      fn: "booleanEquals",
                                      argv: [
                                        {
                                          ref: "UseFIPS",
                                        },
                                        true,
                                      ],
                                    },
                                    {
                                      fn: "booleanEquals",
                                      argv: [
                                        {
                                          ref: "UseDualStack",
                                        },
                                        true,
                                      ],
                                    },
                                    {
                                      fn: "isSet",
                                      argv: [
                                        {
                                          ref: "Endpoint",
                                        },
                                      ],
                                    },
                                    {
                                      fn: "parseURL",
                                      argv: [
                                        {
                                          ref: "Endpoint",
                                        },
                                      ],
                                      assign: "url",
                                    },
                                  ],
                                  endpoint: {
                                    url: "{url#scheme}://{url#authority}{url#path}",
                                    properties: {
                                      authSchemes: [
                                        {
                                          signingScope: "{Region}",
                                          signingName: "s3",
                                          name: "v4",
                                        },
                                      ],
                                    },
                                    headers: {},
                                  },
                                },
                                {
                                  type: "endpoint",
                                  conditions: [
                                    {
                                      fn: "booleanEquals",
                                      argv: [
                                        {
                                          ref: "UseFIPS",
                                        },
                                        true,
                                      ],
                                    },
                                    {
                                      fn: "booleanEquals",
                                      argv: [
                                        {
                                          ref: "UseDualStack",
                                        },
                                        true,
                                      ],
                                    },
                                    {
                                      fn: "not",
                                      argv: [
                                        {
                                          fn: "isSet",
                                          argv: [
                                            {
                                              ref: "Endpoint",
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                  endpoint: {
                                    url: "https://s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}",
                                    properties: {
                                      authSchemes: [
                                        {
                                          signingScope: "{Region}",
                                          signingName: "s3",
                                          name: "v4",
                                        },
                                      ],
                                    },
                                    headers: {},
                                  },
                                },
                                {
                                  type: "endpoint",
                                  conditions: [
                                    {
                                      fn: "booleanEquals",
                                      argv: [
                                        {
                                          ref: "UseFIPS",
                                        },
                                        true,
                                      ],
                                    },
                                    {
                                      fn: "booleanEquals",
                                      argv: [
                                        {
                                          ref: "UseDualStack",
                                        },
                                        false,
                                      ],
                                    },
                                    {
                                      fn: "isSet",
                                      argv: [
                                        {
                                          ref: "Endpoint",
                                        },
                                      ],
                                    },
                                    {
                                      fn: "parseURL",
                                      argv: [
                                        {
                                          ref: "Endpoint",
                                        },
                                      ],
                                      assign: "url",
                                    },
                                  ],
                                  endpoint: {
                                    url: "{url#scheme}://{url#authority}{url#path}",
                                    properties: {
                                      authSchemes: [
                                        {
                                          signingScope: "{Region}",
                                          signingName: "s3",
                                          name: "v4",
                                        },
                                      ],
                                    },
                                    headers: {},
                                  },
                                },
                                {
                                  type: "endpoint",
                                  conditions: [
                                    {
                                      fn: "booleanEquals",
                                      argv: [
                                        {
                                          ref: "UseFIPS",
                                        },
                                        true,
                                      ],
                                    },
                                    {
                                      fn: "booleanEquals",
                                      argv: [
                                        {
                                          ref: "UseDualStack",
                                        },
                                        false,
                                      ],
                                    },
                                    {
                                      fn: "not",
                                      argv: [
                                        {
                                          fn: "isSet",
                                          argv: [
                                            {
                                              ref: "Endpoint",
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                  endpoint: {
                                    url: "https://s3-fips.{Region}.{partitionResult#dnsSuffix}",
                                    properties: {
                                      authSchemes: [
                                        {
                                          signingScope: "{Region}",
                                          signingName: "s3",
                                          name: "v4",
                                        },
                                      ],
                                    },
                                    headers: {},
                                  },
                                },
                                {
                                  type: "endpoint",
                                  conditions: [
                                    {
                                      fn: "booleanEquals",
                                      argv: [
                                        {
                                          ref: "UseFIPS",
                                        },
                                        false,
                                      ],
                                    },
                                    {
                                      fn: "booleanEquals",
                                      argv: [
                                        {
                                          ref: "UseDualStack",
                                        },
                                        true,
                                      ],
                                    },
                                    {
                                      fn: "isSet",
                                      argv: [
                                        {
                                          ref: "Endpoint",
                                        },
                                      ],
                                    },
                                    {
                                      fn: "parseURL",
                                      argv: [
                                        {
                                          ref: "Endpoint",
                                        },
                                      ],
                                      assign: "url",
                                    },
                                  ],
                                  endpoint: {
                                    url: "{url#scheme}://{url#authority}{url#path}",
                                    properties: {
                                      authSchemes: [
                                        {
                                          signingScope: "{Region}",
                                          signingName: "s3",
                                          name: "v4",
                                        },
                                      ],
                                    },
                                    headers: {},
                                  },
                                },
                                {
                                  type: "endpoint",
                                  conditions: [
                                    {
                                      fn: "booleanEquals",
                                      argv: [
                                        {
                                          ref: "UseFIPS",
                                        },
                                        false,
                                      ],
                                    },
                                    {
                                      fn: "booleanEquals",
                                      argv: [
                                        {
                                          ref: "UseDualStack",
                                        },
                                        true,
                                      ],
                                    },
                                    {
                                      fn: "not",
                                      argv: [
                                        {
                                          fn: "isSet",
                                          argv: [
                                            {
                                              ref: "Endpoint",
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                  endpoint: {
                                    url: "https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}",
                                    properties: {
                                      authSchemes: [
                                        {
                                          signingScope: "{Region}",
                                          signingName: "s3",
                                          name: "v4",
                                        },
                                      ],
                                    },
                                    headers: {},
                                  },
                                },
                                {
                                  type: "endpoint",
                                  conditions: [
                                    {
                                      fn: "booleanEquals",
                                      argv: [
                                        {
                                          ref: "UseFIPS",
                                        },
                                        false,
                                      ],
                                    },
                                    {
                                      fn: "booleanEquals",
                                      argv: [
                                        {
                                          ref: "UseDualStack",
                                        },
                                        false,
                                      ],
                                    },
                                    {
                                      fn: "isSet",
                                      argv: [
                                        {
                                          ref: "Endpoint",
                                        },
                                      ],
                                    },
                                    {
                                      fn: "parseURL",
                                      argv: [
                                        {
                                          ref: "Endpoint",
                                        },
                                      ],
                                      assign: "url",
                                    },
                                  ],
                                  endpoint: {
                                    url: "{url#scheme}://{url#authority}{url#path}",
                                    properties: {
                                      authSchemes: [
                                        {
                                          signingScope: "{Region}",
                                          signingName: "s3",
                                          name: "v4",
                                        },
                                      ],
                                    },
                                    headers: {},
                                  },
                                },
                                {
                                  type: "endpoint",
                                  conditions: [
                                    {
                                      fn: "booleanEquals",
                                      argv: [
                                        {
                                          ref: "UseFIPS",
                                        },
                                        false,
                                      ],
                                    },
                                    {
                                      fn: "booleanEquals",
                                      argv: [
                                        {
                                          ref: "UseDualStack",
                                        },
                                        false,
                                      ],
                                    },
                                    {
                                      fn: "not",
                                      argv: [
                                        {
                                          fn: "isSet",
                                          argv: [
                                            {
                                              ref: "Endpoint",
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                  endpoint: {
                                    url: "https://s3.{Region}.{partitionResult#dnsSuffix}",
                                    properties: {
                                      authSchemes: [
                                        {
                                          signingScope: "{Region}",
                                          signingName: "s3",
                                          name: "v4",
                                        },
                                      ],
                                    },
                                    headers: {},
                                  },
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "error",
                      conditions: [],
                      error: "A valid partition could not be determined",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "error",
          conditions: [],
          error: "Region must be set when path-style addressing is used",
        },
      ],
    },
  ],
};
