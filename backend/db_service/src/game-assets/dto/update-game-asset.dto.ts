import { PartialType } from "@nestjs/swagger";

import { CreateGameAssetDto } from "./create-game-asset.dto";

export class UpdateGameAssetDto extends PartialType(CreateGameAssetDto) {}
