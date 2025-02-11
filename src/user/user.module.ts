import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { DbModule } from '../db/db.module';
import { UserRepository } from './user.repository';

@Module({
  controllers: [UserController],
  imports: [DbModule],
  providers: [UserRepository],
})
export class UserModule {}
