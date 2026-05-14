# Image-Studio

Full-stack Wedding Photography Business Management Platform with three production-ready applications:

- `client/` → Public luxury wedding photography website
- `admin/` → Secure business management dashboard
- `server/` → Backend REST API (Node.js + Express + MongoDB)

## Tech Stack

- Frontend: React + Vite + Tailwind CSS + Framer Motion
- Admin State: Redux Toolkit
- Backend: Node.js + Express.js + Mongoose
- Database: MongoDB
- Auth: JWT
- Uploads: Cloudinary

## Folder Structure

```
client/
  components/ pages/ layouts/ routes/ services/ assets/ hooks/ utils/ styles/
admin/
  components/ pages/ layouts/ routes/ redux/ services/ utils/ styles/
server/
  config/ controllers/ models/ routes/ middleware/ services/ utils/ uploads/
```

## Setup

### 1) Server

```bash
cd server
cp .env.example .env
npm install
npm run dev
```

### 2) Client

```bash
cd client
cp .env.example .env
npm install
npm run dev
```

### 3) Admin

```bash
cd admin
cp .env.example .env
npm install
npm run dev
```

## API Highlights

- Public Inquiry: `POST /api/leads/public-inquiry`
- Admin Login: `POST /api/auth/login`
- Leads: `GET /api/leads`
- Convert Lead to Client: `POST /api/clients/from-lead/:leadId`
- Revenue Dashboard: `GET /api/revenue/dashboard`
- Portfolio Public Stories: `GET /api/portfolio/stories/public`

## Business Flow

1. Website contact form stores inquiry in MongoDB leads.
2. Admin reviews leads and converts a lead into a confirmed client.
3. Admin sets package value and payment split (advance/remaining).
4. Revenue dashboard tracks total revenue, monthly revenue, pending payments, and project metrics.
