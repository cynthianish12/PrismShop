import { Expose, Transform, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class ProductList {
  @ApiProperty({
    description: 'ID of the product',
    example: 1,
  })
  @Expose({ name: 'product_id' })
  id: number;

  @ApiProperty({
    description: 'Title of the product',
    example: 'Coffee Maker',
  })
  @Expose({ name: 'product_title' })
  title: string;

  @ApiProperty({
    description: 'Description of the product',
    example: 'A high-quality coffee maker with various features',
  })
  @Expose({ name: 'product_description' })
  description: string;

  @ApiProperty({
    description: 'Price of the product',
    example: '99.99',
  })
  @Expose({ name: 'product_price' })
  price: string;

  @ApiProperty({
    description: 'Stock quantity of the product',
    example: 10,
  })
  @Expose({ name: 'product_stock' })
  stock: number;

  @ApiProperty({
    description: 'Images of the product',
    example: ['image1.jpg', 'image2.jpg'],
  })
  @Expose({ name: 'product_images' })
  @Transform(({ value }) => value.toString().split(','))
  images: string[];

  @ApiProperty({
    description: 'Category of the product',
    example: { id: 1, title: 'Electronics' },
  })
  @Transform(({ obj }) => {
    return {
      id: obj.category_id,
      title: obj.category_title,
    };
  })
  @Expose()
  category: any;

  @ApiProperty({
    description: 'Number of reviews for the product',
    example: 10,
  })
  @Expose({ name: 'reviewcount' })
  review: number;

  @ApiProperty({
    description: 'Average rating of the product',
    example: 4.5,
  })
  @Expose({ name: 'avrating' })
  rating: number;
}

export class ProductsDto {
  @ApiProperty({
    description: 'Total number of products',
    example: 100,
  })
  @Expose()
  totalProducts: number;

  @ApiProperty({
    description: 'Limit of products per page',
    example: 10,
  })
  @Expose()
  limit: number;

  @ApiProperty({
    description: 'List of products',
    type: [ProductList],
  })
  @Expose()
  @Type(() => ProductList)
  products: ProductList[];
}
