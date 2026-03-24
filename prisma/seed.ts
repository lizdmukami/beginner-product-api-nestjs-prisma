import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  const categories = await Promise.all([
    prisma.category.create({
      data: { name: "Electronics", slug: "electronics" },
    }),
    prisma.category.create({
      data: { name: "Fashion", slug: "fashion" },
    }),
    prisma.category.create({
      data: { name: "Home & Living", slug: "home-living" },
    }),
    prisma.category.create({
      data: { name: "Beauty", slug: "beauty" },
    }),
    prisma.category.create({
      data: { name: "Sports", slug: "sports" },
    }),
  ]);

  const [electronics, fashion, homeLiving, beauty, sports] = categories;

  await prisma.product.createMany({
    data: [
      // Electronics
      {
        name: "iPhone 14",
        slug: "iphone-14",
        description: "Apple smartphone with strong performance and clean design.",
        price: "120000.00",
        imageUrl: "https://example.com/iphone-14.jpg",
        isFeatured: true,
        categoryId: electronics.id,
      },
      {
        name: "Samsung Galaxy A54",
        slug: "samsung-galaxy-a54",
        description: "Reliable Android phone for everyday use.",
        price: "45000.00",
        imageUrl: "https://example.com/samsung-galaxy-a54.jpg",
        isFeatured: false,
        categoryId: electronics.id,
      },
      {
        name: "Dell XPS 13",
        slug: "dell-xps-13",
        description: "Compact premium laptop for work and study.",
        price: "98000.00",
        imageUrl: "https://example.com/dell-xps-13.jpg",
        isFeatured: true,
        categoryId: electronics.id,
      },
      {
        name: 'JBL Flip 6 Speaker',
        slug: 'jbl-flip-6-speaker',
        description: 'Portable Bluetooth speaker with rich sound.',
        price: "16500.00",
        imageUrl: "https://example.com/jbl-flip-6.jpg",
        isFeatured: false,
        categoryId: electronics.id,
      },
      {
        name: "Logitech Wireless Mouse",
        slug: "logitech-wireless-mouse",
        description: "Comfortable wireless mouse for daily productivity.",
        price: "3500.00",
        imageUrl: "https://example.com/logitech-mouse.jpg",
        isFeatured: false,
        categoryId: electronics.id,
      },

      // Fashion
      {
        name: "Classic Hoodie",
        slug: "classic-hoodie",
        description: "Warm cotton hoodie for casual wear.",
        price: "2500.00",
        imageUrl: "https://example.com/classic-hoodie.jpg",
        isFeatured: true,
        categoryId: fashion.id,
      },
      {
        name: "Slim Fit Jeans",
        slug: "slim-fit-jeans",
        description: "Comfortable jeans with a modern fit.",
        price: "3200.00",
        imageUrl: "https://example.com/slim-fit-jeans.jpg",
        isFeatured: false,
        categoryId: fashion.id,
      },
      {
        name: "Leather Handbag",
        slug: "leather-handbag",
        description: "Stylish handbag for everyday use.",
        price: "5400.00",
        imageUrl: "https://example.com/leather-handbag.jpg",
        isFeatured: true,
        categoryId: fashion.id,
      },
      {
        name: "Canvas Sneakers",
        slug: "canvas-sneakers",
        description: "Lightweight sneakers for casual outings.",
        price: "2800.00",
        imageUrl: "https://example.com/canvas-sneakers.jpg",
        isFeatured: false,
        categoryId: fashion.id,
      },
      {
        name: "Office Blazer",
        slug: "office-blazer",
        description: "Clean tailored blazer for work and events.",
        price: "4700.00",
        imageUrl: "https://example.com/office-blazer.jpg",
        isFeatured: false,
        categoryId: fashion.id,
      },

      // Home & Living
      {
        name: "Modern Floor Lamp",
        slug: "modern-floor-lamp",
        description: "Simple floor lamp for warm ambient lighting.",
        price: "6200.00",
        imageUrl: "https://example.com/modern-floor-lamp.jpg",
        isFeatured: true,
        categoryId: homeLiving.id,
      },
      {
        name: "Patterned Carpet",
        slug: "patterned-carpet",
        description: "Decorative carpet that adds texture to a room.",
        price: "8500.00",
        imageUrl: "https://example.com/patterned-carpet.jpg",
        isFeatured: true,
        categoryId: homeLiving.id,
      },
      {
        name: "Accent Wall Clock",
        slug: "accent-wall-clock",
        description: "Large wall clock for living room decor.",
        price: "2900.00",
        imageUrl: "https://example.com/accent-wall-clock.jpg",
        isFeatured: false,
        categoryId: homeLiving.id,
      },
      {
        name: "Throw Pillow Set",
        slug: "throw-pillow-set",
        description: "Soft decorative pillows for sofa styling.",
        price: "1800.00",
        imageUrl: "https://example.com/throw-pillow-set.jpg",
        isFeatured: false,
        categoryId: homeLiving.id,
      },
      {
        name: "Minimal Coffee Table",
        slug: "minimal-coffee-table",
        description: "Simple coffee table for modern spaces.",
        price: "7300.00",
        imageUrl: "https://example.com/minimal-coffee-table.jpg",
        isFeatured: false,
        categoryId: homeLiving.id,
      },

      // Beauty
      {
        name: "Vitamin C Serum",
        slug: "vitamin-c-serum",
        description: "Brightening serum for everyday skincare.",
        price: "2200.00",
        imageUrl: "https://example.com/vitamin-c-serum.jpg",
        isFeatured: true,
        categoryId: beauty.id,
      },
      {
        name: "Hydrating Face Cream",
        slug: "hydrating-face-cream",
        description: "Daily moisturizer for soft, balanced skin.",
        price: "1800.00",
        imageUrl: "https://example.com/hydrating-face-cream.jpg",
        isFeatured: false,
        categoryId: beauty.id,
      },
      {
        name: "Matte Lipstick Set",
        slug: "matte-lipstick-set",
        description: "Long-wear lipstick shades for different looks.",
        price: "1500.00",
        imageUrl: "https://example.com/matte-lipstick-set.jpg",
        isFeatured: false,
        categoryId: beauty.id,
      },
      {
        name: "Makeup Brush Kit",
        slug: "makeup-brush-kit",
        description: "Essential brushes for a smooth makeup routine.",
        price: "2600.00",
        imageUrl: "https://example.com/makeup-brush-kit.jpg",
        isFeatured: true,
        categoryId: beauty.id,
      },
      {
        name: "Body Mist Floral",
        slug: "body-mist-floral",
        description: "Light floral fragrance for daily freshness.",
        price: "1200.00",
        imageUrl: "https://example.com/body-mist-floral.jpg",
        isFeatured: false,
        categoryId: beauty.id,
      },

      // Sports
      {
        name: "Yoga Mat Pro",
        slug: "yoga-mat-pro",
        description: "Comfortable exercise mat with good grip.",
        price: "2400.00",
        imageUrl: "https://example.com/yoga-mat-pro.jpg",
        isFeatured: true,
        categoryId: sports.id,
      },
      {
        name: "Adjustable Dumbbells",
        slug: "adjustable-dumbbells",
        description: "Space-saving dumbbells for home workouts.",
        price: "12500.00",
        imageUrl: "https://example.com/adjustable-dumbbells.jpg",
        isFeatured: true,
        categoryId: sports.id,
      },
      {
        name: "Running Shoes Air",
        slug: "running-shoes-air",
        description: "Light running shoes for training and walking.",
        price: "6800.00",
        imageUrl: "https://example.com/running-shoes-air.jpg",
        isFeatured: false,
        categoryId: sports.id,
      },
      {
        name: "Skipping Rope",
        slug: "skipping-rope",
        description: "Simple cardio rope for quick home sessions.",
        price: "900.00",
        imageUrl: "https://example.com/skipping-rope.jpg",
        isFeatured: false,
        categoryId: sports.id,
      },
      {
        name: "Sports Water Bottle",
        slug: "sports-water-bottle",
        description: "Reusable bottle for workouts and daily use.",
        price: "1100.00",
        imageUrl: "https://example.com/sports-water-bottle.jpg",
        isFeatured: false,
        categoryId: sports.id,
      },
    ],
  });

  console.log("Seeded 5 categories and 25 products.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });