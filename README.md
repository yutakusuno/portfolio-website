# portfolio-website

## Technologies

- React.js
- TypeScript
- Next.js
- Notion

## Quick Start

Clone this project locally and move to the root directory

```
cd portfolio-website
```

Create .env.local in the root directory

```
touch .env.local
```

Set your Page ID about your profile page in .env.local

```bash
NOTION_BLOG_DATABASE_ID=xxxxyyyyzzzz
NOTION_AUTH_TOKEN=xxxxyyyyzzzz
```

Install dependencies

```
yarn
```

Host the project locally

```
yarn dev
```

## Deploy on Vercel

TO deploy on Vercel, set following environment variables

```
NOTION_PAGE_ID
NOTION_AUTH_TOKEN
```
