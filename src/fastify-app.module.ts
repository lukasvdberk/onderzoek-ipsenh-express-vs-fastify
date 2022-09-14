import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {FastifyFileHandlerController} from "./fastify-file-handler.controller";

@Module({
  imports: [],
  controllers: [AppController, FastifyFileHandlerController],
  providers: [],
})
export class FastifyAppModule {}
