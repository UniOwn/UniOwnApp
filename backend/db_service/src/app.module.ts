import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PoolsModule } from "./pools/pools.module";
import { UsersModule } from "./users/users.module";
import { DaosModule } from "./daos/daos.module";
import { ProposalsModule } from "./proposals/proposals.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: [".env.development.local"]
        }),
        PoolsModule,
        UsersModule,
        DaosModule,
        ProposalsModule,
        MongooseModule.forRoot(process.env.MONGODB_CONNECTION_STRING)
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
