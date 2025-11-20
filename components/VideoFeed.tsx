import React, { useState, useEffect, useRef } from 'react';
import { VIDEO_FEED_DATA } from '../constants';
import { VideoPost } from './VideoPost';

export const VideoFeed: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const index = Math.round(container.scrollTop / container.clientHeight);
      setActiveIndex(index);
    };

    // Debounce scroll handler for performance
    let timeoutId: ReturnType<typeof setTimeout>;
    const throttledScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 50);
    };

    container.addEventListener('scroll', throttledScroll);
    return () => {
      container.removeEventListener('scroll', throttledScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="h-full w-full overflow-y-scroll snap-y snap-mandatory no-scrollbar scroll-smooth"
      style={{ scrollBehavior: 'smooth' }}
    >
      {VIDEO_FEED_DATA.map((video, index) => (
        <div key={video.id} className="h-full w-full snap-center snap-always relative">
          <VideoPost 
            data={video} 
            isActive={index === activeIndex} 
          />
        </div>
      ))}
    </div>
  );
};