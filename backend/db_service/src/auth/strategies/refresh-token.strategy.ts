import { Request } from "express";
import { environment } from "src/constants";
import { ConfigService } from "@nestjs/config";
import { Inject, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(Strategy, "jwt-refresh") {
    constructor(@Inject(ConfigService) private readonly configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.get(environment.jwtRefreshSecret),
            passReqToCallback: true
        });
    }

    validate<T>(req: Request, payload: T) {
        const refreshToken = req.headers.authorization?.replace("Bearer", "")?.trim();

        return { ...payload, refreshToken };
    }
}
