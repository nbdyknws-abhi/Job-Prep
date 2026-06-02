import React, { useState, useEffect } from 'react';
import type { Question, Difficulty } from '../types';
import { 
  Search, 
  Bookmark, 
  CheckCircle, 
  ExternalLink, 
  HelpCircle, 
  Cpu, 
  AlertTriangle,
  Code2,
  Check
} from 'lucide-react';

interface QuestionBankProps {
  bookmarks: string[];
  toggleBookmark: (id: string) => void;
  solved: string[];
  toggleSolved: (id: string) => void;
}

const topics = [
  { id: 'arrays', name: 'Arrays' },
  { id: 'hashmap', name: 'HashMap' },
  { id: 'sliding_window', name: 'Sliding Window' },
  { id: 'two_pointers', name: 'Two Pointers' },
  { id: 'binary_search', name: 'Binary Search' },
  { id: 'linked_list', name: 'Linked List' },
  { id: 'stack', name: 'Stack' },
  { id: 'queue', name: 'Queue' },
  { id: 'heap', name: 'Heap' },
  { id: 'trees', name: 'Trees' },
  { id: 'graphs', name: 'Graphs' },
  { id: 'dp', name: 'Dynamic Programming' },
  { id: 'greedy', name: 'Greedy' },
  { id: 'recursion', name: 'Recursion' },
  { id: 'backtracking', name: 'Backtracking' },
];

export const QuestionBank: React.FC<QuestionBankProps> = ({
  bookmarks,
  toggleBookmark,
  solved,
  toggleSolved,
}) => {
  const [activeTopic, setActiveTopic] = useState('arrays');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  
  // Search and Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'All'>('All');
  const [showOnlyBookmarks, setShowOnlyBookmarks] = useState(false);

  // Code Language Tab State
  const [activeLanguage, setActiveLanguage] = useState<'python' | 'cpp'>('python');

  // Solution Detail Tabs State
  const [activeDetailsTab, setActiveDetailsTab] = useState<'desc' | 'code' | 'dry' | 'tips'>('desc');

  // Mobile View State (toggle between list and details pane)
  const [mobileView, setMobileView] = useState<'list' | 'detail'>('list');

  // Cache loaded questions to avoid duplicate requests
  const [cache, setCache] = useState<{ [key: string]: Question[] }>({});

  // Reset tab when selected question changes
  useEffect(() => {
    setActiveDetailsTab('desc');
  }, [selectedQuestion?.id]);

  useEffect(() => {
    const fetchQuestions = async () => {
      if (cache[activeTopic]) {
        setQuestions(cache[activeTopic]);
        if (cache[activeTopic].length > 0) {
          setSelectedQuestion(cache[activeTopic][0]);
        }
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(`/data/questions/${activeTopic}.json`);
        const data = await response.json();
        setQuestions(data);
        setCache(prev => ({ ...prev, [activeTopic]: data }));
        if (data.length > 0) {
          setSelectedQuestion(data[0]);
        }
      } catch (error) {
        console.error('Error loading questions lazily:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [activeTopic]);

  const filteredQuestions = questions.filter(q => {
    const matchesSearch = q.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          q.statement.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty = selectedDifficulty === 'All' || q.difficulty === selectedDifficulty;
    const matchesBookmark = !showOnlyBookmarks || bookmarks.includes(q.id);
    return matchesSearch && matchesDifficulty && matchesBookmark;
  });

  return (
    <div className="space-y-6">
      {/* Topics Lazy-loading Header */}
      <div className="flex flex-col gap-1 border-b border-darkbg-border pb-5">
        <div className="flex items-center gap-2 text-cyber-cyan">
          <Code2 className="h-5 w-5 animate-pulse" />
          <span className="text-xs font-black tracking-widest uppercase">Module 2</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase">
          DSA Interview Question Bank
        </h1>
        <p className="text-gray-400 text-sm">
          Select a topic to lazily load 9 real interview-quality questions. Practice with detailed explanations, dry runs, and clean C++/Python code.
        </p>
      </div>

      {/* Mobile Dropdown Navigation */}
      <div className="lg:hidden w-full relative">
        <select
          value={activeTopic}
          onChange={e => {
            setActiveTopic(e.target.value);
            setSearchQuery('');
            setSelectedDifficulty('All');
            setShowOnlyBookmarks(false);
            setMobileView('list');
          }}
          className="w-full px-4 py-2.5 bg-darkbg-card text-sm text-gray-200 rounded-xl border border-darkbg-border focus:outline-none focus:border-cyber-cyan transition-colors appearance-none font-bold cursor-pointer"
        >
          {topics.map(topic => (
            <option key={topic.id} value={topic.id} className="bg-darkbg-card font-bold">
              Topic: {topic.name}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-3.5 pointer-events-none text-gray-500 text-xs">
          ▼
        </div>
      </div>

      {/* Desktop Topic Pill Navigation */}
      <div className="hidden lg:flex gap-2 overflow-x-auto pb-1 no-scrollbar">
        {topics.map(topic => (
          <button
            key={topic.id}
            onClick={() => {
              setActiveTopic(topic.id);
              setSearchQuery('');
              setSelectedDifficulty('All');
              setShowOnlyBookmarks(false);
              setMobileView('list');
            }}
            className={`
              px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 border
              ${activeTopic === topic.id
                ? 'bg-cyber-cyan/15 border-cyber-cyan text-cyber-cyan shadow-cyber-cyan'
                : 'bg-darkbg-card border-darkbg-border text-gray-400 hover:text-gray-200 hover:border-gray-600'
              }
            `}
          >
            {topic.name}
          </button>
        ))}
      </div>

      {/* Main Workspace split panel */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Question List */}
        <div className={`lg:col-span-4 space-y-4 ${mobileView === 'list' ? 'block' : 'hidden lg:block'}`}>
          {/* Controls Panel */}
          <div className="p-3 sm:p-4 rounded-2xl border border-darkbg-border bg-darkbg-card space-y-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-darkbg text-sm text-gray-200 rounded-xl border border-darkbg-border focus:outline-none focus:border-cyber-cyan transition-colors"
              />
            </div>

            {/* Filter controls */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex gap-1 flex-wrap">
                {(['All', 'Easy', 'Medium', 'Hard'] as const).map(diff => (
                  <button
                    key={diff}
                    onClick={() => setSelectedDifficulty(diff)}
                    className={`
                      px-2.5 py-1.5 rounded-lg font-bold border transition-colors
                      ${selectedDifficulty === diff
                        ? 'bg-darkbg-hover border-cyber-pink text-cyber-pink'
                        : 'border-darkbg-border text-gray-500 hover:text-gray-300'
                      }
                    `}
                  >
                    {diff}
                  </button>
                ))}
              </div>

              {/* Bookmark Toggle Filter */}
              <button
                onClick={() => setShowOnlyBookmarks(!showOnlyBookmarks)}
                className={`
                  p-2.5 rounded-lg border transition-colors flex items-center gap-1.5 font-bold
                  ${showOnlyBookmarks
                    ? 'bg-cyber-pink/10 border-cyber-pink text-cyber-pink'
                    : 'border-darkbg-border text-gray-500 hover:text-gray-300'
                  }
                `}
              >
                <Bookmark className="h-3.5 w-3.5" />
                <span>Saved</span>
              </button>
            </div>
          </div>

          {/* Questions List */}
          <div className="space-y-2 lg:max-h-[55vh] lg:overflow-y-auto pr-1">
            {loading ? (
              <div className="text-center py-12 text-sm text-gray-500 font-bold">
                <span className="inline-block animate-spin mr-2">⚙️</span>
                Loading topic questions...
              </div>
            ) : filteredQuestions.length === 0 ? (
              <div className="text-center py-12 border border-dashed border-darkbg-border rounded-2xl text-gray-500 font-bold text-sm">
                No matching questions found.
              </div>
            ) : (
              filteredQuestions.map(q => {
                const isSelected = selectedQuestion?.id === q.id;
                const isSolved = solved.includes(q.id);
                const isSaved = bookmarks.includes(q.id);
                return (
                  <div
                    key={q.id}
                    onClick={() => {
                      setSelectedQuestion(q);
                      setMobileView('detail');
                    }}
                    className={`
                      p-4 rounded-xl border cursor-pointer transition-all duration-300 flex items-center justify-between group
                      ${isSelected
                        ? 'bg-darkbg-card border-cyber-cyan text-gray-100 shadow-cyber-cyan'
                        : 'bg-darkbg-card/40 border-darkbg-border text-gray-400 hover:text-gray-200 hover:border-gray-700'
                      }
                    `}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Solved Checkbox */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSolved(q.id);
                        }}
                        className={`p-1 rounded-md border transition-colors ${
                          isSolved 
                            ? 'bg-cyber-green/20 border-cyber-green text-cyber-green' 
                            : 'border-darkbg-border text-transparent hover:border-gray-500'
                        }`}
                      >
                        <Check className="h-3.5 w-3.5" />
                      </button>

                      <div className="min-w-0">
                        <h4 className="text-sm font-bold truncate tracking-wide text-gray-100 group-hover:text-cyber-cyan transition-colors">
                          {q.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`
                            text-[10px] font-black uppercase
                            ${q.difficulty === 'Easy' ? 'text-cyber-green' : q.difficulty === 'Medium' ? 'text-cyber-yellow' : 'text-cyber-pink'}
                          `}>
                            {q.difficulty}
                          </span>
                          <span className="text-[10px] text-gray-600 font-bold">•</span>
                          <span className="text-[10px] text-gray-500 font-bold truncate">
                            {q.companies[0]} (+{q.companies.length - 1} more)
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bookmark Toggle */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleBookmark(q.id);
                      }}
                      className={`p-1.5 transition-colors ${isSaved ? 'text-cyber-pink' : 'text-gray-600 hover:text-gray-400'}`}
                    >
                      <Bookmark className="h-4 w-4" fill={isSaved ? "currentColor" : "none"} />
                    </button>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right Side: Selected Question Details */}
        <div className={`lg:col-span-8 ${mobileView === 'detail' ? 'block' : 'hidden lg:block'}`}>
          {selectedQuestion ? (
            <div className="space-y-6">
              {/* Mobile Back Button */}
              <button
                onClick={() => setMobileView('list')}
                className="lg:hidden flex items-center gap-2 text-xs font-bold text-cyber-cyan mb-2 px-3 py-1.5 bg-darkbg-hover rounded-xl border border-darkbg-border hover:text-cyber-cyan transition-colors"
              >
                <span>← Back to Questions List</span>
              </button>

              {/* Question Banner */}
              <div className="p-4 sm:p-6 rounded-2xl border border-darkbg-border bg-darkbg-card">
                <div className="flex items-center justify-between gap-4 mb-3 flex-wrap">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`
                      text-xs font-black uppercase px-2.5 py-1 rounded
                      ${selectedQuestion.difficulty === 'Easy' ? 'bg-cyber-green/10 text-cyber-green border border-cyber-green/20' : selectedQuestion.difficulty === 'Medium' ? 'bg-cyber-yellow/10 text-cyber-yellow border border-cyber-yellow/20' : 'bg-cyber-pink/10 text-cyber-pink border border-cyber-pink/20'}
                    `}>
                      {selectedQuestion.difficulty}
                    </span>
                    <span className="text-xs bg-cyber-purple/10 text-cyber-purple border border-cyber-purple/20 px-2.5 py-1 rounded font-bold">
                      Pattern: {selectedQuestion.pattern}
                    </span>
                  </div>

                  {/* Bookmark and Solved Action Row */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => toggleSolved(selectedQuestion.id)}
                      className={`
                        flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold transition-all duration-300
                        ${solved.includes(selectedQuestion.id)
                          ? 'bg-cyber-green/10 border-cyber-green text-cyber-green'
                          : 'border-darkbg-border text-gray-400 hover:border-gray-600'
                        }
                      `}
                    >
                      <CheckCircle className="h-4 w-4" />
                      <span>{solved.includes(selectedQuestion.id) ? 'Solved' : 'Mark Solved'}</span>
                    </button>

                    <button
                      onClick={() => toggleBookmark(selectedQuestion.id)}
                      className={`
                        p-2 rounded-lg border transition-all duration-300
                        ${bookmarks.includes(selectedQuestion.id)
                          ? 'bg-cyber-pink/10 border-cyber-pink text-cyber-pink'
                          : 'border-darkbg-border text-gray-500 hover:border-gray-600'
                        }
                      `}
                    >
                      <Bookmark className="h-4 w-4" fill={bookmarks.includes(selectedQuestion.id) ? "currentColor" : "none"} />
                    </button>
                  </div>
                </div>

                <h2 className="text-2xl font-black text-white tracking-wide uppercase mb-3">
                  {selectedQuestion.title}
                </h2>

                <p className="text-gray-300 text-sm leading-relaxed mb-4 whitespace-pre-line">
                  {selectedQuestion.statement}
                </p>

                {/* Companies list */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Asked By:</span>
                  {selectedQuestion.companies.map(c => (
                    <span key={c} className="text-[10px] bg-darkbg border border-darkbg-border text-gray-400 px-2 py-0.5 rounded font-bold">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Solution Tabs Navigation */}
              <div className="flex border-b border-darkbg-border bg-darkbg-card rounded-2xl overflow-hidden p-1 gap-1">
                {(['desc', 'code', 'dry', 'tips'] as const).map(tab => {
                  const isActive = activeDetailsTab === tab;
                  let label = '';
                  let shortLabel = '';
                  let icon = null;
                  if (tab === 'desc') {
                    label = 'Strategy & Diagram';
                    shortLabel = 'Strategy';
                    icon = <HelpCircle className="h-4 w-4" />;
                  } else if (tab === 'code') {
                    label = 'Code Workspace';
                    shortLabel = 'Code';
                    icon = <Code2 className="h-4 w-4" />;
                  } else if (tab === 'dry') {
                    label = 'Dry Run Trace';
                    shortLabel = 'Trace';
                    icon = <Cpu className="h-4 w-4" />;
                  } else {
                    label = 'Interview Tips';
                    shortLabel = 'Tips';
                    icon = <AlertTriangle className="h-4 w-4" />;
                  }
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveDetailsTab(tab)}
                      className={`
                        flex-1 flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 py-2 px-1 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300
                        ${isActive
                          ? 'bg-cyber-cyan/15 border border-cyber-cyan/35 text-cyber-cyan shadow-cyber-cyan/5'
                          : 'border border-transparent text-gray-500 hover:text-gray-300 hover:bg-darkbg-hover/55'
                        }
                      `}
                    >
                      {icon}
                      <span className="hidden md:inline">{label}</span>
                      <span className="inline md:hidden">{shortLabel}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab Content Panels */}
              {activeDetailsTab === 'desc' && (
                <div className="space-y-6 animate-fade-in">
                  {/* Brute Force vs Optimized Approach Table */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-2xl border border-darkbg-border bg-darkbg-card space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-black text-gray-400 uppercase tracking-wider">Brute Force Approach</h3>
                        <span className="text-xs text-cyber-pink font-bold">{selectedQuestion.bruteForce.timeComplexity}</span>
                      </div>
                      <p className="text-xs text-gray-300 leading-relaxed">{selectedQuestion.bruteForce.description}</p>
                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-darkbg-border text-[10px] font-mono text-gray-500">
                        <div>Time: {selectedQuestion.bruteForce.timeComplexity}</div>
                        <div>Space: {selectedQuestion.bruteForce.spaceComplexity}</div>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl border border-cyber-cyan/30 bg-darkbg-card space-y-3 shadow-cyber-cyan/5">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-black text-cyber-cyan uppercase tracking-wider">Optimized Approach</h3>
                        <span className="text-xs text-cyber-green font-bold">{selectedQuestion.optimized.timeComplexity}</span>
                      </div>
                      <p className="text-xs text-gray-300 leading-relaxed">{selectedQuestion.optimized.description}</p>
                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-darkbg-border text-[10px] font-mono text-gray-500">
                        <div className="text-cyber-green">Time: {selectedQuestion.optimized.timeComplexity}</div>
                        <div className="text-cyber-green">Space: {selectedQuestion.optimized.spaceComplexity}</div>
                      </div>
                    </div>
                  </div>

                  {/* ASCI Visual Illustration */}
                  {selectedQuestion.visualization && (
                    <div className="rounded-2xl border border-darkbg-border bg-darkbg-card overflow-hidden">
                      <div className="px-5 py-3 border-b border-darkbg-border bg-darkbg-hover flex items-center gap-2">
                        <HelpCircle className="text-cyber-cyan h-4 w-4" />
                        <span className="text-xs font-black text-cyber-cyan tracking-wider uppercase">Visual Walkthrough Diagram</span>
                      </div>
                      <div className="p-3 sm:p-5 bg-[#08080c]">
                        <pre className="text-cyber-green text-[9px] min-[375px]:text-[10px] sm:text-xs font-mono whitespace-pre-wrap break-words leading-relaxed">
                          {selectedQuestion.visualization.trim()}
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeDetailsTab === 'code' && (
                <div className="rounded-2xl border border-darkbg-border bg-darkbg-card overflow-hidden animate-fade-in">
                  {/* Code Tabs */}
                  <div className="flex items-center justify-between px-5 py-2.5 border-b border-darkbg-border bg-darkbg-hover">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setActiveLanguage('python')}
                        className={`
                          px-3 py-1.5 rounded-lg text-xs font-bold transition-colors
                          ${activeLanguage === 'python' ? 'bg-darkbg-border text-cyber-yellow' : 'text-gray-500 hover:text-gray-300'}
                        `}
                      >
                        Python
                      </button>
                      <button
                        onClick={() => setActiveLanguage('cpp')}
                        className={`
                          px-3 py-1.5 rounded-lg text-xs font-bold transition-colors
                          ${activeLanguage === 'cpp' ? 'bg-darkbg-border text-cyber-cyan' : 'text-gray-500 hover:text-gray-300'}
                        `}
                      >
                        C++
                      </button>
                    </div>
                    <div className="text-[10px] font-mono text-gray-500">READ-ONLY SOLVED WORKSPACE</div>
                  </div>

                  {/* Code block */}
                  <div className="p-3 sm:p-5 bg-[#08080c] border-b border-darkbg-border">
                    <pre className="text-[11px] sm:text-xs font-mono text-gray-200 leading-relaxed whitespace-pre-wrap break-all">
                      <code>
                        {activeLanguage === 'python' ? selectedQuestion.pythonCode : selectedQuestion.cppCode}
                      </code>
                    </pre>
                  </div>

                  {/* Line-by-Line Explanations */}
                  <div className="p-5 space-y-4 bg-darkbg-card/50">
                    <h4 className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-2">
                      <span>💡</span> Line-By-Line Explanation ({activeLanguage === 'python' ? 'Python' : 'C++'})
                    </h4>
                    <div className="space-y-3 font-mono text-xs">
                      {(activeLanguage === 'python' ? selectedQuestion.pythonExplanation : selectedQuestion.cppExplanation).map((exp, i) => (
                        <div key={i} className="p-3 bg-darkbg/40 rounded-lg border border-darkbg-border flex flex-col md:flex-row gap-3 hover:border-cyber-cyan/30 transition-colors">
                          <div className="md:w-1/3 text-cyber-cyan font-bold break-words whitespace-normal md:truncate">{exp.line}</div>
                          <div className="md:w-2/3 text-gray-400">{exp.explanation}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeDetailsTab === 'dry' && (
                <div className="p-5 rounded-2xl border border-darkbg-border bg-darkbg-card space-y-4 animate-fade-in">
                  <h3 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2">
                    <Cpu className="h-4 w-4 text-cyber-cyan" /> Mathematical Dry Run Trace
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                    Let's trace how the variables change state step-by-step for a sample input structure:
                  </p>
                  <ul className="space-y-3">
                    {selectedQuestion.dryRun.map((step, i) => (
                      <li key={i} className="text-xs text-gray-400 font-mono leading-relaxed bg-darkbg/50 p-3 rounded-xl border border-darkbg-border flex gap-3 items-start hover:border-cyber-cyan/30 transition-colors">
                        <span className="text-[10px] bg-darkbg-border text-cyber-cyan px-2 py-0.5 rounded font-black font-mono">
                          {(i + 1).toString().padStart(2, '0')}
                        </span>
                        <span className="flex-1">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeDetailsTab === 'tips' && (
                <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
                  {/* Left column */}
                  <div className="space-y-6">
                    {/* Edge Cases */}
                    <div className="p-5 rounded-2xl border border-darkbg-border bg-darkbg-card space-y-3">
                      <h3 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-cyber-yellow" /> Critical Edge Cases
                      </h3>
                      <ul className="space-y-2 text-xs text-gray-400 list-disc pl-5 leading-relaxed font-semibold">
                        {selectedQuestion.edgeCases.map((ec, i) => (
                          <li key={i} className="hover:text-gray-200 transition-colors">{ec}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Mistakes and Traps */}
                    <div className="p-5 rounded-2xl border border-darkbg-border bg-darkbg-card space-y-4">
                      <div className="space-y-2">
                        <h4 className="text-xs font-black text-cyber-pink uppercase tracking-widest">Common Mistakes</h4>
                        <ul className="space-y-2 text-xs text-gray-400 list-disc pl-5 leading-relaxed font-semibold">
                          {selectedQuestion.commonMistakes.map((m, i) => (
                            <li key={i} className="hover:text-gray-200 transition-colors">{m}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-1.5 border-t border-darkbg-border pt-3">
                        <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest">When NOT to use this optimized solution</h4>
                        <p className="text-xs text-gray-400 leading-relaxed">{selectedQuestion.whenNotToUse}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right column */}
                  <div className="space-y-6">
                    {/* Follow Ups */}
                    <div className="p-5 rounded-2xl border border-cyber-purple/20 bg-darkbg-card space-y-3">
                      <h3 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2">
                        <ExternalLink className="h-4 w-4 text-cyber-purple" /> Interview Follow-Ups
                      </h3>
                      <ul className="space-y-2 text-xs text-gray-300 leading-relaxed list-decimal pl-5 font-semibold">
                        {selectedQuestion.followUps.map((fu, i) => (
                          <li key={i} className="hover:text-gray-200 transition-colors">{fu}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-24 border border-dashed border-darkbg-border rounded-3xl text-gray-500 font-bold text-sm">
              Select a question from the left sidebar to view solutions.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
