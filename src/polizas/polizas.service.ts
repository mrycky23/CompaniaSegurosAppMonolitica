import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IPolizas } from './polizas.interface';

@Injectable()
export class PolizasService {
  constructor(@InjectModel('Poliza') private polizaModel: Model<IPolizas>) {}

  async create(poliza: IPolizas): Promise<IPolizas> {
    const createdPoliza = new this.polizaModel(poliza);
    return await createdPoliza.save();
  }

  async findAll(): Promise<IPolizas[]> {
    return await this.polizaModel.find().exec();
  }

  async findById(id: string): Promise<IPolizas> {
    return await this.polizaModel.findById(id).exec();
  }

  async update(id: string, poliza: IPolizas): Promise<IPolizas> {
    return await this.polizaModel.findByIdAndUpdate(id, poliza, { new: true }).exec();
  }

  async delete(id: string): Promise<IPolizas> {
    return await this.polizaModel.findByIdAndDelete(id).exec();
  }
}
