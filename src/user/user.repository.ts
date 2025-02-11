import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import User from './user.entity';

@Injectable()
export class UserRepository {
  constructor(private prismaService: PrismaService) {}

  async create(user: User) {
    return await this.prismaService.user.create({
      data: user,
    });
  }

  async update(id: number, user: User) {
    return await this.prismaService.user.update({
      where: { id },
      data: user,
    });
  }

  async delete(id: number) {
    return await this.prismaService.user.delete({
      where: { id },
    });
  }

  async list() {
    return await this.prismaService.user.findMany();
  }
}
