import { ScanSearch, PenLine, UserCheck, Send, CircleCheck } from "lucide-react";
import { lazy, Suspense, useCallback, useEffect, useRef, useState } from "react";
import { workflowActions } from "./WorkflowData";

const stepSymbols = [ScanSearch, PenLine, UserCheck, Send, CircleCheck];

const WorkflowAnimationPlayer = lazy(() => import("./workflow-motion/WorkflowAnimationPlayer"));

function WorkflowPoster({ stage }: { stage: number }) {
  const current = workflowActions[stage]!;
  return (
    <div className="workflow-motion-poster">
      <div className="workflow-poster-brand"><span>A</span><strong>Ayra Automation</strong></div>
      <p>Example Site / Page Review</p>
      <h3>{current.title}</h3>
      <div className="workflow-poster-page"><small>Example Page</small><strong>Pricing Page</strong><span>example.com/pricing</span><div>Page Title <b>Needs Attention</b></div></div>
      <p>{current.text}</p>
    </div>
  );
}

export default function WorkflowStory() {
  const [active, setActive] = useState(0);
  const [selectedStage, setSelectedStage] = useState<number | null>(null);
  const [selectionId, setSelectionId] = useState(0);
  const [reduced, setReduced] = useState(false);
  const [visible, setVisible] = useState(false);
  const [tabVisible, setTabVisible] = useState(true);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReduced(media.matches);
    const updateTabVisibility = () => setTabVisible(!document.hidden);
    const observer = new IntersectionObserver(([entry]) => setVisible(Boolean(entry?.isIntersecting)), { threshold: 0.16, rootMargin: "80px" });
    updateMotionPreference();
    updateTabVisibility();
    media.addEventListener("change", updateMotionPreference);
    document.addEventListener("visibilitychange", updateTabVisibility);
    if (root.current) observer.observe(root.current);
    return () => {
      media.removeEventListener("change", updateMotionPreference);
      document.removeEventListener("visibilitychange", updateTabVisibility);
      observer.disconnect();
    };
  }, []);

  const onStageChange = useCallback((stage: number) => setActive(value => value === stage ? value : stage), []);
  const playing = visible && tabVisible && !reduced;
  const current = workflowActions[active]!;

  return (
    <div className="workflow-story" ref={root} data-paused={reduced || !tabVisible}>
      <div className="workflow-actions" aria-label="Explore Ayra's Workflow">
        <ul>{workflowActions.map((item, index) => (
          <li key={item.title} className={active === index ? "workflow-stop is-current" : "workflow-stop"}>
            <button type="button" className={active === index ? "workflow-action is-current" : "workflow-action"} aria-pressed={active === index} onClick={() => { setActive(index); setSelectedStage(index); setSelectionId(value => value + 1); }}>
              <span className="workflow-step-symbol" aria-hidden="true">{(() => { const Icon = stepSymbols[index]; return <Icon size={20} strokeWidth={1.6}/>; })()}</span><span className="workflow-action-title">{item.title}</span>
              <span className="workflow-step-description">{item.text}</span>
            </button>
          </li>
        ))}</ul>
        {reduced && <p className="workflow-reduced-note">Motion Is Paused. Select Any Step To Read It.</p>}
      </div>
      <figure className="workflow-preview workflow-preview-interactive">
        <div className="workflow-motion-stage" aria-label={`Ayra Assistant example: ${current.title}`}>
          {visible ? (
            <Suspense fallback={<WorkflowPoster stage={active} />}>
              <WorkflowAnimationPlayer playing={playing} selectedStage={selectedStage} selectionId={selectionId} onStageChange={onStageChange} />
            </Suspense>
          ) : <WorkflowPoster stage={active} />}
        </div>
      </figure>
    </div>
  );
}
