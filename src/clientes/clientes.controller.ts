import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ClientesService } from './clientes.service'; // Importa el servicio de clientes
import { IReclamos } from 'src/reclamos/reclamos.interface';

@ApiTags('clientes')
@Controller('api/v1/clientes')
export class ClientesController {
    constructor(private readonly clientesService: ClientesService) {}

    @Post()
    async create(@Body() clienteData: any) {
        return await this.clientesService.create(clienteData);
    }

    @Get()
    async findAll() {
        return await this.clientesService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return await this.clientesService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() clienteData: any) {
        return await this.clientesService.update(id, clienteData);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.clientesService.remove(id);
    }
}
