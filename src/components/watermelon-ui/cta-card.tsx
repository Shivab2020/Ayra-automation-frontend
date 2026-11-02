import { ArrowRight } from "lucide-react";

/** Adapted from Watermelon UI CTA blocks: https://ui.watermelon.sh/blocks/cta */
export default function CtaCard({ workspaceUrl }: { workspaceUrl?: string }) {
  return (
    <section className="closing-section" aria-labelledby="closing-title">
      <div className="closing-card">

        <div className="closing-copy">
          <h2 id="closing-title">
            Ready To Put
            <br />
            <em>Ayra To Work?</em>
          </h2>
          <p>
            Give her a site issue. Ayra shows the finding, prepares the fix, and
            guides it through approval and execution.
          </p>
        </div>
        <a className="button-primary" href={workspaceUrl || "#workflow"}>
          {workspaceUrl ? "Open Ayra Workspace" : "See What Ayra Can Do"}
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
