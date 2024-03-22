import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IAgentes } from './agentes.interface';
import { Model } from 'mongoose';
import { CreateAgenteDTO, UpdateAgenteDTO } from './dto/agentes.dto';

@Injectable()
export class AgentesService {
  constructor(
    @InjectModel('Agente') private readonly agenteModel: Model<IAgentes>,
  ) {}

  async findAll(): Promise<IAgentes[]> {
    return this.agenteModel.find().exec();
  }

  async findOne(id: string): Promise<IAgentes>{
    return await this.agenteModel.findById(id).exec();
  }

  async create(createAgenteDto: CreateAgenteDTO): Promise<IAgentes> {
    const createdAgente = new this.agenteModel(createAgenteDto);
    return createdAgente.save();
  }

  async update(id: string, updateAgenteDto: UpdateAgenteDTO): Promise<IAgentes> {
    return this.agenteModel.findByIdAndUpdate(id, updateAgenteDto, { new: true }).exec();
  }

  async remove(id: string): Promise<IAgentes> {
    return this.agenteModel.findByIdAndDelete(id).exec();
  }
}
