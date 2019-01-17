import {
    List as ListModule,
    Map as MapModule,
    Structure as StructureModule,
    ServiceMetadata
} from "./Components/Model";
import {CircularDependenciesMap} from "./Components/helpers/detectCircularModelDependency";
import {TreeModel} from "@aws-sdk/build-types";

export class ModelGenerator {
    constructor(
        private readonly model: TreeModel,
    ) {}

    *[Symbol.iterator](): Iterator<[string, string]> {
        const {shapes, metadata: {protocol}} = this.model;
        for (let shapeName of Object.keys(shapes)) {
            const shape = shapes[shapeName];
            if (shape.type === 'list') {
                yield [
                    shapeName,
                    new ListModule(shape, protocol).toString(),
                ];
            } else if (shape.type === 'map') {
                yield [
                    shapeName,
                    new MapModule(shape, protocol).toString(),
                ];
            } else if (shape.type === 'structure') {
                yield [
                    shapeName,
                    new StructureModule(shape, protocol).toString(),
                ];
            }
        }
        yield [
            'ServiceMetadata',
            new ServiceMetadata(this.model.metadata).toString()
        ];
    }
}
