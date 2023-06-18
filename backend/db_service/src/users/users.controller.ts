import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";

import { UserService } from "./users.service";
import { User } from "./schemas/user.schema";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller("users")
export class UsersController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getAllUsers(): Promise<User[]> {
        return this.userService.getAll();
    }

    @Get()
    getUser(@Param("id") id: string): Promise<User> {
        return this.userService.getById(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header("Cache-Control", "none")
    createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.create(createUserDto);
    }

    @Delete()
    removeUser(@Param("id") id: string): Promise<User> {
        return this.userService.remove(id);
    }

    @Put()
    updateUser(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
        return this.userService.update(id, updateUserDto);
    }
}
