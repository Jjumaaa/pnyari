This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Recent YouTube uploads

The homepage's Recent Sermons section can load the latest six public uploads from the PCEA Nyari Church YouTube channel. If YouTube is not configured or unavailable, the site uses the existing static sermon list as a fallback.

To enable automatic uploads locally:

1. Enable the **YouTube Data API v3** in a Google Cloud project and create an API key.
2. Copy `.env.example` to `.env.local`.
3. Set `YOUTUBE_API_KEY` to your key. Keep it server-side: do not rename it with a `NEXT_PUBLIC_` prefix or commit your real key.
4. Keep `YOUTUBE_CHANNEL_HANDLE` set to `@pceanyarichurch` unless the church officially changes its channel handle.
5. Restart the development server after changing environment variables.

The YouTube requests are made on the server and cached for one hour. Configure the same environment variables in the production hosting provider when the site is deployed.
