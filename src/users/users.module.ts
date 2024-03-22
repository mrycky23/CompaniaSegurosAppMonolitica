import { Module } from '@nestjs/common';
import { UsersController } from './users.controllers';
import { ProxyApiVuelosModule } from '../../common/proxy/proxy.module';
import { UsersService } from './users.service';

@Module({
  imports: [ProxyApiVuelosModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}