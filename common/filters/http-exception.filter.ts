import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import path from 'path';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const contexto = host.switchToHttp();
    const response = contexto.getResponse();
    const request = contexto.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const msg = exception instanceof HttpException ? exception.getResponse() : exception;
    response.status(status).json({
        time: new Date().toISOString(), //fecha json
        path:request.url,  //ubicacion
        error:msg,
    });
  }
}
