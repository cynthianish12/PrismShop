import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';
import { CategoryEntity } from 'src/categories/entities/category.entity';
import { ProductEntity } from 'src/products/entities/product.entity';
import { ApiTags, ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { title } from 'process';

@ApiTags('search')
@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  @ApiOperation({ summary: 'Search for categories and products' })
  @ApiQuery({ name: 'q', type: String, description: 'Search query string', required: true })
  @ApiResponse({
    status: 200,
    description: 'Successful search operation',
    schema: {
      example: {
        categories: [
          {
            id: 1,
            title: 'Electronics',
            description:'here are the Electronics found',
            // Add other properties of CategoryEntity here
          },
        ],
        products: [
          {
            id: 1,
            name: 'Laptop',
            price: 999.99,
            description:'this is a laptop with 120MB of RAM from SAmsang'
            // Add other properties of ProductEntity here
          },
        ],
      },
    },
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async search(
    @Query('q') query: string,
  ): Promise<{ categories: CategoryEntity[]; products: ProductEntity[] }> {
    if (!query) {
      return { categories: [], products: [] };
    }
    const results = await this.searchService.search(query);
    return results;
  }
}
