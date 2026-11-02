import { Player, type CallbackListener, type PlayerRef } from "@remotion/player";
import { useCallback, useEffect, useRef } from "react";
import {
  workflowActions,
  workflowDurationInFrames,
  workflowFramesPerStage,
  workflowFps,
} from "../WorkflowData";
import { WorkflowReel } from "./WorkflowReel";

interface WorkflowAnimationPlayerProps {
  playing: boolean;
  selectedStage: number | null;
  selectionId: number;
  onStageChange: (stage: number) => void;
}

export default function WorkflowAnimationPlayer({ playing, selectedStage, selectionId, onStageChange }: WorkflowAnimationPlayerProps) {
  const playerRef = useRef<PlayerRef>(null);
  const stageCount = workflowActions.length;

  const onFrameUpdate: CallbackListener<"frameupdate"> = useCallback((event) => {
    const frame = event.detail.frame % workflowDurationInFrames;
    const stage = Math.min(stageCount - 1, Math.floor(frame / workflowFramesPerStage));
    onStageChange(stage);
  }, [onStageChange, stageCount]);

  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;
    player.addEventListener("frameupdate", onFrameUpdate);
    return () => player.removeEventListener("frameupdate", onFrameUpdate);
  }, [onFrameUpdate]);

  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;
    if (playing) player.play();
    else player.pause();
  }, [playing]);

  useEffect(() => {
    if (selectedStage === null) return;
    playerRef.current?.seekTo(Math.min(stageCount - 1, Math.max(0, selectedStage)) * workflowFramesPerStage);
  }, [selectedStage, selectionId, stageCount]);

  return (
    <Player
      ref={playerRef}
      component={WorkflowReel}
      durationInFrames={workflowDurationInFrames}
      compositionWidth={600}
      compositionHeight={520}
      fps={workflowFps}
      loop
      controls={false}
      autoPlay={false}
      className="workflow-player"
      style={{ width: "100%", height: "100%" }}
      aria-label="Animated example of Ayra Assistant moving a page-title fix through review and a site check"
    />
  );
}
