import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, contentHead } from "@/components/ContentPage";

const slug = "guides/seo-change-log";
export const Route = createFileRoute("/guides/seo-change-log")({
  head: () => contentHead(slug),
  component: () => <ContentPage slug={slug} />,
});
