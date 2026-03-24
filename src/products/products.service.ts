import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.product.findMany({
      include: { category: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  findFeatured() {
    return this.prisma.product.findMany({
      where: { isFeatured: true },
      include: { category: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  findOneBySlug(slug: string) {
    return this.prisma.product.findUnique({
      where: { slug },
      include: { category: true },
    });
  }

  create(data: {
    name: string;
    slug: string;
    description: string;
    price: number;
    imageUrl?: string;
    isFeatured?: boolean;
    categoryId: number;
  }) {
    return this.prisma.product.create({
      data: {
        ...data,
        price: data.price.toString(),
      },
      include: { category: true },
    });
  }

  update(
    id: number,
    data: Partial<{
      name: string;
      slug: string;
      description: string;
      price: number;
      imageUrl?: string;
      isFeatured?: boolean;
      categoryId: number;
    }>,
  ) {
    return this.prisma.product.update({
      where: { id },
      data: data.price !== undefined
        ? { ...data, price: data.price.toString() }
        : data,
      include: { category: true },
    });
  }
}