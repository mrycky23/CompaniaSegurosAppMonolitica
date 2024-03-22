import mongoose from "mongoose";
import { IAgentes } from "../agentes.interface";
import { AgentesSchema } from "../schema/agentes.schema";

export default mongoose.model<IAgentes>('Agente', AgentesSchema);