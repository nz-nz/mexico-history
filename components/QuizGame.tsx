import React, { useState, useEffect } from 'react';
import { QUIZ_QUESTIONS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Award, Trophy } from 'lucide-react';

const QuizGame: React.FC = () => {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [gameFinished, setGameFinished] = useState(false);

  // Load high score on mount
  useEffect(() => {
    const savedScore = localStorage.getItem('meso_app_quiz_highscore');
    if (savedScore) {
      setHighScore(parseInt(savedScore, 10));
    }
  }, []);

  // Update high score when game finishes
  useEffect(() => {
    if (gameFinished) {
      if (score > highScore) {
        setHighScore(score);
        localStorage.setItem('meso_app_quiz_highscore', score.toString());
      }
    }
  }, [gameFinished, score, highScore]);

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIdx];

  const handleOptionClick = (option: string) => {
    if (selectedOption) return; // Prevent multiple clicks

    const correct = option === currentQuestion.correctAnswer;
    setSelectedOption(option);
    setIsCorrect(correct);
    if (correct) setScore(s => s + 1);

    setTimeout(() => {
      setShowResult(true);
    }, 500);
  };

  const nextQuestion = () => {
    setShowResult(false);
    setSelectedOption(null);
    setIsCorrect(null);
    
    if (currentQuestionIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
    } else {
      setGameFinished(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestionIdx(0);
    setGameFinished(false);
    setShowResult(false);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  if (gameFinished) {
    const isNewRecord = score > highScore && highScore !== score; // Logic handled in effect, but visually useful

    return (
      <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-xl mt-10">
        <Award size={64} className="text-[#a3cf6d] mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Quiz Completed!</h2>
        <p className="text-xl text-gray-600 mb-2">You scored {score} out of {QUIZ_QUESTIONS.length}</p>
        
        {score >= highScore && score > 0 && (
           <div className="flex items-center gap-2 text-orange-500 font-bold mb-6 animate-pulse">
             <Trophy size={20} /> New Personal Best!
           </div>
        )}
        
        <button 
          onClick={restartGame}
          className="bg-[#4b6f44] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#3a5735] transition-colors"
        >
          Play Again
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl shadow-sm">
        <div className="flex flex-col">
            <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">High Score</span>
            <span className="text-[#4b6f44] font-bold text-lg flex items-center gap-1">
                <Trophy size={16} /> {highScore} / {QUIZ_QUESTIONS.length}
            </span>
        </div>
        <div className="flex flex-col items-end">
            <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Current Score</span>
            <span className="bg-[#e2f0d9] text-[#4b6f44] px-3 py-1 rounded-full font-bold">
                {score}
            </span>
        </div>
      </div>

      <div className="mb-2 text-center text-sm text-gray-400 font-medium uppercase tracking-widest">
        Question {currentQuestionIdx + 1} of {QUIZ_QUESTIONS.length}
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6 min-h-[200px] flex items-center justify-center border-b-4 border-[#e2f0d9]">
        <h3 className="text-xl md:text-2xl font-medium text-center text-gray-800">{currentQuestion.question}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentQuestion.options.map((option, idx) => {
          let bgClass = "bg-white border-2 border-transparent hover:border-[#a3cf6d]";
          if (selectedOption === option) {
             bgClass = isCorrect ? "bg-green-100 border-green-500" : "bg-red-100 border-red-500";
          }
          // Highlight correct answer if wrong was selected
          if (selectedOption && option === currentQuestion.correctAnswer && !isCorrect) {
             bgClass = "bg-green-100 border-green-500";
          }

          return (
            <button
              key={idx}
              onClick={() => handleOptionClick(option)}
              disabled={selectedOption !== null}
              className={`p-4 rounded-xl shadow-sm text-left transition-all font-medium text-gray-700 ${bgClass}`}
            >
              {option}
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {showResult && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 p-4 bg-[#f8fafc] rounded-xl border border-gray-200"
          >
            <div className="flex items-start gap-3">
              {isCorrect ? <CheckCircle className="text-green-500 shrink-0 mt-1" /> : <XCircle className="text-red-500 shrink-0 mt-1" />}
              <div>
                <h4 className="font-bold text-gray-800">{isCorrect ? 'Correct!' : 'Incorrect'}</h4>
                <p className="text-gray-600 mt-1 text-sm">{currentQuestion.explanation}</p>
              </div>
            </div>
            <button 
              onClick={nextQuestion}
              className="mt-4 w-full bg-[#4b6f44] text-white py-2 rounded-lg font-semibold hover:bg-[#3a5735]"
            >
              {currentQuestionIdx === QUIZ_QUESTIONS.length - 1 ? 'Finish' : 'Next Question'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuizGame;