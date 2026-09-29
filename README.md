# Alex Cox

One-page personal site: investment, consulting, and finance. Next.js, TypeScript, Tailwind, and shadcn/ui. Ready to import into Vercel Hobby.

The homepage stays a single page. **Downloads** in the footer (and the education note) opens `/downloads`, a separate page with the report, essay and dissertation PDFs. The files live in `public/downloads/`.

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
3. Framework preset: Next.js. No environment variables are required.

Contact details are in `src/lib/site.ts`. Hero video is at `public/hero.mp4`.
