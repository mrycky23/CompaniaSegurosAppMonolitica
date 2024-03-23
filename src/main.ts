import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionFilter } from 'common/filters/http-exception.filter';
import { TimeOutInterceptor } from 'common/interceptors/timeout.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionFilter());
  app.useGlobalInterceptors(new TimeOutInterceptor());
  app.enableCors();
  const opciones = new DocumentBuilder()
    .setTitle('Vuelos API')
    .setDescription('Document de vuelos API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, opciones);
  SwaggerModule.setup('/api/docs', app, document, {
    swaggerOptions: { filter: true },
  });
  await app.listen(process.env.API_PORT || 3001);
}
bootstrap();
