import { Composition } from "remotion";
import { workflowDurationInFrames, workflowFps } from "../src/components/WorkflowData";
import { WorkflowReel } from "../src/components/workflow-motion/WorkflowReel";

export function RemotionRoot() {
  return (
    <>
      <Composition
        id="AyraWorkflow"
        component={WorkflowReel}
        durationInFrames={workflowDurationInFrames}
        fps={workflowFps}
        width={600}
      height={520}
      />
    </>
  );
}
