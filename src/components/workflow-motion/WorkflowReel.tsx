import {
  AbsoluteFill,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
} from "remotion";
import {
  workflowActions,
  workflowDurationInFrames,
  workflowFramesPerStage,
  workflowStages,
} from "../WorkflowData";

const suggestedTitle = "SEO Workflow Software | Ayra Automation";

function CheckMark() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m4.5 10.5 3.4 3.2 7.6-7.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AuditFinding({ frame }: { frame: number }) {
  const scan = interpolate(frame, [1, 27], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.inOut(Easing.quad) });
  return (
    <div className="wf-scene wf-finding-scene">
      <div className="wf-scene-intro"><span>Page Audit</span><h3>One Detail Is Missing</h3><p>Ayra found an SEO issue on this page.</p></div>
      <div className="wf-audit-panel">
        <div className="wf-audit-row"><span className="wf-row-symbol">Aa</span><div><strong>Page Title</strong><small>Search result name</small></div><span className="wf-row-state wf-row-missing">Missing</span></div>
        <div className="wf-scan-light" style={{ transform: `translateY(${scan * 52}px)` }} />
        <div className="wf-audit-row"><span className="wf-row-symbol">H1</span><div><strong>Main Heading</strong><small>Pricing Plans</small></div><span className="wf-row-state wf-row-found">Found</span></div>
      </div>
      <div className="wf-insight"><span className="wf-insight-mark">A</span><p><strong>Why It Matters</strong><br />A clear page title helps people understand what they will find before they open the page.</p></div>
    </div>
  );
}

function SuggestedFix({ frame }: { frame: number }) {
  const updateWidth = interpolate(frame, [0, 26], [0.08, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.quad) });
  return (
    <div className="wf-scene wf-draft-scene">
      <div className="wf-scene-intro"><span>Suggested Change</span><h3>A Title That Names The Page</h3><p>Ayra drafts the edit and keeps the reason beside it.</p></div>
      <div className="wf-proposal-card">
        <div className="wf-field-label">Proposed Page Title</div>
        <div className="wf-input-preview">{suggestedTitle}</div>
        <div className="wf-character-flow" style={{ transform: `scaleX(${updateWidth})` }} />
        <div className="wf-explanation"><strong>Why This Version</strong><p>It names the page topic and includes the company name.</p></div>
      </div>
      <p className="wf-source-note">Based On The Page Content And The Original Finding</p>
    </div>
  );
}

function HumanReview({ frame }: { frame: number }) {
  const reveal = spring({ frame, fps: 30, config: { damping: 18, stiffness: 140, mass: 0.7 } });
  return (
    <div className="wf-scene wf-review-scene">
      <div className="wf-scene-intro"><span>Review Before Delivery</span><h3>The Change Waits For You</h3><p>See the exact edit before Ayra sends it.</p></div>
      <div className="wf-comparison">
        <div className="wf-comparison-side wf-before"><small>Current Page</small><strong>No Title Found</strong><span>There is no page title to show.</span></div>
        <div className="wf-comparison-arrow" style={{ transform: `translateX(${interpolate(reveal, [0, 1], [-3, 0])}px)` }} aria-hidden="true">→</div>
        <div className="wf-comparison-side wf-after" style={{ transform: `translateY(${interpolate(reveal, [0, 1], [3, 0])}px)` }}><small>Proposed Page Title</small><strong>{suggestedTitle}</strong><span>Ready For Your Review</span></div>
      </div>
      <div className="wf-human-note"><span className="wf-human-dot" /><p><strong>Your Approval Comes First</strong><br />Nothing is sent while this change is waiting for your decision.</p></div>
    </div>
  );
}

function SiteDelivery({ frame }: { frame: number }) {
  const progress = interpolate(frame, [0, 26], [0.04, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.inOut(Easing.quad) });
  const sent = frame > 15;
  return (
    <div className="wf-scene wf-delivery-scene">
      <div className="wf-scene-intro"><span>Approved Work</span><h3>Ayra Sends The Change</h3><p>The reviewed title moves through the site's supported connection.</p></div>
      <div className="wf-delivery-route">
        <div className="wf-route-node"><span className="wf-route-icon"><CheckMark /></span><div><strong>Change Approved</strong><small>The exact revision is ready.</small></div></div>
        <div className="wf-route-track"><i style={{ transform: `scaleX(${progress})` }} /></div>
        <div className={`wf-route-node${sent ? " is-sent" : ""}`}><span className="wf-route-icon wf-cms-icon">CMS</span><div><strong>Connected Site</strong><small>{sent ? "Approved title sent." : "Sending approved title."}</small></div></div>
      </div>
      <div className="wf-delivery-detail"><span>Page Title</span><strong>{suggestedTitle}</strong></div>
      <p className="wf-source-note">If A Site Connection Is Not Available, Ayra Leaves A Manual Handoff.</p>
    </div>
  );
}

function LivePageCheck({ frame }: { frame: number }) {
  const check = spring({ frame: Math.max(0, frame - 5), fps: 30, config: { damping: 10, stiffness: 180, mass: 0.55 } });
  return (
    <div className="wf-scene wf-check-scene">
      <div className="wf-scene-intro"><span>Live Page Check</span><h3>See What Changed</h3><p>Ayra revisits the page after the approved update.</p></div>
      <div className="wf-live-preview">
        <div className="wf-live-browser"><i /><i /><i /><span>example.com/pricing</span></div>
        <div className="wf-live-content"><small>PRICING</small><h4>Plans For Every Stage</h4><div className="wf-live-lines"><i /><i /><i /></div><div className="wf-live-title-row"><span>Page Title</span><strong>{suggestedTitle}</strong></div></div>
      </div>
      <div className="wf-check-result"><span className="wf-check-icon" style={{ transform: `scale(${interpolate(check, [0, 1], [0.92, 1])})` }}><CheckMark /></span><p><strong>The Approved Title Is On The Live Page</strong><br />The page check confirms the saved edit. Search performance is tracked separately.</p></div>
    </div>
  );
}

export function WorkflowReel() {
  const frame = useCurrentFrame() % workflowDurationInFrames;
  const stage = Math.floor(frame / workflowFramesPerStage);
  const localFrame = frame % workflowFramesPerStage;
  const item = workflowActions[stage]!;
  const stageName = workflowStages[stage]!;
  const intro = interpolate(localFrame, [0, 7], [0, 1], { extrapolateRight: "clamp" });
  const entrance = {
    opacity: intro,
    transform: `translateY(${interpolate(intro, [0, 1], [2, 0])}px)`,
  };
  const progress = ((frame % workflowFramesPerStage) + stage * workflowFramesPerStage) / workflowDurationInFrames;
  const Scene = [AuditFinding, SuggestedFix, HumanReview, SiteDelivery, LivePageCheck][stage]!;

  return (
    <AbsoluteFill className="workflow-reel">
      <header className="wf-toolbar">
        <span className="wf-brand-symbol">A</span>
        <strong>Ayra Automation</strong>
        <span className="wf-toolbar-divider" />
        <span className="wf-toolbar-context">SEO Workspace</span>
      </header>
      <main className="wf-main">
        <div className="wf-breadcrumb"><span>Example Site</span><i>/</i><span>Page Review</span></div>
        <div className="wf-page-heading">
          <div><span>EXAMPLE PAGE</span><h2>Pricing Page</h2><p>example.com/pricing</p></div>
          <div className="wf-stage-label"><i />{stageName}</div>
        </div>
        <div className="wf-reel-track"><span style={{ transform: `scaleX(${progress})` }} /></div>
        <div className="wf-stage-content" key={stage} style={entrance}>
          <Scene frame={localFrame} />
        </div>
        <div className="wf-reel-caption"><span>{item.title}</span><span>{item.text}</span></div>
      </main>
      <footer className="wf-footer"><span>Illustrative Product Demo</span><span>Ayra Automation</span></footer>
    </AbsoluteFill>
  );
}
