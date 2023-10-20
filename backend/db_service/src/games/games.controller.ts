import { Types } from "mongoose";
import { ApiTags } from "@nestjs/swagger";
import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";

import { GameDto } from "./dto/game.dto";
import { Game } from "./schemas/game.schema";
import { GamesService } from "./games.service";

@ApiTags("games")
@Controller("games")
export class GamesController {
    constructor(private readonly gameService: GamesService) {}

    @Get("/create-games-dev/:ownerId")
    createGamesDev(@Param("ownerId") ownerId: string): boolean {
        [...new Array(5)].forEach((_, i) => {
            this.gameService.create({
                name: `Game ${i}`,
                contractAddress: "0xcontractAddress",
                chainId: "0xchainId",
                imageLink: "https://axieinfinity.com/images/templates/home/news/new-releases-in-project-t.jpg",
                ownerId: Types.ObjectId.createFromHexString(ownerId)
            });
        });

        return true;
    }

    @Get()
    async getAllGames(): Promise<Game[]> {
        return this.gameService.getAll();
    }

    @Get(":id")
    async getGame(@Param("id") id: string): Promise<Game> {
        return this.gameService.getById(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header("Cache-Control", "none")
    async createGame(@Body() gameDto: GameDto): Promise<Game> {
        return this.gameService.create(gameDto);
    }

    @Delete(":id")
    async removeGame(@Param("id") id: string): Promise<Game> {
        return this.gameService.remove(id);
    }

    @Put(":id")
    async updateGame(@Param("id") id: string, @Body() gameDto: GameDto): Promise<Game> {
        return this.gameService.update(id, gameDto);
    }
}
