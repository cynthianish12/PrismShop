import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserSignInDto } from './user-signin.dto';

export class UserSignUpDto extends UserSignInDto {
  @IsNotEmpty({ message: 'Name cannot be null' })
  @IsString({ message: 'Name should be a string' })
  @ApiProperty({ description: 'User name', example: 'John Doe' })
  name: string;
}
