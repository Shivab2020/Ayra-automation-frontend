import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, contentHead } from "@/components/ContentPage";
const slug = "seo-automation";
export const Route = createFileRoute("/seo-automation")({ head: () => contentHead(slug), component: () => <ContentPage slug={slug} /> });
