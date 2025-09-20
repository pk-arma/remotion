import { AbsoluteFill, OffthreadVideo, Sequence } from 'remotion';
import { createClient } from 'pexels';
import { useEffect, useState } from 'react';

// Setup Pexels client
const client = createClient('M8C3uNwnffV50AssdqO5MaxIEvDhs4my5u0IbA5lSAfoVgBtryMTBr4o');

// Search queries
const searchQueries = [
  'Uttar Pradesh temple',
  'ancient Indian architecture',
  'historical monuments India',
];

const MyPage: React.FC<{ messageIds: string[] }> = ({ messageIds }) => {
  const [videoUrls, setVideoUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const allUrls: string[] = [];

        for (const query of searchQueries) {
          const result = await client.videos.search({ query, per_page: 1 });
          const video = result?.videos?.[0];
          const file = video?.video_files?.[0]?.link;
          if (file) {
            allUrls.push(file);
          }
        }
       console.log(allUrls);
        setVideoUrls(allUrls);
      } catch (error) {
        console.error('Error fetching videos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);
console.log("videoUrls",videoUrls); 
  return (
    <AbsoluteFill style={{ backgroundColor: 'black' }}>
      <button
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          zIndex: 10,
          padding: '8px 12px',
        }}
        onClick={() => setVideoUrls([])}
      >
        Clear Videos
      </button>

      {loading ? (
        <p style={{ color: 'white', padding: 20 }}>Loading videos...</p>
      ) : (
        videoUrls.map((url, index) => (
          <Sequence
            key={url}
            from={index * 200}
            durationInFrames={200} 
          >
            <OffthreadVideo
              src={url}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Sequence>
        ))
      )}
    </AbsoluteFill>
  );
};

export default MyPage;
