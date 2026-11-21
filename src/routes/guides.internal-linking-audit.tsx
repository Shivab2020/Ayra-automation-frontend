import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, contentHead } from "@/components/ContentPage";

const slug = "guides/internal-linking-audit";
export const Route = createFileRoute("/guides/internal-linking-audit")({
  head: () => contentHead(slug),
  component: () => <ContentPage slug={slug} />,
});
