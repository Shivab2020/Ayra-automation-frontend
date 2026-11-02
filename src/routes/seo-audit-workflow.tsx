import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, contentHead } from "@/components/ContentPage";
const slug = "seo-audit-workflow";
export const Route = createFileRoute("/seo-audit-workflow")({ head: () => contentHead(slug), component: () => <ContentPage slug={slug} /> });
