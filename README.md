This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash

npm run dev

# or

yarn dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## ENV

In order to run your project locally you need to add 3 ENVs in your .env.local file

MONGODB_URI
GOOGLE_SECRET
GOOGLE_ID
SECRET

Create a mongodb atlas cluster, click the voice "connect" ,get the DB url and paste it in your env.

To get your GOOGLE_SECRET and GOOGLE_ID follow the official nextAuth documentation https://next-auth.js.org/providers/google

Your SECRET can be anything, you can generate one by running **openssl rand -hex 16**

## DB

In your Mongo cluster create a database called **typester** and a table called **scores**.

Now your local application should be able to store and retrive scores to fill up the leaderboard.
