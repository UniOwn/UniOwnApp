import { Module } from "@nestjs/common";
import { environment } from "src/constants";
import { CacheModule } from "@nestjs/cache-manager";
import { redisStore } from "cache-manager-redis-yet";
import { ConfigModule, ConfigService } from "@nestjs/config";

import { CacheService } from "./cache.service";

@Module({
    imports: [
        CacheModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                store: await redisStore({
                    ttl: configService.get(environment.redisTTL),
                    url: configService.get(environment.redisConnectionString)
                })
            })
        }),
        ConfigModule
    ],
    providers: [CacheService],
    exports: [CacheModule, CacheService]
})
export class CacheConfigModule {}
