import React, { useState } from 'react';
import { cheatsheetsData } from '../data/cheatsheetsData';
import { FileSpreadsheet, Printer, ChevronRight, BookOpen } from 'lucide-react';

export const Cheatsheets: React.FC = () => {
  const [activeSheetIdx, setActiveSheetIdx] = useState(0);
  const activeSheet = cheatsheetsData[activeSheetIdx] || cheatsheetsData[0];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Title Header */}
      <div className="flex flex-col gap-1 border-b border-darkbg-border pb-5 no-print">
        <div className="flex items-center gap-2 text-cyber-cyan">
          <FileSpreadsheet className="h-5 w-5 animate-pulse" />
          <span className="text-xs font-black tracking-widest uppercase">Module 8</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase">
          Master interview Cheatsheets
        </h1>
        <p className="text-gray-400 text-sm">
          Printable, high-density cheatsheets to review time-complexities, code structures, commands, and core definitions in the final hours before your exam.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Navigation Links */}
        <div className="lg:col-span-4 space-y-2 no-print">
          <h2 className="text-xs font-black text-gray-500 tracking-wider uppercase px-2 mb-3 hidden lg:block">Available Cheatsheets</h2>
          
          {/* Mobile Dropdown Selection */}
          <div className="lg:hidden w-full relative">
            <select
              value={activeSheetIdx}
              onChange={e => setActiveSheetIdx(Number(e.target.value))}
              className="w-full px-4 py-2.5 bg-darkbg-card text-sm text-gray-200 rounded-xl border border-darkbg-border focus:outline-none focus:border-cyber-cyan transition-colors appearance-none font-bold cursor-pointer"
            >
              {cheatsheetsData.map((sheet, index) => (
                <option key={sheet.id} value={index} className="bg-darkbg-card font-bold">
                  Cheatsheet: {sheet.title}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-3.5 pointer-events-none text-gray-500 text-xs">
              ▼
            </div>
          </div>

          {/* Desktop Links List */}
          <div className="hidden lg:flex flex-col gap-2">
            {cheatsheetsData.map((sheet, index) => {
              const isSelected = index === activeSheetIdx;
              return (
                <button
                  key={sheet.id}
                  onClick={() => setActiveSheetIdx(index)}
                  className={`
                    w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 font-bold text-left
                    ${isSelected
                      ? 'bg-darkbg-card border-cyber-cyan text-gray-100 shadow-cyber-cyan'
                      : 'bg-darkbg-card/40 border-darkbg-border text-gray-400 hover:text-gray-200 hover:border-gray-700'
                    }
                  `}
                >
                  <span className="text-sm tracking-wide">{sheet.title}</span>
                  <ChevronRight className={`h-4 w-4 transition-transform ${isSelected ? 'text-cyber-cyan translate-x-1' : 'text-gray-600'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Render Cheatsheet with Print Layout */}
        <div className="lg:col-span-8 space-y-6">
          {/* Action Ribbon */}
          <div className="p-4 rounded-xl border border-darkbg-border bg-darkbg-card flex items-center justify-between no-print">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black text-gray-500 uppercase tracking-widest">Active Sheet:</span>
              <span className="text-xs bg-cyber-cyan/10 text-cyber-cyan font-bold px-2 py-0.5 rounded border border-cyber-cyan/20">
                {activeSheet.title}
              </span>
            </div>
            
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-lg bg-cyber-cyan hover:bg-cyber-cyan/95 text-darkbg font-black text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors"
            >
              <Printer className="h-4 w-4" />
              <span>Print Page</span>
            </button>
          </div>

          {/* Printable Sheet Panel */}
          <div className="p-4 sm:p-8 rounded-3xl border border-darkbg-border bg-darkbg-card space-y-6 print-card">
            {/* Header for print */}
            <div className="border-b border-darkbg-border pb-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-black text-white uppercase tracking-wide print:text-black">
                  {activeSheet.title}
                </h2>
                <p className="text-[10px] text-cyber-cyan font-black uppercase tracking-widest print:text-gray-600 mt-1">
                  Infosys Assessment & Interview Mastery
                </p>
              </div>
              <BookOpen className="h-6 w-6 text-cyber-cyan print:text-black" />
            </div>

            {/* Sections content */}
            <div className="space-y-6">
              {activeSheet.sections.map((section, idx) => (
                <div key={idx} className="space-y-3 page-break-inside:avoid">
                  <h3 className="text-sm font-black text-cyber-cyan uppercase tracking-wider border-l-2 border-cyber-cyan pl-2 print:text-black print:border-black">
                    {section.title}
                  </h3>
                  
                  {/* Process content as raw text (could render markdown tables, lists, or pre blocks) */}
                  <div className="text-xs text-gray-400 leading-relaxed font-semibold font-sans space-y-2 print:text-black whitespace-pre-wrap">
                    {/* Render table dynamically if markdown contains pipes */}
                    {section.content.includes('|') ? (
                      <div className="overflow-x-auto my-2 no-scrollbar">
                        <table className="min-w-full divide-y divide-darkbg-border border border-darkbg-border print:border-black print:divide-black">
                          <tbody className="divide-y divide-darkbg-border print:divide-black">
                            {section.content.trim().split('\n').filter(Boolean).map((row, rIdx) => {
                              const cells = row.split('|').map(c => c.trim()).filter(Boolean);
                              const isHeader = rIdx === 0;
                              const isDivider = row.includes('---');
                              if (isDivider) return null;
                              return (
                                <tr key={rIdx} className={isHeader ? 'bg-darkbg-hover print:bg-gray-100 font-bold' : ''}>
                                  {cells.map((cell, cIdx) => (
                                    <td key={cIdx} className="px-3 py-2 border-r border-darkbg-border print:border-black text-[11px] print:text-black">
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    ) : section.content.includes('```') ? (
                      // Parse code block
                      <pre className="p-4 bg-[#08080c] border border-darkbg-border text-[11px] font-mono text-gray-300 rounded-lg overflow-x-auto whitespace-pre-wrap break-all print:bg-gray-50 print:border-black print:text-black">
                        {section.content.replace(/```[a-z]*\n/g, '').replace(/```/g, '').trim()}
                      </pre>
                    ) : (
                      // Standard bullet strings
                      <div className="pl-2 space-y-1">
                        {section.content.trim().split('\n').map((line, lIdx) => {
                          const isBullet = line.trim().startsWith('-');
                          return (
                            <p key={lIdx} className={isBullet ? 'list-item list-inside' : 'my-1'}>
                              {isBullet ? line.replace('-', '').trim() : line}
                            </p>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer for print */}
            <div className="border-t border-darkbg-border pt-4 text-[9px] text-gray-500 font-bold text-center flex justify-between print:text-black print:border-black">
              <span>Prepared for B.Tech CSE placements</span>
              <span>100% Offline Guide</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
