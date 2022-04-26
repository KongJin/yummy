import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Materials } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Resolver()
export class MaterialResolver {
  constructor(private prisma: PrismaService) {}

  @Query()
  async getAllMaterial() {
    return this.prisma.materials.findMany({});
  }

  @Mutation()
  async createMaterial(@Args('info') info: Materials): Promise<Materials> {
    return this.prisma.materials.create({ data: info });
  }
  @Mutation()
  async updateMaterial(@Args('info') info: Materials): Promise<Materials> {
    return this.prisma.materials.update({
      where: { id: info.id },
      data: info,
    });
  }
}
