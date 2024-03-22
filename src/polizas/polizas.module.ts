import { Module } from '@nestjs/common';
import { PolizasService } from './polizas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PolizasSchema } from './schema/polizas.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Poliza', schema: PolizasSchema }]), // Importa el modelo Poliza en el módulo
  ],
  providers: [PolizasService],
  exports: [PolizasService]
})
export class PolizasModule {}
