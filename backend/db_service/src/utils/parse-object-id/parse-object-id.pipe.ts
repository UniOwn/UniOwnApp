import { Types } from "mongoose";
import { PipeTransform, Injectable, NotAcceptableException } from "@nestjs/common";

@Injectable()
class ParseObjectIdPipe implements PipeTransform<string, Types.ObjectId> {
    transform(value: string): Types.ObjectId {
        const validObjectId = Types.ObjectId.isValid(value);

        if (!validObjectId) {
            throw new NotAcceptableException("Invalid objectId format");
        }

        return Types.ObjectId.createFromHexString(value);
    }
}

export default ParseObjectIdPipe;
