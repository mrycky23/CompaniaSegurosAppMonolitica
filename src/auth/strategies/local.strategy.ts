import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "../auth.service";
import { Strategy } from "passport-jwt";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private readonly authService: AuthService){
        super();
    }
    async validacion(username: string, pasword: string){
        const user = await this.authService.validarusuario(username, pasword);
        if (!user) throw new UnauthorizedException('Acceso no autorizado');
        return username;
    }
}