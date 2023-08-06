# portfolio-website

## Technologies

- React.js
- Next.js
- TypeScript
- Notion API

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
NOTION_PAGE_ID=123456789 # usually has 32 digits
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
```
