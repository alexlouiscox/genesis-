# Alex Cox

One-page personal site: investment, consulting, and finance. Next.js, TypeScript, Tailwind, and shadcn/ui. Ready to import into Vercel Hobby.

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
4. Drop the PDFs below into `public/downloads/`, commit, and redeploy.

## Download files to add

The footer **Downloads** link points at `public/downloads/cv.pdf`. Drop the CV there, and any university PDFs in the same folder if you want them linked later.

Until `cv.pdf` is in the repo, that link will 404. Hero video is already at `public/hero.mp4`. Contact details are in `src/lib/site.ts`.
