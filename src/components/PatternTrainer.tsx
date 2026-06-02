import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { trainerQuestions } from '../data/trainerQuestions';
import { Sparkles, Trophy, ArrowRight, HelpCircle, Check, X, RotateCcw } from 'lucide-react';

export const PatternTrainer: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const activeQuestion = trainerQuestions[currentIdx];

  const handleAnswer = (option: string) => {
    if (selectedAnswer) return; // Prevent double answers
    setSelectedAnswer(option);
    if (option === activeQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    if (currentIdx < trainerQuestions.length - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Module Title */}
      <div className="flex flex-col gap-1 border-b border-darkbg-border pb-5">
        <div className="flex items-center gap-2 text-cyber-yellow">
          <Sparkles className="h-5 w-5 animate-pulse" />
          <span className="text-xs font-black tracking-widest uppercase">Module 3</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase">
          Pattern Detection Trainer
        </h1>
        <p className="text-gray-400 text-sm">
          Train your algorithmic intuition. Analyze the coding prompts below and identify their correct structural patterns.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {quizFinished ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="p-4 sm:p-8 rounded-3xl border border-cyber-yellow/30 bg-darkbg-card text-center space-y-6 shadow-cyber-yellow/5"
          >
            <div className="mx-auto bg-cyber-yellow/10 border border-cyber-yellow/20 p-4 rounded-full w-20 h-20 flex items-center justify-center">
              <Trophy className="text-cyber-yellow h-10 w-10 animate-bounce" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-black text-white uppercase tracking-wide">Trainer Session Completed!</h2>
              <p className="text-gray-400 text-sm">You successfully analyzed the coding prompts.</p>
            </div>

            <div className="p-6 bg-darkbg/40 rounded-2xl border border-darkbg-border max-w-xs mx-auto">
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Your Accuracy</p>
              <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyber-yellow to-cyber-pink">
                {Math.round((score / trainerQuestions.length) * 100)}%
              </p>
              <p className="text-xs text-gray-400 mt-2 font-semibold">
                Correct: {score} / {trainerQuestions.length} Questions
              </p>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyber-yellow to-cyber-pink text-darkbg font-black text-sm uppercase tracking-wider flex items-center gap-2 mx-auto hover:opacity-90 active:scale-95 transition-all"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Train Again</span>
            </button>
          </motion.div>
        ) : (
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            {/* Progress indicator */}
            <div className="flex items-center justify-between text-xs font-bold text-gray-500">
              <span>QUESTION {currentIdx + 1} OF {trainerQuestions.length}</span>
              <span className="text-cyber-yellow">SCORE: {score}</span>
            </div>

            {/* Question Card */}
            <div className="p-6 rounded-2xl border border-darkbg-border bg-darkbg-card space-y-4">
              <div className="flex items-center gap-2 text-cyber-yellow">
                <HelpCircle className="h-5 w-5" />
                <span className="text-xs font-black tracking-widest uppercase">Coding Prompt</span>
              </div>
              <p className="text-base text-gray-100 font-bold leading-relaxed tracking-wide font-sans p-4 bg-darkbg/40 rounded-xl border border-darkbg-border">
                "{activeQuestion.question}"
              </p>
            </div>

            {/* Options grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {activeQuestion.options.map(option => {
                const isSelected = selectedAnswer === option;
                const isCorrect = option === activeQuestion.correctAnswer;
                const isIncorrect = isSelected && !isCorrect;
                
                let buttonStyle = 'border-darkbg-border bg-darkbg-card/40 text-gray-400 hover:text-gray-200 hover:border-gray-700';
                if (selectedAnswer) {
                  if (isCorrect) {
                    buttonStyle = 'bg-cyber-green/10 border-cyber-green text-cyber-green shadow-cyber-green/10';
                  } else if (isIncorrect) {
                    buttonStyle = 'bg-cyber-pink/10 border-cyber-pink text-cyber-pink shadow-cyber-pink/10';
                  } else {
                    buttonStyle = 'border-darkbg-border bg-darkbg-card/20 text-gray-600 opacity-60';
                  }
                }

                return (
                  <button
                    key={option}
                    disabled={!!selectedAnswer}
                    onClick={() => handleAnswer(option)}
                    className={`
                      p-4 rounded-xl border text-sm font-black tracking-wide text-left flex items-center justify-between transition-all duration-300
                      ${buttonStyle}
                    `}
                  >
                    <span>{option}</span>
                    {selectedAnswer && isCorrect && <Check className="h-4 w-4 text-cyber-green" />}
                    {selectedAnswer && isIncorrect && <X className="h-4 w-4 text-cyber-pink" />}
                  </button>
                );
              })}
            </div>

            {/* Answer Feedback and Reasonings */}
            {selectedAnswer && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`
                  p-5 rounded-2xl border space-y-2
                  ${selectedAnswer === activeQuestion.correctAnswer
                    ? 'bg-cyber-green/5 border-cyber-green/20'
                    : 'bg-cyber-pink/5 border-cyber-pink/20'
                  }
                `}
              >
                <div className="flex items-center gap-2 font-black uppercase text-xs tracking-wider">
                  {selectedAnswer === activeQuestion.correctAnswer ? (
                    <span className="text-cyber-green">✓ Correct Identification!</span>
                  ) : (
                    <span className="text-cyber-pink">✗ Incorrect Identification</span>
                  )}
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400">Correct Pattern: {activeQuestion.correctAnswer}</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                  {activeQuestion.explanation}
                </p>

                {/* Continue button */}
                <div className="flex justify-end pt-3">
                  <button
                    onClick={handleNext}
                    className="px-5 py-2.5 rounded-lg bg-white text-darkbg font-black text-xs uppercase tracking-wider flex items-center gap-1.5 hover:bg-gray-200 transition-colors"
                  >
                    <span>Next Question</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
