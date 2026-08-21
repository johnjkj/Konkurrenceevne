import { motion } from 'motion/react';
import { useState } from 'react';
import { TrendingDown, TrendingUp, DollarSign, Activity } from 'lucide-react';

export default function PriceCompetitiveness() {
  const [wages, setWages] = useState(50);
  const [productivity, setProductivity] = useState(50);
  const [exchangeRate, setExchangeRate] = useState(50);

  // Calculate a simplified competitiveness score (0-100)
  // Higher wages and exchange rate decrease competitiveness, higher productivity increases it.
  const score = Math.max(0, Math.min(100, Math.round(50 - (wages - 50) * 0.8 + (productivity - 50) * 0.8 - (exchangeRate - 50) * 0.5)));

  let statusMessage = "";
  if (score >= 80) statusMessage = "Super Konkurrenceevne";
  else if (score >= 50) statusMessage = "Stabil Balance";
  else statusMessage = "Kritisk Dårlig";

  return (
    <div className="h-full flex flex-col">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Priskonkurrenceevnen</h2>
        <p className="text-slate-500">
          Hvordan påvirker de økonomiske nøgletal virksomhedernes evne til at sælge varer?
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 h-full">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col gap-6">
          {/* Lønninger */}
          <div>
            <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Lønninger</label>
            <input 
              type="range" min="0" max="100" value={wages} 
              onChange={(e) => setWages(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
            <div className="flex justify-between text-xs mt-1 font-mono"><span>{wages}</span></div>
          </div>

          {/* Produktivitet */}
          <div>
            <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Produktivitet</label>
            <input 
              type="range" min="0" max="100" value={productivity} 
              onChange={(e) => setProductivity(Number(e.target.value))}
              className="w-full accent-emerald-500"
            />
            <div className="flex justify-between text-xs mt-1 font-mono"><span>{productivity}</span></div>
          </div>

          {/* Valutakurs */}
          <div>
            <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Valutakurs (DKK styrke)</label>
            <input 
              type="range" min="0" max="100" value={exchangeRate} 
              onChange={(e) => setExchangeRate(Number(e.target.value))}
              className="w-full accent-amber-500"
            />
            <div className="flex justify-between text-xs mt-1 font-mono"><span>{exchangeRate}</span></div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 text-white flex flex-col items-center justify-center text-center shadow-xl">
          <div className="text-slate-400 text-sm mb-2 uppercase tracking-widest">Relativ Konkurrenceevne</div>
          <div className={`text-7xl font-black mb-4 ${score >= 80 ? 'text-emerald-500' : score < 50 ? 'text-red-500' : 'text-white'}`}>
            {score.toFixed(1)}
          </div>
          
          <div 
            className={`px-4 py-2 rounded-full text-sm font-bold ${
              score >= 80 ? "bg-emerald-500/20 text-emerald-400" : 
              score >= 50 ? "bg-blue-500/20 text-blue-400" : 
              "bg-red-500/20 text-red-400"
            }`}
          >
            {statusMessage}
          </div>
          <div className="mt-8 text-slate-400 text-xs italic">
            Formel: (Enhedslønomkostninger x Valutakurs) / Konkurrenternes priser
          </div>
        </div>
      </div>
    </div>
  );
}
