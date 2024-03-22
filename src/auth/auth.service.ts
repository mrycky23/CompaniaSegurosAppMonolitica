import { Injectable } from '@nestjs/common';
import { UserService } from '../../src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService){}
    async validarusuario(username: string, password: string){
        
        return null;
    }
}
