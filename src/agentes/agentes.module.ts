import { Module } from '@nestjs/common';
import { AgentesService } from './agentes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AgentesSchema } from './schema/agentes.schema'; // Asegúrate de que esta importación sea correcta
import { AGENTES } from 'src/models/models';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: AGENTES.name, schema: AgentesSchema }]), // Corrige el nombre del modelo a 'Agente'
  ],
  providers: [AgentesService],
  exports: [AgentesService]
})
export class AgentesModule {}

