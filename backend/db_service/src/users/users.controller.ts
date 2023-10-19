import { ApiTags } from "@nestjs/swagger";
import { ParseObjectIdPipe } from "src/utils";
import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";

import { User } from "./schemas/user.schema";
import { UserService } from "./users.service";
import { IUser } from "./interface/user.interface";
import { CreateUserDto } from "./dto/create-user.dto";

@ApiTags("users")
@Controller("users")
export class UsersController {
    constructor(private readonly userService: UserService) {}

    @Get("/create-users-dev")
    createUsersDev(): boolean {
        [...new Array(5)].forEach((_, i) => {
            this.userService.create({ nickname: `nickname ${i}`, hasMintedPassport: false } as CreateUserDto);
        });

        return true;
    }

    @Get()
    async getAllUsers(): Promise<IUser[]> {
        return this.userService.getAll();
    }

    @Get(":id")
    async getUser(@Param("id", ParseObjectIdPipe) id: string): Promise<User> {
        return this.userService.getById(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header("Cache-Control", "none")
    async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.create(createUserDto);
    }

    @Delete(":id")
    async removeUser(@Param("id", ParseObjectIdPipe) id: string): Promise<User> {
        return this.userService.remove(id);
    }

    @Put(":id")
    async updateUser(@Param("id", ParseObjectIdPipe) id: string, @Body() updateUserDto: CreateUserDto): Promise<User> {
        return this.userService.update(id, updateUserDto);
    }
}
