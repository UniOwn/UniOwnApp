import { ApiTags } from "@nestjs/swagger";
import { ParseObjectIdPipe } from "src/utils";
import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Patch } from "@nestjs/common";

import { UserService } from "./users.service";
import { IUser } from "./interface/user.interface";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@ApiTags("users")
@Controller("users")
export class UsersController {
    constructor(private readonly userService: UserService) {}

    @Get("/create-users-dev")
    createUsersDev(): boolean {
        [...new Array(5)].forEach((_, i) => {
            this.userService.create({ nickname: `nickname ${i}` } as CreateUserDto);
        });

        return true;
    }

    @Get()
    async getAllUsers(): Promise<IUser[]> {
        return this.userService.getAll();
    }

    @Get(":id")
    async getUser(@Param("id", ParseObjectIdPipe) id: string): Promise<IUser> {
        return this.userService.getById(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header("Cache-Control", "none")
    async createUser(@Body() createUserDto: CreateUserDto): Promise<IUser> {
        return this.userService.create(createUserDto);
    }

    @Delete(":id")
    async removeUser(@Param("id", ParseObjectIdPipe) id: string): Promise<IUser> {
        return this.userService.remove(id);
    }

    @Put(":id")
    async updateUser(@Param("id", ParseObjectIdPipe) id: string, @Body() updateUserDto: UpdateUserDto): Promise<IUser> {
        return this.userService.update(id, updateUserDto);
    }

    @Patch("/:userId/like/game/:gameId")
    async addLikedGame(
        @Param("userId", ParseObjectIdPipe) userId: string,
        @Param("gameId", ParseObjectIdPipe) gameId: string
    ): Promise<IUser> {
        return this.userService.addLikedGame(userId, gameId);
    }

    @Patch("/:userId/dislike/game/:gameId")
    async removeLikedGame(
        @Param("userId", ParseObjectIdPipe) userId: string,
        @Param("gameId", ParseObjectIdPipe) gameId: string
    ): Promise<IUser> {
        return this.userService.removeLikedGame(userId, gameId);
    }

    @Patch("/:userId/like/asset/:assetId")
    async addLikedGameAsset(
        @Param("userId", ParseObjectIdPipe) userId: string,
        @Param("assetId", ParseObjectIdPipe) assetId: string
    ): Promise<IUser> {
        return this.userService.addLikedAsset(userId, assetId);
    }

    @Patch("/:userId/dislike/asset/:assetId")
    async removeLikedGameAsset(
        @Param("userId", ParseObjectIdPipe) userId: string,
        @Param("assetId", ParseObjectIdPipe) assetId: string
    ): Promise<IUser> {
        return this.userService.removeLikedAsset(userId, assetId);
    }
}
