import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { PatternHub } from './components/PatternHub';
import { QuestionBank } from './components/QuestionBank';
import { PatternTrainer } from './components/PatternTrainer';
import { AssessmentSimulator } from './components/AssessmentSimulator';
import { TechInterviewHub } from './components/TechInterviewHub';
import { HRHub } from './components/HRHub';
import { VivaHub } from './components/VivaHub';
import { Cheatsheets } from './components/Cheatsheets';

const VALID_VIEWS = ['patterns', 'questions', 'trainer', 'assessment', 'tech', 'hr', 'viva', 'cheatsheets'];

export default function App() {
  // Restore last active view from localStorage on mount
  const [currentView, setCurrentView] = useState<string>(() => {
    const saved = localStorage.getItem('infosys_view');
    return saved && VALID_VIEWS.includes(saved) ? saved : 'patterns';
  });

  // Bookmarks & Solved persistent state
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('infosys_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  const [solved, setSolved] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('infosys_solved');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  // Persist current view whenever it changes
  const setView = (view: string) => {
    setCurrentView(view);
    localStorage.setItem('infosys_view', view);
    // Scroll to top when switching modules
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
