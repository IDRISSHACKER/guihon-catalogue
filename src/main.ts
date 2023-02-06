import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module';
import env from "./common/constants/settings";
import * as fs from "fs";
import {join} from "path";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.enableCors()
  const storage = join(process.cwd(), env.STORAGE_DIR)
  if(!fs.existsSync(storage)){
    fs.mkdirSync(storage)
  }
  await app.listen(env.PORT)
}
bootstrap();
