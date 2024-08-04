import { IsArray, IsNotEmpty, IsNumber, IsPositive, IsString, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    description: 'Title of the product',
    example: 'Coffee Maker',
  })
  @IsNotEmpty({ message: 'Title can not be blank' })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Description of the product',
    example: 'A high-quality coffee maker with various features',
  })
  @IsNotEmpty({ message: 'Description can not be blank' })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'Price of the product',
    example: 99.99,
  })
  @IsNotEmpty({ message: 'Price cannot be empty' })
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Price should be a number with a max decimal precision of 2' })
  @IsPositive({ message: 'Price should be a positive number' })
  price: number;

  @ApiProperty({
    description: 'Stock quantity of the product',
    example: 10,
  })
  @IsNotEmpty({ message: 'Stock should not be empty' })
  @IsNumber({}, { message: 'Stock should be a number' })
  @Min(0, { message: 'Stock cannot be negative.' })
  stock: number;

  @ApiProperty({
    description: 'Images of the product',
    example: ['image1.jpg', 'image2.jpg'],
    type: [String],
  })
  @IsNotEmpty({ message: 'Images should not be empty' })
  @IsArray({ message: 'Images should be in array format' })
  images: string[];

  @ApiProperty({
    description: 'ID of the category the product belongs to',
    example: 1,
  })
  @IsNotEmpty({ message: 'Category cannot be empty' })
  @IsNumber({}, { message: 'Category ID should be a number' })
  categoryId: number;
}
