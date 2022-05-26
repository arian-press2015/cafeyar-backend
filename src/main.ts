import { NestFactory } from '@nestjs/core';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerCustomOptions,
} from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('CafeYar')
    .setDescription('This is the documentation for the Back-End API')
    .setVersion('0.1')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  const customOptions: SwaggerCustomOptions = {
    customSiteTitle: 'CafeYar Back-End API',
  };

  SwaggerModule.setup('docs', app, document, customOptions);

  await app.listen(configService.get<number>('PORT'));
}
bootstrap();
