import mongoose from "mongoose";
import { IReclamos } from "../reclamos.interface";
import { ReclamosSchema } from "../schema/reclamos.schema";

export default mongoose.model<IReclamos>('Reclamos', ReclamosSchema);