import { createParamDecorator, ExecutionContext } from "@nestjs/common";

const ParseCookies = createParamDecorator((data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    return data ? request.cookies?.[data] : request.cookies;
});

export default ParseCookies;
