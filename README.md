This is a personal portfolio built with [Next.js](https://nextjs.org) + React 19 + Tailwind CSS v4 + TypeScript.

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Personalize
All content lives in `src/app/page.tsx` near the top in the `WORK`, `SKILLS`, `TESTIMONIALS`, and `STATS` arrays. Replace:
- `YourName.` → your name/brand
- `hello@yourname.com` → your email
- Work images (`src` on each item in `WORK`) → your project screenshots
- Portrait image (About section) → your photo
- Bio text, testimonials, skills

---
## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

```bash
cp .env.example .env.local
```

- `RESEND_API_KEY` — get one at [resend.com](https://resend.com). The contact form uses this to send emails.
- `CONTACT_TO_EMAIL` — the address that receives contact form submissions.

When `RESEND_API_KEY` is not set (dev / no key yet), the form shows a friendly dev-mode message instead of failing.

## Light / Dark mode

Click the sun/moon icon in the navbar to toggle. Preference is saved to `localStorage` and respects `prefers-color-scheme` on first visit.

## Deploy on Vercel

```bash
npx vercel
```

Or push to GitHub and import the repo at [vercel.com](https://vercel.com).

1. Connect your repo.
2. Add the environment variables (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`) in the Vercel project settings.
3. Deploy.

The `vercel.json` in this repo sets the build/install commands and pins the deploy region to `iad1` (US East).
