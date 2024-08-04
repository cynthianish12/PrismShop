import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateShippingDto {
  @ApiProperty({
    example: '1234567890',
    description: 'The phone number associated with the shipping address',
    required: true,
  })
  @IsNotEmpty({ message: 'phone cannot be empty' })
  @IsString({ message: 'Phone format should be a string' })
  phone: string;

  @ApiProperty({
    example: 'John Doe',
    description: 'The name of the recipient',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'Name should be a string' })
  name: string;

  @ApiProperty({
    example: '123 Main St',
    description: 'The street address of the shipping location',
    required: true,
  })
  @IsNotEmpty({ message: 'address cannot be empty' })
  @IsString({ message: 'address should be a string' })
  address: string;

  @ApiProperty({
    example: 'New York',
    description: 'The city of the shipping location',
    required: true,
  })
  @IsNotEmpty({ message: 'city cannot be empty' })
  @IsString({ message: 'city should be a string' })
  city: string;

  @ApiProperty({
    example: '10001',
    description: 'The postal code of the shipping location',
    required: true,
  })
  @IsNotEmpty({ message: 'postcode cannot be empty' })
  @IsString({ message: 'postcode should be a string' })
  postCode: string;

  @ApiProperty({
    example: 'NY',
    description: 'The state of the shipping location',
    required: true,
  })
  @IsNotEmpty({ message: 'state cannot be empty' })
  @IsString({ message: 'state should be a string' })
  state: string;

  @ApiProperty({
    example: 'USA',
    description: 'The country of the shipping location',
    required: true,
  })
  @IsNotEmpty({ message: 'country cannot be empty' })
  @IsString({ message: 'country should be a string' })
  country: string;
}
