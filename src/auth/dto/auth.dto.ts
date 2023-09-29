import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
  NotContains,
} from 'class-validator';

export class AuthDto {
  @IsEmail({}, { message: 'Invalid email address' })
  @IsNotEmpty()
  email: string;

  @IsString()
  @Length(8)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/, {
    message:
      'one lowercase letter, one uppercase letter, one number, and one special character.',
  })
  @NotContains(' ', { message: 'Password cannot contain spaces' })
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;
}
