export type GuideBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "table"; columns: string[]; rows: string[][] };

export type SeoGuide = {
  slug: string;
  title: string;
  description: string;
  article: true;
  datePublished: string;
  dateModified?: string;
  sections: { title: string; blocks: GuideBlock[] }[];
  sources: string[];
};

export const seoGuides: SeoGuide[] = [
  {
    "slug": "guides/internal-linking-audit",
    "title": "How to audit internal links on an existing website",
    "description": "Find missing, broken and unhelpful internal links. Use a practical crawl checklist to propose and verify links across your existing pages.",
    "article": true,
    "datePublished": "2026-11-21",
    "sections": [
      {
        "title": "Overview",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "An internal linking audit tells you which crawlable links reach the pages that matter, where visitors hit dead ends, and where a relevant link would help them take the next step. Start with a small set of important pages. A crawl gives you candidates, and reading the source paragraph tells you whether a link belongs there."
          }
        ]
      },
      {
        "title": "Start with the pages people need",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "List the service pages, product pages and guides that answer important questions. For each one, record its preferred URL, status, canonical and the pages that link to it. Check that the target returns 200 and serves the expected content. If an old destination redirects to an equivalent live page, update the source anchor to point directly to that page."
          },
          {
            "kind": "paragraph",
            "text": "If a URL shows up in the XML sitemap but has no incoming links in the crawl, call it an orphan candidate. Confirm the crawl covered the relevant sections and templates before changing anything. A limited crawl can miss real links."
          }
        ]
      },
      {
        "title": "Find the paragraph where the link helps",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Suppose a guide about maintaining watches mentions servicing intervals, and the site has a separate service page explaining intervals by watch type. Read the paragraph. If the service page answers the reader’s likely next question, link descriptive words such as “watch servicing intervals.” If the source page discusses unrelated repairs, leave it alone."
          },
          {
            "kind": "paragraph",
            "text": "For each recommendation, capture the source URL, paragraph, suggested anchor, target URL, and why the reader would use the link. Prioritize a broken link in a key journey before adding another link to an already well-connected page."
          }
        ]
      },
      {
        "title": "Review and verify the change",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Read the source and destination together. Make sure the anchor describes the destination, the link is relevant, and the target is the intended canonical page. After publication, open the source page, follow the link, and confirm it uses a crawlable anchor with an href. Run a focused crawl again and update the record with the date."
          },
          {
            "kind": "paragraph",
            "text": "Use the same process for new posts. Before publication, choose a guide or service page that extends the topic. After publication, look for one existing page with relevant context that could send readers to the new guide."
          },
          {
            "kind": "paragraph",
            "text": "For the next step, see the [SEO audit workflow](/seo-audit-workflow) and the [keyword to content map](/guides/keyword-to-content-map). [Google’s crawlable link guidance](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)"
          }
        ]
      }
    ],
    "sources": []
  },
  {
    "slug": "guides/seo-automation-checklist",
    "title": "Agency SEO audit checklist from findings to verified fixes",
    "description": "Use this SEO audit checklist to document findings, prioritize fixes, approve changes, and verify what actually went live.",
    "article": true,
    "datePublished": "2026-11-02",
    "dateModified": "2026-11-21",
    "sections": [
      {
        "title": "Overview",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "The useful output of an SEO audit is a list of decisions someone can act on. Give every important finding a page, evidence, a proposed change, an owner and a pass condition. This checklist fits an agency handoff where client approval and publishing may happen on different days."
          }
        ]
      },
      {
        "title": "Before the audit",
        "blocks": [
          {
            "kind": "list",
            "items": [
              "Agree which domains, paths and page types are in scope.",
              "Identify the pages that support the client’s goals and confirm access to the right Search Console property where possible.",
              "Save the date, crawl settings and baseline. Record which analytics are available and where coverage is incomplete."
            ]
          }
        ]
      },
      {
        "title": "Sort findings by consequence",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Check response codes, redirects, index directives, canonicals, titles, headings and links. Recheck transient errors before escalation. A service page excluded unintentionally deserves attention ahead of a cosmetic issue on a low-use archive page. Group recurring template issues and test representative URLs from each affected page type."
          },
          {
            "kind": "paragraph",
            "text": "Use this row format in the handoff:"
          },
          {
            "kind": "table",
            "columns": [
              "URL",
              "Evidence",
              "Proposed change",
              "Approval owner",
              "Pass condition"
            ],
            "rows": [
              [
                "/services/watch-servicing",
                "Crawl shows a title duplicated across service pages",
                "Give the page a distinct title that reflects the service shown",
                "Site owner",
                "Public HTML contains the approved title and the canonical still matches"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "This is an illustrative record. The client’s goals and the observed issue determine whether the change is needed."
          }
        ]
      },
      {
        "title": "Approve, publish, and check the public page",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Give the reviewer the old value, the exact proposed value and the likely effect. Record who approved it and where it will be delivered. When it goes live, check the public URL again. A CMS success message tells you the CMS accepted the request. The public page tells you what visitors and crawlers receive."
          },
          {
            "kind": "paragraph",
            "text": "Close the technical task once the pass condition is met. Keep a separate measurement task for the search outcome. Compare appropriate periods and add context for promotions, site changes and seasonal demand."
          },
          {
            "kind": "paragraph",
            "text": "See the [audit workflow](/seo-audit-workflow) for the handoff and [Ayra’s SEO automation workflow](/seo-automation) for how the product approaches review. [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)"
          }
        ]
      }
    ],
    "sources": []
  },
  {
    "slug": "guides/seo-change-log",
    "title": "How to keep an SEO change log and verify what went live",
    "description": "Track exactly what changed on each URL, when it went live, and how to compare search performance afterward with an SEO change log.",
    "article": true,
    "datePublished": "2026-11-21",
    "sections": [
      {
        "title": "Overview",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "An SEO change log records what changed, when it went live, and how someone verified it. It works for changes made in a CMS, through an assistant or by a developer. Use it to separate publishing evidence from search performance."
          }
        ]
      },
      {
        "title": "Record the exact change",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Keep one row per URL and use a shared batch ID for changes released together. Save the previous value before publishing. For a new page, write “new page” in the previous value and use its first available data as the baseline."
          },
          {
            "kind": "table",
            "columns": [
              "Field",
              "Illustrative value"
            ],
            "rows": [
              [
                "URL",
                "/services/watch-servicing"
              ],
              [
                "Batch and source",
                "November service metadata update, manual CMS edit"
              ],
              [
                "Before and after",
                "“Services” → “Watch Servicing and Maintenance”"
              ],
              [
                "Approval and release",
                "Site owner approved, published 21 November"
              ],
              [
                "Live verification",
                "Returned 200 and the new title appeared in the public HTML"
              ],
              [
                "Follow-up",
                "Compare the first complete 28-day period after release with the previous comparable period"
              ]
            ]
          }
        ]
      },
      {
        "title": "Check delivery before you measure",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Open the public URL after the cache has refreshed. Confirm the response, the approved value, and the canonical and indexing signals relevant to the change. For internal links, inspect the source and click through to the target. Record the date, result, and evidence such as the returned title or a screenshot. Investigate if the approved and live values differ."
          }
        ]
      },
      {
        "title": "Compare before and after for one URL or a group",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "In Search Console, filter by page and use matching time windows where practical. Compare clicks and impressions, and use CTR and position to help interpret the movement. For a group, use the same URL list in both windows and record any other changes that could explain the trend. Add comparable unchanged pages when the question warrants a wider check."
          },
          {
            "kind": "paragraph",
            "text": "If a URL moves from zero impressions to 120, write “+120 impressions” and leave the percentage blank. If a page moves from 40 clicks to 50, record both “+10 clicks” and “+25%.” Delay interpretation if the post-release data is incomplete. Search changes near a release can reflect other events too."
          },
          {
            "kind": "paragraph",
            "text": "Start with the [agency audit checklist](/guides/seo-automation-checklist), then use the [audit workflow](/seo-audit-workflow) to hand off exact changes. [Search Console performance report](https://support.google.com/webmasters/answer/7576553)"
          }
        ]
      }
    ],
    "sources": []
  }
];
