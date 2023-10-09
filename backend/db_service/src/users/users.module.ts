import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { UserService } from "./users.service";
import { UsersController } from "./users.controller";
import { User, UserSchema } from "./schemas/user.schema";

@Module({
    providers: [UserService],
    controllers: [UsersController],
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])]
})
export class UsersModule {}
