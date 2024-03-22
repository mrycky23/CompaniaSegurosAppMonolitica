import mongoose from 'mongoose';

export const AgentesSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);
