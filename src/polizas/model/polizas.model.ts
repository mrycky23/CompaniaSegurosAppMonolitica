import mongoose, { Model } from "mongoose";
import { IPolizas } from "../polizas.interface";
import { PolizasSchema } from "../schema/polizas.schema";

//export default mongoose.model<IPolizas>('Poliza', PolizasSchema);
export interface PolizaDocument extends IPolizas, Document {}

// Definir el modelo de poliza
export const PolizaModel: Model<PolizaDocument> = mongoose.model<PolizaDocument>('Poliza', PolizasSchema);

// Exportar el modelo
export default PolizaModel;