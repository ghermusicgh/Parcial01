import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { MD5} from 'crypto-js';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity'; 
import { PayloadToken } from './dto/auth.dto';


@Injectable()
export class AuthService {
    constructor (
        private userService: UsersService,
        private jwtService: JwtService,
        
        ){}

    async validateUser (email: string, password: string){
        const user = await this.userService.findOneByEmail(email);
        if (!user){
            throw new NotFoundException(`user ${email}not found`);
          }
          const hashedPassword = await MD5(password).toString();
          if (user){
          const isMatch = hashedPassword === user.password;
          if (isMatch){
            const {password, ...data} = user;
            return data;
          }
        }
          return null;
    }

    generateJWT(user: User){
        const payload: PayloadToken = {
            id: user.id,
            email:user.email,
            name: user.name,
            lastname: user.lastname,
            phone: user.phone,
            identification: user.identification,
        };
        return{
            access_token: this.jwtService.sign(payload),
            user,
        };
    }
}
