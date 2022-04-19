import { MailerService } from '@nestjs-modules/mailer';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Users } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { createWriteStream } from 'fs';

@Resolver()
export class UserResolver {
  constructor(
    private prisma: PrismaService,
    private mailerService: MailerService,
  ) {}

  @Query()
  async getAllUser(): Promise<Users[]> {
    return this.prisma.users.findMany({
      include: {
        recipes: true,
        likes: {
          include: {
            user: true,
            recipe: true,
          },
        },
      },
    });
  }

  @Query()
  async getUser(@Args('id') id: number): Promise<Users> {
    console.log('why');
    return this.prisma.users.findUnique({
      where: { id },
      include: {
        recipes: true,
        likes: { include: { user: true, recipe: true } },
      },
    });
  }

  @Mutation()
  async joinUser(@Args('info') info: Users): Promise<Users> {
    console.log(info);
    info.password = await bcrypt.hash(info.password, 3);

    return this.prisma.users.create({ data: info });
  }

  @Mutation()
  async emailCertify(@Args('email') email: string): Promise<Number> {
    console.log(email);
    const existUser = await this.prisma.users.findUnique({
      where: {
        email,
      },
    });

    if (!existUser) {
      let number = Math.floor(Math.random() * 1000000) + 100000; // ★★난수 발생 ★★★★★
      if (number > 1000000) {
        number = number - 100000;
      }

      await this.mailerService.sendMail({
        from: 'malove0330@naver.com', //보내는 주소 입력
        to: `${email}`, //위에서 선언해준 받는사람 이메일
        subject: '안녕하세요', //메일 제목
        html: `<div
        style='
        text-align: center;
        width: 50%;
        height: 60%;
        margin: 15%;
        padding: 20px;
        box-shadow: 1px 1px 3px 0px #999;
        '>
        인증번호는 ${number} 입니다.
        <br/><br/><br/><br/></div>`,
      });

      return number;
    } else {
      return 0;
    }
  }
  @Mutation()
  async updateUser(@Args('info') info: Users): Promise<Users> {
    return this.prisma.users.update({ where: { id: info.id }, data: info });
  }

  @Mutation()
  async deleteUser(@Args('id') id: number): Promise<Boolean> {
    try {
      await this.prisma.users.delete({ where: { id } });

      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  @Mutation()
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<Users> {
    const findUser = await this.prisma.users.findUnique({ where: { email } });
    if (findUser) {
      const passCheck = await bcrypt.compare(password, findUser.password);

      if (passCheck) {
        return findUser;
      }
    }
  }
}
