# Landing search release · 21 November 2026

Publish two guides, expand the existing audit checklist, and make the related pages discoverable from article text. The audit found valid sitemap URLs, sparse inline links, no social sharing image and public HTTP and www duplicate URLs.

This is the dedicated landing frontend, based on `13c4598` on `codex/trial-access-about-contact-seo`. Code changes are limited to public page content, metadata, navigation through editorial links, and a static image. Production redirect configuration is limited to the apex and www landing hostnames. The dashboard, CMS, authentication, visitor data handling and dependencies are outside the release.

The production build and the existing routing test passed. Verify sitemap parsing, each public URL, guide titles and canonicals, contextual links, article markup, social image and the canonical redirect before closing. Record the live Worker version and redirect rule separately. Restore the previous Worker version and disable the new redirect rule to recover.

Ten-area check: code, regression coverage, redirects and Worker configuration, local build and source push, release documentation, and live HTTP verification apply. No dependency, persistence, compliance, or monitoring-system change is required. The redirect uses a fixed destination host and retains the original path and query.
