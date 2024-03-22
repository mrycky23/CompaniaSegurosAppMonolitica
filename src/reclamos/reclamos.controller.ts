import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ReclamosService } from './reclamos.service';
import { IReclamos } from './reclamos.interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('reclamos')
@Controller('api/v1/reclamos')
export class ReclamosController {
  constructor(private readonly reclamosService: ReclamosService) {}

  @Post()
  async create(@Body() createReclamoDto: IReclamos) {
    return this.reclamosService.create(createReclamoDto);
  }

  @Get()
  async findAll(): Promise<IReclamos[]> {
    return this.reclamosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<IReclamos> {
    return this.reclamosService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateReclamoDto: IReclamos) {
    return this.reclamosService.update(id, updateReclamoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.reclamosService.delete(id);
  }
}

