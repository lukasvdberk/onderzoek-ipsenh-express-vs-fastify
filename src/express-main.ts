import { NestFactory } from '@nestjs/core';
import {AppModule} from "./app.module";
import {Request} from "express";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // to handle multipart requests
  app.use((req: Request, res: any, next: any) => {
    if (req.header('Content-Type')?.includes('multipart/form-data')) {
      req.on('data', (chunk: any) => {});
      req.on('end', () => {
        next();
      });
    } else {
      // handle standard request
      next();
    }
  });
  await app.listen(3000);
}
bootstrap();
