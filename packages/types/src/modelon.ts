export interface ShapeModel<Shape, MidProduct=string> {
    parse?: (data: any) => Shape;
    serialize?: (input: Shape) => MidProduct;
    streaming?: boolean;
    sensitive?: boolean;
    idempotencyToken?: boolean;
}

export interface StructureModel<Shape, MidProduct=string> extends ShapeModel<Shape, MidProduct> {
    required?: ShapeModel<any, any>[]
}

export interface ListModel<Shape=string, MidProduct=string> extends ShapeModel<Array<Shape>, MidProduct> {

}

export interface MapModel<Value, MidProduct=string> extends ShapeModel<{[key: string]: Value}, MidProduct> {

}

export interface StringModel extends ShapeModel<string, string> {}

export interface BooleanModel extends ShapeModel<boolean, string> {}

export interface BlobModel<BlobType=Uint8Array> extends ShapeModel<BlobType, BlobType> {}

export interface TimeStampModel extends ShapeModel<Date, string> {}