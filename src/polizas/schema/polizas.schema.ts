import mongoose, { Schema } from "mongoose";

export const PolizasSchema = new mongoose.Schema({
    tipo: { type: String, required: true },
    ID_cliente: { type: Schema.Types.ObjectId, ref: 'Cliente', required: true },
    ID_agente: { type: Schema.Types.ObjectId, ref: 'Agente', required: true }, 
},{
    timestamps: true,
})