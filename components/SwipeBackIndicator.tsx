import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface SwipeBackIndicatorProps {
  isActive: boolean;
  progress: number; // 0-1
  currentX: number;
}

const SwipeBackIndicator: React.FC<SwipeBackIndicatorProps> = ({
  isActive,
  progress,
  currentX,
}) => {
  if (!isActive) return null;

  // iOS-style indicator: semi-transparent circle with chevron
  const size = 36 + progress * 8; // Grows slightly as you swipe
  const opacity = 0.3 + progress * 0.5;
  const scale = 0.8 + progress * 0.2;

  return (
    <div
      className="fixed top-0 left-0 bottom-0 pointer-events-none z-[9999]"
      style={{
        width: Math.max(currentX, 0),
      }}
    >
      {/* Shadow overlay on left side (iOS-like) */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"
        style={{ opacity: progress * 0.5 }}
      />

      {/* Chevron indicator */}
      <div
        className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center"
        style={{
          left: Math.max(currentX - size / 2 - 10, 0),
          width: size,
          height: size,
          opacity,
          transform: `translateY(-50%) scale(${scale})`,
        }}
      >
        <div
          className={`
            rounded-full bg-gray-800/80 dark:bg-white/80 backdrop-blur-sm
            flex items-center justify-center shadow-lg
            transition-colors duration-150
          `}
          style={{
            width: size,
            height: size,
            backgroundColor: progress >= 1 ? 'rgb(75, 111, 68)' : undefined,
          }}
        >
          <ChevronLeft
            size={size * 0.6}
            className={`
              ${progress >= 1 ? 'text-white' : 'text-white dark:text-gray-800'}
              transition-colors duration-150
            `}
            strokeWidth={2.5}
          />
        </div>
      </div>

      {/* "Release to go back" hint when threshold reached */}
      {progress >= 1 && (
        <div
          className="absolute top-1/2 text-xs font-medium text-gray-600 dark:text-gray-300 whitespace-nowrap"
          style={{
            left: currentX + 8,
            transform: 'translateY(-50%)',
            opacity: Math.min((progress - 1) * 5 + 0.8, 1),
          }}
        >
          Release to go back
        </div>
      )}
    </div>
  );
};

export default SwipeBackIndicator;
