# 🚀 Beginner Product API (NestJS + Prisma)

> A beginner-friendly REST API built with NestJS, Prisma, and PostgreSQL — created as part of the **Beginner's Toolkit with GenAI** capstone project.

---

## 📌 What Is This Project?

This project is a simple but fully functional REST API that lets you create and manage **products** and **categories**. Think of it like the backend of an online store — you can add products, organise them into categories, and retrieve them using standard HTTP requests.

It was built as part of a learning journey to understand how modern APIs are structured using industry-standard tools. If you're new to backend development, this project is designed to show you the full picture: from setting up your database to testing your endpoints — with AI-assisted prompting as part of the process.

**Who is this for?**
- Beginners learning how to build APIs
- Developers exploring NestJS or Prisma for the first time
- Anyone who wants a real, working project to study, clone, and build on

---

## ✨ Features

| Feature | What it does |
|---|---|
| **Product Management** | Create, retrieve, and manage products including featured items |
| **Category Management** | Create and retrieve categories with URL-friendly slugs |
| **Filter by Category** | Fetch all products belonging to a specific category |
| **Admin Endpoints** | Create and update products via protected admin routes |
| **RESTful Structure** | Follows standard HTTP API design conventions |
| **Clean Architecture** | Controller → Service → DB pattern keeps code organised |
| **Prisma ORM** | Handles all database queries in a clean, type-safe way |
| **PostgreSQL Database** | Stores your data in a reliable relational database |
| **Seed Data** | Pre-populates the database so you can test right away |
| **Postman / Thunder Client Ready** | Easily test all endpoints with your preferred API tool |

---

## 🛠️ Tech Stack

- **[NestJS](https://nestjs.com/)** — A structured Node.js framework for building scalable backend apps
- **[Prisma ORM](https://www.prisma.io/)** — A modern database toolkit that makes working with databases much easier
- **[PostgreSQL](https://www.postgresql.org/)** — A powerful, open-source relational database
- **[Node.js](https://nodejs.org/)** — The JavaScript runtime that runs your server
- **[TypeScript](https://www.typescriptlang.org/)** — A typed superset of JavaScript that helps you catch errors early
- **[Thunder Client](https://www.thunderclient.com/) / [Postman](https://www.postman.com/)** — Tools for testing your API endpoints
- **Git & GitHub** — For version control and sharing your code

---

## ⚙️ Requirements

Before you start, make sure you have the following installed on your computer:

- **Node.js** (v18 or later) — [Download here](https://nodejs.org/)
- **PostgreSQL** — [Download here](https://www.postgresql.org/download/)
- **Git** — [Download here](https://git-scm.com/)
- **VS Code** (recommended) — [Download here](https://code.visualstudio.com/)
- **Thunder Client** (VS Code extension) or **Postman** for testing

> 💡 **Not sure if you have these?** Open your terminal and run `node -v`, `psql --version`, and `git --version`. If you see a version number printed, you're good to go!

---

## 🛠️ Installation & Setup (Step by Step)

Follow these steps carefully. Take it one at a time — there's no rush!

### Step 1 — Clone the Repository

Open your terminal, navigate to where you want the project to live, and run:

```bash
git clone https://github.com/lizdmukami/beginner-product-api-nestjs-prisma
cd beginner-product-api-nestjs-prisma
```

---

### Step 2 — Install Dependencies

This installs all the packages the project needs to run:

```bash
npm install
```

> This may take a minute. You'll see a `node_modules/` folder appear when it's done — that's completely normal.

---

### Step 3 — Set Up Your Environment Variables

The project needs a `.env` file to know how to connect to your database. Create one now:

```bash
cp .env.example .env
```

Open `.env` in VS Code and set your `DATABASE_URL`:

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/product_api_db"
```

> 🔑 Replace `postgres` and `password` with your actual PostgreSQL username and password. Make sure there are no spaces around the `=` sign.

---

### Step 4 — Create Your PostgreSQL Database

Open your terminal and log in to PostgreSQL:

```bash
psql -U postgres
```

Then create a new database (use the same name you put in your `DATABASE_URL`):

```sql
CREATE DATABASE product_api_db;
\q
```

> The `\q` command exits the PostgreSQL prompt and returns you to your regular terminal.

---

### Step 5 — Run Prisma Migrations

This command reads your `schema.prisma` file and creates the actual tables in your database:

```bash
npx prisma migrate dev
```

You should see a success message confirming the migration was applied. If you ever update the schema later, run this command again with a descriptive name like `--name add-featured-field`.

---

### Step 6 — Seed the Database

This pre-fills your database with sample products and categories so you can start testing immediately:

```bash
npx ts-node prisma/seed.ts
```

> After this step, your database will have ready-to-use data to work with.

---

### Step 7 — Start the Development Server

```bash
npm run start:dev
```

You should see output that looks something like this:

```
[NestFactory] Starting Nest application...
[RoutesResolver] ProductsController {/api/products}
[RoutesResolver] CategoriesController {/api/categories}
[NestApplication] Nest application successfully started
```

Your API is now running at: **`http://localhost:3000`** 🎉

---

## 📡 API Endpoints & Usage

Use Thunder Client or Postman to test these endpoints. Make sure your server is running first!

> All endpoints are prefixed with `/api`.

---

### 📦 Products

#### `GET /api/products` — Fetch All Products

**Request:** No body needed. Just hit the endpoint.

**Response:**
```json
[
  {
    "id": 26,
    "name": "Bluetooth Speaker Mini",
    "slug": "bluetooth-speaker-mini",
    "description": "Compact speaker with clear sound.",
    "price": "3500",
    "imageUrl": "https://example.com/speaker.jpg",
    "isFeatured": true,
    "categoryId": 1,
    "createdAt": "2026-03-25T07:32:38.568Z",
    "updatedAt": "2026-03-25T07:32:38.568Z",
    "category": {
      "id": 1,
      "name": "Electronics",
      "slug": "electronics",
      "createdAt": "2026-03-23T14:01:50.222Z",
      "updatedAt": "2026-03-23T14:01:50.222Z"
    }
  },
  {
    "id": 3,
    "name": "Dell XPS 13",
    "slug": "dell-xps-13",
    "description": "Compact premium laptop for work and study.",
    "price": "98000",
    "imageUrl": "https://example.com/dell-xps-13.jpg",
    "isFeatured": true,
    "categoryId": 1,
    "createdAt": "2026-03-23T14:01:50.410Z",
    "updatedAt": "2026-03-23T14:01:50.410Z",
    "category": {
      "id": 1,
      "name": "Electronics",
      "slug": "electronics",
      "createdAt": "2026-03-23T14:01:50.222Z",
      "updatedAt": "2026-03-23T14:01:50.222Z"
    }
  },
]
```

---

#### `GET /api/products/featured` — Fetch Featured Products

Returns only products marked as featured.

**Request:** No body needed.

**Response:**
```json
[
  {
    "id": 1,
    "name": "Wireless Headphones",
    "price": 49.99,
    "slug": "wireless-headphones",
    "featured": true,
    "categoryId": 1
  }
]
```

---

#### `GET /api/products/:slug` — Fetch a Single Product by Slug

**Example:** `GET /api/products/wireless-headphones`

**Response:**
```json
{
    "id": 26,
    "name": "Bluetooth Speaker Mini",
    "slug": "bluetooth-speaker-mini",
    "description": "Compact speaker with clear sound.",
    "price": "3500",
    "imageUrl": "https://example.com/speaker.jpg",
    "isFeatured": true,
    "categoryId": 1,
    "createdAt": "2026-03-25T07:32:38.568Z",
    "updatedAt": "2026-03-25T07:32:38.568Z",
    "category": {
      "id": 1,
      "name": "Electronics",
      "slug": "electronics",
      "createdAt": "2026-03-23T14:01:50.222Z",
      "updatedAt": "2026-03-23T14:01:50.222Z"
    }
  },
```

---

### 🗂️ Categories

#### `GET /api/categories` — Fetch All Categories

**Request:** No body needed.

**Response:**
```json
[
  {
    "id": 2,
    "name": "Home & Living",
    "slug": "home-living",
    "createdAt": "2026-03-23T14:01:50.224Z",
    "updatedAt": "2026-03-23T14:01:50.224Z"
  },
  {
    "id": 3,
    "name": "Beauty",
    "slug": "beauty",
    "createdAt": "2026-03-23T14:01:50.224Z",
    "updatedAt": "2026-03-23T14:01:50.224Z"
  },
]
```

---

#### `GET /api/categories/:slug/products` — Get Products by Category

Fetch all products that belong to a specific category using its slug.

**Example:** `GET /api/categories/electronics/products`

**Response:**
```json
[
  {
  "id": 1,
  "name": "Electronics",
  "slug": "electronics",
  "createdAt": "2026-03-23T14:01:50.222Z",
  "updatedAt": "2026-03-23T14:01:50.222Z",
  "products": [
    {
      "id": 2,
      "name": "Samsung Galaxy A54",
      "slug": "samsung-galaxy-a54",
      "description": "Reliable Android phone for everyday use.",
      "price": "45000",
      "imageUrl": "https://example.com/samsung-galaxy-a54.jpg",
      "isFeatured": false,
      "categoryId": 1,
      "createdAt": "2026-03-23T14:01:50.410Z",
      "updatedAt": "2026-03-23T14:01:50.410Z"
    },
  ]
  }
]
```

---

### 🔐 Admin

These endpoints are for creating and managing products. In a production app, these would be protected by authentication.

#### `POST /api/admin/products` — Create a New Product

**Request Body:**
```json
{
  "name": "Wireless Earbuds Pro",
  "slug": "wireless-earbuds-pro",
  "description": "Noise-isolating earbuds with long battery life and clear sound.",
  "price": 7200,
  "imageUrl": "https://example.com/wireless-earbuds-pro.jpg",
  "isFeatured": false,
  "categoryId": 1
}
```

**Response:**
```json
{
  "id": 28,
  "name": "Wireless Earbuds Pro",
  "slug": "wireless-earbuds-pro",
  "description": "Noise-isolating earbuds with long battery life and clear sound.",
  "price": "7200",
  "imageUrl": "https://example.com/wireless-earbuds-pro.jpg",
  "isFeatured": false,
  "categoryId": 1,
  "createdAt": "2026-03-25T08:39:03.180Z",
  "updatedAt": "2026-03-25T08:39:03.180Z",
  "category": {
    "id": 1,
    "name": "Electronics",
    "slug": "electronics",
    "createdAt": "2026-03-23T14:01:50.222Z",
    "updatedAt": "2026-03-23T14:01:50.222Z"
  }
}
```

---

#### `PATCH /api/admin/products/:id` — Update a Product

**Example:** `PATCH /api/admin/products/1`

**Request Body** (send only the fields you want to change):
```json
{
  "price": 110000,
  "isFeatured": false
}
```

**Response:**
```json
{
  "id": 1,
  "name": "iPhone 14",
  "slug": "iphone-14",
  "description": "Apple smartphone with strong performance and clean design.",
  "price": "110000",
  "imageUrl": "https://example.com/iphone-14.jpg",
  "isFeatured": false,
  "categoryId": 1,
  "createdAt": "2026-03-23T14:01:50.410Z",
  "updatedAt": "2026-03-25T07:33:59.012Z",
  "category": {
    "id": 1,
    "name": "Electronics",
    "slug": "electronics",
    "createdAt": "2026-03-23T14:01:50.222Z",
    "updatedAt": "2026-03-23T14:01:50.222Z"
  }
}
```

---

## 📂 Project Structure Explained

Here's what each folder and file does, in plain English:

```
BEGINNER-PRODUCT-API-NESTJS-PRISMA/
│
├── dist/                          # Auto-generated compiled JS — don't edit this
├── docs/                          # Your learning notes and toolkit documentation
├── node_modules/                  # All installed packages — don't touch this folder
│
├── prisma/                        # Everything database-related lives here
│   ├── migrations/               # A history of every change made to your database
│   ├── prisma.module.ts          # Connects Prisma to the NestJS app
│   ├── prisma.service.ts         # The layer that actually talks to your database
│   ├── schema.prisma             # Your database table definitions (the blueprint)
│   └── seed.ts                   # Script that fills your DB with test data
│
├── src/                          # Your main application code
│   │
│   ├── categories/               # Everything for the /api/categories routes
│   │   ├── categories.controller.ts  # Receives and responds to HTTP requests
│   │   ├── categories.module.ts      # Wires the controller and service together
│   │   └── categories.service.ts     # Contains the logic and talks to the DB
│   │
│   ├── products/                 # Everything for the /api/products routes
│   │   ├── products.controller.ts
│   │   ├── products.module.ts
│   │   └── products.service.ts
│   │
│   ├── app.controller.ts         # Handles the root route (e.g. GET /)
│   ├── app.controller.spec.ts    # Unit tests for the root controller
│   ├── app.module.ts             # The root of the whole application
│   ├── app.service.ts            # Root service logic
│   └── main.ts                   # The entry point — this is what starts everything
│
├── test/                         # End-to-end tests folder
│
├── .env                          # Your private config values (never commit this!)
├── .env.example                  # A safe, shareable template others can copy
├── .gitignore                    # Tells Git which files to ignore
├── .prettierrc                   # Auto-formatting rules for your code
├── eslint.config.mjs             # Linting rules to keep code clean and consistent
├── nest-cli.json                 # NestJS CLI configuration
├── package.json                  # Lists all dependencies and available run scripts
├── package-lock.json             # Exact version lock for all dependencies
├── prisma.config.ts              # Prisma v7+ configuration file
├── tsconfig.json                 # TypeScript compiler settings
└── tsconfig.build.json           # TypeScript settings specific to production builds
```

> 💡 **Key insight:** In NestJS, every feature (like `products` or `categories`) follows a consistent three-file pattern — a **controller** (handles incoming requests), a **service** (handles the logic), and a **module** (wires them together). This pattern keeps your code clean, predictable, and easy to scale.

---

## 🔧 Configuration Options

### Environment Variables

Your `.env` file tells the app how to connect to external services. Keep this file private — never push it to GitHub.

| Variable | Description | Example |
|---|---|---|
| `DATABASE_URL` | Full PostgreSQL connection string | `postgresql://postgres:pass@localhost:5432/product_api_db` |

### Port Configuration

By default, the server runs on **port 3000**. To change this, open `src/main.ts` and update the port number:

```typescript
await app.listen(4000); // Change to any available port
```

### Prisma Basics

- **`schema.prisma`** — This is where you define your database tables (called "models" in Prisma). Whenever you change this file, you need to run a new migration.
- **`prisma.config.ts`** — Used for advanced Prisma v7+ configuration settings.
- **Prisma Studio** — Want to see your data in a visual browser interface? Run:
  ```bash
  npx prisma studio
  ```

---

## 🧪 Testing Your Endpoints

Once your server is running, you can test all endpoints using either of these tools:

- **[Postman](https://www.postman.com/)** — A standalone desktop app for API testing
- **[Thunder Client](https://www.thunderclient.com/)** — A lightweight extension built directly into VS Code

**Quick test to confirm everything is working:**

1. Start the server: `npm run start:dev`
2. Open Postman or Thunder Client
3. Send a `GET` request to `http://localhost:3000/api/products`
4. You should see your seeded products returned as JSON ✅

---

## 🐛 Troubleshooting

Here are the most common issues beginners run into, and exactly how to fix them.

---

### ❌ Database Connection Error

**Error message:** `Can't reach database server at localhost:5432`

**Fix:**
- Make sure PostgreSQL is actually running.
  - On Linux/Mac: `sudo service postgresql start`
  - On Windows: Open the Services panel and start the PostgreSQL service
- Double-check your `DATABASE_URL` in `.env`. A typo in the username or password is the most common cause of this error.

---

### ❌ "Client Password Must Be a String" Error

**Error message:** `The "password" argument must be of type string. Received undefined`

**Fix:**
- Your `.env` file isn't being loaded properly.
- Make sure the file is named exactly `.env` — not `.env.txt`, `.env copy`, or anything else.
- Make sure `DATABASE_URL` is defined with no spaces around the `=` sign.
- Restart your server after editing `.env`:
  ```bash
  npm run start:dev
  ```

---

### ❌ Prisma Migration Issues

**Error message:** `Migration failed` or `Schema drift detected`

**Fix:** Reset your database and re-apply all migrations from scratch:

```bash
npx prisma migrate reset
```

> ⚠️ This will delete all data in your database. Only use this during development — never in production.

---

### ❌ Port Already In Use

**Error message:** `Error: listen EADDRINUSE: address already in use :::3000`

**Fix:** Something else is already using port 3000. Either stop that process, or change your app's port in `src/main.ts`:

```typescript
await app.listen(3001);
```

---

### ❌ Missing Environment Variables

**Error message:** `Cannot read properties of undefined` or similar runtime errors

**Fix:**
- Run `cp .env.example .env` to create the file if it doesn't exist yet.
- Open `.env` and make sure all variables are filled in with real values.
- Never leave values as placeholder text like `YOUR_PASSWORD`.

---

### ❌ `npx prisma` Command Not Found

**Fix:** Your dependencies haven't been installed yet. Run:

```bash
npm install
```

Then try your Prisma command again.

---

## 🤝 Contributing

Want to improve this project or use it as a starting point for your own? Here's how.

### Basic Git Workflow

```bash
# 1. Fork the repository on GitHub (click the "Fork" button at the top right)

# 2. Clone your fork to your local machine
git clone https://github.com/YOUR_USERNAME/beginner-product-api-nestjs-prisma.git

# 3. Create a new branch for your changes
git checkout -b feature/your-feature-name

# 4. Make your changes, then stage and commit them
git add .
git commit -m "Add: brief description of what you changed"

# 5. Push your branch up to GitHub
git push origin feature/your-feature-name

# 6. Open a Pull Request on the original repo and describe your changes
```

### Tips for Good Contributions

- Keep changes focused — one feature or fix per Pull Request
- Write clear commit messages (e.g. `Fix: handle missing category slug gracefully`)
- Test your changes locally before submitting
- Feel free to open an Issue first if you want to discuss a bigger change

---

## 🧠 Learning Outcomes

Building this project helped me understand and solidify:

- **How APIs work** — the request/response cycle, HTTP methods, status codes, and what REST actually means in practice
- **Database relationships** — how products and categories link together using foreign keys, and how Prisma makes this easy to manage
- **Backend architecture** — why the Controller → Service → DB pattern exists, and how it keeps code clean and maintainable as a project grows
- **Debugging real errors** — working through actual issues like Prisma connection errors, migration conflicts, and environment variable problems

This project was built using AI-assisted prompting as part of the **Beginner's Toolkit with GenAI** capstone. The goal of this toolkit is simple: **you don't have to figure it all out alone.** AI tools can help you understand concepts faster, work through errors, and write better code — as long as you also take the time to understand *why* things work the way they do.

If you're reading this as a fellow beginner: you can absolutely build this. Take it one step at a time. 💪

---

## 📚 Resources

These are the official docs used throughout this project. Bookmark them — you'll come back often.

- 📘 [NestJS Documentation](https://docs.nestjs.com/) — Everything about modules, controllers, services, and more
- 📗 [Prisma Documentation](https://www.prisma.io/docs/) — Schema setup, migrations, querying, and Prisma Studio
- 📙 [PostgreSQL Documentation](https://www.postgresql.org/docs/) — Database setup, commands, and configuration

---

## 📄 License

This project is licensed under the **MIT License** — which means you're free to use, copy, modify, and distribute it for personal or commercial purposes, as long as you include the original license notice.

```
MIT License

Copyright (c) 2026 lizdmukami

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👩‍💻 Author

**Liz Mukami**
Software Engineer | Backend & Web Development

- GitHub: [@lizdmukami](https://github.com/lizdmukami)

---

<p align="center">Built with ❤️ as part of the Beginner's Toolkit with GenAI capstone &nbsp;|&nbsp; <a href="https://github.com/lizdmukami/beginner-product-api-nestjs-prisma">View on GitHub</a></p>