# ReNext - Web3 IGO/IDO Token Launchpad

This is a **Renext app** build with [Next.js](https://nextjs.org/)

## Prerequisites

- [pnpm](https://pnpm.io/) - a fast, disk space efficient package manager
- [Node.js](https://nodejs.org/en/) - a JavaScript runtime built on Chrome's V8 JavaScript engine (version 16 or higher)

## Getting Started

### First, clone this repository and install dependencies:

```bash
git clone https://github.com/brolab-io/renext-app.git
cd renext-app
pnpm install
```

### Second, register supabase account and create a new project

- Go to [supabase.io](https://supabase.io/) and register a new account
- Create a new project
- Go to SQL tab and run the following SQL query to create a new table

```sql
create table
  public.launchpads (
    id uuid not null default gen_random_uuid (),
    token_address text not null,
    currency_address text not null,
    project_category text not null,
    presale_rate text not null,
    token_sale_amount text not null,
    minimum_token_amount text not null,
    maximum_token_amount text not null,
    token_unlock_date timestamp with time zone not null,
    campaign_type text not null,
    affiliate real null,
    project_logo_url text not null,
    project_banner_url text not null,
    project_email text not null,
    project_description text not null,
    created_at timestamp with time zone not null default now(),
    created_by text not null,
    launch_pool_pda text not null,
    name text null,
    network text null default 'solana'::text,
    token_decimals numeric not null default '9'::numeric,
    slug text null,
    project_website text null,
    token_symbol text not null,
    constraint launchpads_pkey primary key (id)
  ) tablespace pg_default;
```

- Go to Settings tab -> API

- Rename `.env.example` to `.env.local` and fill in the following environment variables

```
SUPABASE_URL="https://<your-project-id>.supabase.co"
SUPABASE_KEY="SUPABASE_SERVICE_ROLE_KEY"
```

### Third, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
