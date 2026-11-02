import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, contentHead } from "@/components/ContentPage";
const slug = "about";
export const Route = createFileRoute("/about")({ head: () => contentHead(slug), component: () => <ContentPage slug={slug} /> });
