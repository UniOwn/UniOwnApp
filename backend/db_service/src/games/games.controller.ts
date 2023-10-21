import { Types } from "mongoose";
import { ApiTags } from "@nestjs/swagger";
import { ParseObjectIdPipe } from "src/utils";
import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";

import { GamesService } from "./games.service";
import { IGame } from "./interface/game.interface";
import { CreateGameDto } from "./dto/create-game.dto";
import { UpdateGameDto } from "./dto/update-game.dto";

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
    async getAllGames(): Promise<IGame[]> {
        return this.gameService.getAll();
    }

    @Get(":id")
    async getGame(@Param("id", ParseObjectIdPipe) id: string): Promise<IGame> {
        return this.gameService.getById(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header("Cache-Control", "none")
    async createGame(@Body() gameDto: CreateGameDto): Promise<IGame> {
        return this.gameService.create(gameDto);
    }

    @Delete(":id")
    async removeGame(@Param("id", ParseObjectIdPipe) id: string): Promise<IGame> {
        return this.gameService.remove(id);
    }

    @Put(":id")
    async updateGame(@Param("id", ParseObjectIdPipe) id: string, @Body() gameDto: UpdateGameDto): Promise<IGame> {
        return this.gameService.update(id, gameDto);
    }
}
