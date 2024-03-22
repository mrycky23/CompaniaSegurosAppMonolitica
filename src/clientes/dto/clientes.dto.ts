import { IsString, IsNotEmpty } from 'class-validator';

export class CreateClienteDTO {
  @IsString()
  @IsNotEmpty()
  nombre: string;
}

export class UpdateClienteDTO {
  @IsString()
  @IsNotEmpty()
  nombre: string;
}
