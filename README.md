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

Place these PDFs in `public/downloads/` using these exact names (or say if the names should change):

| File on the site | Path |
| --- | --- |
| CV | `public/downloads/cv.pdf` |
| Entrepreneurial Finance report | `public/downloads/entrepreneurial-finance-report.pdf` |
| Business and the Natural Environment essay | `public/downloads/business-and-the-natural-environment.pdf` |
| Dissertation | `public/downloads/dissertation.pdf` |

Until those files are in the repo, the Downloads links will 404. Hero video is already at `public/hero.mp4`. Contact details are in `src/lib/site.ts`.
