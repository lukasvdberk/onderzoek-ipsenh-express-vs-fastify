import { NestFactory } from '@nestjs/core';
import {FastifyAdapter, NestFastifyApplication} from "@nestjs/platform-fastify";
import {AppModule} from "./app.module";

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter()
    );
    app.getHttpAdapter()
        .getInstance()
        .use(
            (req, res, next) => {
                // parse multipart/form-data requests
                if (req.headers['content-type']?.includes('multipart/form-data')) {
                    req.on('data', (chunk: any) => {});
                    req.on('end', () => {
                        res.end()
                    });
                }
                // handle standard request
                else {
                    next();
                }
            }
        )
    await app.listen(3000);
}
bootstrap();
