import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { User} from '../users/entities/user.entity';
import { ApiBearerAuth,ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @ApiOperation({summary: 'Creacion de nuevos usuarios, deben ser correos unicos'})
  login(@Req() req: Request) {
    const user = req.user as User;
    return this.authService.generateJWT(user);    
  }
}
