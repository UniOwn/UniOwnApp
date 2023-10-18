import { Types } from "mongoose";
import { ApiTags } from "@nestjs/swagger";
import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";

import { GameAssetsService } from "./game-assets.service";
import { GameAsset } from "./schemas/game-asset.schema";
import { GameAssetDto } from "./dto/game-asset.dto";

@ApiTags("gameassets")
@Controller("gameassets")
export class GameAssetsController {
    constructor(private readonly gameAssetsService: GameAssetsService) {}

    @Get("/create-gameassets-dev/:gameId")
    createUsersDev(@Param("gameId") gameId: string): boolean {
        [...new Array(5)].forEach((_, i) => {
            this.gameAssetsService.create({
                name: `GameAsset ${i}`,
                contractAddress: "0xcontractAddress",
                tokenId: "0xtokenId",
                price: 20.91,
                chainId: "0xchainId",
                gameId: Types.ObjectId.createFromHexString(gameId)
            });
        });

        return true;
    }

    @Get()
    getAllUsers(): Promise<GameAsset[]> {
        return this.gameAssetsService.getAll();
    }

    @Get(":id")
    getUser(@Param("id") id: string): Promise<GameAsset> {
        return this.gameAssetsService.getById(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header("Cache-Control", "none")
    createUser(@Body() gameAssetDto: GameAssetDto): Promise<GameAsset> {
        return this.gameAssetsService.create(gameAssetDto);
    }

    @Delete(":id")
    removeUser(@Param("id") id: string): Promise<GameAsset> {
        return this.gameAssetsService.remove(id);
    }

    @Put(":id")
    updateUser(@Param("id") id: string, @Body() gameAssetDto: GameAssetDto): Promise<GameAsset> {
        return this.gameAssetsService.update(id, gameAssetDto);
    }
}
