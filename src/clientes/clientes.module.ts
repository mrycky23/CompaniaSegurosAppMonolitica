import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientesSchema } from './schema/clientes.schema';
import { ClienteModel } from './model/clientes.model';
import { ClientesController } from './clientes.controller';
import { CLIENTE, USER } from 'src/models/models';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: CLIENTE.name, schema: ClientesSchema }]), 
  ],
  providers: [ClientesService, ClienteModel],
  controllers: [ClientesController],
  exports: [ClientesService]
})
export class ClientesModule {}

