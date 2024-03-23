import { Module } from '@nestjs/common';
import { ReclamosService } from './reclamos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ReclamosSchema } from './schema/reclamos.schema'; // Asegúrate de que esta importación sea correcta
import { ReclamosController } from './reclamos.controller';
import ReclamosModel from './model/reclamos.model'; // Importa el modelo correcto
import { RECLAMOS } from 'src/models/models';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: RECLAMOS.name, schema: ReclamosSchema }]), // Corrige el nombre del modelo a 'Reclamos'
  ],
  providers: [ReclamosService, ReclamosModel], // Asegúrate de incluir el modelo en los providers si es necesario
  controllers: [ReclamosController],
  exports: [ReclamosService]
})
export class ReclamosModule {}

