import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { GameAssetsService } from "./game-assets.service";
import { GameAssetsController } from "./game-assets.controller";
import { GameAsset, GameAssetSchema } from "./schemas/game-asset.schema";

@Module({
    providers: [GameAssetsService],
    controllers: [GameAssetsController],
    imports: [MongooseModule.forFeature([{ name: GameAsset.name, schema: GameAssetSchema }])]
})
export class GameassetsModule {}
