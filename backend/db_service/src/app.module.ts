import { Module } from "@nestjs/common";
import { ConfigService, ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PoolsModule } from "./pools/pools.module";
import { UsersModule } from "./users/users.module";
import { DaosModule } from "./daos/daos.module";
import { ProposalsModule } from "./proposals/proposals.module";
import { CacheConfigModule } from "./cache/cache.module";
import { environment } from "./constants";

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
        PoolsModule,
        UsersModule,
        DaosModule,
        ProposalsModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
