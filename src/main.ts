import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // cors 해결
  app.enableCors({
    origin: true,
    credentials: true
  });
  const PORT = process.env.PORT;
  await app.listen(PORT);
}
bootstrap();
