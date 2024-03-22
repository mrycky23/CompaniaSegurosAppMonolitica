import { IsNotEmpty, IsString } from "class-validator";

export class CreatePolizaDTO {
    @IsString()
    @IsNotEmpty()
    tipo: string;
    @IsString()
    @IsNotEmpty()
    ID_cliente?: string;
    @IsString()
    @IsNotEmpty()
    ID_agente?: string;
  }
  
  export class UpdatePolizaeDTO {
    @IsString()
    @IsNotEmpty()
    tipo: string;
    @IsString()
    @IsNotEmpty()
    ID_cliente?: string;
    @IsString()
    @IsNotEmpty()
    ID_agente?: string;
  }
  