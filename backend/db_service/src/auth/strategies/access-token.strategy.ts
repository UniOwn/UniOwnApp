import { environment } from "src/constants";
import { ConfigService } from "@nestjs/config";
import { Inject, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

import { IJWTPayload } from "../interface/jwt-payload/jwt-payload.interface";

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, "jwt") {
    constructor(@Inject(ConfigService) private readonly configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.get(environment.jwtAccessSecret)
        });
    }

    validate(payload: IJWTPayload) {
        return payload;
    }
}
