import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserSignInDto {
  @IsNotEmpty({ message: 'Email cannot be empty' })
  @IsEmail({}, { message: 'Please provide a valid email.' })
  @ApiProperty({ description: 'User email address', example: 'user@example.com' })
  email: string;

  @IsNotEmpty({ message: 'Password cannot be empty.' })
  @MinLength(5, { message: 'Password minimum character should be 5.' })
  @ApiProperty({ description: 'User password', example: 'password123' })
  password: string;
}
