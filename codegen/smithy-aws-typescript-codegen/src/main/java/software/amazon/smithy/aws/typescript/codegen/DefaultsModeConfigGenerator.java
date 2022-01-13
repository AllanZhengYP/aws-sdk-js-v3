/*
 * Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

package software.amazon.smithy.aws.typescript.codegen;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;
import software.amazon.smithy.codegen.core.CodegenException;
import software.amazon.smithy.model.node.Node;
import software.amazon.smithy.model.node.NumberNode;
import software.amazon.smithy.model.node.ObjectNode;
import software.amazon.smithy.model.node.StringNode;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.utils.IoUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Generate the default configs provider based the default mode config supplied by user.
 */
@SmithyInternalApi
final class DefaultsModeConfigGenerator {

    private DefaultsModeConfigGenerator() {}

    public static void main(String[] args) throws IOException {
        Path outputPath = Paths.get(args[0]);
        TypeScriptWriter writer = new TypeScriptWriter(outputPath.toString());
        String defaultsConfigJson = IoUtils.readUtf8Resource(DefaultsModeConfigGenerator.class,
                "sdk-default-configuration.json");
        ObjectNode defaultsConfigData = Node.parse(defaultsConfigJson).expectObjectNode();

        writer.addImport("DefaultsModeConfigs", "DefaultsModeConfigs", TypeScriptDependency.AWS_SDK_TYPES.packageName);
        writer.addImport("ResolvedDefaultsMode", "ResolvedDefaultsMode",
                TypeScriptDependency.AWS_SDK_TYPES.packageName);
        ObjectNode baseNode = defaultsConfigData.expectObjectMember("base");
        ObjectNode modesNode = defaultsConfigData.expectObjectMember("modes");

        writer.openBlock(
            "export const loadConfigsForDefaultMode = (mode: ResolvedDefaultsMode): DefaultsModeConfigs => {", "}",
            () -> {
                writer.openBlock("switch (mode) {", "}", () -> {
                    modesNode.getMembers().forEach((name, mode) -> {
                        writer.write("case $S:", name.getValue());
                        DefaultsMode defaultsMode = new DefaultsMode(baseNode, mode.expectObjectNode());
                        writer.indent();
                        defaultsMode.useWriter(writer);
                        writer.dedent();
                    });
                    writer.openBlock("default:", "", () -> {
                        writer.write("return {};");
                    });
                });
        });
        outputPath.toFile().createNewFile();
        Files.write(outputPath, writer.toString().getBytes(StandardCharsets.UTF_8));
    }

    enum Modifier {
        MULTIPLY("multiply"),
        ADD("add"),
        OVERRIDE("override");

        private final String label;

        Modifier(String label) {
            this.label = label;
        }
    }

    private static final class DefaultsMode {
        private Optional<String> retryMode;
        private Optional<Number> connectTimeoutInMillis;
        private Optional<Number> httpRequestTimeoutInMillis;

        private DefaultsMode(ObjectNode base) {
            retryMode = base.getStringMember("retryMode").map(StringNode::getValue);
            connectTimeoutInMillis = base.getNumberMember("connectTimeoutInMillis").map(NumberNode::getValue);
            httpRequestTimeoutInMillis = base.getNumberMember("httpRequestTimeoutInMillis").map(NumberNode::getValue);
        }

        private DefaultsMode(ObjectNode base, ObjectNode mode) {
            this(base);
            mode.getObjectMember("retryMode").ifPresent((overrideNode) -> {
                overrideNode.getMembers().forEach((modifier, value) -> {
                    String modifierName = modifier.getValue().toUpperCase();
                    this.modifyRetryMode(Modifier.valueOf(modifierName), value.expectStringNode().getValue());
                });
            });
            mode.getObjectMember("connectTimeoutInMillis").ifPresent((overrideNode) -> {
                overrideNode.getMembers().forEach((modifier, value) -> {
                    String modifierName = modifier.getValue().toUpperCase();
                    this.modifyConnectTimeoutInMillis(Modifier.valueOf(modifierName),
                            value.expectNumberNode().getValue());
                });
            });
            mode.getObjectMember("httpRequestTimeoutInMillis").ifPresent((overrideNode) -> {
                overrideNode.getMembers().forEach((modifier, value) -> {
                    String modifierName = modifier.getValue().toUpperCase();
                    this.modifyHttpRequestTimeoutInMillis(Modifier.valueOf(modifierName),
                            value.expectNumberNode().getValue());
                });
            });
        }

        private void modifyRetryMode(Modifier modifier, String val) {
            if (modifier == Modifier.OVERRIDE) {
                this.retryMode = Optional.of(val);
            } else {
                throw new CodegenException(
                        String.format("Unexpected modifier to retryMode, expect \"override\", got %s", modifier.label));
            }
        }

        private Number modifyNumber(Number left, Modifier modifier, Number right) {
            switch (modifier) {
                case OVERRIDE:
                    return right;
                case ADD:
                    return (int) left + (int) right;
                case MULTIPLY:
                    return (int) ((int) left * (float) right);
                default:
                    throw new CodegenException("Unexpected modifier");
            }
        }

        private void modifyConnectTimeoutInMillis(Modifier modifier, Number val) {
            this.connectTimeoutInMillis = Optional.of(
                    this.modifyNumber(this.connectTimeoutInMillis.orElse(null), modifier, val));
        }

        private void modifyHttpRequestTimeoutInMillis(Modifier modifier, Number val) {
            this.httpRequestTimeoutInMillis = Optional.of(
                this.modifyNumber(this.httpRequestTimeoutInMillis.orElse(null), modifier, val));
        }

        public void useWriter(TypeScriptWriter writer) {
            writer.openBlock("return {", "};", () -> {
                this.retryMode.ifPresent((retryMode) -> {
                    writer.write("retryMode: $S,", this.retryMode);
                });
                this.connectTimeoutInMillis.ifPresent((connectTimeoutInMillis) -> {
                    writer.write("connectionTimeout: $L,", connectTimeoutInMillis);
                });
                this.httpRequestTimeoutInMillis.ifPresent((httpRequestTimeoutInMillis) -> {
                    writer.write("requestTimeout: $L,", httpRequestTimeoutInMillis);
                });
            });
        }
    }
}
