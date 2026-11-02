import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, contentHead } from "@/components/ContentPage";
const slug = "help/content-review";
export const Route = createFileRoute("/help_/content-review")({ head: () => contentHead(slug), component: () => <ContentPage slug={slug} /> });
