import React, { useState } from 'react';
import { vivaProjectsData } from '../data/vivaQuestions';
import { Award, AlertTriangle, ChevronRight, HelpCircle, CheckCircle } from 'lucide-react';

export const VivaHub: React.FC = () => {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [expandedQIdx, setExpandedQIdx] = useState<number | null>(null);

  const activeProject = vivaProjectsData[activeProjectIdx] || vivaProjectsData[0];

  return (
    <div className="space-y-6">
      {/* Title Header */}
      <div className="flex flex-col gap-1 border-b border-darkbg-border pb-5">
        <div className="flex items-center gap-2 text-cyber-yellow">
          <Award className="h-5 w-5 animate-pulse" />
          <span className="text-xs font-black tracking-widest uppercase">Module 7</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase">
          Project Viva Hub
        </h1>
        <p className="text-gray-400 text-sm">
          Prepare for your project vivas and technical defenses. Learn to defend your architecture and answer tricky questions regarding your implementation choices.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Projects Navigation */}
        <div className="lg:col-span-4 space-y-2">
          <h2 className="text-xs font-black text-gray-500 tracking-wider uppercase px-2 mb-3 hidden lg:block">Portfolio Projects</h2>
          
          {/* Mobile Dropdown Navigation */}
          <div className="lg:hidden w-full relative">
            <select
              value={activeProjectIdx}
              onChange={e => {
                setActiveProjectIdx(Number(e.target.value));
                setExpandedQIdx(null);
              }}
              className="w-full px-4 py-2.5 bg-darkbg-card text-sm text-gray-200 rounded-xl border border-darkbg-border focus:outline-none focus:border-cyber-yellow transition-colors appearance-none font-bold cursor-pointer"
            >
              {vivaProjectsData.map((project, index) => (
                <option key={project.id} value={index} className="bg-darkbg-card font-bold">
                  Project: {project.title}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-3.5 pointer-events-none text-gray-500 text-xs">
              ▼
            </div>
          </div>

          {/* Desktop Projects Navigation */}
          <div className="hidden lg:flex flex-col gap-2">
            {vivaProjectsData.map((project, index) => {
              const isSelected = index === activeProjectIdx;
              return (
                <button
                  key={project.id}
                  onClick={() => {
                    setActiveProjectIdx(index);
                    setExpandedQIdx(null);
                  }}
                  className={`
                    w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 font-bold text-left
                    ${isSelected
                      ? 'bg-darkbg-card border-cyber-yellow text-gray-100 shadow-cyber-yellow'
                      : 'bg-darkbg-card/40 border-darkbg-border text-gray-400 hover:text-gray-200 hover:border-gray-700'
                    }
                  `}
                >
                  <span className="text-sm tracking-wide">{project.title}</span>
                  <ChevronRight className={`h-4 w-4 transition-transform ${isSelected ? 'text-cyber-yellow translate-x-1' : 'text-gray-600'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Viva Q&As for Active Project */}
        <div className="lg:col-span-8 space-y-4">
          <div className="p-6 rounded-2xl border border-darkbg-border bg-gradient-to-br from-darkbg-card to-darkbg-hover/80">
            <span className="text-[10px] font-black text-cyber-yellow uppercase tracking-widest block mb-1">Defense Guide</span>
            <h2 className="text-xl font-black text-white uppercase tracking-wide">
              {activeProject.title} Viva
            </h2>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">
              Review standard examiner queries for this project type and master the technical details required to justify your design decisions.
            </p>
          </div>

          <div className="space-y-4">
            {activeProject.questions.map((q, idx) => {
              const isExpanded = expandedQIdx === idx;
              return (
                <div 
                  key={idx} 
                  className="rounded-2xl border border-darkbg-border bg-darkbg-card overflow-hidden"
                >
                  {/* Header click */}
                  <div
                    onClick={() => setExpandedQIdx(isExpanded ? null : idx)}
                    className="p-5 flex items-start justify-between gap-4 cursor-pointer hover:bg-darkbg-hover transition-colors"
                  >
                    <div className="flex gap-2.5">
                      <HelpCircle className="h-5 w-5 text-cyber-yellow flex-shrink-0 mt-0.5" />
                      <h3 className="text-sm font-black text-gray-200 tracking-wide leading-relaxed">
                        {q.question}
                      </h3>
                    </div>
                    <span className="text-xs font-black text-cyber-yellow uppercase tracking-widest mt-1 flex-shrink-0">
                      {isExpanded ? 'Collapse' : 'Review'}
                    </span>
                  </div>

                  {/* Body Content */}
                  {isExpanded && (
                    <div className="px-5 pb-6 pt-2 border-t border-darkbg-border space-y-4 bg-darkbg-hover/10">
                      {/* Perfect response */}
                      <div className="p-4 rounded-xl border border-cyber-green/20 bg-cyber-green/5 space-y-1.5">
                        <h4 className="text-[10px] font-black text-cyber-green uppercase tracking-widest flex items-center gap-1.5">
                          <CheckCircle className="h-3.5 w-3.5" />
                          <span>Strong Model Answer</span>
                        </h4>
                        <p className="text-xs text-gray-300 leading-relaxed font-sans font-semibold">
                          {q.answer}
                        </p>
                      </div>

                      {/* Follow ups and traps grid */}
                      <div className="grid md:grid-cols-2 gap-4">
                        {/* Follow ups */}
                        <div className="p-4 rounded-xl border border-darkbg-border bg-darkbg/40 space-y-2">
                          <h5 className="text-[10px] font-black text-cyber-purple uppercase tracking-widest">
                            Follow-Up Inquiries:
                          </h5>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-gray-400 leading-relaxed">
                            {q.followUps.map((fu, fIdx) => (
                              <li key={fIdx}>{fu}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Red Flags */}
                        <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5 space-y-2">
                          <h5 className="text-[10px] font-black text-red-500 uppercase tracking-widest flex items-center gap-1">
                            <AlertTriangle className="h-3.5 w-3.5" />
                            <span>Examiner Red Flags:</span>
                          </h5>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-red-400/80 leading-relaxed font-semibold">
                            {q.redFlags.map((rf, rIdx) => (
                              <li key={rIdx}>{rf}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
