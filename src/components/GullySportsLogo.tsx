import React from 'react';

interface GullySportsLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const GullySportsLogo: React.FC<GullySportsLogoProps> = ({ 
  className = '', 
  size = 'md',
  showText = true 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  const iconSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Container */}
      <div className="relative">
        {/* Sports Equipment Icons in Semi-Circular Arc */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
          <div className="relative w-16 h-8">
            {/* Cricket Bat with Ball */}
            <div className="absolute left-0 top-1">
              <div className={`${iconSizeClasses[size]} text-white`}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2z"/>
                </svg>
              </div>
            </div>
            
            {/* Basketball */}
            <div className="absolute left-1/4 top-0">
              <div className={`${iconSizeClasses[size]} text-white`}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="currentColor"/>
                </svg>
              </div>
            </div>
            
            {/* Soccer Ball */}
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2">
              <div className={`${iconSizeClasses[size]} text-white`}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="currentColor"/>
                </svg>
              </div>
            </div>
            
            {/* Tennis Shoe */}
            <div className="absolute right-1/4 top-0">
              <div className={`${iconSizeClasses[size]} text-white`}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Logo Circle */}
        <div className={`${sizeClasses[size]} bg-black rounded-full flex items-center justify-center relative`}>
          <div className="text-white font-bold text-lg">GS</div>
        </div>
      </div>
      
      {/* Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`${textSizeClasses[size]} font-bold text-black`}>
            GULLY
          </span>
          <span className={`${textSizeClasses[size]} font-bold text-black`}>
            SPORTS
          </span>
          <div className="w-full h-0.5 bg-black mt-1"></div>
        </div>
      )}
    </div>
  );
};

export default GullySportsLogo;
