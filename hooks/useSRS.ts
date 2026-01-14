import { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  SRSState, 
  SRSCard, 
  SubcategoryProgress, 
  CategoryProgress, 
  SessionSettings,
  StudySession 
} from '../types';
import { 
  Category, 
  KNOWLEDGE_BASE, 
  getByCategory, 
  getSubcategories 
} from '../data/categories';
import { DEFAULT_SESSION_SETTINGS, STORAGE_KEY, SRS_INTERVALS } from '../constants';

// =====================================================
// SRS HOOK - Spaced Repetition System with Subcategory Support
// =====================================================

interface UseSRSOptions {
  sessionSettings?: Partial<SessionSettings>;
}

export const useSRS = (options: UseSRSOptions = {}) => {
  const [srsState, setSrsState] = useState<Record<string, SRSState>>({});
  const [sessionSettings, setSessionSettings] = useState<SessionSettings>({
    ...DEFAULT_SESSION_SETTINGS,
    ...options.sessionSettings
  });
  const [currentSession, setCurrentSession] = useState<StudySession | null>(null);

  // Load state from localStorage
  useEffect(() => {
    const loaded = localStorage.getItem(STORAGE_KEY);
    if (loaded) {
      try {
        const parsed = JSON.parse(loaded);
        // Handle both old and new state format
        if (parsed.srsState) {
          setSrsState(parsed.srsState);
          if (parsed.settings) {
            setSessionSettings(s => ({ ...s, ...parsed.settings }));
          }
        } else {
          // Legacy format - just SRS state
          setSrsState(parsed);
        }
      } catch (e) {
        console.error("Failed to load SRS state", e);
      }
    }
  }, []);

  // Save state to localStorage
  const saveState = useCallback((newSrsState: Record<string, SRSState>, newSettings?: SessionSettings) => {
    setSrsState(newSrsState);
    const toSave = {
      srsState: newSrsState,
      settings: newSettings || sessionSettings
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  }, [sessionSettings]);

  // Update session settings
  const updateSettings = useCallback((updates: Partial<SessionSettings>) => {
    const newSettings = { ...sessionSettings, ...updates };
    setSessionSettings(newSettings);
    saveState(srsState, newSettings);
  }, [sessionSettings, srsState, saveState]);

  // Get card state with defaults
  const getCardState = useCallback((cardId: string): SRSState => {
    return srsState[cardId] || {
      cardId,
      box: 0, // 0 = New (unseen)
      nextReviewDate: 0,
      interval: 0,
      easeFactor: 2.5
    };
  }, [srsState]);

  // Get all due cards from a set of cards
  const getDueCards = useCallback((cards: SRSCard[]): SRSCard[] => {
    const now = Date.now();
    return cards.filter(card => {
      const state = srsState[card.id];
      if (!state) return true; // New cards are always due
      return state.nextReviewDate <= now;
    });
  }, [srsState]);

  // Get new cards (never studied) from a set
  const getNewCards = useCallback((cards: SRSCard[]): SRSCard[] => {
    return cards.filter(card => !srsState[card.id] || srsState[card.id].box === 0);
  }, [srsState]);

  // Get review cards (studied but due) from a set
  const getReviewCards = useCallback((cards: SRSCard[]): SRSCard[] => {
    const now = Date.now();
    return cards.filter(card => {
      const state = srsState[card.id];
      if (!state || state.box === 0) return false; // Skip new cards
      return state.nextReviewDate <= now;
    });
  }, [srsState]);

  // Get cards for a study session with limits
  const getSessionCards = useCallback((cards: SRSCard[]): SRSCard[] => {
    // Shuffle helper function using Fisher-Yates algorithm
    const shuffle = (array: SRSCard[]): SRSCard[] => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    // Get and shuffle cards from each group
    const newCards = shuffle(getNewCards(cards)).slice(0, sessionSettings.maxNewCardsPerSession);
    const reviewCards = shuffle(getReviewCards(cards)).slice(0, sessionSettings.maxReviewCardsPerSession);
    
    // Interleave new and review cards for better learning
    const result: SRSCard[] = [];
    const maxLength = Math.max(newCards.length, reviewCards.length);
    
    for (let i = 0; i < maxLength; i++) {
      if (i < reviewCards.length) result.push(reviewCards[i]);
      if (i < newCards.length) result.push(newCards[i]);
    }
    
    return result;
  }, [getNewCards, getReviewCards, sessionSettings]);

  // Submit review result (correct/incorrect)
  const submitResult = useCallback((cardId: string, isCorrect: boolean) => {
    const currentState = getCardState(cardId);
    let newBox = currentState.box;
    let newInterval = SRS_INTERVALS[0]; // Default 1 day

    if (isCorrect) {
      newBox = Math.min(newBox + 1, 5);
      newInterval = SRS_INTERVALS[newBox - 1] || SRS_INTERVALS[4];
    } else {
      newBox = 1;
      newInterval = 0; // Review again immediately
    }

    const nextDate = Date.now() + (newInterval * 24 * 60 * 60 * 1000);

    const newState: SRSState = {
      ...currentState,
      box: newBox,
      interval: newInterval,
      nextReviewDate: nextDate,
      easeFactor: currentState.easeFactor
    };

    saveState({
      ...srsState,
      [cardId]: newState
    });

    // Update current session stats
    if (currentSession) {
      setCurrentSession(prev => prev ? {
        ...prev,
        cardsStudied: prev.cardsStudied + 1,
        newCardsStudied: prev.newCardsStudied + (currentState.box === 0 ? 1 : 0),
        reviewCardsStudied: prev.reviewCardsStudied + (currentState.box > 0 ? 1 : 0),
        correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0),
        incorrectAnswers: prev.incorrectAnswers + (isCorrect ? 0 : 1)
      } : null);
    }
  }, [getCardState, srsState, saveState, currentSession]);

  // Calculate progress for a subcategory
  const getSubcategoryProgress = useCallback((categoryId: string, subcategory: string, cards: SRSCard[]): SubcategoryProgress => {
    const subcategoryCards = cards.filter(c => 
      c.id.startsWith(categoryId.substring(0, 3).toUpperCase())
    );
    
    let learnedCards = 0;
    let learningCards = 0;
    let newCards = 0;

    subcategoryCards.forEach(card => {
      const state = srsState[card.id];
      if (!state || state.box === 0) {
        newCards++;
      } else if (state.box >= 4) {
        learnedCards++;
      } else {
        learningCards++;
      }
    });

    return {
      categoryId,
      subcategory,
      totalCards: subcategoryCards.length,
      learnedCards,
      learningCards,
      newCards,
      lastStudied: undefined // Could track this separately
    };
  }, [srsState]);

  // Calculate progress for a category
  const getCategoryProgress = useCallback((category: Category, cards: SRSCard[]): CategoryProgress => {
    const categoryCards = cards.filter(c => {
      // Match card IDs that start with category prefix
      const categoryPrefix = category.substring(0, 3).toUpperCase();
      return c.id.startsWith(categoryPrefix);
    });

    const subcategories = getSubcategories(category);
    const subcategoryProgress = subcategories.map(sub => 
      getSubcategoryProgress(category, sub, categoryCards)
    );

    const totalCards = categoryCards.length;
    const masteredCards = categoryCards.filter(card => {
      const state = srsState[card.id];
      return state && state.box >= 5;
    }).length;

    return {
      categoryId: category,
      subcategories: subcategoryProgress,
      totalCards,
      masteredCards,
      progressPercent: totalCards > 0 ? Math.round((masteredCards / totalCards) * 100) : 0
    };
  }, [srsState, getSubcategoryProgress]);

  // Get overall progress stats
  const getOverallProgress = useCallback((cards: SRSCard[]) => {
    const total = cards.length;
    let newCount = 0;
    let learningCount = 0;
    let learnedCount = 0;
    let masteredCount = 0;

    cards.forEach(card => {
      const state = srsState[card.id];
      if (!state || state.box === 0) {
        newCount++;
      } else if (state.box <= 3) {
        learningCount++;  // Box 1-3: In Progress
      } else {
        masteredCount++;  // Box 4-5: Mastered
      }
    });

    return {
      total,
      newCount,
      learningCount,
      learnedCount,  // Kept for API compatibility but not used
      masteredCount,
      progressPercent: total > 0 ? Math.round((masteredCount / total) * 100) : 0
    };
  }, [srsState]);

  // Start a new study session
  const startSession = useCallback((categoryId?: string, subcategory?: string) => {
    setCurrentSession({
      startTime: Date.now(),
      cardsStudied: 0,
      newCardsStudied: 0,
      reviewCardsStudied: 0,
      correctAnswers: 0,
      incorrectAnswers: 0,
      categoryId,
      subcategory
    });
  }, []);

  // End current session
  const endSession = useCallback((): StudySession | null => {
    if (!currentSession) return null;
    
    const completedSession: StudySession = {
      ...currentSession,
      endTime: Date.now()
    };
    
    setCurrentSession(null);
    return completedSession;
  }, [currentSession]);

  // Reset all progress (use with caution!)
  const resetAllProgress = useCallback(() => {
    setSrsState({});
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  // Reset progress for specific category
  const resetCategoryProgress = useCallback((category: Category) => {
    const categoryPrefix = category.substring(0, 3).toUpperCase();
    const newState = { ...srsState };
    
    Object.keys(newState).forEach(cardId => {
      if (cardId.startsWith(categoryPrefix)) {
        delete newState[cardId];
      }
    });
    
    saveState(newState);
  }, [srsState, saveState]);

  return {
    // State
    srsState,
    sessionSettings,
    currentSession,
    
    // Card operations
    getDueCards,
    getNewCards,
    getReviewCards,
    getSessionCards,
    getCardState,
    submitResult,
    
    // Progress tracking
    getSubcategoryProgress,
    getCategoryProgress,
    getOverallProgress,
    
    // Session management
    startSession,
    endSession,
    
    // Settings
    updateSettings,
    
    // Reset operations
    resetAllProgress,
    resetCategoryProgress
  };
};