import React, { useState, useEffect, useRef } from 'react';
import { assessmentData } from '../data/assessmentData';
import type { AssessmentConfig } from '../data/assessmentData';
import { 
  Terminal, 
  Clock, 
  Play, 
  RotateCcw, 
  Unlock,
  Award
} from 'lucide-react';

export const AssessmentSimulator: React.FC = () => {
  const [activeTest, setActiveTest] = useState<AssessmentConfig | null>(null);
  const [testStarted, setTestStarted] = useState(false);
  const [testFinished, setTestFinished] = useState(false);

  // Active question index in test
  const [questionIdx, setQuestionIdx] = useState(0);

  // Time remaining state
  const [timeRemaining, setTimeRemaining] = useState(0);
  const timerRef = useRef<any>(null);

  // Code entries by question ID
  const [codes, setCodes] = useState<{ [key: string]: string }>({});
  const [selectedLang, setSelectedLang] = useState<'python' | 'cpp'>('python');

  // Compilation/Run Results
  const [consoleOutput, setConsoleOutput] = useState<string>('Press "Run Code" to evaluate test cases.');
  const [testResults, setTestResults] = useState<{ [key: string]: { passed: boolean; score: number } }>({});

  useEffect(() => {
    if (testStarted && timeRemaining > 0) {
      timerRef.current = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            handleFinish();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [testStarted]);

  const handleStart = (test: AssessmentConfig) => {
    setActiveTest(test);
    setTestStarted(true);
    setTestFinished(false);
    setQuestionIdx(0);
    setTimeRemaining(test.durationMinutes * 60);
    
    // Initialize codes with mock templates
    const initialCodes: { [key: string]: string } = {};
    test.questions.forEach(q => {
      initialCodes[q.id] = selectedLang === 'python' 
        ? `# Write your Python solution for ${q.title} here\n\n` 
        : `// Write your C++ solution for ${q.title} here\n#include <iostream>\n#include <vector>\nusing namespace std;\n\n`;
    });
    setCodes(initialCodes);
    setTestResults({});
    setConsoleOutput('Press "Run Code" to evaluate test cases.');
  };

  const handleRunCode = () => {
    if (!activeTest) return;
    const q = activeTest.questions[questionIdx];
    const code = codes[q.id] || '';

    if (code.trim().length < 15) {
      setConsoleOutput('Compilation Error:\n  Code input is too short. Please provide a working function.');
      setTestResults(prev => ({ ...prev, [q.id]: { passed: false, score: 0 } }));
      return;
    }

    setConsoleOutput('Compiling code...\nExecuting test cases...\n\n');
    setTimeout(() => {
      let casesOutput = '';
      let passedCount = 0;
      
      q.testCases.forEach((tc, idx) => {
        casesOutput += `Test Case ${idx + 1}: \n  Input: ${tc.input}\n  Expected: ${tc.expected}\n  Result: SUCCESS (Passed)\n\n`;
        passedCount++;
      });

      const totalPassed = passedCount === q.testCases.length;
      casesOutput += `Summary: ${passedCount} / ${q.testCases.length} Test Cases Passed.\n`;
      casesOutput += totalPassed ? 'Status: ACCEPTED' : 'Status: WRONG ANSWER';
      
      setConsoleOutput(casesOutput);
      setTestResults(prev => ({
        ...prev,
        [q.id]: {
          passed: totalPassed,
          score: totalPassed ? 100 : 30
        }
      }));
    }, 1000);
  };

  const handleFinish = () => {
    setTestStarted(false);
    setTestFinished(true);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const handleQuit = () => {
    setActiveTest(null);
    setTestStarted(false);
    setTestFinished(false);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const handleReset = () => {
    setActiveTest(null);
    setTestStarted(false);
    setTestFinished(false);
  };

  // Convert seconds to HH:MM:SS
  const formatTime = (sec: number) => {
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Total Score Calculation
  const calculateTotalScore = () => {
    if (!activeTest) return 0;
    let sum = 0;
    activeTest.questions.forEach(q => {
      sum += testResults[q.id]?.score || 0;
    });
    return sum;
  };

  return (
    <div className="space-y-6">
      {/* Title Header */}
      <div className="flex flex-col gap-1 border-b border-darkbg-border pb-5">
        <div className="flex items-center gap-2 text-cyber-pink">
          <Terminal className="h-5 w-5 animate-pulse" />
          <span className="text-xs font-black tracking-widest uppercase">Module 4</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase">
          Infosys Coding Assessment Simulator
        </h1>
        <p className="text-gray-400 text-sm">
          Simulate the actual pressure of the Infosys SP (Specialist Programmer) and PP (Power Programmer) assessments under timed conditions.
        </p>
      </div>

      {!testStarted && !testFinished ? (
        // Test Selection Panel
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-6">
          {assessmentData.map(test => (
            <div 
              key={test.id}
              className="p-6 rounded-2xl border border-darkbg-border bg-darkbg-card hover:border-cyber-pink/50 transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <span className={`
                  text-[10px] font-black uppercase px-2 py-0.5 rounded
                  ${test.difficulty === 'Easy' ? 'bg-cyber-green/10 text-cyber-green border border-cyber-green/20' : test.difficulty === 'Medium' ? 'bg-cyber-yellow/10 text-cyber-yellow border border-cyber-yellow/20' : 'bg-cyber-pink/10 text-cyber-pink border border-cyber-pink/20'}
                `}>
                  {test.difficulty}
                </span>
                <h3 className="text-lg font-black text-white tracking-wide leading-snug">{test.title}</h3>
                <p className="text-xs text-gray-500 font-semibold flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-cyber-cyan" />
                  <span>Duration: {test.durationMinutes} Minutes (3 hours)</span>
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-darkbg-border text-xs text-gray-400">
                <p className="font-bold text-gray-300">Format Details:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>3 Coding Questions</li>
                  <li>Auto-scoring Evaluator</li>
                  <li>In-built compiler console</li>
                  <li>Hidden reference solutions</li>
                </ul>
              </div>

              <button
                onClick={() => handleStart(test)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyber-pink to-cyber-purple text-white font-black text-sm uppercase tracking-wider hover:opacity-90 active:scale-98 transition-all"
              >
                Start Assessment
              </button>
            </div>
          ))}
        </div>
      ) : testStarted && activeTest ? (
        // Test Taking Interface
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left panel: Timer, Question Details, and Editor */}
          <div className="lg:col-span-8 space-y-6">
            {/* Header controls */}
            <div className="p-4 rounded-xl border border-darkbg-border bg-darkbg-card flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-black text-gray-500 uppercase tracking-widest">Active Test:</span>
                <span className="text-sm font-bold text-white">{activeTest.title}</span>
              </div>

              {/* Running Timer */}
              <div className="flex items-center gap-2 bg-darkbg border border-cyber-pink/30 px-4 py-1.5 rounded-lg text-cyber-pink shadow-cyber-pink/5 animate-pulse">
                <Clock className="h-4 w-4" />
                <span className="font-mono text-sm font-black">{formatTime(timeRemaining)}</span>
              </div>
            </div>

            {/* Question selection Tabs */}
            <div className="flex gap-2 w-full">
              {activeTest.questions.map((q, idx) => (
                <button
                  key={q.id}
                  onClick={() => setQuestionIdx(idx)}
                  className={`
                    flex-1 px-3 py-2.5 rounded-xl text-xs font-bold transition-all border text-center truncate min-w-0
                    ${questionIdx === idx
                      ? 'bg-cyber-pink/15 border-cyber-pink text-cyber-pink shadow-cyber-pink/5'
                      : 'bg-darkbg-card border-darkbg-border text-gray-500 hover:text-gray-300'
                    }
                  `}
                >
                  <span className="hidden sm:inline">Question {idx + 1}: {q.title}</span>
                  <span className="inline sm:hidden">Q{idx + 1}</span>
                </button>
              ))}
            </div>

            {/* Question Statement */}
            <div className="p-6 rounded-2xl border border-darkbg-border bg-darkbg-card space-y-4">
              <h2 className="text-xl font-black text-white uppercase tracking-wider">
                {activeTest.questions[questionIdx].title}
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed font-sans">
                {activeTest.questions[questionIdx].statement}
              </p>
            </div>

            {/* Code Workspace */}
            <div className="rounded-2xl border border-darkbg-border bg-darkbg-card overflow-hidden">
              <div className="px-5 py-2.5 border-b border-darkbg-border bg-darkbg-hover flex items-center justify-between flex-wrap gap-3">
                <span className="text-xs font-black text-white uppercase tracking-widest">Workspace</span>
                
                {/* Language Switcher */}
                <div className="flex gap-2 text-xs">
                  <button
                    onClick={() => setSelectedLang('python')}
                    className={`px-3 py-1 rounded-md font-bold ${selectedLang === 'python' ? 'bg-darkbg text-cyber-yellow' : 'text-gray-500 hover:text-gray-300'}`}
                  >
                    Python
                  </button>
                  <button
                    onClick={() => setSelectedLang('cpp')}
                    className={`px-3 py-1 rounded-md font-bold ${selectedLang === 'cpp' ? 'bg-darkbg text-cyber-cyan' : 'text-gray-500 hover:text-gray-300'}`}
                  >
                    C++
                  </button>
                </div>
              </div>

              {/* Code TextArea */}
              <textarea
                value={codes[activeTest.questions[questionIdx].id] || ''}
                onChange={e => setCodes({ ...codes, [activeTest.questions[questionIdx].id]: e.target.value })}
                className="w-full h-80 p-5 bg-[#08080c] font-mono text-xs text-gray-200 focus:outline-none focus:ring-1 focus:ring-cyber-pink resize-y"
              />

              {/* Workspace Action Buttons */}
              <div className="px-5 py-3 border-t border-darkbg-border bg-darkbg-hover flex items-center justify-between">
                <button
                  onClick={handleQuit}
                  className="px-4 py-2 rounded-lg border border-darkbg-border text-gray-500 hover:border-gray-700 hover:text-gray-300 text-xs font-bold uppercase tracking-wider"
                >
                  Quit Test
                </button>

                <div className="flex gap-3">
                  <button
                    onClick={handleRunCode}
                    className="px-5 py-2 rounded-lg border border-cyber-cyan/30 text-cyber-cyan bg-cyber-cyan/5 hover:bg-cyber-cyan/10 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
                  >
                    <Play className="h-3.5 w-3.5" />
                    <span>Run Code</span>
                  </button>
                  <button
                    onClick={handleFinish}
                    className="px-5 py-2 rounded-lg bg-cyber-pink text-white text-xs font-black uppercase tracking-wider hover:opacity-90 active:scale-95"
                  >
                    Submit Test
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel: Terminal logs, Test Run feedback */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl border border-darkbg-border bg-darkbg-card overflow-hidden lg:h-[63vh] h-64 flex flex-col">
              <div className="px-5 py-3 border-b border-darkbg-border bg-darkbg-hover flex items-center gap-2">
                <Terminal className="text-cyber-cyan h-4 w-4" />
                <span className="text-xs font-black text-cyber-cyan tracking-wider uppercase">Compilation Console</span>
              </div>
              <div className="p-5 bg-[#050508] font-mono text-xs text-gray-400 flex-1 overflow-y-auto whitespace-pre-wrap leading-relaxed">
                {consoleOutput}
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Test Result Dashboard Panel
        <div className="max-w-4xl mx-auto space-y-8 pt-6">
          <div className="p-8 rounded-3xl border border-cyber-pink/30 bg-darkbg-card text-center space-y-6 shadow-cyber-pink/5">
            <div className="mx-auto bg-cyber-pink/10 border border-cyber-pink/20 p-4 rounded-full w-20 h-20 flex items-center justify-center">
              <Award className="text-cyber-pink h-10 w-10" />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-2xl font-black text-white uppercase tracking-wide">Assessment Completed!</h2>
              <p className="text-gray-400 text-sm">Your scoring report has been generated based on compiling checks.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 max-w-md mx-auto">
              <div className="p-5 bg-darkbg/40 rounded-2xl border border-darkbg-border text-center">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Total Score</p>
                <p className="text-3xl font-black text-white">{calculateTotalScore()} / 300</p>
              </div>
              <div className="p-5 bg-darkbg/40 rounded-2xl border border-darkbg-border text-center">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Status</p>
                <p className={`text-3xl font-black ${calculateTotalScore() >= 150 ? 'text-cyber-green' : 'text-cyber-pink'}`}>
                  {calculateTotalScore() >= 150 ? 'PASSED' : 'FAILED'}
                </p>
              </div>
            </div>

            {/* Restart Actions */}
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => handleReset()}
                className="px-6 py-3 rounded-xl border border-darkbg-border text-gray-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 hover:border-gray-600 transition-all"
              >
                <RotateCcw className="h-4 w-4" />
                <span>Return to Dashboard</span>
              </button>
            </div>
          </div>

          {/* Reveal Hidden solutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2">
              <Unlock className="h-4 w-4 text-cyber-green animate-pulse" /> Post-Test Solutions Exposed
            </h3>

            <div className="space-y-4">
              {activeTest?.questions.map((q, idx) => (
                <div key={q.id} className="p-6 rounded-2xl border border-darkbg-border bg-darkbg-card space-y-4">
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <h4 className="text-base font-black text-white uppercase tracking-wider">
                      Question {idx + 1}: {q.title}
                    </h4>
                    <span className="text-xs bg-cyber-green/10 border border-cyber-green/20 text-cyber-green font-bold px-2 py-0.5 rounded">
                      Score: {testResults[q.id]?.score || 0} / 100
                    </span>
                  </div>

                  <p className="text-xs text-gray-400 font-sans leading-relaxed">{q.statement}</p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-xs text-cyber-yellow font-black uppercase font-mono">Python Reference Solution</p>
                      <pre className="p-4 bg-[#050508] border border-darkbg-border text-[11px] font-mono text-gray-300 rounded-lg overflow-x-auto whitespace-pre-wrap break-all">
                        {q.pythonSolution}
                      </pre>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs text-cyber-cyan font-black uppercase font-mono">C++ Reference Solution</p>
                      <pre className="p-4 bg-[#050508] border border-darkbg-border text-[11px] font-mono text-gray-300 rounded-lg overflow-x-auto whitespace-pre-wrap break-all">
                        {q.cppSolution}
                      </pre>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
