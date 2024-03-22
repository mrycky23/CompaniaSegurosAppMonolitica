import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientesSchema } from './schema/clientes.schema';
import { ClienteModel } from './model/clientes.model';
import { ClientesController } from './clientes.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cliente', schema: ClientesSchema }]), // Corrige el nombre del modelo a 'Cliente'
  ],
  providers: [ClientesService, ClienteModel],
  controllers: [ClientesController],
  exports: [ClientesService]
})
export class ClientesModule {}

