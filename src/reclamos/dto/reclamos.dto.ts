import { IsNotEmpty, IsString } from "class-validator";

export class CreateReclamoDTO{
    @IsString()
    @IsNotEmpty()
    decripcion: string;
    @IsString()
    @IsNotEmpty()
    ID_poliza?: string;
    @IsString()
    @IsNotEmpty()
    fecha: string;
}
export class UpdateReclamoDTO{
    @IsString()
    @IsNotEmpty()
    decripcion: string;
    @IsString()
    @IsNotEmpty()
    ID_poliza?: string;
    @IsString()
    @IsNotEmpty()
    fecha: string;
}