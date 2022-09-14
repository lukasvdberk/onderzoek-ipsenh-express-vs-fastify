import { NestFactory } from '@nestjs/core';
import { ExpressAppModule } from './express-app.module';

async function bootstrap() {
  const app = await NestFactory.create(ExpressAppModule);
  await app.listen(3000);
}
bootstrap();
