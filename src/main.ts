import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import env from "./common/constants/settings";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(env.PORT);
}
bootstrap();
