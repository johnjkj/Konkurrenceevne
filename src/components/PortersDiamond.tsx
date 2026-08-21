import { useState } from 'react';

export default function PortersDiamond() {
  const [nodes, setNodes] = useState({
    strategy: 80,
    factors: 70,
    demand: 90,
    network: 85
  });

  const [stateBoost, setStateBoost] = useState(false);
  const [chanceEvent, setChanceEvent] = useState(false);

  // Calculate Synergy: Geometric mean penalizes weak links heavily.
  const product = nodes.strategy * nodes.factors * nodes.demand * nodes.network;
  let synergy = Math.pow(product, 0.25);
  
  if (stateBoost) synergy *= 1.15; // Active positive state support
  if (chanceEvent) synergy *= 1.15; // Favorable chance event
  
  synergy = Math.min(100, synergy);

  return (
    <div className="h-full flex flex-col">
      <div className="mb-6 shrink-0">
        <h2 className="text-2xl font-bold text-slate-900">Michael Porters Diamant</h2>
        <p className="text-slate-500">
          Juster de 4 hjørnesten for at simulere en branches styrke. 
          Fordi faktorerne forstærker hinanden, vil en meget lav score i ét hjørne trække hele synergi-scoren markant ned (flaskehalseffekt).
        </p>
      </div>

      <div className="flex-grow flex items-center justify-center py-12 relative min-h-[500px]">
        <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[460px] md:h-[460px]">
          {/* Background diamond */}
          <div className="absolute inset-0 border-2 border-dashed border-slate-300 rotate-45 rounded-2xl bg-white/50"></div>

          {/* Top: Strategi & Struktur */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-56 bg-white p-4 rounded-xl border-2 border-blue-500 shadow-lg z-10 transition-transform hover:scale-105">
            <div className="text-[10px] font-bold text-blue-600 uppercase mb-1 text-center tracking-wider">Strategi & Struktur</div>
            <div className="text-xs font-medium text-center text-slate-600 mb-3 h-8">Firmastrategi og hård lokal rivalisering</div>
            <input 
              type="range" min="0" max="100" value={nodes.strategy} 
              onChange={(e) => setNodes({...nodes, strategy: Number(e.target.value)})}
              className="w-full accent-blue-500 cursor-pointer"
            />
            <div className="text-center text-xs font-mono mt-1 font-bold text-slate-700">{nodes.strategy}</div>
          </div>

          {/* Bottom: Indputfaktorer */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-48 sm:w-56 bg-white p-4 rounded-xl border-2 border-emerald-500 shadow-lg z-10 transition-transform hover:scale-105">
            <div className="text-[10px] font-bold text-emerald-600 uppercase mb-1 text-center tracking-wider">Indputfaktorer</div>
            <div className="text-xs font-medium text-center text-slate-600 mb-3 h-8">Arbejdskraft, råstoffer og infrastruktur</div>
            <input 
              type="range" min="0" max="100" value={nodes.factors} 
              onChange={(e) => setNodes({...nodes, factors: Number(e.target.value)})}
              className="w-full accent-emerald-500 cursor-pointer"
            />
            <div className="text-center text-xs font-mono mt-1 font-bold text-slate-700">{nodes.factors}</div>
          </div>

          {/* Left: Efterspørgsel */}
          <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-56 bg-white p-4 rounded-xl border-2 border-amber-500 shadow-lg z-10 transition-transform hover:scale-105">
            <div className="text-[10px] font-bold text-amber-600 uppercase mb-1 text-center tracking-wider">Efterspørgsel</div>
            <div className="text-xs font-medium text-center text-slate-600 mb-3 h-8">Kritiske og krævende kunder på hjemmemarkedet</div>
            <input 
              type="range" min="0" max="100" value={nodes.demand} 
              onChange={(e) => setNodes({...nodes, demand: Number(e.target.value)})}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <div className="text-center text-xs font-mono mt-1 font-bold text-slate-700">{nodes.demand}</div>
          </div>

          {/* Right: Netværk */}
          <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-48 sm:w-56 bg-white p-4 rounded-xl border-2 border-purple-500 shadow-lg z-10 transition-transform hover:scale-105">
            <div className="text-[10px] font-bold text-purple-600 uppercase mb-1 text-center tracking-wider">Netværk (Klynger)</div>
            <div className="text-xs font-medium text-center text-slate-600 mb-3 h-8">Stærke underleverandører og beslægtede firmaer</div>
            <input 
              type="range" min="0" max="100" value={nodes.network} 
              onChange={(e) => setNodes({...nodes, network: Number(e.target.value)})}
              className="w-full accent-purple-500 cursor-pointer"
            />
            <div className="text-center text-xs font-mono mt-1 font-bold text-slate-700">{nodes.network}</div>
          </div>

          {/* Center Synergi Score */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center bg-slate-900 w-32 h-32 rounded-full shadow-2xl border-4 border-white z-0">
            <div className={`text-4xl sm:text-5xl font-black ${synergy >= 80 ? 'text-emerald-400' : synergy >= 50 ? 'text-amber-400' : 'text-red-400'}`}>
              {synergy.toFixed(0)}
            </div>
            <div className="text-[9px] font-bold text-slate-300 uppercase tracking-widest mt-1">Synergi</div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 pb-4 shrink-0">
        <label className={`flex-1 p-4 rounded-xl border cursor-pointer transition-colors flex items-start gap-3 ${chanceEvent ? 'bg-blue-50 border-blue-300' : 'bg-white border-slate-200 hover:bg-slate-50'}`}>
          <input 
            type="checkbox" 
            checked={chanceEvent} 
            onChange={(e) => setChanceEvent(e.target.checked)} 
            className="mt-1 accent-blue-600 w-5 h-5 shrink-0"
          />
          <div>
            <div className={`text-sm font-bold ${chanceEvent ? 'text-blue-800' : 'text-slate-700'}`}>Tilfældigheder (Positiv)</div>
            <div className={`text-xs mt-1 leading-relaxed ${chanceEvent ? 'text-blue-600' : 'text-slate-500'}`}>
              Eks: En ny global trend eller opfindelse rammer markedet, som gavner branchen perfekt. <span className="font-bold">(+15% Synergi)</span>
            </div>
          </div>
        </label>
        
        <label className={`flex-1 p-4 rounded-xl border cursor-pointer transition-colors flex items-start gap-3 ${stateBoost ? 'bg-emerald-50 border-emerald-300' : 'bg-white border-slate-200 hover:bg-slate-50'}`}>
          <input 
            type="checkbox" 
            checked={stateBoost} 
            onChange={(e) => setStateBoost(e.target.checked)} 
            className="mt-1 accent-emerald-600 w-5 h-5 shrink-0"
          />
          <div>
            <div className={`text-sm font-bold ${stateBoost ? 'text-emerald-800' : 'text-slate-700'}`}>Aktiv Stat (Støtte)</div>
            <div className={`text-xs mt-1 leading-relaxed ${stateBoost ? 'text-emerald-600' : 'text-slate-500'}`}>
              Eks: Staten investerer massivt i infrastruktur og erhvervsuddannelser specifikt til denne klynge. <span className="font-bold">(+15% Synergi)</span>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}
