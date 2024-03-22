import { IsNotEmpty, IsString } from "class-validator";

export class CreateAgenteDTO {
    @IsString()
    @IsNotEmpty()
    nombre: string;
  }
  
  export class UpdateAgenteDTO {
    @IsString()
    @IsNotEmpty()
    nombre: string;
  }