import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('api')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('products')
  getProducts() {
    return this.productsService.findAll();
  }

  @Get('products/featured')
  getFeaturedProducts() {
    return this.productsService.findFeatured();
  }

  @Get('products/:slug')
  getProductBySlug(@Param('slug') slug: string) {
    return this.productsService.findOneBySlug(slug);
  }

  @Post('admin/products')
  createProduct(
    @Body()
    body: {
      name: string;
      slug: string;
      description: string;
      price: number;
      imageUrl?: string;
      isFeatured?: boolean;
      categoryId: number;
    },
  ) {
    return this.productsService.create(body);
  }

  @Patch('admin/products/:id')
  updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    body: Partial<{
      name: string;
      slug: string;
      description: string;
      price: number;
      imageUrl?: string;
      isFeatured?: boolean;
      categoryId: number;
    }>,
  ) {
    return this.productsService.update(id, body);
  }
}