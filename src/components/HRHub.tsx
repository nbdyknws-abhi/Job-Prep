import React, { useState } from 'react';
import { hrQuestions } from '../data/hrQuestions';
import { UserCheck, Search, ShieldAlert, Award, Compass, Heart } from 'lucide-react';

export const HRHub: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedQId, setSelectedQId] = useState(hrQuestions[0].id);
  const [mobileView, setMobileView] = useState<'list' | 'detail'>('list');

  const filteredQuestions = hrQuestions.filter(q => 
    q.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedQuestion = hrQuestions.find(q => q.id === selectedQId) || hrQuestions[0];

  return (
    <div className="space-y-6">
      {/* Title Header */}
      <div className="flex flex-col gap-1 border-b border-darkbg-border pb-5">
        <div className="flex items-center gap-2 text-cyber-pink">
          <UserCheck className="h-5 w-5 animate-pulse" />
          <span className="text-xs font-black tracking-widest uppercase">Module 6</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase">
          HR Interview Mastery Hub
        </h1>
        <p className="text-gray-400 text-sm">
          Review 50 common behavioral questions. Contrast Weak, Average, Strong, and FAANG-level answers to learn the art of behavioral storytelling.
        </p>
      </div>

      {/* Main split grid */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Search & Questions List */}
        <div className={`lg:col-span-4 space-y-4 ${mobileView === 'list' ? 'block' : 'hidden lg:block'}`}>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search HR questions..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-darkbg text-sm text-gray-200 rounded-xl border border-darkbg-border focus:outline-none focus:border-cyber-pink transition-colors"
            />
          </div>

          <div className="space-y-2 lg:max-h-[60vh] lg:overflow-y-auto pr-1">
            {filteredQuestions.map((q, idx) => {
              const isSelected = selectedQId === q.id;
              return (
                <div
                  key={q.id}
                  onClick={() => {
                    setSelectedQId(q.id);
                    setMobileView('detail');
                  }}
                  className={`
                    p-4 rounded-xl border cursor-pointer text-left transition-all duration-300 group
                    ${isSelected
                      ? 'bg-darkbg-card border-cyber-pink text-gray-100 shadow-cyber-pink'
                      : 'bg-darkbg-card/40 border-darkbg-border text-gray-400 hover:text-gray-200 hover:border-gray-700'
                    }
                  `}
                >
                  <div className="flex gap-2">
                    <span className={`text-[10px] font-mono font-black ${isSelected ? 'text-cyber-pink' : 'text-gray-500'}`}>
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                    <h4 className="text-xs font-bold leading-relaxed tracking-wide truncate max-w-[250px]">
                      {q.question}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Answer Comparison Dashboard */}
        <div className={`lg:col-span-8 space-y-6 ${mobileView === 'detail' ? 'block' : 'hidden lg:block'}`}>
          {selectedQuestion ? (
            <div className="space-y-6">
              {/* Mobile Back Button */}
              <button
                onClick={() => setMobileView('list')}
                className="lg:hidden flex items-center gap-2 text-xs font-bold text-cyber-pink mb-2 px-3 py-1.5 bg-darkbg-hover rounded-xl border border-darkbg-border hover:text-cyber-pink transition-colors"
              >
                <span>← Back to Questions List</span>
              </button>

              {/* Question Card */}
              <div className="p-4 sm:p-6 rounded-2xl border border-darkbg-border bg-darkbg-card">
                <span className="text-[10px] font-black text-cyber-pink uppercase tracking-widest block mb-1">HR QUESTION</span>
                <h2 className="text-xl font-black text-white uppercase tracking-wide leading-relaxed">
                  {selectedQuestion.question}
                </h2>
              </div>

              {/* Tiers Comparison Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* 1. Weak Answer (Red) */}
                <div className="p-5 rounded-2xl border border-red-500/20 bg-darkbg-card/50 space-y-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-2 bg-red-500/10 text-red-500 rounded-bl-xl text-[10px] font-black uppercase tracking-wider">
                    RED FLAG
                  </div>
                  <h3 className="text-xs font-black text-red-500 uppercase tracking-widest flex items-center gap-1.5">
                    <ShieldAlert className="h-4 w-4" />
                    <span>Weak Answer</span>
                  </h3>
                  <p className="text-xs text-gray-400 font-medium leading-relaxed italic p-3 bg-darkbg/40 rounded-xl border border-darkbg-border">
                    "{selectedQuestion.weak}"
                  </p>
                  <p className="text-[10px] text-red-400/80 font-bold">
                    ⚠️ Mistake: Blaming others, complaining, lack of detail, or missing structure.
                  </p>
                </div>

                {/* 2. Average Answer (Yellow) */}
                <div className="p-5 rounded-2xl border border-cyber-yellow/20 bg-darkbg-card/50 space-y-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-2 bg-cyber-yellow/10 text-cyber-yellow rounded-bl-xl text-[10px] font-black uppercase tracking-wider">
                    GENERIC
                  </div>
                  <h3 className="text-xs font-black text-cyber-yellow uppercase tracking-widest flex items-center gap-1.5">
                    <Compass className="h-4 w-4" />
                    <span>Average Answer</span>
                  </h3>
                  <p className="text-xs text-gray-400 font-medium leading-relaxed italic p-3 bg-darkbg/40 rounded-xl border border-darkbg-border">
                    "{selectedQuestion.average}"
                  </p>
                  <p className="text-[10px] text-cyber-yellow/80 font-bold">
                    💡 Verdict: Honest but boring. Standard academic boilerplate response.
                  </p>
                </div>

                {/* 3. Strong Answer (Green) */}
                <div className="p-5 rounded-2xl border border-cyber-green/20 bg-darkbg-card/50 space-y-3 relative overflow-hidden shadow-cyber-green/2">
                  <div className="absolute top-0 right-0 p-2 bg-cyber-green/10 text-cyber-green rounded-bl-xl text-[10px] font-black uppercase tracking-wider">
                    STAR MODEL
                  </div>
                  <h3 className="text-xs font-black text-cyber-green uppercase tracking-widest flex items-center gap-1.5">
                    <Heart className="h-4 w-4" />
                    <span>Strong Answer</span>
                  </h3>
                  <p className="text-xs text-gray-300 font-medium leading-relaxed p-3 bg-darkbg/40 rounded-xl border border-darkbg-border">
                    "{selectedQuestion.strong}"
                  </p>
                  <p className="text-[10px] text-cyber-green/80 font-bold">
                    ✓ Strength: Follows Situation-Task-Action-Result format with quantifiable achievements.
                  </p>
                </div>

                {/* 4. FAANG-Level Answer (Cyan/Purple) */}
                <div className="p-5 rounded-2xl border border-cyber-cyan/30 bg-darkbg-card/50 space-y-3 relative overflow-hidden shadow-cyber-cyan/2">
                  <div className="absolute top-0 right-0 p-2 bg-cyber-cyan/10 text-cyber-cyan rounded-bl-xl text-[10px] font-black uppercase tracking-wider">
                    IMPACT ARCHITECT
                  </div>
                  <h3 className="text-xs font-black text-cyber-cyan uppercase tracking-widest flex items-center gap-1.5">
                    <Award className="h-4 w-4" />
                    <span>FAANG-Level Answer</span>
                  </h3>
                  <p className="text-xs text-gray-200 font-semibold leading-relaxed p-3 bg-darkbg/40 rounded-xl border border-darkbg-border shadow-inner">
                    "{selectedQuestion.faang}"
                  </p>
                  <p className="text-[10px] text-cyber-cyan/80 font-bold">
                    ✨ Sparkle: Shows high-level technical trade-off reasoning, ownership, and systems alignment.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-24 border border-dashed border-darkbg-border rounded-3xl text-gray-500 font-bold text-sm">
              Select an HR question to compare answers.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
