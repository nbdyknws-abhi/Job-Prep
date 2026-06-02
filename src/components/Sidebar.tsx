import React from 'react';
import { 
  Layers, 
  Code, 
  Sparkles, 
  Terminal, 
  Cpu, 
  UserCheck, 
  Award, 
  FileSpreadsheet, 
  Bookmark,
  CheckCircle,
  Menu,
  X
} from 'lucide-react';

interface SidebarProps {
  currentView: string;
  setView: (view: string) => void;
  bookmarksCount: number;
  solvedCount: number;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  currentView, 
  setView, 
  bookmarksCount, 
  solvedCount 
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { id: 'patterns', name: 'DSA Pattern Hub', icon: Layers, badge: null },
    { id: 'questions', name: 'DSA Question Bank', icon: Code, badge: solvedCount > 0 ? `${solvedCount} Solved` : null },
    { id: 'trainer', name: 'Pattern Trainer', icon: Sparkles, badge: null },
    { id: 'assessment', name: 'Coding Simulator', icon: Terminal, badge: null },
    { id: 'tech', name: 'Technical Hub', icon: Cpu, badge: null },
    { id: 'hr', name: 'HR Interview Hub', icon: UserCheck, badge: '50 Qs' },
    { id: 'viva', name: 'Project Viva Hub', icon: Award, badge: null },
    { id: 'cheatsheets', name: 'Master Cheatsheets', icon: FileSpreadsheet, badge: 'Print' },
  ];

  return (
    <>
      {/* Unified Top Header */}
      <header className="h-16 bg-darkbg-card/85 backdrop-blur-md border-b border-darkbg-border flex items-center justify-between px-6 z-40 fixed top-0 left-0 w-full no-print">
        <div className="flex items-center gap-4">
          {/* Hamburger button (Toggles Sidebar) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 hover:text-cyber-cyan transition-colors p-1.5 bg-darkbg-hover rounded-lg border border-darkbg-border hover:border-cyber-cyan/30"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Layers className="text-cyber-pink h-5 w-5 animate-pulse" />
            <span className="hidden sm:inline font-extrabold text-base sm:text-lg tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyber-pink via-cyber-purple to-cyber-cyan">
              INFOSYS MASTERY
            </span>
          </div>
        </div>

        {/* Stats and Mode */}
        <div className="flex items-center gap-6 text-xs font-bold">
          {/* Active Mode Ribbon (Desktop only) */}
          <div className="hidden md:flex items-center gap-2">
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Mode:</span>
            <span className="text-[10px] bg-darkbg-hover text-cyber-cyan px-2 py-0.5 rounded border border-darkbg-border">
              Offline Local Server
            </span>
          </div>

          {/* User Progress Stats */}
          <div className="flex items-center gap-4 text-gray-400">
            <div className="flex items-center gap-1.5">
              <Bookmark className="h-4 w-4 text-cyber-pink" />
              <span>{bookmarksCount} <span className="hidden sm:inline">Saved</span></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="h-4 w-4 text-cyber-green" />
              <span>{solvedCount} / 135 <span className="hidden sm:inline">Solved</span></span>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Shell */}
      <aside className={`
        fixed top-0 left-0 h-full w-72 bg-darkbg-card border-r border-darkbg-border flex flex-col z-35 transition-transform duration-300 no-print overflow-x-hidden pt-16
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Brand Logo */}
        <div className="p-6 border-b border-darkbg-border flex items-center gap-3">
          <div className="p-2 bg-darkbg-hover rounded-xl border border-cyber-pink/30">
            <Layers className="text-cyber-pink h-5 w-5" />
          </div>
          <div>
            <h1 className="font-extrabold text-base leading-tight tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyber-pink via-cyber-purple to-cyber-cyan">
              INFOSYS MASTERY
            </h1>
            <p className="text-[10px] text-gray-500 font-semibold tracking-wider">CRACK SP & SPECIALIST ROLE</p>
          </div>
        </div>

        {/* User Stats Mini-Panel */}
        <div className="px-6 py-4 border-b border-darkbg-border bg-gradient-to-r from-darkbg-card to-darkbg-hover">
          <h2 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-3">Your Progress</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-darkbg/40 rounded-lg border border-darkbg-border flex flex-col justify-center">
              <div className="flex items-center gap-1.5 text-cyber-cyan mb-1">
                <CheckCircle className="h-4 w-4" />
                <span className="text-[10px] font-bold tracking-wider">SOLVED</span>
              </div>
              <span className="text-xl font-black text-gray-100">{solvedCount}</span>
            </div>
            <div className="p-3 bg-darkbg/40 rounded-lg border border-darkbg-border flex flex-col justify-center">
              <div className="flex items-center gap-1.5 text-cyber-pink mb-1">
                <Bookmark className="h-4 w-4" />
                <span className="text-[10px] font-bold tracking-wider">SAVED</span>
              </div>
              <span className="text-xl font-black text-gray-100">{bookmarksCount}</span>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-4 py-6 overflow-y-auto overflow-x-hidden space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setView(item.id);
                  setIsOpen(false);
                }}
                className={`
                  w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 font-semibold text-sm group
                  ${isActive 
                    ? 'bg-gradient-to-r from-cyber-pink/10 to-cyber-purple/10 text-cyber-pink border border-cyber-pink/30 shadow-cyber-pink' 
                    : 'text-gray-400 hover:text-gray-200 hover:bg-darkbg-hover border border-transparent'
                  }
                `}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Icon className={`
                    h-5 w-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110
                    ${isActive ? 'text-cyber-pink' : 'text-gray-500 group-hover:text-cyber-cyan'}
                  `} />
                  <span className="truncate">{item.name}</span>
                </div>
                {item.badge && (
                  <span className={`
                    text-[10px] px-2 py-0.5 rounded-full font-bold
                    ${isActive 
                      ? 'bg-cyber-pink/20 text-cyber-pink' 
                      : 'bg-darkbg-border text-gray-400 group-hover:bg-cyber-cyan/15 group-hover:text-cyber-cyan'
                    }
                  `}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Copyright Footer */}
        <div className="p-6 border-t border-darkbg-border text-center text-xs text-gray-600 font-bold tracking-wide">
          Infosys Mastery Platform v1.0.0
        </div>
      </aside>
    </>
  );
};
