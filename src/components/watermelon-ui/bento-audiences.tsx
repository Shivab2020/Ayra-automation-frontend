import SectionArtwork from "@/components/SectionArtwork";
import { FileText, Search, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

/** Adapted from Watermelon UI Bento Grid 1 (MIT): https://ui.watermelon.sh/block/bento-01 */
const audiences = [
  {
    icon: Search,
    label: "In-House SEO Teams",
    title: "Keep Search, Content, And Web Work Moving Together.",
    description:
      "Put the source finding, proposed change, owner, and review status in one place so the next person can pick up the work.",
    className: "bento-audience-lead",
  },
  {
    icon: Users,
    label: "SEO Agencies",
    title: "Make Client Work Easier To Follow.",
    description:
      "Keep each site's findings and handoffs clear, with a review step before connected changes go out.",
    className: "",
  },
  {
    icon: FileText,
    label: "Content And Web Teams",
    title: "See The Reason Behind Each Request.",
    description:
      "Give writers and developers the affected page, the exact proposal, and the next action together.",
    className: "",
  },
];

export default function BentoAudiences() {
  return (
    <section id="audiences" className="section audience-section" aria-labelledby="audiences-title">
      <div className="section-heading">
        <h2 id="audiences-title">
          One Clear Handoff
          <br />
          <em>Across Every Team.</em>
        </h2>
        <p>
          Ayra keeps the evidence and next step visible across SEO, content, and
          site teams.
        </p>
      </div>
      <div className="bento-audience-grid">
        {audiences.map(({ icon: Icon, label, title, description, className }, index) => (
          <Card className={`bento-audience-card shadow-none ${className}`} key={label}>
            <div className="audience-art"><SectionArtwork kind={`team${index}`}/></div><div className="bento-audience-top">
              <Icon size={20} strokeWidth={1.6} aria-hidden="true" />
              <span>{label}</span>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
