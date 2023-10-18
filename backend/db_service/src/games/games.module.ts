import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { GamesService } from "./games.service";
import { GamesController } from "./games.controller";
import { Game, GameSchema } from "./schemas/game.schema";

@Module({
    providers: [GamesService],
    controllers: [GamesController],
    imports: [MongooseModule.forFeature([{ name: Game.name, schema: GameSchema }])]
})
export class GamesModule {}
