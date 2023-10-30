import { Module } from "@nestjs/common";
import { CacheModule } from "@nestjs/cache-manager";
import * as redisStore from "cache-manager-redis-store";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { environment } from "src/constants";

import { CacheService } from "./cache.service";

@Module({
    imports: [
        CacheModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                store: redisStore,
                url: configService.get(environment.redisConnectionString)
            })
        }),
        ConfigModule
    ],
    providers: [CacheService],
    exports: [CacheModule, CacheService]
})
export class CacheConfigModule {}
