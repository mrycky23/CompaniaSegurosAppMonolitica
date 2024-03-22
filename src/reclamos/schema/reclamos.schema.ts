import mongoose, { Schema } from "mongoose";

export const ReclamosSchema = new mongoose.Schema({
    descripcion: { type: String, required: true },
    ID_poliza: { type: Schema.Types.ObjectId, ref: 'Poliza', required: true },
    fecha: { type: String, required: true }
},{
    timestamps: true,
})