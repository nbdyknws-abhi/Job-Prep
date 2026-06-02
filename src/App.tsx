import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { PatternHub } from './components/PatternHub';
import { QuestionBank } from './components/QuestionBank';
import { PatternTrainer } from './components/PatternTrainer';
import { AssessmentSimulator } from './components/AssessmentSimulator';
import { TechInterviewHub } from './components/TechInterviewHub';
import { HRHub } from './components/HRHub';
import { VivaHub } from './components/VivaHub';
import { Cheatsheets } from './components/Cheatsheets';

export default function App() {
  const [currentView, setView] = useState('patterns');

  // Bookmarks & Solved persistent state
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [solved, setSolved] = useState<string[]>([]);

  useEffect(() => {
    const savedBookmarks = localStorage.getItem('infosys_bookmarks');
    const savedSolved = localStorage.getItem('infosys_solved');
    if (savedBookmarks) setBookmarks(JSON.parse(savedBookmarks));
    if (savedSolved) setSolved(JSON.parse(savedSolved));
  }, []);

  const toggleBookmark = (id: string) => {
    const next = bookmarks.includes(id) 
      ? bookmarks.filter(b => b !== id) 
      : [...bookmarks, id];
    setBookmarks(next);
    localStorage.setItem('infosys_bookmarks', JSON.stringify(next));
  };

  const toggleSolved = (id: string) => {
    const next = solved.includes(id) 
      ? solved.filter(s => s !== id) 
      : [...solved, id];
    setSolved(next);
    localStorage.setItem('infosys_solved', JSON.stringify(next));
  };

  return (
    <div className="min-h-screen bg-darkbg text-gray-200 flex flex-col font-sans">
      {/* Navigation Left Sidebar */}
      <Sidebar 
        currentView={currentView} 
        setView={setView} 
        bookmarksCount={bookmarks.length} 
        solvedCount={solved.length} 
      />

      {/* Main Content Workspace Panel */}
      <main className="flex-1 pt-16 min-h-screen flex flex-col">

        {/* Content Pane */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8 w-full max-w-7xl mx-auto space-y-6">
          {currentView === 'patterns' && <PatternHub />}
          {currentView === 'questions' && (
            <QuestionBank 
              bookmarks={bookmarks} 
              toggleBookmark={toggleBookmark} 
              solved={solved} 
              toggleSolved={toggleSolved} 
            />
          )}
          {currentView === 'trainer' && <PatternTrainer />}
          {currentView === 'assessment' && <AssessmentSimulator />}
          {currentView === 'tech' && <TechInterviewHub />}
          {currentView === 'hr' && <HRHub />}
          {currentView === 'viva' && <VivaHub />}
          {currentView === 'cheatsheets' && <Cheatsheets />}
        </div>
      </main>
    </div>
  );
}
