export interface ShapeModel<Shape, SerializedShape=any> {
    parse?: (data: any) => Shape;
    serialize?: (input: Shape) => SerializedShape;
    streaming?: boolean;
    sensitive?: boolean;
    idempotencyToken?: boolean;
}

export interface StructureModel<Shape, SerializedShape=any> extends ShapeModel<Shape, SerializedShape> {
    required?: ShapeModel<any, any>[]
}

export interface ListModel<Shape=string, SerializedShape=any> extends ShapeModel<Array<Shape>, SerializedShape> {

}

export interface MapModel<Value, SerializedShape=any> extends ShapeModel<{[key: string]: Value}, SerializedShape> {

}

export interface StringModel extends ShapeModel<string, string> {}

export interface BooleanModel extends ShapeModel<boolean, string> {}

export interface BlobModel<BlobType=Uint8Array> extends ShapeModel<BlobType, BlobType> {}

export interface TimeStampModel extends ShapeModel<Date, string> {}

export interface OperationInputShapeModel<Shape, SerializedShape=any> extends ShapeModel<Shape, SerializedShape> {
    serialize: (input: Shape) => SerializedShape;
}

export interface OperationOutputShapeModel<Shape, SerializedShape=any> extends ShapeModel<Shape, SerializedShape> {
    parse: (input: any) => Shape;
}