import { Types } from "mongoose";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { AccessTokenGuard, ParseObjectIdPipe } from "src/utils";
import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from "@nestjs/common";

import { GamesService } from "./games.service";
import { IGame } from "./interface/game.interface";
import { CreateGameDto } from "./dto/create-game.dto";
import { UpdateGameDto } from "./dto/update-game.dto";

@ApiBearerAuth()
@ApiTags("games")
@Controller("games")
export class GamesController {
    constructor(private readonly gameService: GamesService) {}

    @Get("/create-games-dev/:ownerId")
    createGamesDev(@Param("ownerId") ownerId: string): boolean {
        [...new Array(20)].forEach((_, i) => {
            this.gameService.create({
                name: `Game ${i}`,
                chainId: "0xchainId",
                contractAddress: "0xcontractAddress",
                ownerId: Types.ObjectId.createFromHexString(ownerId),
                imageLink: "https://axieinfinity.com/images/templates/home/infinite-experiences/breeding.jpg"
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
    @UseGuards(AccessTokenGuard)
    @HttpCode(HttpStatus.CREATED)
    @Header("Cache-Control", "none")
    async createGame(@Body() gameDto: CreateGameDto): Promise<IGame> {
        return this.gameService.create(gameDto);
    }

    @Delete(":id")
    @UseGuards(AccessTokenGuard)
    async removeGame(@Param("id", ParseObjectIdPipe) id: string): Promise<IGame> {
        return this.gameService.remove(id);
    }

    @Put(":id")
    @UseGuards(AccessTokenGuard)
    async updateGame(@Param("id", ParseObjectIdPipe) id: string, @Body() gameDto: UpdateGameDto): Promise<IGame> {
        return this.gameService.update(id, gameDto);
    }
}
