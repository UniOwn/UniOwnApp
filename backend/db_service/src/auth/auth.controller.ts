import { Request } from "express";
import { ApiTags } from "@nestjs/swagger";
import { RefreshTokenGuard } from "src/utils";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { Body, Controller, Post, UseGuards, Get, Req } from "@nestjs/common";

import { AuthDto } from "./dto/auth.dto";
import { AuthService } from "./auth.service";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("/sign-up")
    async signUp(@Body() createUserDto: CreateUserDto) {
        return await this.authService.signUp(createUserDto);
    }

    @Post("/sign-in")
    async signIn(@Body() authDto: AuthDto) {
        return await this.authService.signIn(authDto);
    }

    @Get("refresh")
    @UseGuards(RefreshTokenGuard)
    async refreshToken(@Req() req: Request) {
        const address = req.user["address"];
        const refreshToken = req.user["refreshToken"];

        return await this.authService.refreshToken(address, refreshToken);
    }
}
