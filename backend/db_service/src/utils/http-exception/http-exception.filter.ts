import { Request, Response } from "express";
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from "@nestjs/common";

@Catch(HttpException)
class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();
        const message = exception?.message;

        response.status(status).json({
            message,
            path: request.url,
            statusCode: status,
            timestamp: new Date().toISOString()
        });
    }
}

export default HttpExceptionFilter;
