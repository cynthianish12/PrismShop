import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/categories/entities/category.entity';
import { ProductEntity } from 'src/products/entities/product.entity';
import { Repository } from 'typeorm';
import Fuse from 'fuse.js';

@Injectable()
export class SearchService {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  async search(query: string): Promise<{ categories: CategoryEntity[], products: ProductEntity[] }> {
    // Configure fuse options for categories
    const categoryOptions = {
      keys: ['title'],
      threshold: 0.3, // Adjust the threshold as needed for sensitivity
    };

    // Configure fuse options for products
    const productOptions = {
      keys: ['title', 'description'],
      threshold: 0.3, // Adjust the threshold as needed for sensitivity
    };

    // Search categories using fuse
    const categories = await this.categoryRepository.find();
    const categoryFuse = new Fuse(categories, categoryOptions);
    const categoryResults = categoryFuse.search(query);

    // Search products using fuse
    const products = await this.productRepository.find();
    const productFuse = new Fuse(products, productOptions);
    const productResults = productFuse.search(query);

    return { categories: categoryResults.map(result => result.item), products: productResults.map(result => result.item) };
  }
}
