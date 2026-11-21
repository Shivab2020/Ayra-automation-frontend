import { createFileRoute } from "@tanstack/react-router";
import { ContactPage, siteUrl, indexing } from "@/components/ContentPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Request trial access | Contact Ayra Automation" },
      {
        name: "description",
        content:
          "Request trial access to Ayra Automation or ask a question about your website. Contact the team at info@ayraautomation.in.",
      },
      { name: "robots", content: indexing ? "index, follow" : "noindex, nofollow" },
      { property: "og:title", content: "Request trial access | Contact Ayra Automation" },
      {
        property: "og:description",
        content: "Tell us about your website and request trial access to Ayra Automation.",
      },
      { property: "og:url", content: `${siteUrl}/contact` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${siteUrl}/contact` }],
  }),
  component: ContactPage,
});
