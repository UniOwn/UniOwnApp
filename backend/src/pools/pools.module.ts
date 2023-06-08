import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PoolsService } from "./pools.service";
import { PoolsController } from "./pools.controller";
import { Pool, PoolSchema } from "./schemas/pool.schema";

@Module({
    providers: [PoolsService],
    controllers: [PoolsController],
    imports: [
        MongooseModule.forFeature([
            {name: Pool.name, schema: PoolSchema}
        ])
    ]
})

export class PoolsModule {

}