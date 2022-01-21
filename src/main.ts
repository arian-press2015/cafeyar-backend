import { NestFactory } from '@nestjs/core';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerCustomOptions,
} from '@nestjs/swagger';
import { AppModule } from './app.module';
import config from 'config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('GymPan')
    .setDescription('This is the documentation for the Back-End API')
    .setVersion('0.1')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  const customOptions: SwaggerCustomOptions = {
    customSiteTitle: 'GymPan Back-End API',
    customfavIcon: '../gympan.png',
  };

  SwaggerModule.setup('docs', app, document, customOptions);

  await app.listen(config.get('port'));
}
bootstrap();
