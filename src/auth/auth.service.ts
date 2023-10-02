import { ForbiddenException, Injectable, Get } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto/signin.dto';
import { RESTDataSource } from '@apollo/datasource-rest';

@Injectable()
export class AuthService extends RESTDataSource {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {
    super();
  }
  baseURL = `https://api.themoviedb.org/3`;

  async getRequestToken() {
    try {
      const requestToken = await this.get(
        `${this.baseURL}/authentication/token/new`,
        {
          headers: { Authorization: `Bearer ${process.env.ACCESS_TOKEN_AUTH}` },
        },
      );
      return requestToken.request_token;
    } catch (error) {
      console.log(error);
    }
  }

  async signup(dto: AuthDto) {
    try {
      const hash = await argon.hash(dto.password);
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash,
          firstName: dto.firstName,
          lastName: dto.lastName,
        },
      });
      console.log(user);

      // const requestToken = await this.get(
      //   `${this.baseURL}/authentication/token/new`,
      //   {
      //     headers: { Authorization: `Bearer ${process.env.ACCESS_TOKEN_AUTH}` },
      //   },
      // );
      // console.log('request token => ', requestToken.request_token);

      // //ask the user for permission
      // await this.get(
      //   `https://www.themoviedb.org/authenticate/${requestToken.request_token}`,
      //   {
      //     headers: { Authorization: `Bearer ${process.env.ACCESS_TOKEN_AUTH}` },
      //   },
      // );

      // const response = await this.post(
      //   `${this.baseURL}/authentication/session/new`,
      //   {
      //     headers: { Authorization: `Bearer ${process.env.ACCESS_TOKEN_AUTH}` },
      //     body: {
      //       request_token: JSON.stringify(requestToken.request_token),
      //     },
      //   },
      // );
      // console.log('create session => ', response);

      return this.signToken(user.id, user.email);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Email already exists');
        }
      }
      throw error;
    }
  }

  async signin(dto: SignInDto) {
    //find user by email
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    //check if user exists
    if (!user) {
      throw new ForbiddenException('This user does not exist');
    }
    //check if password matches
    const isPasswordValid = await argon.verify(user.hash, dto.password);
    if (!isPasswordValid) {
      throw new ForbiddenException('Invalid password');
    }
    console.log(user);
    return this.signToken(user.id, user.email);
  }

  async signToken(
    userId: number,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };
    const secret = process.env.JWT_SECRET;

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: secret,
    });

    return {
      access_token: token,
    };
  }
}
