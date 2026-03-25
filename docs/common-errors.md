# ⚠️ Common Errors Experienced & How They Were Resolved

This document captures real issues faced during development and how they were fixed.

## 1. Prisma Error: `client password must be a string`

### What happened

While starting the server, Prisma threw this error:

```text
SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string
```

### Cause

The database password in `.env` was either:

- Missing
- Incorrectly formatted
- Not being read properly

### Fix

- Confirm the `.env` file exists
- Ensure the connection string is in the correct format:

```env
DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/product_api_db"
```

- Restart the server after making changes

---

## 2. Prisma Migration Not Running

### What happened

Running the command below either did nothing or failed silently:

```bash
npx prisma migrate dev
```

### Cause

- PostgreSQL was not running
- The database had not been created

### Fix

- Start the PostgreSQL service
- Create the database manually:

```sql
CREATE DATABASE product_api_db;
```

---

## 3. `No seed command configured`

### What happened

Running:

```bash
npx prisma db seed
```

returned:

```text
No seed command configured
```

### Cause

The Prisma config was missing the seed setup.

### Fix

Update `prisma.config.ts` to include:

```ts
migrations: {
  seed: 'ts-node prisma/seed.ts',
}
```

---

## 4. Git Commit Error: `Identity unknown`

### What happened

Git refused to commit changes.

### Cause

Your Git username and email had not been set.

### Fix

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

---

## 5. npm / PowerShell Execution Error

### What happened

PowerShell returned this error:

```text
running scripts is disabled on this system
```

### Cause

Windows PowerShell execution policy restrictions.

### Fix

Run PowerShell as Administrator, then execute:

```powershell
Set-ExecutionPolicy RemoteSigned
```

---

## 6. API Returning 500 Error After User Creation

### What happened

User registration worked, but the app redirected to an error page.

### Possible causes

- Broken redirect route
- Session or authentication issue
- Missing response handling

### Fix approach

- Check logs such as `error.log` and Prisma logs
- Trace the flow after user creation
- Fix any missing `return` or redirect logic

---

## 7. Route Not Found (404 Errors)

### Cause

The route path in the controller was incorrect.

### Fix

Make sure the controller prefix is correct:

```ts
@Controller('api')
```

---

## 8. Empty API Responses

### Cause

The database had no seeded data.

### Fix

- Add seed data manually
- Or create and run a seed script

---

## 9. Prisma Schema Changes Not Reflecting

### Cause

A migration was not run after updating the schema.

### Fix

```bash
npx prisma migrate dev
```

---

## 🧠 Key Learning from Errors

Most issues were not complex bugs.
They were small misconfigurations.

The real improvement came from:

- Reading error messages carefully
- Using AI to interpret them
- Testing one fix at a time
