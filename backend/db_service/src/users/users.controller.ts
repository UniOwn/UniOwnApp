import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { AccessTokenGuard, ParseObjectIdPipe } from "src/utils";
import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Patch, UseGuards } from "@nestjs/common";

import { UsersService } from "./users.service";
import { IUser } from "./interface/user.interface";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@ApiBearerAuth()
@ApiTags("users")
@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get("/create-users-dev")
    createUsersDev(): boolean {
        [...new Array(5)].forEach((_, i) => {
            this.usersService.create({ address: `0x00${i}` } as CreateUserDto);
        });

        return true;
    }

    @Get()
    async getAllUsers(): Promise<IUser[]> {
        return this.usersService.getAll();
    }

    @Get(":id")
    @UseGuards(AccessTokenGuard)
    async getUser(@Param("id", ParseObjectIdPipe) id: string): Promise<IUser> {
        return this.usersService.getById(id);
    }

    @Post()
    @UseGuards(AccessTokenGuard)
    @HttpCode(HttpStatus.CREATED)
    @Header("Cache-Control", "none")
    async createUser(@Body() createUserDto: CreateUserDto): Promise<IUser> {
        return this.usersService.create(createUserDto);
    }

    @Delete(":id")
    @UseGuards(AccessTokenGuard)
    async removeUser(@Param("id", ParseObjectIdPipe) id: string): Promise<IUser> {
        return this.usersService.remove(id);
    }

    @Put(":id")
    @UseGuards(AccessTokenGuard)
    async updateUser(@Param("id", ParseObjectIdPipe) id: string, @Body() updateUserDto: UpdateUserDto): Promise<IUser> {
        return this.usersService.update(id, updateUserDto);
    }

    @UseGuards(AccessTokenGuard)
    @Patch("/:userId/like/game/:gameId")
    async addLikedGame(
        @Param("userId", ParseObjectIdPipe) userId: string,
        @Param("gameId", ParseObjectIdPipe) gameId: string
    ): Promise<IUser> {
        return this.usersService.addLikedGame(userId, gameId);
    }

    @UseGuards(AccessTokenGuard)
    @Patch("/:userId/dislike/game/:gameId")
    async removeLikedGame(
        @Param("userId", ParseObjectIdPipe) userId: string,
        @Param("gameId", ParseObjectIdPipe) gameId: string
    ): Promise<IUser> {
        return this.usersService.removeLikedGame(userId, gameId);
    }

    @UseGuards(AccessTokenGuard)
    @Patch("/:userId/like/asset/:assetId")
    async addLikedGameAsset(
        @Param("userId", ParseObjectIdPipe) userId: string,
        @Param("assetId", ParseObjectIdPipe) assetId: string
    ): Promise<IUser> {
        return this.usersService.addLikedAsset(userId, assetId);
    }

    @UseGuards(AccessTokenGuard)
    @Patch("/:userId/dislike/asset/:assetId")
    async removeLikedGameAsset(
        @Param("userId", ParseObjectIdPipe) userId: string,
        @Param("assetId", ParseObjectIdPipe) assetId: string
    ): Promise<IUser> {
        return this.usersService.removeLikedAsset(userId, assetId);
    }
}
