import { Injectable } from "@nestjs/common";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import mongoose, { Model } from "mongoose";

import { User, UserDocument } from "./schemas/user.schema";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        @InjectConnection() private readonly connection: mongoose.Connection
    ) {}

    async getAll(): Promise<User[]> {
        return await this.userModel.find();
    }

    async getById(id: string) {
        return this.userModel.findById(id);
    }

    async create(userDto: CreateUserDto): Promise<User> {
        const session = await this.connection.startSession();

        let user: User;

        await session.withTransaction(async () => {
            const newUser = new this.userModel(userDto);

            user = await newUser.save({ session });
        });

        session.endSession();

        return user;
    }

    async remove(id: string): Promise<User> {
        const session = await this.connection.startSession();

        let user: User;

        await session.withTransaction(async () => {
            user = await this.userModel.findByIdAndRemove(id).session(session);
        });

        session.endSession();

        return user;
    }

    async update(id: string, userDto: UpdateUserDto): Promise<User> {
        const session = await this.connection.startSession();

        let user: User;

        await session.withTransaction(async () => {
            user = await this.userModel.findByIdAndUpdate(id, userDto).session(session);
        });

        session.endSession();

        return user;
    }
}
