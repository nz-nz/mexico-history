import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface WallTooltipProps {
  content: React.ReactNode;
  children: React.ReactElement;
  delay?: number;
}

export const WallTooltip: React.FC<WallTooltipProps> = ({
  content,
  children,
  delay = 200,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

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

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onTouchStart={() => setIsVisible(!isVisible)}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        className="outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 rounded-lg"
      >
        {children}
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
