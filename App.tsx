import React from 'react';
import { IPhoneFrame } from './components/IPhoneFrame';
import { VideoFeed } from './components/VideoFeed';

const App: React.FC = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 overflow-hidden">
      <IPhoneFrame>
        <VideoFeed />
      </IPhoneFrame>
    </div>
  );
};

export default App;