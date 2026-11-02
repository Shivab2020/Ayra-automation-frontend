import { createFileRoute } from '@tanstack/react-router';
import { ContentPage, contentHead } from '@/components/ContentPage';
export const Route = createFileRoute('/resources')({ head: () => contentHead('resources'), component: () => <ContentPage slug="resources" /> });
