import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { UserDto } from "./dto/user.dto";
import { User, UserDocument } from "./schemas/user.schema";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async getAll(): Promise<User[]> {
        return await this.userModel
            .aggregate([
                {
                    $lookup: {
                        from: "games",
                        localField: "_id",
                        foreignField: "ownerId",
                        as: "games"
                    }
                }
            ])
            .exec();
    }

    async getById(id: string) {
        return await this.userModel.findById(id).exec();
    }

    async create(userDto: UserDto): Promise<User> {
        const newUser = await this.userModel.create(userDto);

        return newUser;
    }

    async remove(id: string): Promise<User> {
        return await this.userModel.findByIdAndRemove(id).exec();
    }

    async update(id: string, userDto: UserDto): Promise<User> {
        return await this.userModel.findByIdAndUpdate(id, userDto).exec();
    }
}
