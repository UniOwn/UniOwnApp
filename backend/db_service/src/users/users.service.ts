import { Model } from "mongoose";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { User } from "./schemas/user.schema";
import { IUser } from "./interface/user.interface";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<IUser>) {}

    async getAll(): Promise<IUser[]> {
        const users: IUser[] = await this.userModel
            .aggregate([
                {
                    $lookup: {
                        from: "games",
                        localField: "_id",
                        foreignField: "ownerId",
                        as: "games",
                        pipeline: [{ $set: { id: "$_id" } }]
                    }
                },
                { $set: { id: "$_id" } }
            ])
            .exec();

        if (!users || users?.length === 0) {
            throw new NotFoundException(`Users not found`);
        }

        return users;
    }

    async getById(id: string): Promise<IUser> {
        const user = await this.userModel.findById(id).exec();

        if (!user) {
            throw new NotFoundException(`User ${id} not found`);
        }

        return user;
    }

    async create(userDto: CreateUserDto): Promise<IUser> {
        const newUser = await this.userModel.create(userDto);

        return newUser;
    }

    async remove(id: string): Promise<IUser> {
        const deletedUser = await this.userModel.findByIdAndRemove(id).exec();

        if (!deletedUser) {
            throw new NotFoundException(`User ${id} not found`);
        }

        return deletedUser;
    }

    async update(id: string, userDto: UpdateUserDto): Promise<IUser> {
        const updatedUser = await this.userModel.findByIdAndUpdate(id, userDto).exec();

        if (!updatedUser) {
            throw new NotFoundException(`User ${id} not found`);
        }

        return updatedUser;
    }
}
