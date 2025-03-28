# Voice App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) - Fast all-in-one JavaScript runtime & toolkit
  - If you don't have Bun installed, please visit [https://bun.sh](https://bun.sh) for installation instructions

### Installation

1. Install dependencies:
```bash
bun install
```

2. Set up your environment variables:

Create a `.env` file in the root directory with the following variables based on the schema defined in `src/env.js`:

```bash
# Database connection URL (Required for Prisma)
DATABASE_URL="your_database_url"

# Authentication secret key for BetterAuth.js
BETTER_AUTH_SECRET="your_secret_key"

# Base URL of your application (e.g., http://localhost:3000 for development)
BASE_URL="your_base_url"

# Google OAuth credentials (Required for Google authentication)
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"

# Node environment (development, test, or production)
NODE_ENV="development"
```

Note: Make sure to replace the placeholder values with your actual configuration. The schema validation will ensure all required variables are properly set.

### Database Setup

This project uses Prisma as the ORM. Here are the available database commands:

```bash
# Generate Prisma Client and create migrations
bun db:generate

# Apply migrations to the database
bun db:migrate

# Push schema changes directly to the database
bun db:push

# Open Prisma Studio to manage your data
bun db:studio
```

### Development

Run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Create a production build:

```bash
bun run build
```

## Tech Stack

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [BetterAuth.js](https://www.better-auth.com/)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [ShadCN UI](https://ui.shadcn.com/)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
