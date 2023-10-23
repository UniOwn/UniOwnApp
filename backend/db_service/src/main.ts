import { NestFactory } from "@nestjs/core";
import * as cookieParser from "cookie-parser";
import { ConfigService } from "@nestjs/config";
import { Logger, ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { AppModule } from "./app.module";
import { environment } from "./constants";
import { HttpExceptionFilter } from "./utils";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors();
    app.use(cookieParser());
    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalFilters(new HttpExceptionFilter());

    const logger = new Logger();
    const configService = app.get(ConfigService);

    const options = new DocumentBuilder().setTitle("Uniown Backend").setVersion("1.0").build();

    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup("docs", app, document);

    const port = configService.get(environment.appPort) || 5005;

    await app.listen(port, () => {
        logger.log(`Server is running on port ${port}`);
    });
}
bootstrap();
