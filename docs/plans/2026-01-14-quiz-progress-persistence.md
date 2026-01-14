# Quiz Progress Persistence - Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Allow users to exit and resume quizzes with progress saved automatically.

**Architecture:** Add localStorage persistence layer to QuizGame component. Store answered question IDs and score per category. On resume, filter out answered questions and shuffle remaining.

**Tech Stack:** React, TypeScript, localStorage, Framer Motion (for modal)

---

## Task 1: Add Progress Types and Storage Constants

**Files:**
- Modify: `components/QuizGame.tsx:1-45`

**Step 1: Add the QuizProgress interface and storage key**

Add after line 20 (after QuizQuestion interface):

```typescript
// Quiz progress persistence
const QUIZ_PROGRESS_KEY = 'meso_app_quiz_progress_v1';

interface QuizProgress {
  category: QuizCategorySelection;
  answeredQuestionIds: string[];
  score: number;
  totalQuestions: number;
  startedAt: string;
}

type SavedProgressMap = Partial<Record<QuizCategorySelection, QuizProgress>>;
```

**Step 2: Verify no TypeScript errors**

Run: `npm run build 2>&1 | head -20`
Expected: No type errors related to new interfaces

---

## Task 2: Add Progress State and Load/Save Functions

**Files:**
- Modify: `components/QuizGame.tsx:70-95`

**Step 1: Add new state variables**

After `const [highScores, setHighScores] = useState<Record<string, number>>({});` (around line 82), add:

```typescript
const [savedProgress, setSavedProgress] = useState<SavedProgressMap>({});
const [showResumeModal, setShowResumeModal] = useState(false);
const [pendingCategory, setPendingCategory] = useState<QuizCategorySelection | null>(null);
```

**Step 2: Add helper functions**

Add after the state declarations (around line 86):

```typescript
// Progress persistence helpers
const loadProgress = (): SavedProgressMap => {
  const saved = localStorage.getItem(QUIZ_PROGRESS_KEY);
  return saved ? JSON.parse(saved) : {};
};

const saveProgress = (category: QuizCategorySelection, answeredIds: string[], currentScore: number, total: number) => {
  const progress: QuizProgress = {
    category,
    answeredQuestionIds: answeredIds,
    score: currentScore,
    totalQuestions: total,
    startedAt: new Date().toISOString(),
  };
  const allProgress = loadProgress();
  allProgress[category] = progress;
  localStorage.setItem(QUIZ_PROGRESS_KEY, JSON.stringify(allProgress));
  setSavedProgress(allProgress);
};

const clearProgress = (category: QuizCategorySelection) => {
  const allProgress = loadProgress();
  delete allProgress[category];
  localStorage.setItem(QUIZ_PROGRESS_KEY, JSON.stringify(allProgress));
  setSavedProgress(allProgress);
};
```

**Step 3: Load progress in useEffect**

Modify the existing useEffect to also load progress:

```typescript
useEffect(() => {
  // Load high scores
  const saved = localStorage.getItem('meso_app_quiz_high_scores_v2');
  if (saved) {
    setHighScores(JSON.parse(saved));
  }
  // Load saved progress
  setSavedProgress(loadProgress());
}, []);
```

**Step 4: Verify no TypeScript errors**

Run: `npm run build 2>&1 | head -20`
Expected: No errors

---

## Task 3: Add State for Tracking Answered Questions

**Files:**
- Modify: `components/QuizGame.tsx:75-85`

**Step 1: Add answeredIds state**

Add with other state variables:

```typescript
const [answeredIds, setAnsweredIds] = useState<string[]>([]);
```

---

## Task 4: Modify initializeQuiz to Support Resume

**Files:**
- Modify: `components/QuizGame.tsx:95-115`

**Step 1: Replace initializeQuiz function**

Replace the entire `initializeQuiz` function with:

```typescript
const initializeQuiz = (cat: QuizCategorySelection, isResume: boolean = false) => {
  setCategory(cat);
  setShowResumeModal(false);
  setPendingCategory(null);

  let filtered = cat === 'ALL'
    ? [...allQuestions]
    : allQuestions.filter(q => q.category === cat);

  if (isResume) {
    // Resume: restore from saved progress
    const progress = savedProgress[cat];
    if (progress) {
      // Filter out already answered questions
      const answeredSet = new Set(progress.answeredQuestionIds);
      filtered = filtered.filter(q => !answeredSet.has(q.id));
      
      // Shuffle remaining questions
      const shuffled = filtered.sort(() => Math.random() - 0.5);
      setQuestions(shuffled);
      setAnsweredIds(progress.answeredQuestionIds);
      setScore(progress.score);
      setCurrentIndex(0);
    }
  } else {
    // Fresh start: clear any existing progress
    clearProgress(cat);
    
    // Shuffle all questions
    const shuffled = filtered.sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setAnsweredIds([]);
    setScore(0);
    setCurrentIndex(0);
  }

  setSelectedAnswer(null);
  setAnswered(false);
  setShowResult(false);
  setQuizComplete(false);
};
```

---

## Task 5: Modify handleAnswer to Auto-Save Progress

**Files:**
- Modify: `components/QuizGame.tsx:115-130`

**Step 1: Replace handleAnswer function**

Replace the entire `handleAnswer` function:

```typescript
const handleAnswer = (answerIndex: number) => {
  if (answered || !category) return;

  setSelectedAnswer(answerIndex);
  setAnswered(true);
  setShowResult(true);

  const currentQuestion = questions[currentIndex];
  const isCorrect = answerIndex === currentQuestion.correctAnswer;
  const newScore = isCorrect ? score + 1 : score;
  
  if (isCorrect) {
    setScore(newScore);
  }

  // Track answered question
  const newAnsweredIds = [...answeredIds, currentQuestion.id];
  setAnsweredIds(newAnsweredIds);

  // Auto-save progress
  const totalInQuiz = newAnsweredIds.length + (questions.length - currentIndex - 1);
  saveProgress(category, newAnsweredIds, newScore, totalInQuiz);
};
```

---

## Task 6: Clear Progress on Quiz Completion

**Files:**
- Modify: `components/QuizGame.tsx:130-155`

**Step 1: Modify nextQuestion function**

In the `nextQuestion` function, add `clearProgress(category)` after saving high score:

```typescript
const nextQuestion = () => {
  if (currentIndex + 1 >= questions.length) {
    // Quiz complete
    setQuizComplete(true);

    // Clear saved progress since quiz is complete
    if (category) {
      clearProgress(category);
    }

    // Save high score
    if (category) {
      const currentHigh = highScores[category] || 0;
      const totalAnswered = answeredIds.length;
      const percentage = Math.round((score / totalAnswered) * 100);
      if (percentage > currentHigh) {
        const newHighScores = { ...highScores, [category]: percentage };
        setHighScores(newHighScores);
        localStorage.setItem('meso_app_quiz_high_scores_v2', JSON.stringify(newHighScores));
      }
    }
  } else {
    setCurrentIndex(prev => prev + 1);
    setSelectedAnswer(null);
    setAnswered(false);
    setShowResult(false);
  }
};
```

---

## Task 7: Add Category Card Click Handler with Modal Logic

**Files:**
- Modify: `components/QuizGame.tsx:160-175`

**Step 1: Add click handler function**

Add before the category selection return statement:

```typescript
const handleCategoryClick = (cat: QuizCategorySelection) => {
  const progress = savedProgress[cat];
  if (progress && progress.answeredQuestionIds.length > 0) {
    // Has saved progress - show modal
    setPendingCategory(cat);
    setShowResumeModal(true);
  } else {
    // No progress - start fresh
    initializeQuiz(cat, false);
  }
};
```

---

## Task 8: Update Category Card to Show Progress and Use New Handler

**Files:**
- Modify: `components/QuizGame.tsx:185-220`

**Step 1: Modify the category card button**

Replace the card's onClick and the high score display section:

Change `onClick={() => initializeQuiz(cat)}` to `onClick={() => handleCategoryClick(cat)}`

And replace the highScore display logic with:

```typescript
{(() => {
  const progress = savedProgress[cat];
  if (progress && progress.answeredQuestionIds.length > 0) {
    // Show continue indicator
    return (
      <span className="flex items-center gap-1 text-[#4b6f44] dark:text-[#a3cf6d] font-bold text-xs">
        ▶️ Continuar ({progress.answeredQuestionIds.length}/{progress.totalQuestions})
      </span>
    );
  } else if (highScore !== undefined) {
    // Show high score
    return (
      <span className="flex items-center gap-1 text-[#4b6f44] dark:text-[#a3cf6d] font-bold text-xs">
        <Medal size={12} /> {highScore}%
      </span>
    );
  }
  return null;
})()}
```

---

## Task 9: Add Resume Modal Component

**Files:**
- Modify: `components/QuizGame.tsx:155-165`

**Step 1: Add modal JSX**

Add the modal right before the category selection return (inside the `if (!category)` block, at the start):

```typescript
// Resume modal
const ResumeModal = () => {
  if (!showResumeModal || !pendingCategory) return null;
  
  const progress = savedProgress[pendingCategory];
  if (!progress) return null;
  
  const config = CATEGORY_CONFIG[pendingCategory];
  const answered = progress.answeredQuestionIds.length;
  const total = progress.totalQuestions;
  const percentage = Math.round((answered / total) * 100);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white dark:bg-[#16213e] rounded-2xl p-6 max-w-sm w-full shadow-2xl"
      >
        <div className="text-center mb-4">
          <span className="text-4xl mb-2 block">{config.emoji}</span>
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Quiz en Progreso</h3>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
          Tienes <span className="font-bold text-[#4b6f44] dark:text-[#a3cf6d]">{answered}</span> de {total} preguntas respondidas ({percentage}% completado)
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => initializeQuiz(pendingCategory, true)}
            className="w-full bg-[#4b6f44] text-white py-3 rounded-xl font-bold shadow-lg hover:bg-[#3a5735] transition-colors"
          >
            ▶️ Continuar
          </button>
          <button
            onClick={() => initializeQuiz(pendingCategory, false)}
            className="w-full text-gray-500 dark:text-gray-400 py-2 font-medium hover:text-gray-800 dark:hover:text-gray-200"
          >
            Empezar de Nuevo
          </button>
          <button
            onClick={() => {
              setShowResumeModal(false);
              setPendingCategory(null);
            }}
            className="w-full text-gray-400 dark:text-gray-500 py-2 text-sm hover:text-gray-600 dark:hover:text-gray-300"
          >
            Cancelar
          </button>
        </div>
      </motion.div>
    </div>
  );
};
```

**Step 2: Render the modal**

In the category selection return block, add `<ResumeModal />` right after the opening div:

```typescript
if (!category) {
  // ... categoryKeys definition ...
  
  return (
    <div className="w-full max-w-5xl mx-auto p-6 flex flex-col items-center">
      <ResumeModal />
      {/* ... rest of the JSX */}
```

---

## Task 10: Update Quiz Progress Display During Quiz

**Files:**
- Modify: `components/QuizGame.tsx:280-295`

**Step 1: Update progress counter to show total answered**

Change the progress display from `{currentIndex + 1} / {questions.length}` to account for resumed quizzes:

```typescript
<span className="text-gray-600 dark:text-gray-400 font-medium text-sm">
  {answeredIds.length + 1} / {answeredIds.length + questions.length}
</span>
```

And update the progress bar width calculation:

```typescript
style={{ width: `${((answeredIds.length + currentIndex + 1) / (answeredIds.length + questions.length)) * 100}%` }}
```

---

## Task 11: Fix Quiz Complete Score Display

**Files:**
- Modify: `components/QuizGame.tsx:215-235`

**Step 1: Update the quiz complete screen**

Update to use `answeredIds.length` for accurate total:

```typescript
<p className="text-gray-600 dark:text-gray-400 mb-4">
  Acertaste <span className="font-bold text-[#4b6f44] dark:text-[#a3cf6d]">{score}</span> de {answeredIds.length}
</p>
```

---

## Task 12: Test and Verify

**Step 1: Build and check for errors**

Run: `npm run build`
Expected: Build succeeds with no errors

**Step 2: Manual testing checklist**

1. Start a quiz, answer 3 questions, click "Salir"
2. Verify category card shows "▶️ Continuar (3/X)"
3. Click the category, verify modal appears
4. Click "Continuar", verify quiz resumes with remaining questions shuffled
5. Complete the resumed quiz, verify high score saves correctly
6. Click same category again, verify it starts fresh (no saved progress)
7. Start quiz, answer some, choose "Empezar de Nuevo" from modal - verify fresh start

**Step 3: Commit**

```bash
git add -A
git commit -m "feat(quiz): add progress persistence - save/resume incomplete quizzes

- Auto-save progress after each answered question
- Show 'Continuar' indicator on category cards with saved progress
- Modal choice to continue or start fresh
- Shuffle remaining unanswered questions on resume
- Clear progress when quiz is completed

Closes mexico-history-3rx"
```

---

## Summary

This implementation adds quiz progress persistence with:
- Silent auto-save after each answer
- Visual indicator on category cards
- Choice modal for resume vs fresh start
- Shuffled remaining questions on resume
- Accurate score tracking across sessions
