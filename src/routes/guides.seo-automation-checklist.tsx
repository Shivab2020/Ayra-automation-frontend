import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, contentHead } from "@/components/ContentPage";
const slug = "guides/seo-automation-checklist";
export const Route = createFileRoute("/guides/seo-automation-checklist")({ head: () => contentHead(slug), component: () => <ContentPage slug={slug} /> });
