This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

## Google reviews

The reviews section on the home page is built at deploy time and refreshed
every 24h (ISR). It reads these variables from `.env.local` in development and
from the host's environment in production. **If none are set the section is
simply omitted from the page** — the build still succeeds.

| Variable | Purpose |
| --- | --- |
| `GOOGLE_PLACES_API_KEY` | Places API key. |
| `GOOGLE_PLACE_ID` | The practice's Place ID. Also builds the "leave a review" link. |

The Places API returns **at most 5 reviews**, which is a hard limit of the
endpoint rather than a setting. A one-off helper resolves the place id:

```bash
node scripts/find-place-id.js <places-api-key>   # -> GOOGLE_PLACE_ID
```

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
