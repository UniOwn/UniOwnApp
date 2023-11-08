import { Module } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from "src/users/users.module";

import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { AccessTokenStrategy } from "./strategies/access-token.strategy";
import { RefreshTokenStrategy } from "./strategies/refresh-token.strategy";
import { CachedRefreshToken, CachedRefreshTokenSchema } from "./schemas/cached-refresh-token.schema";

@Module({
    controllers: [AuthController],
    providers: [AuthService, AccessTokenStrategy, RefreshTokenStrategy, JwtService],
    imports: [UsersModule, MongooseModule.forFeature([{ name: CachedRefreshToken.name, schema: CachedRefreshTokenSchema }])]
})
export class AuthModule {}
