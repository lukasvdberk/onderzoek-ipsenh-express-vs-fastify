import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {ExpressFileHandlerController} from "./express-file-handler.controller";

@Module({
  imports: [],
  controllers: [AppController, ExpressFileHandlerController],
  providers: [],
})
export class ExpressAppModule {}
