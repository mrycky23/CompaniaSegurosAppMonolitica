import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IClientes } from './clientes.interface';
import { Model } from 'mongoose';
import { CreateClienteDTO, UpdateClienteDTO } from './dto/clientes.dto';
import { CLIENTE, USER } from 'src/models/models';

@Injectable()
export class ClientesService {
  constructor(
    @InjectModel(CLIENTE.name) private readonly clienteModel: Model<IClientes>,
  ) {}
  async findAll(): Promise<IClientes[]> {
    return this.clienteModel.find().exec();
  }

  async findOne(id: string): Promise<IClientes | null> {
    return this.clienteModel.findById(id).exec();
  }

  async create(createClienteDto: CreateClienteDTO): Promise<IClientes> {
    const createdCliente = new this.clienteModel(createClienteDto);
    return createdCliente.save();
  }

  async update(
    id: string,
    updateClienteDto: UpdateClienteDTO,
  ): Promise<IClientes | null> {
    return this.clienteModel
      .findByIdAndUpdate(id, updateClienteDto, { new: true })
      .exec();
  }

  async remove(_id: string): Promise<IClientes | null> {
    return this.clienteModel.findByIdAndDelete(_id).exec();
  }
}
