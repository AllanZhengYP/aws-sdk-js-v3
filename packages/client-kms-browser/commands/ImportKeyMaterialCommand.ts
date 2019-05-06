import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ImportKeyMaterial } from "../model/ImportKeyMaterial";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ImportKeyMaterialInput } from "../types/ImportKeyMaterialInput";
import { ImportKeyMaterialOutput } from "../types/ImportKeyMaterialOutput";
import { KMSResolvedConfiguration } from "../KMSConfiguration";
export * from "../types/ImportKeyMaterialInput";
export * from "../types/ImportKeyMaterialOutput";
export * from "../types/ImportKeyMaterialExceptionsUnion";

export class ImportKeyMaterialCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ImportKeyMaterialInput,
      OutputTypesUnion,
      ImportKeyMaterialOutput,
      KMSResolvedConfiguration,
      Blob
    > {
  readonly model = ImportKeyMaterial;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ImportKeyMaterialInput,
    ImportKeyMaterialOutput,
    Blob
  >();

  constructor(readonly input: ImportKeyMaterialInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: KMSResolvedConfiguration
  ): __aws_sdk_types.Handler<ImportKeyMaterialInput, ImportKeyMaterialOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ImportKeyMaterialInput, ImportKeyMaterialOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
