# 🧠 1. Title & Objective

## Prompt-Powered Kickstart: Building a Product API with NestJS + Prisma

### What technology did you choose?

I chose to work with:

- NestJS (backend framework)  
- Prisma ORM  
- PostgreSQL database  

### Why did you choose it?

I chose this stack to deepen my understanding of backend development, specifically how APIs power e-commerce systems. During my time at Moringa, I focused mainly on frontend development and UI/UX, but over time I realized I was relying heavily on CMS tools for backend functionality, which limited my ability to build fully custom solutions.

With growing demand for minimal, secure, and affordable e-commerce platforms, and with AI becoming a key learning tool, I saw the need to upskill in API development. I chose NestJS, Prisma, and PostgreSQL because they are commonly used together to build structured, scalable backend systems.

For this project, I focused on building a basic product catalog API with simple endpoints (such as fetching products and categories) rather than a full e-commerce system. The goal was to learn the fundamentals of API creation while using AI to guide my learning, troubleshoot issues, and bridge the gap between theory and practical implementation.

### What’s the end goal?

To build a working backend API that can:

- Store products and categories  
- Establish relationships between them  
- Expose clean API endpoints for data retrieval  

This simulates the foundation of an e-commerce backend.

---

# ⚡ 2. Quick Summary of the Technology

### What is NestJS?

NestJS is a structured Node.js framework used to build scalable backend applications. It enforces a modular architecture using controllers and services.

### What is Prisma?

Prisma is an ORM that simplifies database interaction. Instead of writing raw SQL, you define your schema and interact with data using code.

### What is PostgreSQL?

PostgreSQL is a relational database used to store structured data in tables.

### Where is this used?

This stack is commonly used in:

- E-commerce systems  
- SaaS platforms  
- APIs for mobile/web applications  

### Real-world example

An online shop where:

- Products belong to categories  
- Users fetch products via APIs  
- Admins manage products through backend endpoints  

---

# 💻 3. System Requirements

Before starting, ensure you have:

- Node.js installed  
- PostgreSQL installed and running  
- Git installed  
- VS Code (or any code editor)  
- Optional: Postman or Thunder Client  

---

# ⚙️ 4. Installation & Setup Instructions

This section focuses on the flow, not every command detail.  
Full commands and scripts are available in the README.

👉 Refer to: `README.md`

### Step-by-step overview

- Create a NestJS project  
- Install Prisma and initialize it  
- Configure PostgreSQL connection  
- Define database schema (Product + Category)  
- Run migrations to create tables  
- Start the development server  

### What you should see

At this point:

- Your server should run locally  
- Database tables should exist  
- No errors in terminal  

If anything breaks here, check the Common Errors document.

👉 Refer to: `common-errors.md`

---

# 🚀 5. Minimal Working Example

### What does the example do?

The API allows you to:

- Fetch all products  
- Fetch all categories  
- Fetch products by category  

### What’s happening behind the scenes?

- Controller handles incoming request  
- Service processes logic  
- Prisma fetches data from database  
- Response is returned as JSON  

### Example flow

User hits:

GET /api/products
System:

- Controller receives request  
- Service calls Prisma  
- Database returns products  
- API responds with JSON  

### Expected output (conceptual)

A list of products with their categories attached.

💡 Full working code is in the repository.

👉 Refer to: [README](./README.md) for running and testing endpoints  

---

# 🤖 6. AI Prompt Journal

Instead of embedding all prompts here, I documented them separately for clarity and depth.

👉 Refer to: [AI Prompt Journal](./ai-prompts-journal.md)

### What this section covers

- Prompts used during learning  
- Why each prompt was used  
- How AI responses helped (or didn’t)  
- Reflection on using AI as a learning tool  

### Key takeaway

AI was not just giving answers.  
It acted more like a guide when I was stuck, especially during debugging.

---

# ⚠️ 7. Common Issues & Fixes

All errors and debugging experiences are documented in detail separately.

👉 Refer to: [Common Errors](./common-errors.md)

### Why separate this?

While working on the project, most learning came from:

- Errors  
- Misconfigurations  
- Unexpected behavior  

Documenting them separately made it easier to:

- Track patterns  
- Understand root causes  
- Help others avoid the same mistakes  

---

# 📚 8. References

### Official Documentation

- NestJS → https://docs.nestjs.com  
- Prisma → https://www.prisma.io/docs  
- PostgreSQL → https://www.postgresql.org/docs/  

### Learning Resources

- NestJS Beginner Guide (YouTube)  
  https://www.youtube.com/watch?v=0M8AYU_hPas  

### Supporting Resources

- StackOverflow (for debugging)  
- Prisma GitHub discussions  
- Node.js documentation  

---

# 🧠 Final Reflection

At first, backend development felt a bit abstract. Things weren’t visible like UI work. But once the pieces started connecting. Controllers, services, database. It began to make sense.

What stood out most was how much faster I could move using AI, not by copying answers, but by asking better questions each time something broke.

This project didn’t just teach me how to build an API.  
It shifted how I approach learning new technologies.