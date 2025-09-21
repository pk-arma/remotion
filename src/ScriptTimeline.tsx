import { AbsoluteFill,  } from 'remotion';
import { createClient } from 'pexels';
import { useEffect, useState } from 'react';
import { VideosInSequence } from './videosInSequence';

const client = createClient('M8C3uNwnffV50AssdqO5MaxIEvDhs4my5u0IbA5lSAfoVgBtryMTBr4o');

const scriptTimeline = [
    {
      startTime: 0,
      endTime: 5,
      section: "intro",
      query: "Uttar Pradesh temple",
      duration: 5,
      min_duration: 5,
      max_duration: 5
    },
    {
      startTime: 5,
      endTime: 10,
      section: "intro",
      query: "ancient Indian architecture",
      duration: 5,
      min_duration: 5,
      max_duration: 5
    },
    {
      startTime: 10,
      endTime: 15,
      section: "intro",
      query: "historical monuments India",
      duration: 5,
      min_duration: 5,
      max_duration: 5
    },
    {
      startTime: 15,
      endTime: 25,
      section: "importance",
      query: "India map",
      duration: 10,
      min_duration: 10,
      max_duration: 10
    },
    {
      startTime: 25,
      endTime: 35,
      section: "importance",
      query: "ancient civilization",
      duration: 10,
      min_duration: 10,
      max_duration: 10
    },
    {
      startTime: 35,
      endTime: 45,
      section: "importance",
      query: "historical artifacts",
      duration: 10,
      min_duration: 10,
      max_duration: 10
    },
    {
      startTime: 45,
      endTime: 60,
      section: "prehistoric",
      query: "stone age tools",
      duration: 15,
      min_duration: 15,
      max_duration: 15
    },
    {
      startTime: 60,
      endTime: 75,
      section: "prehistoric",
      query: "cave paintings India",
      duration: 15,
      min_duration: 15,
      max_duration: 15
    },
    {
      startTime: 75,
      endTime: 90,
      section: "prehistoric",
      query: "ancient civilization",
      duration: 15,
      min_duration: 15,
      max_duration: 15
    },
    {
      startTime: 90,
      endTime: 105,
      section: "prehistoric",
      query: "Harappan civilization",
      duration: 15,
      min_duration: 15,
      max_duration: 15
    },
    {
      startTime: 105,
      endTime: 123.75,
      section: "buddhist-hindu",
      query: "Buddha statue",
      duration: 18.75,
      min_duration: 19,
      max_duration: 19
    },
    {
      startTime: 123.75,
      endTime: 142.5,
      section: "buddhist-hindu",
      query: "Sarnath stupa",
      duration: 18.75,
      min_duration: 19,
      max_duration: 19
    },
    {
      startTime: 142.5,
      endTime: 161.25,
      section: "buddhist-hindu",
      query: "ancient Indian temple",
      duration: 18.75,
      min_duration: 19,
      max_duration: 19
    },
    {
      startTime: 161.25,
      endTime: 180,
      section: "buddhist-hindu",
      query: "Mauryan empire",
      duration: 18.75,
      min_duration: 19,
      max_duration: 19
    },
    {
      startTime: 180,
      endTime: 198.75,
      section: "muslim-period",
      query: "Mughal architecture",
      duration: 18.75,
      min_duration: 19,
      max_duration: 19
    },
    {
      startTime: 198.75,
      endTime: 217.5,
      section: "muslim-period",
      query: "Agra fort",
      duration: 18.75,
      min_duration: 19,
      max_duration: 19
    },
    {
      startTime: 217.5,
      endTime: 236.25,
      section: "muslim-period",
      query: "Islamic architecture India",
      duration: 18.75,
      min_duration: 19,
      max_duration: 19
    },
    {
      startTime: 236.25,
      endTime: 255,
      section: "muslim-period",
      query: "medieval India",
      duration: 18.75,
      min_duration: 19,
      max_duration: 19
    },
    {
      startTime: 255,
      endTime: 273.75,
      section: "british-period",
      query: "British India",
      duration: 18.75,
      min_duration: 19,
      max_duration: 19
    },
    {
      startTime: 273.75,
      endTime: 292.5,
      section: "british-period",
      query: "independence movement",
      duration: 18.75,
      min_duration: 19,
      max_duration: 19
    },
    {
      startTime: 292.5,
      endTime: 311.25,
      section: "british-period",
      query: "1857 revolt",
      duration: 18.75,
      min_duration: 19,
      max_duration: 19
    },
    {
      startTime: 311.25,
      endTime: 330,
      section: "british-period",
      query: "colonial architecture",
      duration: 18.75,
      min_duration: 19,
      max_duration: 19
    },
    {
      startTime: 330,
      endTime: 345,
      section: "post-independence",
      query: "modern India",
      duration: 15,
      min_duration: 15,
      max_duration: 15
    },
    {
      startTime: 345,
      endTime: 360,
      section: "post-independence",
      query: "Indian flag",
      duration: 15,
      min_duration: 15,
      max_duration: 15
    },
    {
      startTime: 360,
      endTime: 375,
      section: "post-independence",
      query: "development India",
      duration: 15,
      min_duration: 15,
      max_duration: 15
    },
    {
      startTime: 375,
      endTime: 390,
      section: "post-independence",
      query: "contemporary architecture",
      duration: 15,
      min_duration: 15,
      max_duration: 15
    },
    {
      startTime: 390,
      endTime: 400,
      section: "conclusion",
      query: "Uttar Pradesh aerial",
      duration: 10,
      min_duration: 10,
      max_duration: 10
    },
    {
      startTime: 400,
      endTime: 410,
      section: "conclusion",
      query: "Indian heritage",
      duration: 10,
      min_duration: 10,
      max_duration: 10
    },
    {
      startTime: 410,
      endTime: 420,
      section: "conclusion",
      query: "cultural diversity",
      duration: 10,
      min_duration: 10,
      max_duration: 10
    }
  ];
  

const fps = 30;

type SectionVideo = {
  startFrame: number;
  durationInFrames: number;
  query: string;
  videoUrl: string;
  section: string;
};

export const TimelineVideo: React.FC = () => {
  const [videos, setVideos] = useState<SectionVideo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllVideos = async () => {
      const allVideos: SectionVideo[] = [];

      for (const section of scriptTimeline) {
        const { query, startTime, duration, section: sectionName } = section;
            const result = await client.videos.search({ query, per_page: 1 , min_duration: section.min_duration,
                max_duration: section.max_duration,});
            const videoFile = result?.videos?.[0]?.video_files?.[0];
            if (videoFile?.link) {
              allVideos.push({
                videoUrl: videoFile.link,
                query,
                section: sectionName,
                startFrame: Math.floor(startTime * fps),
                durationInFrames: Math.floor(duration * fps),
              });
            }
      }
      setVideos(allVideos);
      setLoading(false);
    };

    fetchAllVideos();
  }, []);

  if (loading) {
    return (
      <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
        <p>Loading videos from Pexels...</p>
      </AbsoluteFill>
    );
  }

  return (
    <AbsoluteFill>
        <VideosInSequence videos={videos}/>
    </AbsoluteFill>
  );
};
export default TimelineVideo;