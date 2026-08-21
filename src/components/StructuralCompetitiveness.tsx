import { useState } from 'react';

const conditions = [
  {
    id: "uddannelse",
    title: "Uddannelsesniveau",
    description: "Veluddannet arbejdskraft sikrer høj kvalitet og færre fejl i produktionen.",
    numberColor: "bg-blue-100 text-blue-600",
    accent: "accent-blue-600"
  },
  {
    id: "forskning",
    title: "Forskning & Udvikling",
    description: "Samspil mellem universiteter og erhvervsliv skaber nye patenterede produkter.",
    numberColor: "bg-emerald-100 text-emerald-600",
    accent: "accent-emerald-600"
  },
  {
    id: "infrastruktur",
    title: "Infrastruktur",
    description: "Effektiv transport og digitalisering (5G/Fiber) mindsker spildtid for firmaer.",
    numberColor: "bg-purple-100 text-purple-600",
    accent: "accent-purple-600"
  },
  {
    id: "service",
    title: "Offentlig Service",
    description: "Hvor nemt er det at få tilladelser? Lav korruption og høj gennemsigtighed.",
    numberColor: "bg-amber-100 text-amber-600",
    accent: "accent-amber-600"
  },
  {
    id: "finansiering",
    title: "Finansiering",
    description: "Adgang til venturekapital og lån til opstart af innovative virksomheder.",
    numberColor: "bg-pink-100 text-pink-600",
    accent: "accent-pink-600"
  },
  {
    id: "love",
    title: "Regelsæt & Love",
    description: "Sunde rammer for forbrugerbeskyttelse og fair konkurrence i markedet.",
    numberColor: "bg-indigo-100 text-indigo-600",
    accent: "accent-indigo-600"
  }
];

export default function StructuralCompetitiveness() {
  const [scores, setScores] = useState<Record<string, number>>({
    uddannelse: 80,
    forskning: 70,
    infrastruktur: 90,
    service: 80,
    finansiering: 60,
    love: 85
  });

  const avgScore = Object.values(scores).reduce((a, b) => a + b, 0) / 6;

  let status = "";
  let statusColor = "";
  if (avgScore >= 80) {
    status = "Fremragende rammebetingelser! Landet er en magnet for globale investeringer og innovation.";
    statusColor = "text-emerald-700 bg-emerald-50 border-emerald-200";
  } else if (avgScore >= 50) {
    status = "Gennemsnitlige vilkår. Virksomhederne kan overleve, men er udfordret af middelmådige rammer.";
    statusColor = "text-blue-700 bg-blue-50 border-blue-200";
  } else {
    status = "Kritiske problemer! Høj risiko for at virksomheder outsourcer produktionen til udlandet.";
    statusColor = "text-red-700 bg-red-50 border-red-200";
  }

  return (
    <div className="h-full flex flex-col">
      <div className="mb-6 flex flex-col sm:flex-row justify-between sm:items-end gap-4 shrink-0">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Strukturel Konkurrenceevne</h2>
          <p className="text-slate-500">
            Juster på rammebetingelserne (0-100) for at se, hvordan det påvirker landets samlede attraktivitet for virksomheder.
          </p>
        </div>
        
        <div className="text-right bg-white p-4 rounded-xl border border-slate-200 shadow-sm min-w-[200px] shrink-0">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Samlet Vurdering</div>
          <div className="text-4xl font-black text-slate-800">{avgScore.toFixed(1)}</div>
        </div>
      </div>
      
      <div className={`mb-6 p-4 rounded-xl border text-sm font-bold ${statusColor} transition-colors shrink-0`}>
        {status}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pb-8">
        {conditions.map((condition, index) => (
          <div key={condition.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col">
            <div className="flex items-center gap-3 mb-4 shrink-0">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${condition.numberColor} shrink-0`}>
                {index + 1}
              </div>
              <h3 className="font-bold leading-tight text-slate-800">{condition.title}</h3>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">{condition.description}</p>
            
            <div className="mt-auto shrink-0">
              <div className="flex justify-between text-xs font-bold text-slate-400 mb-2 uppercase">
                <span>Svag</span>
                <span className="text-slate-700 font-mono text-sm bg-slate-100 px-2 py-0.5 rounded">{scores[condition.id]}</span>
                <span>Stærk</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={scores[condition.id]} 
                onChange={(e) => setScores({...scores, [condition.id]: Number(e.target.value)})}
                className={`w-full ${condition.accent} cursor-pointer`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
