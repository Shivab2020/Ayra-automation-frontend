import { ClientOnly, createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useState } from "react";
import WorkflowStory from "@/components/WorkflowStory";
import WatermelonFeature5 from "@/components/watermelon-ui/feature-5";
import BentoAudiences from "@/components/watermelon-ui/bento-audiences";
import BlogCards from "@/components/watermelon-ui/blog-cards";
import FaqCards from "@/components/watermelon-ui/faq-cards";
import CtaCard from "@/components/watermelon-ui/cta-card";
import { indexing } from '@/components/ContentPage';
import {
  ArrowDownRight,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

// Re-enable the framed scene or legacy illustration independently when needed.
const SHOW_SCENE_PANEL = false;
const SHOW_LEGACY_ORBIT = false;

const HeroScene = lazy(() => import("@/components/HeroScene"));
const workspaceUrl = import.meta.env["VITE_AYRA_WORKSPACE_URL"]?.trim();

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayra Automation | AI help from SEO issue to fix" },
      {
        name: "description",
        content:
          "Ayra Assistant is an AI assistant for SEO teams. She finds issues, prepares fixes, carries out approved work through connected tools and checks the result.",
      },
      { name: "robots", content: indexing ? "index, follow" : "noindex, nofollow" },
      { property: "og:title", content: "Ayra Automation | AI help from SEO issue to fix" },
      {
        property: "og:description",
        content:
          "Move from an SEO problem to an approved change, supported execution and a checked result with Ayra Assistant.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://ayraautomation.in/" }],
  }),
  component: Index,
});

const questions = [
  {
    question: "What can Ayra Assistant do?",
    answer:
      "Ayra can inspect a site, organize SEO findings, prepare fixes, manage review and carry approved work through the site's supported tools. She can also check the live page afterward. Search results are measured separately, and no ranking change is promised.",
  },
  {
    question: "Can Ayra change my site without approval?",
    answer:
              "No. Ayra waits for the approval your site requires and keeps the exact approved version with the work record.",
  },
  {
    question: "What happens when information is missing?",
    answer:
      "Ayra flags what is missing and leaves the task open so your team can add the context before the fix moves ahead.",
  },
  {
    question: "Will Ayra work with every website?",
    answer:
      "Execution depends on the site's connected CMS and permissions. When a direct connection is not available, Ayra gives your team a clear manual handoff. Use your team workspace to start working with her.",
  },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);
  const [sceneRequested, setSceneRequested] = useState(false);
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Ayra Automation",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://ayraautomation.in/",
    description:
      "Ayra Assistant finds SEO issues, prepares fixes, carries out approved changes through connected tools, and checks the result.",
  };

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    let timer = 0;
    let idleId: number | undefined;
    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(() => setSceneRequested(true), { timeout: 1800 });
    } else {
      timer = window.setTimeout(() => setSceneRequested(true), 500);
    }
    return () => {
      window.clearTimeout(timer);
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
    };
  }, []);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#main" aria-label="Ayra Automation home">
            Ayra Automation
          </a>
          <nav
            id="main-nav"
            className={menuOpen ? "main-nav is-open" : "main-nav"}
            aria-label="Main navigation"
          >
            <a href="#workflow" onClick={closeMenu}>
              The process
            </a>
            <a href="#product" onClick={closeMenu}>
              Features
            </a>
            <a href="#questions" onClick={closeMenu}>
              Questions
            </a>
            {workspaceUrl && (
              <a className="mobile-workspace" href={workspaceUrl}>
                Open workspace <ArrowUpRight size={15} />
              </a>
            )}
          </nav>
          <div className="header-actions">
            {workspaceUrl && (
              <a className="workspace-link" href={workspaceUrl}>
                Open workspace <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            )}
            <button
              className="menu-toggle"
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="main-nav"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <X size={20} aria-hidden="true" />
              ) : (
                <Menu size={20} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">
              From SEO Issue
              <br />
              <em>To A Fix You Can Check.</em>
            </h1>
            <p className="hero-intro">
              Meet Ayra Assistant. She finds the SEO problem, prepares the change, waits for your approval and carries it through supported site connections. Then she checks the live page.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#workflow">
                Watch One Fix Move <ArrowDownRight size={16} aria-hidden="true" />
              </a>
              {workspaceUrl && (
                <a className="button-text" href={workspaceUrl}>
                  Open workspace <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          <aside
            className={`hero-scene-wrap${sceneReady ? " scene-ready" : ""}${SHOW_SCENE_PANEL ? "" : " scene-panel-disabled"}`}
            aria-label="Three-dimensional view of the Ayra Automation workflow"
          >
            {SHOW_SCENE_PANEL && <div className="scene-orbit-glow" aria-hidden="true" />}
            {SHOW_LEGACY_ORBIT && <div className="scene-fallback" aria-hidden="true">
              <span className="fallback-core">
                <span />
                <i />
              </span>
              <span className="fallback-stage fallback-stage-one">Find</span>
              <span className="fallback-stage fallback-stage-two">Prepare</span>
              <span className="fallback-stage fallback-stage-three">Approve</span>
              <span className="fallback-stage fallback-stage-four">Execute</span>
              <span className="fallback-stage fallback-stage-five">Check</span>
            </div>}
            <ClientOnly fallback={<div className="scene-load-state" aria-hidden="true" />}>
              <Suspense fallback={<div className="scene-load-state" aria-hidden="true" />}>
                {sceneRequested && <HeroScene onReady={() => setSceneReady(true)} />}
              </Suspense>
            </ClientOnly>
          </aside>
        </section>

        <section className="principles" aria-label="The work stays connected">
          <div className="principles-inner">
            <span>Evidence</span>
            <span>Decision</span>
            <span>Human review</span>
            <span>Follow-up</span>
          </div>
        </section>

        <section
          id="workflow"
          className="section workflow-section"
          aria-labelledby="workflow-title"
        >
          <div className="section-heading">
            <h2 id="workflow-title">
              See One SEO Fix
              <br />
              <em>From Page Scan To Final Check.</em>
            </h2>
            <p>
              Follow a missing page title as Ayra finds it, prepares a replacement, asks for your decision, sends the approved change and checks the page again.
            </p>
          </div>
          <WorkflowStory />
        </section>

        <WatermelonFeature5 />

        <BentoAudiences />

        <FaqCards items={questions} />

        <BlogCards />

        <CtaCard workspaceUrl={workspaceUrl} />
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="wordmark" href="#main">
              Ayra Automation
            </a>
            <p>Ayra Assistant finds the SEO issue, prepares the fix and follows approved work through execution and a final check.</p>
          </div>
          <div className="footer-column">
            <h2>Explore</h2>
            <a href="/seo-automation">SEO automation</a>
            <a href="/keyword-competitor-research">Keyword & competitor research</a>
            <a href="/seo-audit-workflow">Audit workflow</a>
            <a href="/resources">Resources & guides</a>
            <a href="/guides/aeo-geo-readiness">AEO & GEO guide</a>
            <a href="#workflow">The process</a>
            <a href="#product">Features</a>
            <a href="#questions">Questions</a>
          </div>
          <div className="footer-column">
            <h2>Ayra Assistant</h2>
            <a href="/help">Help & documentation</a>
            <a href="/about">About Ayra</a>
            <a href="/editorial-policy">Editorial policy</a>
            {workspaceUrl ? (
              <a href={workspaceUrl}>
                Open workspace <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            ) : (
              <p>Ask your team administrator for the workspace address.</p>
            )}
            <a href="#main">
              Back to top <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Ayra Automation</span>
          <span>Ayra Assistant. From site issue to checked fix.</span>
        </div>
      </footer>
    </div>
  );
}
