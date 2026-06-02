import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { patternHubData } from '../data/patternHubData';
import { 
  Terminal, 
  HelpCircle, 
  AlertTriangle, 
  Flame, 
  Clock, 
  ChevronRight,
  BookOpen
} from 'lucide-react';

export const PatternHub: React.FC = () => {
  const [selectedTopicId, setSelectedTopicId] = useState(patternHubData[0].id);
  const activeTopic = patternHubData.find(t => t.id === selectedTopicId) || patternHubData[0];

  return (
    <div className="space-y-6">
      {/* Title Header */}
      <div className="flex flex-col gap-1 border-b border-darkbg-border pb-5">
        <div className="flex items-center gap-2 text-cyber-pink">
          <BookOpen className="h-5 w-5" />
          <span className="text-xs font-black tracking-widest uppercase">Module 1</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase">
          DSA Pattern Recognition Hub
        </h1>
        <p className="text-gray-400 text-sm max-w-2xl">
          Cracking coding tests starts with pattern recognition. Master these 15 structural patterns, learn how to spot them by identifying trigger words, and avoid common technical traps.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Topics Nav */}
        <div className="lg:col-span-4 space-y-2 lg:max-h-[70vh] lg:overflow-y-auto lg:pr-2">
          <h2 className="text-xs font-black text-gray-500 tracking-wider uppercase px-2 mb-3 hidden lg:block">DSA Topic Patterns</h2>
          
          {/* Mobile Dropdown Selection */}
          <div className="lg:hidden w-full relative">
            <select
              value={selectedTopicId}
              onChange={e => setSelectedTopicId(e.target.value)}
              className="w-full px-4 py-2.5 bg-darkbg-card text-sm text-gray-200 rounded-xl border border-darkbg-border focus:outline-none focus:border-cyber-pink transition-colors appearance-none font-bold cursor-pointer"
            >
              {patternHubData.map((topic, index) => (
                <option key={topic.id} value={topic.id} className="bg-darkbg-card font-bold">
                  {index + 1}. {topic.name} Pattern
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-3.5 pointer-events-none text-gray-500 text-xs">
              ▼
            </div>
          </div>

          {/* Desktop Topics List */}
          <div className="hidden lg:flex flex-col gap-2">
            {patternHubData.map((topic, index) => {
              const isSelected = topic.id === selectedTopicId;
              return (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopicId(topic.id)}
                  className={`
                    w-full flex items-center justify-between p-3.5 rounded-xl border transition-all duration-300 font-bold text-left
                    ${isSelected
                      ? 'bg-darkbg-card border-cyber-pink text-gray-100 shadow-cyber-pink'
                      : 'bg-darkbg-card/40 border-darkbg-border text-gray-400 hover:text-gray-200 hover:border-gray-700'
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <span className={`
                      text-xs px-2 py-0.5 rounded font-mono
                      ${isSelected ? 'bg-cyber-pink text-white' : 'bg-darkbg-border text-gray-500'}
                    `}>
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="text-sm tracking-wide">{topic.name}</span>
                  </div>
                  <ChevronRight className={`h-4 w-4 transition-transform ${isSelected ? 'text-cyber-pink translate-x-1' : 'text-gray-600'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Active Topic Details */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTopic.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* Main Banner */}
              <div className="p-6 rounded-2xl border border-darkbg-border bg-gradient-to-br from-darkbg-card to-darkbg-hover/80 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-cyber-pink/5 rounded-full blur-3xl pointer-events-none" />
                <h2 className="text-2xl font-black text-white tracking-wide mb-2 uppercase flex items-center gap-2">
                  <span className="text-cyber-pink">⚡</span> {activeTopic.name} Pattern
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed">{activeTopic.patternGuide}</p>
              </div>

              {/* Visual ASCII Diagram */}
              <div className="rounded-2xl border border-darkbg-border bg-darkbg-card overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-3 border-b border-darkbg-border bg-darkbg-hover">
                  <Terminal className="h-4 w-4 text-cyber-cyan" />
                  <span className="text-xs font-bold text-cyber-cyan tracking-wider uppercase">Visual Paradigm Diagram</span>
                </div>
                <div className="p-5 bg-[#08080c]">
                  <pre className="text-cyber-green text-[9px] min-[375px]:text-[10px] sm:text-xs font-mono whitespace-pre-wrap break-words leading-relaxed">
                    {activeTopic.visualExplanation.trim()}
                  </pre>
                </div>
              </div>

              {/* Interactive Sections Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Trigger Words & Hints */}
                <div className="space-y-6">
                  {/* Triggers */}
                  <div className="p-5 rounded-2xl border border-darkbg-border bg-darkbg-card/70 space-y-3">
                    <h3 className="text-sm font-black text-white flex items-center gap-2 uppercase tracking-wider">
                      <Flame className="h-4 w-4 text-cyber-pink" /> Trigger Keywords
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {activeTopic.triggerWords.map((word) => (
                        <span key={word} className="text-xs bg-cyber-pink/10 border border-cyber-pink/20 text-cyber-pink px-2.5 py-1 rounded-full font-bold">
                          {word}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Interview Hints */}
                  <div className="p-5 rounded-2xl border border-cyber-purple/20 bg-darkbg-card/70 space-y-3">
                    <h3 className="text-sm font-black text-white flex items-center gap-2 uppercase tracking-wider">
                      <HelpCircle className="h-4 w-4 text-cyber-purple" /> Interview Pro-Tips
                    </h3>
                    <ul className="space-y-2">
                      {activeTopic.interviewHints.map((hint, i) => (
                        <li key={i} className="text-xs text-gray-300 leading-relaxed flex gap-2">
                          <span className="text-cyber-purple font-black">•</span>
                          <span>{hint}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Traps & Complexities */}
                <div className="space-y-6">
                  {/* Common Traps */}
                  <div className="p-5 rounded-2xl border border-cyber-yellow/20 bg-darkbg-card/70 space-y-3">
                    <h3 className="text-sm font-black text-white flex items-center gap-2 uppercase tracking-wider">
                      <AlertTriangle className="h-4 w-4 text-cyber-yellow" /> Common Code Traps
                    </h3>
                    <ul className="space-y-2">
                      {activeTopic.commonTraps.map((trap, i) => (
                        <li key={i} className="text-xs text-gray-300 leading-relaxed flex gap-2">
                          <span className="text-cyber-yellow font-black">!</span>
                          <span>{trap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Complexity Matrix */}
                  <div className="p-5 rounded-2xl border border-darkbg-border bg-darkbg-card/70 space-y-3">
                    <h3 className="text-sm font-black text-white flex items-center gap-2 uppercase tracking-wider">
                      <Clock className="h-4 w-4 text-cyber-cyan" /> Complexity Sheet
                    </h3>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-2.5 bg-darkbg rounded-lg border border-darkbg-border">
                        <p className="text-gray-500 font-bold mb-0.5">Best Case</p>
                        <p className="font-mono text-gray-200">{activeTopic.complexityCheatsheet.best}</p>
                      </div>
                      <div className="p-2.5 bg-darkbg rounded-lg border border-darkbg-border">
                        <p className="text-gray-500 font-bold mb-0.5">Average Case</p>
                        <p className="font-mono text-gray-200">{activeTopic.complexityCheatsheet.average}</p>
                      </div>
                      <div className="p-2.5 bg-darkbg rounded-lg border border-darkbg-border">
                        <p className="text-gray-500 font-bold mb-0.5">Worst Case</p>
                        <p className="font-mono text-gray-200">{activeTopic.complexityCheatsheet.worst}</p>
                      </div>
                      <div className="p-2.5 bg-darkbg rounded-lg border border-darkbg-border">
                        <p className="text-gray-500 font-bold mb-0.5">Space Complexity</p>
                        <p className="font-mono text-gray-200">{activeTopic.complexityCheatsheet.space}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
