import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { DaosService } from "./daos.service";
import { DaosController } from "./daos.controller";
import { Dao, DaoSchema } from "./schemas/dao.schema";

@Module({
    providers: [DaosService],
    controllers: [DaosController],
    imports: [MongooseModule.forFeature([{ name: Dao.name, schema: DaoSchema }])]
})
export class DaosModule {}
