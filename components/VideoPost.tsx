import React, { useRef, useEffect, useState } from 'react';
import { Heart, Plus, Volume2, VolumeX, Check } from 'lucide-react';
import { VideoData } from '../types';
import { ProductCarousel } from './ProductCarousel';

interface VideoPostProps {
  data: VideoData;
  isActive: boolean;
}

export const VideoPost: React.FC<VideoPostProps> = ({ data, isActive }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isReady, setIsReady] = useState(false);

  // Play/Pause Logic based on active state
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      // Reset to start if desired, or just play
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Play started
          })
          .catch((error) => {
            console.log("Autoplay prevented or failed:", error);
          });
      }
    } else {
      video.pause();
      video.currentTime = 0; // Optional: reset video when scrolling away
    }
  }, [isActive]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleFollow = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="relative w-full h-full bg-black">
      {/* Video Layer */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={data.videoUrl}
        loop
        playsInline
        muted={isMuted}
        onCanPlay={() => setIsReady(true)}
        onClick={toggleMute} // Simple tap to mute/unmute
      />

      {/* Loading Placeholder */}
      {!isReady && (
         <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-white/30 border-t-white/90 rounded-full animate-spin"></div>
         </div>
      )}

      {/* Gradient Overlay for readability */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>

      {/* Mute Toggle Indicator (Top Left-ish) */}
      <button 
        onClick={toggleMute}
        className="absolute top-[60px] left-4 z-20 bg-black/20 backdrop-blur-md p-2 rounded-full text-white"
      >
        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>

      {/* Right Interaction Bar - Lowered to bottom-170px */}
      <div className="absolute right-2 bottom-[170px] flex flex-col items-center gap-6 z-30">
        {/* Avatar */}
        <div className="relative">
          <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
            <img src={data.avatarUrl} alt="User" className="w-full h-full object-cover" />
          </div>
          
          {/* Interactive Follow Button */}
          <button 
            onClick={handleFollow}
            className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-5 flex items-center justify-center rounded-full transition-all duration-300 active:scale-90 ${
              isFollowing 
                ? 'bg-white scale-0 opacity-0' 
                : 'bg-pink-500 scale-100 opacity-100'
            }`}
          >
            {isFollowing ? (
               <Check size={12} className="text-pink-500" /> 
            ) : (
               <Plus size={12} className="text-white font-bold" />
            )}
          </button>
        </div>

        {/* Like Button */}
        <div className="flex flex-col items-center gap-1">
          <button 
            onClick={toggleLike}
            className={`p-2 rounded-full transition-transform active:scale-75 ${isLiked ? 'text-red-500' : 'text-white'}`}
          >
            <Heart size={32} className={isLiked ? "fill-current" : ""} strokeWidth={2} />
          </button>
          <span className="text-white text-xs font-semibold drop-shadow-md">{data.likes}</span>
        </div>
      </div>

      {/* Info Layer - Lowered to bottom-120px */}
      <div className="absolute left-4 bottom-[120px] right-16 z-20 text-white text-left pointer-events-none">
        <h3 className="font-bold text-[15px] mb-1 drop-shadow-md">{data.user}</h3>
        <p className="text-[13px] leading-tight opacity-90 drop-shadow-sm line-clamp-2">
          {data.description}
        </p>
      </div>

      {/* Product Carousel Overlay - Reduced height */}
      <div className="absolute bottom-0 left-0 right-0 z-30 h-[150px] flex items-end bg-gradient-to-t from-black/90 via-black/40 to-transparent pb-2">
        <ProductCarousel products={data.products} />
      </div>
    </div>
  );
};