import React from 'react';
import { OffthreadVideo } from 'remotion';
import { TransitionSeries } from '@remotion/transitions';
import { fade } from '@remotion/transitions/fade';
import { linearTiming } from '@remotion/transitions';

type VideoToEmbed = {
  src: string;
  section: string;
  query: string;
  durationInFrames: number | null;
  videoUrl: string;
};

type Props = {
  videos: VideoToEmbed[];
};

export const VideosInSequence: React.FC<Props> = ({ videos }) => {
  if (videos.some(vid => vid.durationInFrames === null)) {
    throw new Error('One or more videos have null durationInFrames');
  }

  return (
    <TransitionSeries>
      {videos.map((vid, index) => {
        const isLast = index === videos.length - 1;

        return (
          <React.Fragment key={`${vid.section}-${vid.query}-${index}`}>
            <TransitionSeries.Sequence durationInFrames={vid.durationInFrames!}>
              <OffthreadVideo src={vid.videoUrl} />
            </TransitionSeries.Sequence>

            {/* Add transition only between videos, not after the last one */}
            {!isLast && (
              <TransitionSeries.Transition
                presentation={fade()}
                timing={linearTiming({ durationInFrames: 15 })}
              />
            )}
          </React.Fragment>
        );
      })}
    </TransitionSeries>
  );
};
