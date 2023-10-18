import mongoose, { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";

import { GameDto } from "./dto/game.dto";
import { Game, GameDocument } from "./schemas/game.schema";

@Injectable()
export class GamesService {
    constructor(
        @InjectModel(Game.name) private gameModel: Model<GameDocument>,
        @InjectConnection() private readonly connection: mongoose.Connection
    ) {}

    async getAll(): Promise<Game[]> {
        return await this.gameModel
            .aggregate([
                {
                    $lookup: {
                        from: "users",
                        localField: "ownerId",
                        foreignField: "_id",
                        as: "owner"
                    }
                }
            ])
            .exec();
    }

    async getById(id: string) {
        return this.gameModel.findById(id).exec();
    }

    async create(gameDto: GameDto): Promise<Game> {
        const newGame = await this.gameModel.create(gameDto);

        return newGame;
    }

    async remove(id: string): Promise<Game> {
        return await this.gameModel.findByIdAndRemove(id).exec();
    }

    async update(id: string, gameDto: GameDto): Promise<Game> {
        return await this.gameModel.findByIdAndUpdate(id, gameDto).exec();
    }
}
