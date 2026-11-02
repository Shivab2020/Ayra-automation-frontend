import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, contentHead } from "@/components/ContentPage";
const slug = "keyword-competitor-research";
export const Route = createFileRoute("/keyword-competitor-research")({ head: () => contentHead(slug), component: () => <ContentPage slug={slug} /> });
