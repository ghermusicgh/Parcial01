import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
 
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // ignorar datos que no esten en los DTO
      forbidNonWhitelisted: true, //lanzar error si hay datos prohibidos
      
    }),
  );
  const config = new DocumentBuilder()
  .setTitle('Proyecto Electiva Prof I')
  .setDescription('VIII Semestre, German Torres, Aldair Lara, Duvan Castro')
  .addBearerAuth()
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app,
  config);
  SwaggerModule.setup('docs', app, document);
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
