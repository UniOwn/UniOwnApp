import { Types } from "mongoose";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { AccessTokenGuard, ParseObjectIdPipe } from "src/utils";
import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from "@nestjs/common";

import { GameAssetsService } from "./game-assets.service";
import { IGameAsset } from "./interface/game-asset.interface";
import { CreateGameAssetDto } from "./dto/create-game-asset.dto";
import { UpdateGameAssetDto } from "./dto/update-game-asset.dto";

@ApiBearerAuth()
@ApiTags("gameassets")
@Controller("gameassets")
export class GameAssetsController {
    constructor(private readonly gameAssetsService: GameAssetsService) {}

    @Get("/create-gameassets-dev/:ownerId")
    createGameAssetDev(@Param("ownerId") gameId: string): boolean {
        [...new Array(5)].forEach((_, i) => {
            this.gameAssetsService.create({
                name: `GameAsset ${i}`,
                contractAddress: "0xcontractAddress",
                tokenId: "0xtokenId",
                price: 20.91,
                chainId: "0xchainId",
                ownerId: Types.ObjectId.createFromHexString(gameId)
            });
        });

        return true;
    }

    @Get()
    getAllGameAssets(): Promise<IGameAsset[]> {
        return this.gameAssetsService.getAll();
    }

    @Get(":id")
    getGameAsset(@Param("id", ParseObjectIdPipe) id: string): Promise<IGameAsset> {
        return this.gameAssetsService.getById(id);
    }

    @Post()
    @UseGuards(AccessTokenGuard)
    @HttpCode(HttpStatus.CREATED)
    @Header("Cache-Control", "none")
    createGameAsset(@Body() gameAssetDto: CreateGameAssetDto): Promise<IGameAsset> {
        return this.gameAssetsService.create(gameAssetDto);
    }

    @Delete(":id")
    @UseGuards(AccessTokenGuard)
    removeGameAsset(@Param("id", ParseObjectIdPipe) id: string): Promise<IGameAsset> {
        return this.gameAssetsService.remove(id);
    }

    @Put(":id")
    @UseGuards(AccessTokenGuard)
    updateGameAsset(@Param("id", ParseObjectIdPipe) id: string, @Body() gameAssetDto: UpdateGameAssetDto): Promise<IGameAsset> {
        return this.gameAssetsService.update(id, gameAssetDto);
    }
}
