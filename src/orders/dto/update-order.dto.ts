import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { CreateShippingDto } from './create-shipping.dto';
import { OrderedProductsDto } from './ordered-products.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  @ApiPropertyOptional({
    type: CreateShippingDto,
    description: 'The updated shipping address',
  })
  shippingAddress?: CreateShippingDto;

  @ApiPropertyOptional({
    type: [OrderedProductsDto],
    description: 'The updated list of ordered products',
  })
  orderedProducts?: OrderedProductsDto[];
}
