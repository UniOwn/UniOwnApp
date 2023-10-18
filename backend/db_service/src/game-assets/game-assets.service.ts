import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { GameAsset, GameAssetDocument } from "./schemas/game-asset.schema";
import { GameAssetDto } from "./dto/game-asset.dto";

@Injectable()
export class GameAssetsService {
    constructor(@InjectModel(GameAsset.name) private gameAssetModel: Model<GameAssetDocument>) {}

    async getAll(): Promise<GameAsset[]> {
        return await this.gameAssetModel.find().exec();
    }

    async getById(id: string) {
        return await this.gameAssetModel.findById(id).exec();
    }

    async create(gameAssetDto: GameAssetDto): Promise<GameAsset> {
        const newGameAsset = await this.gameAssetModel.create(gameAssetDto);

        return newGameAsset;
    }

    async remove(id: string): Promise<GameAsset> {
        return await this.gameAssetModel.findByIdAndRemove(id).exec();
    }

    async update(id: string, gameAssetDto: GameAssetDto): Promise<GameAsset> {
        return await this.gameAssetModel.findByIdAndUpdate(id, gameAssetDto).exec();
    }
}
