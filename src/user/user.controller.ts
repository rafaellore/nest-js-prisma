import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import User from './user.entity';

@Controller('/users')
export class UserController {
  constructor(private repo: UserRepository) {}

  @Get()
  async listUsers() {
    const users = await this.repo.list();
    return users;
  }

  @Post()
  async createUser(@Body() user: User) {
    const newUser = await this.repo.create(user);
    return newUser;
  }

  @Get(':id')
  async getUser(@Param() id: number) {
    const user = await this.repo.findById(id);
    return user;
  }

  @Patch(':id')
  async updateUser(@Param('id') id: string, @Body() user: User) {
    const updatedUser = await this.repo.update({
      ...user,
      id: +id,
    });
    return updatedUser;
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    const deletedUser = await this.repo.delete(+id);
    return deletedUser;
  }
}
