# Alex Cox

One-page personal site: investment, consulting, and finance. Built with Next.js, TypeScript, Tailwind, and shadcn/ui. Ready to import into Vercel Hobby.

## Local run

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43187](http://127.0.0.1:43187).

```bash
npm run build
npm start -- --port 43187
```

## Deploy on Vercel

1. Push this repository to GitHub (or GitLab / Bitbucket).
2. In Vercel, **Add New… → Project** and import the repo.
3. Framework preset: Next.js. No extra environment variables are required.
4. Deploy. Drop media and contact details as below, then redeploy if needed.

## Where to drop video, CV, and contact

| Asset | Path / file |
| --- | --- |
| Hero loop (muted, autoplay) | `public/hero.mp4` |
| Hero still (already a dark ink poster) | `public/hero-poster.jpg` |
| CV (PDF) | `public/alex-cox-cv.pdf` |
| Email and LinkedIn | `src/lib/site.ts` — set the `email` and `linkedin` TODOs |

Until those files exist, the hero shows the ink poster, Email and LinkedIn stay as labels (not invented links), and Download CV points at `/alex-cox-cv.pdf`.
