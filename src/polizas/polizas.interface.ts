export interface IPolizas extends Document {
    id: string;
    tipo: string;
    cliente: string; // referencia al id del cliente
    agente: string; // referencia al id del agente
}