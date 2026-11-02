import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, contentHead } from "@/components/ContentPage";
const slug = "guides/keyword-to-content-map";
export const Route = createFileRoute("/guides/keyword-to-content-map")({ head: () => contentHead(slug), component: () => <ContentPage slug={slug} /> });
