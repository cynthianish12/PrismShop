import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class OrderedProductsDto {
  @ApiProperty({
    example: 123,
    description: 'The ID of the product',
    required: true,
  })
  @IsNotEmpty({ message: 'Product cannot be empty' })
  id: number;

  @ApiProperty({
    example: 19.99,
    description: 'The unit price of the product',
    required: true,
  })
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'price should be a number with max decimal precision 2' })
  @IsPositive({ message: 'Price cannot be negative' })
  product_unit_price: number;

  @ApiProperty({
    example: 2,
    description: 'The quantity of the product ordered',
    required: true,
  })
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Quantity should be a number' })
  @IsPositive({ message: 'Quantity cannot be negative' })
  product_quantity: number;
}
