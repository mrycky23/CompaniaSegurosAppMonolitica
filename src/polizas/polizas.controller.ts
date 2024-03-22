import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PolizasService } from './polizas.service'; // Importa el servicio de polizas

@ApiTags('polizas')
@Controller('api/v1/polizas')
export class PolizasController {
    constructor(private readonly polizasService: PolizasService) {} // Inyecta el servicio de polizas en el constructor

    @Post()
    async crearPoliza(@Body() polizaData: any): Promise<string> {
        const nuevaPoliza = await this.polizasService.create(polizaData);
        return `Poliza creada con ID ${nuevaPoliza.id}`;
    }

    @Get()
    async obtenerTodasLasPolizas(): Promise<any[]> {
        return this.polizasService.findAll();
    }

    @Get(':id')
    async obtenerPolizaPorId(@Param('id') id: string): Promise<any> {
        return this.polizasService.findById(id);
    }

    @Put(':id')
    async actualizarPoliza(@Param('id') id: string, @Body() polizaData: any): Promise<string> {
        await this.polizasService.update(id, polizaData);
        return `Poliza con ID ${id} actualizada`;
    }

    @Delete(':id')
    async eliminarPoliza(@Param('id') id: string): Promise<string> {
        await this.polizasService.delete(id);
        return `Poliza con ID ${id} eliminada`;
    }
}



