import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesController } from './clientes/clientes.controller';
import { ConfigModule } from '@nestjs/config';
import { PolizasController } from './polizas/polizas.controller';
import { ReclamosController } from './reclamos/reclamos.controller';
import { AgentesController } from './agentes/agentes.controller';
import { ClientesModule } from './clientes/clientes.module';
import { PolizasModule } from './polizas/polizas.module';
import { ReclamosModule } from './reclamos/reclamos.module';
import { AgentesModule } from './agentes/agentes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.uri_mongo),
    UsersModule,
    ClientesModule,
    PolizasModule,
    ReclamosModule,
    AgentesModule,
    AuthModule,
  ],
  controllers: [
    AppController,
    ClientesController,
    PolizasController,
    ReclamosController,
    AgentesController,
  ],
  providers: [AppService],
})
export class AppModule {}
