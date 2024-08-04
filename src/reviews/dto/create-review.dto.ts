import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateReviewDto {
  @ApiProperty({
    description: 'ID of the product being reviewed',
    example: 1,
  })
  @IsNotEmpty({ message: 'Product should not be empty' })
  @IsNumber({}, { message: 'Product Id should not be string' })
  productId: number;

  @ApiProperty({
    description: 'Rating of the product',
    example: 5,
  })
  @IsNotEmpty({ message: 'Rating should not be empty' })
  @IsNumber()
  ratings: number;

  @ApiProperty({
    description: 'Comment about the product',
    example: 'Great product!',
  })
  @IsNotEmpty({ message: 'Comment should not be empty' })
  @IsString()
  comment: string;
}
