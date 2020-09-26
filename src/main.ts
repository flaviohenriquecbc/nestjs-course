import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strips the parameters that are not part of the DTO
      transform: true, // transforms the received DTO information on a DTO instance
      forbidNonWhitelisted: true, // returns an error if non expected parameters are passed
    }),
  );
  await app.listen(3000);
}
bootstrap();
