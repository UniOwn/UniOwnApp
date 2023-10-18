import { ApiTags } from "@nestjs/swagger";
import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";

import { UserDto } from "./dto/user.dto";
import { User } from "./schemas/user.schema";
import { UserService } from "./users.service";

@ApiTags("users")
@Controller("users")
export class UsersController {
    constructor(private readonly userService: UserService) {}

    @Get("/create-users-dev")
    createUsersDev(): boolean {
        [...new Array(5)].forEach((_, i) => {
            this.userService.create({ nickname: `nickname ${i}`, createdAt: new Date().getTime(), hasMintedPassport: false });
        });

        return true;
    }

    @Get()
    async getAllUsers(): Promise<User[]> {
        return this.userService.getAll();
    }

    @Get(":id")
    async getUser(@Param("id") id: string): Promise<User> {
        return this.userService.getById(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header("Cache-Control", "none")
    async createUser(@Body() createUserDto: UserDto): Promise<User> {
        return this.userService.create(createUserDto);
    }

    @Delete(":id")
    async removeUser(@Param("id") id: string): Promise<User> {
        return this.userService.remove(id);
    }

    @Put(":id")
    async updateUser(@Param("id") id: string, @Body() updateUserDto: UserDto): Promise<User> {
        return this.userService.update(id, updateUserDto);
    }
}
