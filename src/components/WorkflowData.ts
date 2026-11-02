export const workflowActions = [
  { title: "She Finds The Problem", text: "Ayra finds the affected page and shows the missing detail." },
  { title: "She Prepares The Fix", text: "She drafts a replacement and explains why it fits the page." },
  { title: "She Brings It To You", text: "You review the exact change before anything is sent." },
  { title: "She Carries It Out", text: "After approval, Ayra sends it through a supported site connection." },
  { title: "She Checks What Changed", text: "She checks the live page and records what happened." },
] as const;

export const workflowStages = ["Finding", "Suggested Fix", "Your Review", "Site Update", "Page Check"] as const;
export const workflowFramesPerStage = 30;
export const workflowFps = 30;
export const workflowDurationInFrames = workflowActions.length * workflowFramesPerStage;
