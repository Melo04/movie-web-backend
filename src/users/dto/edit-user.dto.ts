import { IsEmail, IsOptional, IsString } from 'class-validator';

export class EditUserDto {
  @IsEmail({}, { message: 'Invalid email' })
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  lastName?: string;
}
