import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ZoomIn } from 'lucide-react';

interface WallTooltipProps {
  content: React.ReactNode;
  children: React.ReactElement;
  delay?: number;
  onOpenImage?: () => void;
  showMagnifier?: boolean;
}

export const WallTooltip: React.FC<WallTooltipProps> = ({
  content,
  children,
  delay = 200,
  onOpenImage,
  showMagnifier = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  // Track if current interaction is touch-based
  const isTouchInteractionRef = useRef(false);

  const updatePosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const padding = 8;

    let top = triggerRect.top - tooltipRect.height - padding;
    let left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;

    // If tooltip would go above viewport, show below
    if (top < padding) {
      top = triggerRect.bottom + padding;
    }

    // Keep within horizontal bounds
    if (left < padding) {
      left = padding;
    } else if (left + tooltipRect.width > window.innerWidth - padding) {
      left = window.innerWidth - tooltipRect.width - padding;
    }

    setPosition({ top, left });
  };

  const showTooltip = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches);
    };
    checkMobile();
    const mediaQuery = window.matchMedia('(pointer: coarse)');
    mediaQuery.addEventListener('change', checkMobile);
    return () => mediaQuery.removeEventListener('change', checkMobile);
  }, []);

  useEffect(() => {
    if (isVisible) {
      updatePosition();
    }
  }, [isVisible]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        isVisible &&
        triggerRef.current &&
        tooltipRef.current &&
        !triggerRef.current.contains(event.target as Node) &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isVisible]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsVisible(!isVisible);
    } else if (e.key === 'Escape') {
      setIsVisible(false);
    }
  };

  // Mobile: tap to toggle tooltip
  const handleTouchStart = () => {
    isTouchInteractionRef.current = true;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isMobile) {
      e.preventDefault();
      setIsVisible((prev) => !prev);
    }
  };

  // Desktop: click opens image (mobile handled via magnifier)
  const handleClick = (e: React.MouseEvent) => {
    // Skip if this was a touch interaction (handled by touchEnd)
    if (isTouchInteractionRef.current) {
      isTouchInteractionRef.current = false;
      return;
    }
    // Desktop: click opens image directly
    if (!isMobile && onOpenImage) {
      e.stopPropagation();
      onOpenImage();
    }
  };

  // Magnifier handlers (mobile only) - stop propagation to prevent tooltip toggle
  const handleMagnifierTouchEnd = (e: React.TouchEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (onOpenImage) {
      onOpenImage();
    }
  };

  const handleMagnifierClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onOpenImage) {
      onOpenImage();
    }
  };

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        className="relative outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 rounded-lg"
      >
        {children}

        {/* Mobile magnifier overlay - appears when tooltip is visible */}
        {isMobile && isVisible && showMagnifier && onOpenImage && (
          <button
            onTouchEnd={handleMagnifierTouchEnd}
            onClick={handleMagnifierClick}
            className="absolute top-2 left-2 p-1.5 rounded-full bg-black/60 text-white animate-in fade-in duration-150 hover:bg-black/80 transition-colors z-10"
            aria-label="View full size image"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
        )}
      </div>

      {isVisible &&
        createPortal(
          <div
            ref={tooltipRef}
            style={{
              position: 'fixed',
              top: position.top,
              left: position.left,
              zIndex: 9999,
            }}
            className="pointer-events-none animate-in fade-in duration-150"
          >
            <div className="bg-gray-900/95 dark:bg-gray-800/95 backdrop-blur-sm text-white px-3 py-2 rounded-lg shadow-xl max-w-xs">
              {content}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default WallTooltip;
