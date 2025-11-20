import React from 'react';
import { Battery, Signal, Wifi } from 'lucide-react';

interface IPhoneFrameProps {
  children: React.ReactNode;
}

export const IPhoneFrame: React.FC<IPhoneFrameProps> = ({ children }) => {
  // Get current time string
  const [time, setTime] = React.useState('9:41');

  React.useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative shrink-0">
      {/* Outer Bezel */}
      <div className="relative h-[800px] w-[380px] rounded-[55px] border-[14px] border-black bg-black shadow-2xl overflow-hidden">
        
        {/* Screen Content */}
        <div className="relative h-full w-full bg-black rounded-[42px] overflow-hidden">
          {children}
        </div>

        {/* Dynamic Island / Notch Area */}
        <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-full z-50 flex items-center justify-center">
            {/* Camera Lens simulation */}
             <div className="w-full h-full relative">
                <div className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#1a1a1a] rounded-full opacity-50" />
             </div>
        </div>

        {/* Status Bar */}
        <div className="absolute top-[16px] left-0 w-full px-8 flex justify-between items-center text-white text-[14px] font-semibold z-40 pointer-events-none">
          <span className="pl-2">{time}</span>
          <div className="flex items-center gap-1.5 pr-2">
            <Signal size={16} strokeWidth={2.5} />
            <Wifi size={16} strokeWidth={2.5} />
            <Battery size={20} strokeWidth={2.5} className="ml-1" />
          </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 w-[130px] h-[5px] bg-white/50 rounded-full z-50 pointer-events-none"></div>
      </div>
    </div>
  );
};