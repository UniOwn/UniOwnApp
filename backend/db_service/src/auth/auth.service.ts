import { Model, Types } from "mongoose";
import { JwtService } from "@nestjs/jwt";
import { InjectModel } from "@nestjs/mongoose";
import { ConfigService } from "@nestjs/config";
import { cache, environment } from "src/constants";
import { UsersService } from "src/users/users.service";
import { IUser } from "src/users/interface/user.interface";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";

import { AuthDto } from "./dto/auth.dto";
import { IJWTPayload } from "./interface/jwt-payload/jwt-payload.interface";
import { IAuthResponse } from "./interface/auth-response/auth-response.interface";
import { ICachedRefreshToken } from "./interface/cached-refresh-token/cached-refresh-token.interface";
import { CachedRefreshToken } from "./schemas/cached-refresh-token.schema";

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private usersService: UsersService,
        private configService: ConfigService,
        @InjectModel(CachedRefreshToken.name) private cachedRefreshTokenModel: Model<ICachedRefreshToken>
    ) {}

    async signUp(userDto: CreateUserDto): Promise<IAuthResponse> {
        const user = await this.usersService.getByAddress(userDto.address);

        if (user) {
            throw new BadRequestException("User already exists");
        }

        const newUser = await this.usersService.create({ ...userDto, username: userDto.address });

        const tokens = await this.generateTokens(newUser);

        return tokens;
    }

    async signIn(authDto: AuthDto): Promise<IAuthResponse> {
        const user = await this.usersService.getByAddress(authDto.address);

        if (!user) {
            throw new NotFoundException("User does not exist");
        }

        const tokens = await this.generateTokens(user);

        return tokens;
    }

    async refreshToken(address: string, refreshToken: string): Promise<IAuthResponse> {
        const user = await this.usersService.getByAddress(address);

        if (!user) {
            throw new NotFoundException("User does not exist");
        }

        const cachedRefreshToken = await this.cachedRefreshTokenModel
            .findOne({ userId: Types.ObjectId.createFromHexString(user.id), token: refreshToken })
            .exec();

        if (!cachedRefreshToken || cachedRefreshToken?.expiresAt < new Date().getTime()) {
            cachedRefreshToken?.id && (await this.cachedRefreshTokenModel.findByIdAndDelete(cachedRefreshToken.id).exec());

            throw new ForbiddenException("Access denied");
        }

        const tokens = await this.generateTokens(user);

        return tokens;
    }

    async generateTokens(user: IUser): Promise<IAuthResponse> {
        const payload: IJWTPayload = { address: user.address, nonce: user.nonce };

        const tokens: IAuthResponse = {
            id: user?.id,
            access_token: await this.jwtService.signAsync(payload, {
                expiresIn: "20m",
                secret: this.configService.get(environment.jwtAccessSecret)
            }),
            expires_at: new Date().setMinutes(new Date().getMinutes() + 20),
            refresh_token: await this.jwtService.signAsync(payload, {
                expiresIn: "7d",
                secret: this.configService.get(environment.jwtRefreshSecret)
            })
        };

        await this.cachedRefreshTokenModel.deleteMany({ userId: Types.ObjectId.createFromHexString(user.id) }).exec();

        await this.cachedRefreshTokenModel.create({
            userId: Types.ObjectId.createFromHexString(user.id),
            token: tokens.refresh_token,
            expiresAt: new Date().getTime() + cache.refreshTokenExpiration
        });

        return tokens;
    }
}
