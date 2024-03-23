import { Module } from '@nestjs/common';
import { PolizasService } from './polizas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PolizasSchema } from './schema/polizas.schema';
import { POLIZAS } from 'src/models/models';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: POLIZAS.name, schema: PolizasSchema }]), // Importa el modelo Poliza en el módulo
  ],
  providers: [PolizasService],
  exports: [PolizasService]
})
export class PolizasModule {}
