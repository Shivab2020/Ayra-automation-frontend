import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, contentHead } from "@/components/ContentPage";
const slug = "editorial-policy";
export const Route = createFileRoute("/editorial-policy")({ head: () => contentHead(slug), component: () => <ContentPage slug={slug} /> });
