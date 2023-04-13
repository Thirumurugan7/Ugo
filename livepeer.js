import { createReactClient } from "@livepeer/react";
import { studioProvider } from "livepeer/providers/studio";

const LivePeerClient = createReactClient({
  provider: studioProvider({ apiKey: "f024d454-ba4c-49e4-8d27-0f11cbfd364d" }),
});

export default LivePeerClient;
