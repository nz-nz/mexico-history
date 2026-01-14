# Quiz Progress Persistence - Design Document

**Date:** 2026-01-14  
**Status:** Approved  
**Issue:** mexico-history-3rx

## Problem Statement

Users currently lose all quiz progress if they exit mid-quiz. They must complete the entire quiz (potentially 40+ questions) in a single session.

## Decisions Made

| Decision | Choice |
|----------|--------|
| Save trigger | Auto-save after each answered question |
| User notification | Only show on category selection (no in-quiz indicators) |
| Unanswered questions on resume | Shuffle remaining unanswered questions |
| Category card display | Replace high score with "▶️ Continuar (X/Y)" when in progress |
| Card click behavior | Show choice modal: "Continuar" vs "Empezar de Nuevo" |

## Data Structure

```typescript
// Key: 'meso_app_quiz_progress_v1'
interface QuizProgress {
  category: Category | 'ALL';
  answeredQuestionIds: string[];  // IDs of questions already answered
  score: number;                   // Current score
  totalQuestions: number;          // Total questions in this quiz session
  startedAt: string;               // ISO date when quiz started
}

// Stored as: Record<Category | 'ALL', QuizProgress>
```

## User Flow

### Category Selection Screen
1. Load saved progress from localStorage
2. For each category card:
   - If progress exists: show "▶️ Continuar (12/45)" instead of high score
   - If no progress: show high score as normal
3. On card click:
   - If progress exists: show choice modal
   - If no progress: start new quiz immediately

### Choice Modal
- Title: "Quiz en Progreso"
- Text: "Tienes X de Y preguntas respondidas (Z% completado)"
- Primary button: "Continuar" → resume quiz
- Secondary button: "Empezar de Nuevo" → clear progress, start fresh

### During Quiz
- Auto-save after each answered question (silent)
- "Salir" button preserves progress

### Quiz Completion
- Clear saved progress for that category
- Save high score (existing behavior)

### Resume Logic
1. Load saved progress
2. Filter all questions for category
3. Remove already-answered question IDs
4. Shuffle remaining questions
5. Restore score from saved progress
