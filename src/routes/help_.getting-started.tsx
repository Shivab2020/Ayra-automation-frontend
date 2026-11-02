import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, contentHead } from "@/components/ContentPage";
const slug = "help/getting-started";
export const Route = createFileRoute("/help_/getting-started")({ head: () => contentHead(slug), component: () => <ContentPage slug={slug} /> });
