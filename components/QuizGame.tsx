import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, RefreshCcw, Trophy, CheckCircle, XCircle, Medal } from 'lucide-react';

// Quiz questions extracted from PDF context
interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  // CINE
  {
    id: 'q1',
    question: '¿Cuál es el máximo galardón del cine mexicano (el "Oscar" mexicano)?',
    options: ['Golden Eagle', 'Ariel', 'Azteca de Oro', 'La Diosa'],
    correctAnswer: 1,
    category: 'cine'
  },
  {
    id: 'q2',
    question: '¿Cuál fue la primera película sonora mexicana?',
    options: ['"Macario"', '"Así se quiere en Jalisco"', '"Santa"', '"María Candelaria"'],
    correctAnswer: 2,
    category: 'cine'
  },
  {
    id: 'q3',
    question: '¿Cuál fue la primera película mexicana a color?',
    options: ['"Santa"', '"Así se quiere en Jalisco"', '"Los Olvidados"', '"El Ángel Exterminador"'],
    correctAnswer: 1,
    category: 'cine'
  },
  {
    id: 'q4',
    question: '¿En qué año inició la Época de Oro del cine mexicano?',
    options: ['1925', '1935', '1945', '1955'],
    correctAnswer: 1,
    category: 'cine'
  },
  {
    id: 'q5',
    question: '¿En qué año inició la nueva época del cine mexicano?',
    options: ['1980', '1985', '1990', '2000'],
    correctAnswer: 2,
    category: 'cine'
  },
  // DEPORTES
  {
    id: 'q6',
    question: '¿En qué ciudad se realizaron los Juegos Olímpicos de 1968?',
    options: ['Guadalajara', 'Monterrey', 'Ciudad de México', 'Puebla'],
    correctAnswer: 2,
    category: 'deportes'
  },
  {
    id: 'q7',
    question: '¿En qué años se celebraron Copas Mundiales de fútbol en México?',
    options: ['1962 y 1978', '1970 y 1986', '1974 y 1990', '1966 y 1982'],
    correctAnswer: 1,
    category: 'deportes'
  },
  {
    id: 'q8',
    question: '¿Quién fue la primera mexicana en ganar oro olímpico?',
    options: ['Ana Gabriela Guevara', 'Soraya Jiménez', 'María del Rosario Espinoza', 'Paola Espinosa'],
    correctAnswer: 1,
    category: 'deportes'
  },
  {
    id: 'q9',
    question: '¿En qué deporte destacó México en Londres 2012?',
    options: ['Natación', 'Fútbol', 'Atletismo', 'Gimnasia'],
    correctAnswer: 1,
    category: 'deportes'
  },
  // PREMIOS
  {
    id: 'q10',
    question: '¿Quién ganó el Premio Nobel de la Paz de México?',
    options: ['Octavio Paz', 'Alfonso García Robles', 'Mario Molina', 'Carlos Fuentes'],
    correctAnswer: 1,
    category: 'premios'
  },
  {
    id: 'q11',
    question: '¿Quién inventó la televisión a color?',
    options: ['Luis Miramontes', 'Guillermo González Camarena', 'Mario Molina', 'Rodolfo Neri Vela'],
    correctAnswer: 1,
    category: 'premios'
  },
  {
    id: 'q12',
    question: '¿Qué premio es conocido como el "Nobel" de la arquitectura?',
    options: ['Premio Bellas Artes', 'Premio Pritzker', 'Premio Cervantes', 'Premio Amparo Dávila'],
    correctAnswer: 1,
    category: 'premios'
  },
  {
    id: 'q13',
    question: '¿El Premio Amparo Dávila se otorga en qué categoría?',
    options: ['Arquitectura', 'Cine', 'Literatura/Cuento', 'Música'],
    correctAnswer: 2,
    category: 'premios'
  },
  // CULTURA POPULAR
  {
    id: 'q14',
    question: '¿Cuál es la frase famosa de El Chapulín Colorado?',
    options: ['"Síganme los buenos"', '"No contaban con mi astucia"', '"Se aprovechan de mi nobleza"', 'Todas las anteriores'],
    correctAnswer: 3,
    category: 'cultura'
  },
  {
    id: 'q15',
    question: '¿Quién compuso "El ratón vaquero"?',
    options: ['Juan Gabriel', 'Chespirito', 'Cri Cri', 'José José'],
    correctAnswer: 2,
    category: 'cultura'
  },
  {
    id: 'q16',
    question: '¿Cuál era el nombre real de Cantinflas?',
    options: ['Mario Moreno Reyes', 'Roberto Gómez Bolaños', 'Germán Valdés', 'Tin Tan'],
    correctAnswer: 0,
    category: 'cultura'
  },
  // LITERATURA
  {
    id: 'q17',
    question: '¿Quién es conocida como "La décima musa"?',
    options: ['Elena Poniatowska', 'Rosario Castellanos', 'Sor Juana Inés de la Cruz', 'Laura Esquivel'],
    correctAnswer: 2,
    category: 'literatura'
  },
  {
    id: 'q18',
    question: '¿Quién escribió "La noche de Tlatelolco"?',
    options: ['José Emilio Pacheco', 'Elena Poniatowska', 'Carlos Fuentes', 'Octavio Paz'],
    correctAnswer: 1,
    category: 'literatura'
  },
];

type QuizCategory = 'ALL' | 'cine' | 'deportes' | 'premios' | 'cultura' | 'literatura';

const CATEGORY_CONFIG: Record<QuizCategory, { title: string; emoji: string; bgColor: string }> = {
  ALL: { title: 'Todas las Categorías', emoji: '🎯', bgColor: 'bg-gradient-to-r from-purple-100 to-pink-100' },
  cine: { title: 'Cine Mexicano', emoji: '🎬', bgColor: 'bg-red-100' },
  deportes: { title: 'Deportes', emoji: '⚽', bgColor: 'bg-green-100' },
  premios: { title: 'Premios y Ciencia', emoji: '🏆', bgColor: 'bg-yellow-100' },
  cultura: { title: 'Cultura Popular', emoji: '🎤', bgColor: 'bg-pink-100' },
  literatura: { title: 'Literatura', emoji: '📚', bgColor: 'bg-indigo-100' },
};

interface QuizGameProps {
  onBack?: () => void;
}

const QuizGame: React.FC<QuizGameProps> = ({ onBack }) => {
  const [category, setCategory] = useState<QuizCategory | null>(null);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [highScores, setHighScores] = useState<Record<string, number>>({});

  useEffect(() => {
    // Load high scores
    const saved = localStorage.getItem('meso_app_quiz_high_scores');
    if (saved) {
      setHighScores(JSON.parse(saved));
    }
  }, []);

  const initializeQuiz = (cat: QuizCategory) => {
    setCategory(cat);

    let filtered = cat === 'ALL'
      ? [...QUIZ_QUESTIONS]
      : QUIZ_QUESTIONS.filter(q => q.category === cat);

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
          localStorage.setItem('meso_app_quiz_high_scores', JSON.stringify(newHighScores));
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
    return (
      <div className="w-full max-w-4xl mx-auto p-6 flex flex-col items-center">
        {/* Back to Menu button */}
        {onBack && (
          <div className="w-full mb-6">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-500 hover:text-[#4b6f44] font-medium"
            >
              <ArrowLeft size={20} /> Back to Menu
            </button>
          </div>
        )}

        <h2 className="text-3xl font-bold text-[#4b6f44] mb-8">Quiz: Datos Históricos</h2>
        <p className="text-gray-600 mb-8 text-center">Test your knowledge of Mexican history, culture, and famous figures!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {(Object.keys(CATEGORY_CONFIG) as QuizCategory[]).map(cat => {
            const config = CATEGORY_CONFIG[cat];
            const highScore = highScores[cat];

            return (
              <button
                key={cat}
                onClick={() => initializeQuiz(cat)}
                className={`flex flex-col items-center p-6 ${config.bgColor} rounded-2xl shadow-lg border-2 border-transparent hover:border-[#4b6f44] hover:-translate-y-1 transition-all group`}
              >
                <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">{config.emoji}</span>
                <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">{config.title}</h3>
                {highScore !== undefined && (
                  <span className="flex items-center gap-1 text-[#4b6f44] font-bold text-sm">
                    <Medal size={14} /> Best: {highScore}%
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
          className="bg-white rounded-3xl p-8 text-center shadow-2xl border-4 border-[#a3cf6d] w-full"
        >
          <Trophy size={64} className="mx-auto mb-4 text-yellow-500" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Quiz Complete!</h3>
          <p className="text-gray-600 mb-4">
            You scored <span className="font-bold text-[#4b6f44]">{score}</span> out of {questions.length}
          </p>
          <div className="text-4xl font-black text-[#4b6f44] mb-4">
            {percentage}%
          </div>
          {isHighScore && (
            <div className="flex items-center justify-center gap-2 text-yellow-600 font-bold mb-4">
              <Medal size={20} /> New High Score!
            </div>
          )}
          <div className="flex flex-col gap-3 mt-6">
            <button
              onClick={() => initializeQuiz(category)}
              className="flex items-center justify-center gap-2 bg-[#4b6f44] text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-[#3a5735] transition-colors"
            >
              <RefreshCcw size={20} /> Play Again
            </button>
            <button
              onClick={() => setCategory(null)}
              className="text-gray-500 font-medium hover:text-gray-800"
            >
              Choose Different Category
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
          className="flex items-center gap-2 text-gray-500 hover:text-[#4b6f44] font-medium"
        >
          <ArrowLeft size={20} /> Exit Quiz
        </button>
        <div className="text-center">
          <span className="text-lg font-bold text-[#4b6f44]">
            {config.emoji} {config.title}
          </span>
        </div>
        <div className="text-right">
          <span className="text-gray-600 font-medium">
            {currentIndex + 1} / {questions.length}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div
          className="bg-[#4b6f44] h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Score */}
      <div className="text-center mb-4">
        <span className="text-sm text-gray-500">Score: </span>
        <span className="font-bold text-[#4b6f44]">{score}</span>
      </div>

      {/* Question */}
      <motion.div
        key={currentQuestion.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className={`${config.bgColor} rounded-2xl p-6 mb-6`}
      >
        <h3 className="text-xl font-bold text-gray-800 text-center">
          {currentQuestion.question}
        </h3>
      </motion.div>

      {/* Options */}
      <div className="flex flex-col gap-3">
        {currentQuestion.options.map((option, index) => {
          let buttonClass = "w-full p-4 rounded-xl border-2 text-left font-medium transition-all ";

          if (showResult) {
            if (index === currentQuestion.correctAnswer) {
              buttonClass += "bg-green-100 border-green-500 text-green-800";
            } else if (index === selectedAnswer && index !== currentQuestion.correctAnswer) {
              buttonClass += "bg-red-100 border-red-500 text-red-800";
            } else {
              buttonClass += "bg-gray-100 border-gray-200 text-gray-500";
            }
          } else {
            buttonClass += "bg-white border-gray-200 hover:border-[#4b6f44] hover:bg-gray-50";
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
          {currentIndex + 1 >= questions.length ? 'See Results' : 'Next Question'}
        </motion.button>
      )}
    </div>
  );
};

export default QuizGame;
