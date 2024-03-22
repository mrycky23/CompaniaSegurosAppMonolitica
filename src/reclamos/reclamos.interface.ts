export interface IReclamos extends Document {
    id: string;
    descripcion: string; 
    poliza: string; //referencia al id de la poliza
    fecha: string;  
}