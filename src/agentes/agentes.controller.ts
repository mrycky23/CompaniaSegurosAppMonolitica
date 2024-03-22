import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AgentesService } from './agentes.service';

@ApiTags('agentes')
@Controller('api/v1/agentes')
export class AgentesController {
  constructor(private readonly agentesService: AgentesService) {}

  @Post()
  async crearAgente(@Body() agenteData: any): Promise<any> {
    const nuevoAgente = await this.agentesService.create(agenteData);
    return `Agente creado con ID ${nuevoAgente.id}`;
  }

  @Get()
  async obtenerTodosLosAgentes(): Promise<any> {
    return this.agentesService.findAll();
  }

  @Get(':id')
  async obtenerAgentePorId(@Param('id') id: string): Promise<any> {
    return this.agentesService.findOne(id);
  }

  @Put(':id')
  async actualizarAgente(@Param('id') id: string, @Body() agenteData: any): Promise<any> {
    await this.agentesService.update(id, agenteData);
    return `Poliza con ID ${id} actualizada`;
  }

  @Delete(':id')
  async eliminarAgente(@Param('id') id: string): Promise<any> {
    await this.agentesService.remove(id);
    return `Agente con ID ${id} eliminado`;
  }
}
