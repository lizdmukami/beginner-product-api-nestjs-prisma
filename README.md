# 🛒 Beginner Product API (NestJS + Prisma)

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
| **Product Management** | Create and retrieve products |
| **Category Management** | Create and retrieve categories with URL-friendly slugs |
| **Filter by Category** | Fetch all products belonging to a specific category |
| **RESTful Structure** | Follows standard HTTP API design conventions |
| **Prisma ORM** | Handles all database queries in a clean, type-safe way |
| **PostgreSQL Database** | Stores your data in a reliable relational database |
| **Seed Data** | Pre-populates the database so you can test right away |
| **Postman / Thunder Client Ready** | Easily test all endpoints with your preferred API tool |

---

## 🛠 Technologies Used

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

## 🚀 Installation & Setup (Step by Step)

Follow these steps carefully. Take it one at a time — there's no rush!

### Step 1 — Clone the Repository

Open your terminal, navigate to where you want the project to live, and run:

```bash
git clone https://github.com/lizdmukami/beginner-product-api-nestjs-prisma.git
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

The project needs a `.env` file to know how to connect to your database. A sample file is already provided for you.

```bash
cp .env.example .env
```

Now open `.env` in VS Code and update the `DATABASE_URL` line with your own PostgreSQL credentials:

```env
DATABASE_URL="postgresql://YOUR_USERNAME:YOUR_PASSWORD@localhost:5432/YOUR_DATABASE_NAME"
```

**Example:**

```env
DATABASE_URL="postgresql://postgres:mypassword@localhost:5432/product_api_db"
```

> 🔑 Replace `YOUR_USERNAME`, `YOUR_PASSWORD`, and `YOUR_DATABASE_NAME` with your actual values. Make sure there are no spaces around the `=` sign.

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
npx prisma migrate dev --name init
```

You should see a success message confirming the migration was applied. If you ever update the schema later, run this command again with a new descriptive name.

---

### Step 6 — Seed the Database

This pre-fills your database with sample products and categories so you can start testing immediately:

```bash
npx ts-node prisma/seed.ts
```

> After this step, your database will have some ready-to-use data to work with.

---

### Step 7 — Start the Development Server

```bash
npm run start:dev
```

You should see output that looks something like this:

```
[NestFactory] Starting Nest application...
[RoutesResolver] ProductsController {/products}
[RoutesResolver] CategoriesController {/categories}
[NestApplication] Nest application successfully started
```

Your API is now running at: **`http://localhost:3000`** 🎉

---

## 📡 API Endpoints & Usage

Use Thunder Client or Postman to test these endpoints. Make sure your server is running first!

---

### 📦 Products

#### `GET /products` — Fetch All Products

**Request:** No body needed. Just hit the endpoint.

**Response:**
```json
[
  {
    "id": 1,
    "name": "Wireless Headphones",
    "description": "Noise-cancelling over-ear headphones",
    "price": 49.99,
    "categoryId": 1,
    "createdAt": "2025-01-01T10:00:00.000Z"
  },
  {
    "id": 2,
    "name": "USB-C Hub",
    "description": "7-in-1 USB-C hub for laptops",
    "price": 29.99,
    "categoryId": 2,
    "createdAt": "2025-01-01T10:05:00.000Z"
  }
]
```

---

#### `POST /products` — Create a New Product

**Request Body:**
```json
{
  "name": "Mechanical Keyboard",
  "description": "Compact TKL mechanical keyboard with RGB lighting",
  "price": 75.00,
  "categoryId": 1
}
```

**Response:**
```json
{
  "id": 3,
  "name": "Mechanical Keyboard",
  "description": "Compact TKL mechanical keyboard with RGB lighting",
  "price": 75.00,
  "categoryId": 1,
  "createdAt": "2025-01-01T11:00:00.000Z"
}
```

---

### 🗂 Categories

#### `GET /categories` — Fetch All Categories

**Request:** No body needed.

**Response:**
```json
[
  {
    "id": 1,
    "name": "Electronics",
    "slug": "electronics"
  },
  {
    "id": 2,
    "name": "Accessories",
    "slug": "accessories"
  }
]
```

---

#### `POST /categories` — Create a New Category

**Request Body:**
```json
{
  "name": "Audio",
  "slug": "audio"
}
```

**Response:**
```json
{
  "id": 3,
  "name": "Audio",
  "slug": "audio"
}
```

---

#### `GET /categories/:slug/products` — Get Products by Category

Fetch all products that belong to a specific category using its slug.

**Example:** `GET /categories/electronics/products`

**Response:**
```json
[
  {
    "id": 1,
    "name": "Wireless Headphones",
    "price": 49.99,
    "categoryId": 1
  }
]
```

---

## 📂 Project Structure Explained

Here's what each folder and file does, written in plain English:

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
│   ├── categories/               # Everything for the /categories routes
│   │   ├── categories.controller.ts  # Receives and responds to HTTP requests
│   │   ├── categories.module.ts      # Wires the controller and service together
│   │   └── categories.service.ts     # Contains the logic and talks to the DB
│   │
│   ├── products/                 # Everything for the /products routes
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
- Make sure `DATABASE_URL` is defined and has no spaces around the `=` sign.
- Restart your development server after making any changes to `.env`:
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

**Fix:** Something else is already using port 3000. You have two options:

1. Find and stop the other process, or
2. Change your app's port in `src/main.ts`:

```typescript
await app.listen(3001);
```

---

### ❌ Missing Environment Variables

**Error message:** `Cannot read properties of undefined` or similar runtime errors

**Fix:**
- Run `cp .env.example .env` to create the file if it doesn't exist yet.
- Open `.env` and make sure all variables are filled in with real values.
- Never leave values as empty strings or placeholder text like `YOUR_PASSWORD`.

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

## 🧠 About This Capstone

This project was built as part of the **Beginner's Toolkit with GenAI** capstone. The learning process involved using AI-assisted prompting throughout — from understanding NestJS module architecture, to debugging real Prisma errors, to structuring the codebase in a way that makes sense for other beginners.

The goal of this toolkit is simple: **you don't have to figure it all out alone.** AI tools can help you understand concepts faster, work through errors, and write better code — as long as you also take the time to understand *why* things work the way they do.

If you're reading this as a fellow beginner: you can absolutely build this. Take it one step at a time. 💪

---

## 📄 License

This project is licensed under the **MIT License** — which means you're free to use, copy, modify, and distribute it for personal or commercial purposes, as long as you include the original license notice.

```
MIT License

Copyright (c) 2025 lizdmukami

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

<p align="center">Built with ❤️ as part of the Beginner's Toolkit with GenAI capstone &nbsp;|&nbsp; <a href="https://github.com/lizdmukami/beginner-product-api-nestjs-prisma">View on GitHub</a></p>