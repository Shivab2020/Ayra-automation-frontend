import SectionArtwork from "@/components/SectionArtwork";
import { ArrowUpRight } from "lucide-react";
import { contentPages } from "@/data/content";

/** Adapted from Watermelon UI Blog 1 (MIT): https://ui.watermelon.sh/block/blog-1 */
export default function BlogCards() {
  const guides = contentPages.filter((page) => page.article).slice(0, 3);

  return (
    <section
      id="journal"
      className="section journal-section watermelon-blog"
      aria-labelledby="journal-title"
    >
      <div className="journal-heading">
        <div>
          <h2 id="journal-title">Practical Guides For Better SEO Work.</h2>
          <p>Clear methods for audits, research, and search visibility.</p>
        </div>
        <a className="button-text" href="/resources">
          Browse All Guides <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
      <div className="journal-card-grid">
        {guides.map((page, index) => (
          <a className="journal-card" href={`/${page.slug}`} key={page.slug}>
            <div className="guide-cover"><SectionArtwork kind={`guide${index}`}/></div><span className="journal-card-label">Ayra Guide</span>
            <h3>{page.title}</h3>
            <p>{page.description}</p>
            <span className="journal-card-link">
              Read The Guide <ArrowUpRight size={16} aria-hidden="true" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
