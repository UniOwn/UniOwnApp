import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigService, ConfigModule } from "@nestjs/config";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";

import { environment } from "./constants";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { GamesModule } from "./games/games.module";
import { CacheConfigModule } from "./cache/cache.module";
import { GameassetsModule } from "./game-assets/game-assets.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: [".env.development.local"]
        }),
        ThrottlerModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => [
                {
                    ttl: configService.get(environment.throttleTotal),
                    limit: configService.get(environment.throttleLimit)
                }
            ]
        }),
        CacheConfigModule,
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                uri: configService.get(environment.mongoConnectionString),
                dbName: configService.get(environment.mongoDatabaseName),
                user: configService.get(environment.mongoConnectionUserName),
                pass: configService.get(environment.mongoConnectionPassword)
            })
        }),
        AuthModule,
        UsersModule,
        GamesModule,
        GameassetsModule
    ],
    providers: [{ provide: APP_GUARD, useClass: ThrottlerGuard }]
})
export class AppModule {}
