import { useState, useRef, useCallback, useEffect } from 'react';

interface SwipeBackOptions {
  onBack: () => void;
  enabled?: boolean;
  edgeWidth?: number; // Width of edge zone to start swipe (default 20px)
  threshold?: number; // Distance to trigger back (default 100px)
}

interface SwipeState {
  isActive: boolean;
  startX: number;
  currentX: number;
  progress: number; // 0-1 progress toward threshold
}

export function useSwipeBack({
  onBack,
  enabled = true,
  edgeWidth = 20,
  threshold = 100,
}: SwipeBackOptions) {
  const [swipeState, setSwipeState] = useState<SwipeState>({
    isActive: false,
    startX: 0,
    currentX: 0,
    progress: 0,
  });

  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const isSwipingRef = useRef(false);

  const handleTouchStart = useCallback(
    (e: TouchEvent) => {
      if (!enabled) return;

      const touch = e.touches[0];
      // Only start if touch begins at left edge
      if (touch.clientX <= edgeWidth) {
        touchStartRef.current = { x: touch.clientX, y: touch.clientY };
        isSwipingRef.current = false;
      }
    },
    [enabled, edgeWidth]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!enabled || !touchStartRef.current) return;

      const touch = e.touches[0];
      const deltaX = touch.clientX - touchStartRef.current.x;
      const deltaY = Math.abs(touch.clientY - touchStartRef.current.y);

      // Only activate if horizontal movement is dominant and moving right
      if (!isSwipingRef.current) {
        if (deltaX > 10 && deltaX > deltaY * 2) {
          isSwipingRef.current = true;
          setSwipeState({
            isActive: true,
            startX: touchStartRef.current.x,
            currentX: touch.clientX,
            progress: Math.min(deltaX / threshold, 1),
          });
        } else if (deltaY > 10) {
          // Vertical scroll detected, cancel swipe detection
          touchStartRef.current = null;
        }
      } else {
        // Continue tracking swipe
        const progress = Math.min(Math.max(deltaX / threshold, 0), 1);
        setSwipeState((prev) => ({
          ...prev,
          currentX: touch.clientX,
          progress,
        }));
      }
    },
    [enabled, threshold]
  );

  const handleTouchEnd = useCallback(() => {
    if (!enabled) return;

    if (isSwipingRef.current && swipeState.progress >= 1) {
      onBack();
    }

    // Reset state
    touchStartRef.current = null;
    isSwipingRef.current = false;
    setSwipeState({
      isActive: false,
      startX: 0,
      currentX: 0,
      progress: 0,
    });
  }, [enabled, swipeState.progress, onBack]);

  useEffect(() => {
    if (!enabled) return;

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    document.addEventListener('touchcancel', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [enabled, handleTouchStart, handleTouchMove, handleTouchEnd]);

  return swipeState;
}
