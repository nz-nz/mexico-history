import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, RefreshCcw, Trophy, CheckCircle, XCircle, Medal } from 'lucide-react';
import { 
  Category, 
  CATEGORY_LABELS, 
  CATEGORY_ICONS, 
  KNOWLEDGE_BASE, 
  getByCategory,
  KnowledgeEntry 
} from '../data/categories';
import { generateQuizOptions } from '../data/content';

// Quiz question interface
interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  category: Category;
  subcategory: string;
  famousQuote?: string;
}

// Generate quiz questions from knowledge base entries
const generateQuizQuestion = (entry: KnowledgeEntry): QuizQuestion => {
  const { options, correctIndex } = generateQuizOptions(entry.id, 3);
  
  return {
    id: entry.id,
    question: entry.question,
    options,
    correctAnswer: correctIndex,
    category: entry.category,
    subcategory: entry.subcategory,
    famousQuote: entry.famousQuote?.text
  };
};

// Generate all quiz questions from knowledge base
const generateAllQuestions = (): QuizQuestion[] => {
  return KNOWLEDGE_BASE
    .filter(entry => entry.answer.length > 0 && entry.answer.length < 100) // Filter suitable entries
    .map(generateQuizQuestion);
};

// Category configuration with colors
const CATEGORY_CONFIG: Record<Category | 'ALL', { title: string; emoji: string; bgColor: string }> = {
  ALL: { title: 'Todas las Categorías', emoji: '🎯', bgColor: 'bg-purple-100' },
  [Category.PREHISPANICO]: { title: CATEGORY_LABELS[Category.PREHISPANICO], emoji: CATEGORY_ICONS[Category.PREHISPANICO], bgColor: 'bg-amber-100' },
  [Category.CONQUISTA_COLONIA]: { title: CATEGORY_LABELS[Category.CONQUISTA_COLONIA], emoji: CATEGORY_ICONS[Category.CONQUISTA_COLONIA], bgColor: 'bg-orange-100' },
  [Category.INDEPENDENCIA]: { title: CATEGORY_LABELS[Category.INDEPENDENCIA], emoji: CATEGORY_ICONS[Category.INDEPENDENCIA], bgColor: 'bg-green-100' },
  [Category.REVOLUCION]: { title: CATEGORY_LABELS[Category.REVOLUCION], emoji: CATEGORY_ICONS[Category.REVOLUCION], bgColor: 'bg-red-100' },
  [Category.CONTEMPORANEO]: { title: CATEGORY_LABELS[Category.CONTEMPORANEO], emoji: CATEGORY_ICONS[Category.CONTEMPORANEO], bgColor: 'bg-blue-100' },
  [Category.CIVISMO]: { title: CATEGORY_LABELS[Category.CIVISMO], emoji: CATEGORY_ICONS[Category.CIVISMO], bgColor: 'bg-indigo-100' },
  [Category.TRADICIONES]: { title: CATEGORY_LABELS[Category.TRADICIONES], emoji: CATEGORY_ICONS[Category.TRADICIONES], bgColor: 'bg-pink-100' },
  [Category.GASTRONOMIA]: { title: CATEGORY_LABELS[Category.GASTRONOMIA], emoji: CATEGORY_ICONS[Category.GASTRONOMIA], bgColor: 'bg-yellow-100' },
  [Category.GEOGRAFIA]: { title: CATEGORY_LABELS[Category.GEOGRAFIA], emoji: CATEGORY_ICONS[Category.GEOGRAFIA], bgColor: 'bg-teal-100' },
  [Category.LITERATURA_MUSICA]: { title: CATEGORY_LABELS[Category.LITERATURA_MUSICA], emoji: CATEGORY_ICONS[Category.LITERATURA_MUSICA], bgColor: 'bg-violet-100' },
  [Category.PINTURA_CINE]: { title: CATEGORY_LABELS[Category.PINTURA_CINE], emoji: CATEGORY_ICONS[Category.PINTURA_CINE], bgColor: 'bg-rose-100' },
  [Category.CIENCIA_DEPORTES]: { title: CATEGORY_LABELS[Category.CIENCIA_DEPORTES], emoji: CATEGORY_ICONS[Category.CIENCIA_DEPORTES], bgColor: 'bg-cyan-100' },
};

type QuizCategorySelection = Category | 'ALL';

interface QuizGameProps {
  onBack?: () => void;
}

const QuizGame: React.FC<QuizGameProps> = ({ onBack }) => {
  const [category, setCategory] = useState<QuizCategorySelection | null>(null);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [highScores, setHighScores] = useState<Record<string, number>>({});

  // Generate all questions once on component mount
  const allQuestions = useMemo(() => generateAllQuestions(), []);

  useEffect(() => {
    // Load high scores
    const saved = localStorage.getItem('meso_app_quiz_high_scores_v2');
    if (saved) {
      setHighScores(JSON.parse(saved));
    }
  }, []);

  const initializeQuiz = (cat: QuizCategorySelection) => {
    setCategory(cat);

    let filtered = cat === 'ALL'
      ? [...allQuestions]
      : allQuestions.filter(q => q.category === cat);

    // Shuffle and take up to 10 questions
    const shuffled = filtered.sort(() => Math.random() - 0.5).slice(0, 10);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setAnswered(false);
    setShowResult(false);
    setQuizComplete(false);
  };

  const handleAnswer = (answerIndex: number) => {
    if (answered) return;

    setSelectedAnswer(answerIndex);
    setAnswered(true);
    setShowResult(true);

    if (answerIndex === questions[currentIndex].correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIndex + 1 >= questions.length) {
      // Quiz complete
      setQuizComplete(true);

      // Save high score
      if (category) {
        const currentHigh = highScores[category] || 0;
        const percentage = Math.round((score / questions.length) * 100);
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

  // Category selection
  if (!category) {
    const categoryKeys = ['ALL', ...Object.values(Category)] as QuizCategorySelection[];
    
    return (
      <div className="w-full max-w-5xl mx-auto p-6 flex flex-col items-center">
        {/* Back to Menu button */}
        {onBack && (
          <div className="w-full mb-6">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-[#4b6f44] dark:hover:text-[#a3cf6d] font-medium"
            >
              <ArrowLeft size={20} /> Volver al Menú
            </button>
          </div>
        )}

        <h2 className="text-3xl font-bold text-[#4b6f44] dark:text-[#a3cf6d] mb-4">Quiz: Conocimiento General</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-center">
          ¡Pon a prueba tu conocimiento sobre la historia y cultura de México!
          <br />
          <span className="text-sm text-gray-400">
            {allQuestions.length} preguntas disponibles en {Object.keys(Category).length} categorías
          </span>
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {categoryKeys.map(cat => {
            const config = CATEGORY_CONFIG[cat];
            const highScore = highScores[cat];
            const questionCount = cat === 'ALL' 
              ? allQuestions.length 
              : allQuestions.filter(q => q.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => initializeQuiz(cat)}
                disabled={questionCount === 0}
                className={`flex flex-col items-center p-4 ${config.bgColor} dark:bg-[#16213e] rounded-2xl shadow-lg border-2 border-transparent dark:border-gray-700 hover:border-[#4b6f44] dark:hover:border-[#a3cf6d] hover:-translate-y-1 transition-all group disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">{config.emoji}</span>
                <h3 className="text-sm font-bold text-gray-800 dark:text-gray-100 mb-1 text-center line-clamp-2">{config.title}</h3>
                <span className="text-xs text-gray-500 dark:text-gray-400 mb-2">{questionCount} preguntas</span>
                {highScore !== undefined && (
                  <span className="flex items-center gap-1 text-[#4b6f44] dark:text-[#a3cf6d] font-bold text-xs">
                    <Medal size={12} /> {highScore}%
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Quiz complete
  if (quizComplete) {
    const percentage = Math.round((score / questions.length) * 100);
    const isHighScore = highScores[category] === percentage;

    return (
      <div className="w-full max-w-lg mx-auto p-6 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white dark:bg-[#16213e] rounded-3xl p-8 text-center shadow-2xl border-4 border-[#a3cf6d] w-full"
        >
          <Trophy size={64} className="mx-auto mb-4 text-yellow-500" />
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">¡Quiz Completado!</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Acertaste <span className="font-bold text-[#4b6f44] dark:text-[#a3cf6d]">{score}</span> de {questions.length}
          </p>
          <div className="text-4xl font-black text-[#4b6f44] dark:text-[#a3cf6d] mb-4">
            {percentage}%
          </div>
          {isHighScore && (
            <div className="flex items-center justify-center gap-2 text-yellow-600 dark:text-yellow-400 font-bold mb-4">
              <Medal size={20} /> ¡Nuevo Récord!
            </div>
          )}
          <div className="flex flex-col gap-3 mt-6">
            <button
              onClick={() => initializeQuiz(category)}
              className="flex items-center justify-center gap-2 bg-[#4b6f44] text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-[#3a5735] transition-colors"
            >
              <RefreshCcw size={20} /> Jugar de Nuevo
            </button>
            <button
              onClick={() => setCategory(null)}
              className="text-gray-500 dark:text-gray-400 font-medium hover:text-gray-800 dark:hover:text-gray-200"
            >
              Elegir Otra Categoría
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const config = CATEGORY_CONFIG[category];

  return (
    <div className="w-full max-w-2xl mx-auto p-4 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => setCategory(null)}
          className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-[#4b6f44] dark:hover:text-[#a3cf6d] font-medium"
        >
          <ArrowLeft size={20} /> Salir
        </button>
        <div className="text-center">
          <span className="text-sm font-bold text-[#4b6f44] dark:text-[#a3cf6d]">
            {config.emoji} {config.title}
          </span>
        </div>
        <div className="text-right">
          <span className="text-gray-600 dark:text-gray-400 font-medium text-sm">
            {currentIndex + 1} / {questions.length}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-6">
        <div
          className="bg-[#4b6f44] h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Score */}
      <div className="text-center mb-4">
        <span className="text-sm text-gray-500 dark:text-gray-400">Score: </span>
        <span className="font-bold text-[#4b6f44] dark:text-[#a3cf6d]">{score}</span>
      </div>

      {/* Question */}
      <motion.div
        key={currentQuestion.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className={`${config.bgColor} dark:bg-[#1e2d4a] rounded-2xl p-6 mb-6`}
      >
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 text-center">
          {currentQuestion.question}
        </h3>
      </motion.div>

      {/* Options */}
      <div className="flex flex-col gap-3">
        {currentQuestion.options.map((option, index) => {
          let buttonClass = "w-full p-4 rounded-xl border-2 text-left font-medium transition-all ";

          if (showResult) {
            if (index === currentQuestion.correctAnswer) {
              buttonClass += "bg-green-100 dark:bg-green-900/40 border-green-500 text-green-800 dark:text-green-200";
            } else if (index === selectedAnswer && index !== currentQuestion.correctAnswer) {
              buttonClass += "bg-red-100 dark:bg-red-900/40 border-red-500 text-red-800 dark:text-red-200";
            } else {
              buttonClass += "bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-400";
            }
          } else {
            buttonClass += "bg-white dark:bg-[#16213e] border-gray-200 dark:border-gray-600 hover:border-[#4b6f44] dark:hover:border-[#a3cf6d] hover:bg-gray-50 dark:hover:bg-[#1e2d4a] text-gray-800 dark:text-gray-100";
          }

          return (
            <motion.button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={answered}
              whileHover={!answered ? { scale: 1.02 } : {}}
              whileTap={!answered ? { scale: 0.98 } : {}}
              className={buttonClass}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {showResult && index === currentQuestion.correctAnswer && (
                  <CheckCircle size={20} className="text-green-600" />
                )}
                {showResult && index === selectedAnswer && index !== currentQuestion.correctAnswer && (
                  <XCircle size={20} className="text-red-600" />
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Next button */}
      {answered && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={nextQuestion}
          className="mt-6 w-full bg-[#4b6f44] text-white py-4 rounded-xl font-bold shadow-lg hover:bg-[#3a5735] transition-colors"
        >
          {currentIndex + 1 >= questions.length ? 'Ver Resultados' : 'Siguiente Pregunta'}
        </motion.button>
      )}

      {/* Show famous quote if available */}
      {showResult && currentQuestion.famousQuote && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800"
        >
          <p className="text-amber-800 dark:text-amber-200 text-sm italic">
            "{currentQuestion.famousQuote}"
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default QuizGame;
