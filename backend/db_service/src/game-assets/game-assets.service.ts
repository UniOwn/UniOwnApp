import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Injectable, NotFoundException } from "@nestjs/common";

import { GameAsset } from "./schemas/game-asset.schema";
import { IGameAsset } from "./interface/game-asset.interface";
import { CreateGameAssetDto } from "./dto/create-game-asset.dto";
import { UpdateGameAssetDto } from "./dto/update-game-asset.dto";

@Injectable()
export class GameAssetsService {
    constructor(@InjectModel(GameAsset.name) private gameAssetModel: Model<IGameAsset>) {}

    async getAll(): Promise<IGameAsset[]> {
        return await this.gameAssetModel.find().exec();
    }

    async getById(id: string): Promise<IGameAsset> {
        const gameAsset = await this.gameAssetModel.findById(id).exec();

        if (!gameAsset) {
            throw new NotFoundException(`Game asset ${id} not found`);
        }

        return gameAsset;
    }

    async create(gameAssetDto: CreateGameAssetDto): Promise<IGameAsset> {
        const newGameAsset = await this.gameAssetModel.create(gameAssetDto);

        return newGameAsset;
    }

    async update(id: string, gameAssetDto: UpdateGameAssetDto): Promise<IGameAsset> {
        const updatedGameAsset = await this.gameAssetModel.findByIdAndUpdate(id, gameAssetDto).exec();

        if (!updatedGameAsset) {
            throw new NotFoundException(`Game asset ${id} not found`);
        }

        return updatedGameAsset;
    }

    async remove(id: string): Promise<IGameAsset> {
        const deletedGameAsset = await this.gameAssetModel.findByIdAndRemove(id).exec();

        if (!deletedGameAsset) {
            throw new NotFoundException(`Game asset ${id} not found`);
        }

        return deletedGameAsset;
    }
}
