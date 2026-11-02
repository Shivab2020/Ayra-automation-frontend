import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, contentHead } from "@/components/ContentPage";
const slug = "guides/aeo-geo-readiness";
export const Route = createFileRoute("/guides/aeo-geo-readiness")({ head: () => contentHead(slug), component: () => <ContentPage slug={slug} /> });
