import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Contents } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Resolver()
export class ContentResolver {
  constructor(private prisma: PrismaService) {}

  @Query()
  async getRecipeContent(
    @Args('recipeId') recipeId: number,
  ): Promise<Contents[]> {
    return this.prisma.contents.findMany({
      where: { recipeId },
    });
  }

  @Mutation()
  async createContent(@Args('info') info: Contents[]): Promise<Number> {
    for (let i of info) {
      await this.prisma.contents.create({ data: i });
    }

    return;
  }

  @Mutation()
  async updateContent(@Args('info') info: Contents[]): Promise<Number> {
    const { recipeId } = info[0];
    await this.prisma.contents.deleteMany({ where: { recipeId } });
    const ex = await this.prisma.contents.createMany({ data: info });
    return ex.count;
  }
}
