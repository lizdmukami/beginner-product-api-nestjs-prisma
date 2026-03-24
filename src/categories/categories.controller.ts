import { Controller, Get, Param } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('api')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get('categories')
  getCategories() {
    return this.categoriesService.findAll();
  }

  @Get('categories/:slug/products')
  getCategoryProducts(@Param('slug') slug: string) {
    return this.categoriesService.findProductsByCategorySlug(slug);
  }
}