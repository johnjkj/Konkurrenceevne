/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import PriceCompetitiveness from './components/PriceCompetitiveness';
import StructuralCompetitiveness from './components/StructuralCompetitiveness';
import PortersDiamond from './components/PortersDiamond';

export default function App() {
  const [activeTab, setActiveTab] = useState('price');

  const tabs = [
    { id: 'price', label: 'Priskonkurrenceevnen' },
    { id: 'structural', label: 'Strukturel Konkurrence' },
    { id: 'porter', label: 'Porters Diamant' },
  ];

  return (
    <div className="h-screen w-full bg-[#F8FAFC] flex flex-col font-sans text-slate-800 overflow-hidden">
      {/* Header */}
      <header className="h-16 bg-[#1E293B] text-white flex items-center justify-between px-8 shadow-md shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center font-bold text-lg">IØ</div>
          <h1 className="text-xl font-semibold tracking-tight">
            International Økonomi: <span className="text-blue-300">Konkurrenceevne - lavet til elever på IBC Aabenraa :-)</span>
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex overflow-hidden">
        <nav className="w-64 bg-white border-r border-slate-200 flex flex-col shrink-0">
          <div className="p-6">
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-4">Konkurrenceevneteori:</p>
            <div className="space-y-2">
              {tabs.map((tab, index) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      isActive 
                        ? 'bg-blue-50 text-blue-700 border border-blue-100' 
                        : 'hover:bg-slate-50 text-slate-600 border border-transparent'
                    }`}
                  >
                    {index + 1}. {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="mt-auto p-6 bg-slate-50 border-t border-slate-200">
            <div className="text-xs leading-relaxed text-slate-500 italic">
              "Ekspert tip: Husk at prisen ikke er alt. Danmark lever af kvalitet og innovation!"
            </div>
          </div>
        </nav>

        <section className="flex-grow p-8 bg-slate-50 relative overflow-y-auto">
          {activeTab === 'price' && <PriceCompetitiveness />}
          {activeTab === 'structural' && <StructuralCompetitiveness />}
          {activeTab === 'porter' && <PortersDiamond />}
        </section>
      </main>
    </div>
  );
}

