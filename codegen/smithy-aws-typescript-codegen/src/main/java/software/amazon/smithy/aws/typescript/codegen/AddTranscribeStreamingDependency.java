package software.amazon.smithy.aws.typescript.codegen;

import static software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin.Convention.HAS_CONFIG;
import static software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin.Convention.HAS_MIDDLEWARE;


import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.ListUtils;
import software.amazon.smithy.utils.MapUtils;

/**
 * Add client plugins and configs to support WebSocket streaming for Transcribe
 * Streaming service
 * */
public class AddTranscribeStreamingDependency implements TypeScriptIntegration {
    @Override
    public List<RuntimeClientPlugin> getClientPlugins() {
        return ListUtils.of(
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.TRANSCRIBE_STREAMING_MIDDLEWARE.dependency,
                                "WebSocket", HAS_CONFIG)
                        .servicePredicate((m, s) -> AddTranscribeStreamingDependency.isTranscribeStreaming(s))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.TRANSCRIBE_STREAMING_MIDDLEWARE.dependency,
                                "WebSocket", HAS_MIDDLEWARE)
                        .operationPredicate((m, s, o) -> AddTranscribeStreamingDependency.isTranscribeStreaming(s))
                        .build()
        );
    }

    @Override
    public Map<String, Consumer<TypeScriptWriter>> getRuntimeConfigWriters(
            TypeScriptSettings settings,
            Model model,
            SymbolProvider symbolProvider,
            LanguageTarget target
    ) {
        ServiceShape service = settings.getService(model);
        if (!isTranscribeStreaming(service)) {
            return Collections.emptyMap();
        }

        Map<String, Consumer<TypeScriptWriter>> transcribeStreamingHandlerConfig = MapUtils.of(
                "eventStreamPayloadHandlerProvider", writer -> {
            writer.addDependency(AwsDependency.TRANSCRIBE_STREAMING_MIDDLEWARE);
            writer.addImport("eventStreamPayloadHandler", "eventStreamPayloadHandler",
                    AwsDependency.TRANSCRIBE_STREAMING_MIDDLEWARE.packageName);
            writer.write("eventStreamPayloadHandlerProvider: () => eventStreamPayloadHandler,");
        },
                "requestHandler", writer -> {
            writer.addDependency(AwsDependency.TRANSCRIBE_STREAMING_MIDDLEWARE);
            writer.addImport("WebSocketHandler", "WebSocketHandler",
                    AwsDependency.TRANSCRIBE_STREAMING_MIDDLEWARE.packageName);
            writer.write("requestHandler: new WebSocketHandler(),");
        });

        switch (target) {
            case BROWSER:
            case REACT_NATIVE:
                return transcribeStreamingHandlerConfig;
            default:
                return Collections.emptyMap();
        }
    }

    private static boolean isTranscribeStreaming(ServiceShape service) {
        String serviceId = service.getTrait(ServiceTrait.class).map(ServiceTrait::getSdkId).orElse("");
        return serviceId.equals("Transcribe Streaming");
    }
}


