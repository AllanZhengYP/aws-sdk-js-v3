# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 0.1.0 (2019-03-29)


### Bug Fixes

* **generator:** Allow zero-length unions ([#110](https://github.com/AllanFly120/aws-sdk-js-v3-private/issues/110)) ([4829590](https://github.com/AllanFly120/aws-sdk-js-v3-private/commit/4829590))
* generate model metadata xmlNamespace properly ([#197](https://github.com/AllanFly120/aws-sdk-js-v3-private/issues/197)) ([f2aa325](https://github.com/AllanFly120/aws-sdk-js-v3-private/commit/f2aa325))


### Features

* **directconnect:** Direct Connect gateway enables you to establish connectivity between your on-premise networks and Amazon Virtual Private Clouds (VPCs) in any commercial AWS Region (except in China) using AWS Direct Connect connections at any AWS Direct Connect location. This release enables multi-account support for Direct Connect gateway, with multi-account support for Direct Connect gateway, you can associate up to ten VPCs from any AWS account with a Direct Connect gateway. The AWS accounts owning VPCs and the Direct Connect gateway must belong to the same AWS payer account ID. This release also enables Direct Connect Gateway owners to allocate allowed prefixes from each associated VPCs. ([f2b0ba4](https://github.com/AllanFly120/aws-sdk-js-v3-private/commit/f2b0ba4))
* **dynamodb:** deprecate client-dyanmodb-v2 clients and migrate to client-dynamodb clients ([#201](https://github.com/AllanFly120/aws-sdk-js-v3-private/issues/201)) ([aae3b39](https://github.com/AllanFly120/aws-sdk-js-v3-private/commit/aae3b39))
* **fms:** AWS Firewall Manager now allows customer to centrally enable AWS Shield Advanced DDoS protection for their entire AWS infrastructure, across accounts and applications. ([d87b725](https://github.com/AllanFly120/aws-sdk-js-v3-private/commit/d87b725))
* **iot1click-devices:** This release adds tagging support for AWS IoT 1-Click Device resources. Use these APIs to add, remove, or list tags on Devices, and leverage the tags for various authorization and billing scenarios. This release also adds the ARN property for DescribeDevice response object. ([bbfdd6f](https://github.com/AllanFly120/aws-sdk-js-v3-private/commit/bbfdd6f))
* **iotanalytics:** This change allows you to specify the number of versions of IoT Analytics data set content to be retained. Previously, the number of versions was managed implicitly via the setting of the data set's retention period. ([1a546bd](https://github.com/AllanFly120/aws-sdk-js-v3-private/commit/1a546bd))
* **kms:** generate node & browser clients ([#211](https://github.com/AllanFly120/aws-sdk-js-v3-private/issues/211)) ([46d6dd6](https://github.com/AllanFly120/aws-sdk-js-v3-private/commit/46d6dd6))
* **mediaconvert:** This release adds support for detailed job progress status and S3 server-side output encryption. In addition, the anti-alias filter will now be automatically applied to all outputs ([0bdb707](https://github.com/AllanFly120/aws-sdk-js-v3-private/commit/0bdb707))
* Add support for authtype ([#120](https://github.com/AllanFly120/aws-sdk-js-v3-private/issues/120)) ([8f94058](https://github.com/AllanFly120/aws-sdk-js-v3-private/commit/8f94058))
* **robomaker:** Added additional progress metadata fields for robot deployments ([816d9a7](https://github.com/AllanFly120/aws-sdk-js-v3-private/commit/816d9a7))
* **s3:** Add bucket endpoint middleware ([#104](https://github.com/AllanFly120/aws-sdk-js-v3-private/issues/104)) ([8ac6cca](https://github.com/AllanFly120/aws-sdk-js-v3-private/commit/8ac6cca))
* **S3:** Add SSEC Middleware ([#115](https://github.com/AllanFly120/aws-sdk-js-v3-private/issues/115)) ([7e272f2](https://github.com/AllanFly120/aws-sdk-js-v3-private/commit/7e272f2))
* **transcribe:** Amazon Transcribe - With this release Amazon Transcribe enhances the custom vocabulary feature to improve accuracy by providing customization on pronunciations and output formatting. ([255ec50](https://github.com/AllanFly120/aws-sdk-js-v3-private/commit/255ec50))





# [0.1.0-preview.5](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/service-types-generator@0.1.0-preview.4...@aws-sdk/service-types-generator@0.1.0-preview.5) (2019-03-27)


### Features

* **kms:** generate node & browser clients ([#211](https://github.com/aws/aws-sdk-js-v3/issues/211)) ([46d6dd6](https://github.com/aws/aws-sdk-js-v3/commit/46d6dd6))





# [0.1.0-preview.4](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/service-types-generator@0.1.0-preview.3...@aws-sdk/service-types-generator@0.1.0-preview.4) (2019-03-27)


### Bug Fixes

* generate model metadata xmlNamespace properly ([#197](https://github.com/aws/aws-sdk-js-v3/issues/197)) ([f2aa325](https://github.com/aws/aws-sdk-js-v3/commit/f2aa325))


### Features

* **dynamodb:** deprecate client-dyanmodb-v2 clients and migrate to client-dynamodb clients ([#201](https://github.com/aws/aws-sdk-js-v3/issues/201)) ([aae3b39](https://github.com/aws/aws-sdk-js-v3/commit/aae3b39))
