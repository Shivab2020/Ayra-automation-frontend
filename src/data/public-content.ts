import { contentPages as originalPages } from "./content";
import { seoGuides, type GuideBlock } from "./seo-guides";

type SectionLink = { text: string; href: string; label: string };

export const sectionalLinks: Record<string, Record<string, SectionLink>> = {
  "seo-automation": {
    "From a finding to a verified change": { text: "For a repeatable handoff, use the", href: "/guides/seo-automation-checklist", label: "agency SEO audit checklist" },
  },
  "seo-audit-workflow": {
    "Check the important page signals": { text: "Use this process to", href: "/guides/internal-linking-audit", label: "audit internal links on existing pages" },
    "Close the loop": { text: "Use a change log to", href: "/guides/seo-change-log", label: "record and verify the live SEO change" },
  },
  "guides/keyword-to-content-map": {
    "Give every page a job": { text: "Once pages have a defined role, learn how to", href: "/guides/internal-linking-audit", label: "choose internal links that support the topic" },
  },
  "help/content-review": {
    "Approve the actual version": { text: "After publication,", href: "/guides/seo-change-log", label: "keep an SEO change log" },
  },
  "guides/aeo-geo-readiness": {
    "Make the answer accessible": { text: "Use a focused crawl to", href: "/guides/internal-linking-audit", label: "check internal links to important pages" },
  },
};

type PublicPage = {
  slug: string;
  title: string;
  description: string;
  article: boolean;
  datePublished?: string;
  dateModified?: string;
  sections: { title: string; blocks: GuideBlock[] }[];
  sources: string[];
};

export const contentPages: PublicPage[] = [
  ...originalPages
    .filter((page) => !seoGuides.some((guide) => guide.slug === page.slug))
    .map((page) => ({
      ...page,
      sections: page.sections.map(({ title, text }) => ({
        title,
        blocks: text.map((value): GuideBlock => ({ kind: "paragraph", text: value })),
      })),
    })),
  ...seoGuides,
];
