import { NestFactory } from '@nestjs/core';
import {FastifyAppModule} from "./fastify-app.module";
import {FastifyAdapter, NestFastifyApplication} from "@nestjs/platform-fastify";

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        FastifyAppModule,
        new FastifyAdapter()
    );
    app.getHttpAdapter()
       .getInstance()
       .register(require('@fastify/multipart'))
    await app.listen(3000);
}
bootstrap();
