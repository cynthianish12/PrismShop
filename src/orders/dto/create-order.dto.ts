import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { CreateShippingDto } from './create-shipping.dto';
import { OrderedProductsDto } from './ordered-products.dto';

export class CreateOrderDto {
  @ApiProperty({ type: CreateShippingDto })
  @Type(() => CreateShippingDto)
  @ValidateNested()
  shippingAddress: CreateShippingDto;

  @ApiProperty({ type: [OrderedProductsDto] })
  @Type(() => OrderedProductsDto)
  @ValidateNested({ each: true })
  orderedProducts: OrderedProductsDto[];
}
