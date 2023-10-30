import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { compare, hash, genSalt } from "bcrypt";
import { cache, environment } from "src/constants";
import { CacheService } from "src/cache/cache.service";
import { UsersService } from "src/users/users.service";
import { IUser } from "src/users/interface/user.interface";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";

import { AuthDto } from "./dto/auth.dto";
import { IJWTPayload } from "./interface/jwt-payload.interface";
import { ISignUpResponse } from "./interface/sign-up-response.interface";
import { ICachedRefreshToken, IJWTTokens } from "./interface/jwt-tokens.interface";

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private cacheService: CacheService,
        private usersService: UsersService,
        private configService: ConfigService
    ) {}

    async signUp(userDto: CreateUserDto): Promise<ISignUpResponse> {
        const user = await this.usersService.getByAddress(userDto.address);

        if (user) {
            throw new BadRequestException("User already exists");
        }

        const newUser = await this.usersService.create({ ...userDto, username: userDto.address });

        const tokens = await this.generateTokens(newUser);

        return {
            userId: newUser.id,
            tokens
        };
    }

    async signIn(authDto: AuthDto): Promise<IJWTTokens> {
        const user = await this.usersService.getByAddress(authDto.address);

        if (!user) {
            throw new NotFoundException("User does not exist");
        }

        const tokens = await this.generateTokens(user);

        return tokens;
    }

    async refreshToken(address: string, refreshToken: string): Promise<IJWTTokens> {
        const user = await this.usersService.getByAddress(address);

        if (!user) {
            throw new NotFoundException("User does not exist");
        }

        const cachedRefreshToken = await this.cacheService.get<ICachedRefreshToken>(cache.refreshToken(user.id));

        if (
            !cachedRefreshToken ||
            !(cachedRefreshToken.userId === user.id && (await compare(refreshToken, cachedRefreshToken.refreshToken)))
        ) {
            throw new ForbiddenException("Access denied");
        }

        const tokens = await this.generateTokens(user);

        return tokens;
    }

    async generateTokens(user: IUser): Promise<IJWTTokens> {
        const payload: IJWTPayload = { address: user.address, nonce: user.nonce };

        const tokens: IJWTTokens = {
            access: {
                token: await this.jwtService.signAsync(payload, {
                    expiresIn: "20m",
                    secret: this.configService.get(environment.jwtAccessSecret)
                }),
                expiresIn: new Date().setMinutes(new Date().getMinutes() + 20)
            },
            refresh: {
                token: await this.jwtService.signAsync(payload, {
                    expiresIn: "7d",
                    secret: this.configService.get(environment.jwtRefreshSecret)
                }),
                expiresIn: new Date().setDate(new Date().getDate() + 7)
            }
        };

        const salt = await genSalt(10);

        await this.cacheService.set<ICachedRefreshToken>(
            cache.refreshToken(user.id),
            { userId: user.id, refreshToken: await hash(tokens.refresh.token, salt) },
            cache.refreshTokenExpiration
        );

        return tokens;
    }
}
