# Landing search release · 21 November 2026

Publish two guides, expand the existing audit checklist, and make the related pages discoverable from article text. The audit found valid sitemap URLs, sparse inline links, no social sharing image and public HTTP and www duplicate URLs.

This is the dedicated landing frontend, based on `13c4598` on `codex/trial-access-about-contact-seo`. Code changes are limited to public page content, metadata, navigation through editorial links, and a static image. Production redirect configuration is limited to the apex and www landing hostnames. The dashboard, CMS, authentication, visitor data handling and dependencies are outside the release.

The production build and existing routing test passed. Code revision `8caa043` was pushed to GitHub. Local Worker and production HTTP checks verified all 16 sitemap URLs, the guide content, internal links, article metadata, matching canonicals, index directives, Contact and the JPEG share image. Production returned 301 for the three tested HTTP and www variants and preserved the path and query. Search Console indexing and AI citations are separate measurements.

Cloudflare Worker version `a7e990ef-2084-49aa-96e4-552cbff388fc` serves production under deployment `81591e14-605c-4a90-8ac6-833e483dd0cb`. To recover application behavior, activate prior Worker version `1d76e345-b52d-4d07-926c-6fa424eff24c`. To recover redirect behavior independently, disable canonical rule `c24dafb682964a37b1337b05cd433dcb` in zone ruleset `434e4f7ae61042e1bcb67b416f128596`.

Ten-area check: code, regression coverage, redirects and Worker configuration, local build and source push, release documentation, and live HTTP verification apply. No dependency, persistence, compliance, or monitoring-system change is required. The redirect uses a fixed destination host and retains the original path and query.
