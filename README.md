# Ayra Automation | White variant 03

This is a separate, reviewable Ayra Automation landing page introducing Ayra Assistant, the AI assistant that guides an SEO fix from the first finding through approval, supported execution and a check of the live page. The site uses one formal Google Font, Roboto.

## Run locally

Use Node.js 22 or later and pnpm:

```sh
pnpm install
pnpm run dev
```

The workflow model is rendered locally with React Three Fiber. It uses no generated image asset. Rotation and pointer movement stop when reduced motion is enabled.

## Workspace link

Set `VITE_AYRA_WORKSPACE_URL` to the Railway dashboard's public URL. Until a stable URL is configured, workspace links are omitted or the page directs visitors to the workflow. No placeholder dashboard address is linked.

## Search indexing

This variant is prepared for Cloudflare Workers, with `https://ayraautomation.in/` as the intended production domain. The first deployment should use the Worker preview URL. Development and preview builds send `noindex, nofollow`. Set `VITE_PUBLIC_INDEXING=true` only for a production build after the custom domain is connected. Robots permits public crawling and references the sitemap; the page-level noindex keeps preview builds excluded.

The page includes a descriptive title and summary, canonical URL, Open Graph metadata, and SoftwareApplication structured data. It avoids unverified customer claims, pricing and ranking guarantees.

## Content and launch

The public library includes product workflows, research guidance, help pages, About, an editorial policy and supporting SEO/AEO/GEO articles.

`pnpm run build` generates the Cloudflare Worker in `.output/server` and its public assets in `.output/public`. Use `pnpm run preview:cloudflare` to inspect it locally and `pnpm run deploy:cloudflare` to upload it. Provider credentials must remain in the Railway/server environment, never in `VITE_*` variables.
