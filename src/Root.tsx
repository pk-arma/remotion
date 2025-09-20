import "./index.css";
import { Composition } from "remotion";
import {  myCompSchema } from "./HelloWorld";
import TimelineVideo from "./ScriptTimeline";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        // You can take the "id" to render a video:
        // npx remotion render HelloWorld
       
        id="timeline-video"
  component={TimelineVideo}
  durationInFrames={420 * 30} // 420 seconds total
  fps={30}

        width={1920}
        height={1080}
        
        // You can override these props for each render:
        // https://www.remotion.dev/docs/parametrized-rendering
        schema={myCompSchema}
        defaultProps={{
          titleText: "Welcome to Remotion",
          titleColor: "#000000",
          logoColor1: "#91EAE4",
          logoColor2: "#86A8E7",
        }}
      />

     
    </>
  );
};
