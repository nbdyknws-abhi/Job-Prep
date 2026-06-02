import React, { useState } from 'react';
import { techHubData } from '../data/techHubQuestions';
import { Cpu, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';

export const TechInterviewHub: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(techHubData[0].id);
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);

  const selectedCategory = techHubData.find(c => c.id === activeCategory) || techHubData[0];

  return (
    <div className="space-y-6">
      {/* Title Header */}
      <div className="flex flex-col gap-1 border-b border-darkbg-border pb-5">
        <div className="flex items-center gap-2 text-cyber-purple">
          <Cpu className="h-5 w-5 animate-pulse" />
          <span className="text-xs font-black tracking-widest uppercase">Module 5</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase">
          Technical Interview Hub
        </h1>
        <p className="text-gray-400 text-sm">
          Prepare for core CS fundamentals. Review essential questions and structured model answers for Java, DBMS, SQL, Operating Systems, and Computer Networks.
        </p>
      </div>

      {/* Category Selection Tabs */}
      
      {/* Mobile Category Dropdown Selection */}
      <div className="lg:hidden w-full relative">
        <select
          value={activeCategory}
          onChange={e => {
            setActiveCategory(e.target.value);
            setExpandedTopic(null);
          }}
          className="w-full px-4 py-2.5 bg-darkbg-card text-sm text-gray-200 rounded-xl border border-darkbg-border focus:outline-none focus:border-cyber-purple transition-colors appearance-none font-bold cursor-pointer"
        >
          {techHubData.map(category => (
            <option key={category.id} value={category.id} className="bg-darkbg-card font-bold">
              Category: {category.name}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-3.5 pointer-events-none text-gray-500 text-xs">
          ▼
        </div>
      </div>

      {/* Desktop Category Tabs */}
      <div className="hidden lg:flex gap-2 pb-1 no-scrollbar">
        {techHubData.map(category => (
          <button
            key={category.id}
            onClick={() => {
              setActiveCategory(category.id);
              setExpandedTopic(null);
            }}
            className={`
              px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all border
              ${activeCategory === category.id
                ? 'bg-cyber-purple/15 border-cyber-purple text-cyber-purple shadow-cyber-purple/5'
                : 'bg-darkbg-card border-darkbg-border text-gray-500 hover:text-gray-300'
              }
            `}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Topics accordion */}
      <div className="space-y-4">
        {selectedCategory.topics.map(topic => {
          const isExpanded = expandedTopic === topic.id;
          return (
            <div 
              key={topic.id}
              className="rounded-2xl border border-darkbg-border bg-darkbg-card overflow-hidden transition-all"
            >
              {/* Header Accordion click */}
              <div 
                onClick={() => setExpandedTopic(isExpanded ? null : topic.id)}
                className="p-5 flex items-center justify-between cursor-pointer hover:bg-darkbg-hover transition-colors"
              >
                <div>
                  <h3 className="text-base font-black text-gray-200 uppercase tracking-wide">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 truncate max-w-xl">{topic.explanation}</p>
                </div>
                {isExpanded ? (
                  <ChevronUp className="h-5 w-5 text-cyber-purple" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </div>

              {/* Collapsed content body */}
              {isExpanded && (
                <div className="px-5 pb-6 pt-2 border-t border-darkbg-border space-y-6 bg-darkbg-hover/30">
                  {/* Subject explanation block */}
                  <div className="p-4 rounded-xl bg-darkbg/40 border border-darkbg-border">
                    <h4 className="text-xs font-black text-cyber-purple uppercase tracking-widest mb-1">Concept Summary</h4>
                    <p className="text-xs text-gray-400 leading-relaxed font-semibold">{topic.explanation}</p>
                  </div>

                  {/* Interviewer Questions */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-black text-white uppercase tracking-widest mb-2">Interview Q&As</h4>
                    
                    {topic.questions.map((q, idx) => (
                      <div key={idx} className="p-5 rounded-xl border border-darkbg-border bg-darkbg-card space-y-3">
                        <div className="flex gap-2">
                          <span className="text-cyber-purple font-black text-sm">Q.</span>
                          <h5 className="text-sm font-black text-gray-200 tracking-wide leading-relaxed">
                            {q.question}
                          </h5>
                        </div>

                        <div className="flex gap-2 p-3 bg-darkbg/50 rounded-lg border border-darkbg-border">
                          <span className="text-cyber-green font-black text-xs">A.</span>
                          <p className="text-xs text-gray-300 leading-relaxed font-semibold font-sans">
                            {q.answer}
                          </p>
                        </div>

                        {/* Follow up Questions box */}
                        {q.followUps.length > 0 && (
                          <div className="p-3 bg-cyber-purple/5 rounded-lg border border-cyber-purple/10 space-y-2">
                            <h6 className="text-[10px] font-black text-cyber-purple uppercase tracking-wider flex items-center gap-1.5">
                              <AlertCircle className="h-3.5 w-3.5" />
                              <span>Interviewer Follow-ups:</span>
                            </h6>
                            <ul className="list-disc pl-4 space-y-1 text-xs text-gray-400">
                              {q.followUps.map((fu, fIdx) => (
                                <li key={fIdx}>{fu}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
