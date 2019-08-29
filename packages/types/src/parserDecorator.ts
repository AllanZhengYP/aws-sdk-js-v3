/**
 * Parser decorators apply an action before the SDK attempts to unmarshall the
 * response.
 */
export interface ParserDecorator<ResponseType> {
  (response: ResponseType): ResponseType;
  priority: number;
}

/**
 * Stack of parser decorators that can be resolved into a single function
 * processing the response object.
 */
export interface ParserDecoratorStack<ResponseType> {
  add(decorator: ParserDecorator<ResponseType>): void;
  concat(stack: ParserDecoratorStack<ResponseType>): void;
  clone(): ParserDecoratorStack<ResponseType>;
  resolve(): (response: ResponseType) => ResponseType;
}
