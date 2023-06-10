import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PoolsModule } from "./db_service/pools/pools.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: [".env.development.local"]
        }),
        PoolsModule,
        MongooseModule.forRoot(process.env.MONGODB_CONNECTION_STRING)
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
