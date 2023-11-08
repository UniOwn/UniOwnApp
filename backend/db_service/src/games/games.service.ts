import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Injectable, NotFoundException } from "@nestjs/common";

import { Game } from "./schemas/game.schema";
import { IGame } from "./interface/game.interface";
import { CreateGameDto } from "./dto/create-game.dto";
import { UpdateGameDto } from "./dto/update-game.dto";

@Injectable()
export class GamesService {
    constructor(@InjectModel(Game.name) private gameModel: Model<IGame>) {}

    async getAll(): Promise<IGame[]> {
        return await this.gameModel
            .aggregate([
                {
                    $lookup: {
                        from: "users",
                        localField: "ownerId",
                        foreignField: "_id",
                        as: "owner"
                    }
                },
                {
                    $unwind: {
                        path: "$owner"
                    }
                },
                { $set: { id: "$_id" } },
                {
                    $project: {
                        id: 1,
                        name: 1,
                        chainId: 1,
                        imageLink: 1,
                        contractAddress: 1,
                        ownerName: "$owner.username"
                    }
                }
            ])
            .exec();
    }

    async getById(id: string): Promise<IGame> {
        const game = await this.gameModel.findById(id).exec();

        if (!game) {
            throw new NotFoundException(`Game ${id} not found`);
        }

        return game;
    }

    async create(gameDto: CreateGameDto): Promise<IGame> {
        const newGame = await this.gameModel.create(gameDto);

        return newGame;
    }

    async update(id: string, gameDto: UpdateGameDto): Promise<IGame> {
        const updatedGame = await this.gameModel.findByIdAndUpdate(id, gameDto).exec();

        if (!updatedGame) {
            throw new NotFoundException(`Game ${id} not found`);
        }

        return updatedGame;
    }

    async remove(id: string): Promise<IGame> {
        const deletedGame = await this.gameModel.findByIdAndRemove(id).exec();

        if (!deletedGame) {
            throw new NotFoundException(`Game ${id} not found`);
        }

        return deletedGame;
    }
}
