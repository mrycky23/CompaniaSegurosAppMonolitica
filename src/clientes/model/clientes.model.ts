import mongoose, { Model, model } from "mongoose";
import { IClientes } from "../clientes.interface";
import { ClientesSchema } from "../schema/clientes.schema";

//export default mongoose.model<IClientes>('Cliente', ClientesSchema);
export interface IClienteDocument extends IClientes, Document {}

export const ClienteModel: Model<IClienteDocument> = mongoose.model<IClienteDocument>('Cliente', ClientesSchema);