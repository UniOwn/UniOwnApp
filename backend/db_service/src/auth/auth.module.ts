import { Module } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersModule } from "src/users/users.module";
import { CacheConfigModule } from "src/cache/cache.module";

import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { AccessTokenStrategy } from "./strategies/access-token.strategy";
import { RefreshTokenStrategy } from "./strategies/refresh-token.strategy";

@Module({
    imports: [UsersModule, CacheConfigModule],
    controllers: [AuthController],
    providers: [AuthService, AccessTokenStrategy, RefreshTokenStrategy, JwtService]
})
export class AuthModule {}
