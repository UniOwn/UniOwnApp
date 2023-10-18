import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigService, ConfigModule } from "@nestjs/config";

import { environment } from "./constants";
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
        CacheConfigModule,
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                uri: configService.get(environment.mongoConnectionString)
            })
        }),
        UsersModule,
        GamesModule,
        GameassetsModule
    ]
})
export class AppModule {}
