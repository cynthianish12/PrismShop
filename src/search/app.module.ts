import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { CategoryEntity } from 'src/categories/entities/category.entity';
import { ProductEntity } from 'src/products/entities/product.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([CategoryEntity, ProductEntity]), 
  ],
  controllers: [SearchController],
  providers: [SearchService],
  exports: [SearchService], 
})
export class SearchModule {}
