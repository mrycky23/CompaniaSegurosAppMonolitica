import { Module } from '@nestjs/common';
import { AgentesService } from './agentes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AgentesSchema } from './schema/agentes.schema'; // Asegúrate de que esta importación sea correcta

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Agente', schema: AgentesSchema }]), // Corrige el nombre del modelo a 'Agente'
  ],
  providers: [AgentesService],
  exports: [AgentesService]
})
export class AgentesModule {}

