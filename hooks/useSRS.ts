import { useState, useEffect } from 'react';
import { SRSState, SRSCard } from '../types';

const STORAGE_KEY = 'mexico_naturalization_srs_state_v1';

export const useSRS = () => {
  const [srsState, setSrsState] = useState<Record<string, SRSState>>({});

  useEffect(() => {
    const loaded = localStorage.getItem(STORAGE_KEY);
    if (loaded) {
      try {
        setSrsState(JSON.parse(loaded));
      } catch (e) {
        console.error("Failed to load SRS state", e);
      }
    }
  }, []);

  const saveState = (newState: Record<string, SRSState>) => {
    setSrsState(newState);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
  };

  const getDueCards = (cards: SRSCard[]): SRSCard[] => {
    const now = Date.now();
    return cards.filter(card => {
      const state = srsState[card.id];
      // If no state, it's new -> Due immediately
      if (!state) return true;
      // If has state, check if nextReviewDate is in the past
      return state.nextReviewDate <= now;
    });
  };

  const getCardState = (cardId: string): SRSState => {
    return srsState[cardId] || {
      cardId,
      box: 0, // 0 = New
      nextReviewDate: 0,
      interval: 0,
      easeFactor: 2.5
    };
  };

  // Logic: 
  // Correct -> Box + 1. Interval roughly doubles (Box 1: 1d, Box 2: 3d, Box 3: 7d, Box 4: 14d, Box 5: 30d)
  // Incorrect -> Box 1. Interval = 1d.
  const submitResult = (cardId: string, isCorrect: boolean) => {
    const currentState = getCardState(cardId);
    let newBox = currentState.box;
    let newInterval = 1; // Default 1 day

    if (isCorrect) {
      newBox = Math.min(newBox + 1, 5); // Max box 5
      
      // Fixed intervals based on box level (Simplified Leitner)
      switch (newBox) {
        case 1: newInterval = 1; break;
        case 2: newInterval = 3; break;
        case 3: newInterval = 7; break;
        case 4: newInterval = 14; break;
        case 5: newInterval = 30; break;
        default: newInterval = 1;
      }
    } else {
      newBox = 1;
      newInterval = 0; // Review again today/immediately? Or tomorrow? 
      // Prompt says "Reset card to Box 1 immediately". 
      // Usually that means review again in same session or next day. 
      // Let's set nextReviewDate to NOW for immediate re-learning, or 10 mins.
      // For this simplified app, let's say "Tomorrow" to avoid endless loops in one session?
      // Actually, prompting "Immediately" usually means it stays in the "Due" queue.
      // We'll set interval to 0 (today).
      newInterval = 0; 
    }

    const nextDate = Date.now() + (newInterval * 24 * 60 * 60 * 1000);

    const newState = {
      ...currentState,
      box: newBox,
      interval: newInterval,
      nextReviewDate: nextDate
    };

    saveState({
      ...srsState,
      [cardId]: newState
    });
  };

  return {
    srsState,
    getDueCards,
    submitResult,
    getCardState
  };
};
