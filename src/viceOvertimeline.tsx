import React, { useEffect, useState } from "react";
import { AbsoluteFill, Audio, Sequence, staticFile, useVideoConfig } from "remotion";
import { getAudioData } from "@remotion/media-utils";

const voiceOvers = [
  { file: "audio/01-intro.mp3" },
  { file: "audio/02-importance.mp3" },
  { file: "audio/03-prehistoric.mp3" },
  { file: "audio/04-buddhist-hindu.mp3" },
  { file: "audio/05-muslim-period.mp3" },
  { file: "audio/06-british-period.mp3" },
  { file: "audio/07-post-independence.mp3" },
  { file: "audio/08-conclusion.mp3" },
];

export const VoiceOverTimeline: React.FC = () => {
  const [durations, setDurations] = useState<number[]>([]);
  const { fps } = useVideoConfig();

  useEffect(() => {
    const loadDurations = async () => {
      const durs: number[] = [];
      for (const vo of voiceOvers) {
        try {
          const metadata = await getAudioData(staticFile(vo.file));
          durs.push(metadata.durationInSeconds);
        } catch (err) {
          console.error("Failed to load audio:", vo.file, err);
          durs.push(0);
        }
      }
      setDurations(durs);
    };
    loadDurations();
  }, []);

  let currentFrame = 0;

  return (
    <AbsoluteFill>
      {durations.length === voiceOvers.length &&
        voiceOvers.map((vo, idx) => {
          const durationInFrames = Math.floor(durations[idx] * fps);
          const startFrame = currentFrame;
          currentFrame += durationInFrames;

          console.log("Audio", vo.file, "startFrame:", startFrame, "durationInFrames:", durationInFrames);

          return (
            <Sequence
              key={idx}
              from={startFrame} // when this audio should start
              durationInFrames={durationInFrames} // how long this audio lasts
            >
              <Audio src={staticFile(vo.file)} />
            </Sequence>
          );
        })}
    </AbsoluteFill>
  );
};
