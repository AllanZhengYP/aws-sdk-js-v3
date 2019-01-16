// import {BodyParser, Decoder, Member, SerializationModel, OperationOutputShapeModel} from "@aws-sdk/types";
// import {toDate} from "@aws-sdk/protocol-timestamp";

// export class JsonParser implements BodyParser {
//     constructor(private readonly base64Decoder: Decoder) {}

//     public parse<OutputType>(
//         shape: OperationOutputShapeModel<OutputType>,
//         input: string
//     ): OutputType {
//         return shape.parse(JSON.parse(input));
//     }
// }
