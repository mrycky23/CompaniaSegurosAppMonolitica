import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IReclamos } from './reclamos.interface';
import { Model } from 'mongoose';
import { RECLAMOS } from 'src/models/models';

@Injectable()
export class ReclamosService {
  constructor(
    @InjectModel(RECLAMOS.name) private readonly reclamosModel: Model<IReclamos>,
  ) {}

  async create(reclamo: IReclamos): Promise<IReclamos> {
    const createdReclamo = new this.reclamosModel(reclamo);
    return await createdReclamo.save();
  }

  async findAll(): Promise<IReclamos[]> {
    return await this.reclamosModel.find().exec();
  }

  async findById(id: string): Promise<IReclamos> {
    return await this.reclamosModel.findById(id).exec();
  }

  async update(id: string, reclamo: IReclamos): Promise<IReclamos> {
    return await this.reclamosModel
      .findByIdAndUpdate(id, reclamo, { new: true })
      .exec();
  }

  async delete(id: string): Promise<IReclamos> {
    return await this.reclamosModel.findByIdAndDelete(id).exec();
  }
}
