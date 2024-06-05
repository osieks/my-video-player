import React, { useState } from 'react';

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <h1>Local Video Player</h1>
      <video
        controls
        width="600"
        height="400"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="A:\torrents\output_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick={togglePlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default VideoPlayer;
