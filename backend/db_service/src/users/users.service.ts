import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Injectable, NotFoundException } from "@nestjs/common";

import { User } from "./schemas/user.schema";
import { IUser } from "./interface/user.interface";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
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

    async getByAddress(address: string): Promise<IUser> {
        const user = await this.userModel.findOne({ address }).exec();

        return user;
    }

    async create(userDto: CreateUserDto): Promise<IUser> {
        const newUser = await this.userModel.create(userDto);

        return newUser;
    }

    async update(id: string, userDto: UpdateUserDto): Promise<IUser> {
        const updatedUser = await this.userModel.findByIdAndUpdate(id, userDto).exec();

        if (!updatedUser) {
            throw new NotFoundException(`User ${id} not found`);
        }

        return updatedUser;
    }

    async remove(id: string): Promise<IUser> {
        const deletedUser = await this.userModel.findByIdAndRemove(id).exec();

        if (!deletedUser) {
            throw new NotFoundException(`User ${id} not found`);
        }

        return deletedUser;
    }

    async addLikedGame(userId: string, gameId: string): Promise<IUser> {
        const user = await this.userModel.findById(userId).exec();

        if (!user) {
            throw new NotFoundException(`User ${userId} not found`);
        }

        user.likedGameIds.push(gameId);

        return await user.save();
    }

    async removeLikedGame(userId: string, gameId: string): Promise<IUser> {
        const user = await this.userModel.findById(userId).exec();

        if (!user) {
            throw new NotFoundException(`User ${userId} not found`);
        }

        const idIndex = user.likedGameIds.findIndex(likedGameId => likedGameId.toString() === gameId.toString());

        if (idIndex === -1) {
            throw new NotFoundException(`Game id ${gameId} not found`);
        }

        user.likedGameIds.splice(idIndex, 1);

        return await user.save();
    }

    async addLikedAsset(userId: string, assetId: string): Promise<IUser> {
        const user = await this.userModel.findById(userId).exec();

        if (!user) {
            throw new NotFoundException(`User ${userId} not found`);
        }

        user.likedAssetIds.push(assetId);

        return await user.save();
    }

    async removeLikedAsset(userId: string, assetId: string): Promise<IUser> {
        const user = await this.userModel.findById(userId).exec();

        if (!user) {
            throw new NotFoundException(`User ${userId} not found`);
        }

        const idIndex = user.likedAssetIds.findIndex(likedAssetId => likedAssetId.toString() === assetId.toString());

        if (idIndex === -1) {
            throw new NotFoundException(`Asset id ${assetId} not found`);
        }

        user.likedAssetIds.splice(idIndex, 1);

        return await user.save();
    }
}
