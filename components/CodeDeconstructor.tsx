import React, { useState } from 'react';
import { NeoButton, NeoCard, NeoBadge } from './NeoComponents';
import { deconstructCode } from '../services/geminiService';
import { PRESET_CODE_SNIPPETS } from '../constants';
import { DeconstructionResult } from '../types';
import { Terminal, Cpu, Loader2, Play, TriangleAlert, BrainCircuit } from 'lucide-react';

const CodeDeconstructor: React.FC = () => {
  const [inputCode, setInputCode] = useState(PRESET_CODE_SNIPPETS[0].code);
  const [result, setResult] = useState<DeconstructionResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleDeconstruct = async () => {
    if (!inputCode.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const data = await deconstructCode(inputCode);
      setResult(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai" className="py-24 bg-[#0a0a0c] relative border-y border-sci-dim">
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5" 
           style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center relative">
             <div className="inline-flex items-center gap-2 border border-sci-yellow text-sci-yellow px-4 py-1 rounded-full text-xs font-mono uppercase mb-4 tracking-widest">
                <BrainCircuit size={14} /> Neural Link Active
             </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white uppercase mb-4">
                Code <span className="text-sci-cyan">Deconstructor</span>
            </h2>
            <p className="text-gray-400 font-mono max-w-2xl mx-auto">
                // INPUT_SOURCE: Submit raw code. <br/>
                // PROCESS: AI Analysis. <br/>
                // OUTPUT: Vulnerabilities & Logic Flow.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Input Interface */}
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 mb-2">
                <div className="h-1 w-12 bg-sci-cyan"></div>
                <span className="font-mono text-xs text-sci-cyan uppercase">Terminal_Input_01</span>
            </div>
            
            <NeoCard color="border-sci-cyan" className="h-full flex flex-col p-0 overflow-hidden bg-black !p-0">
               <div className="bg-sci-dim/30 p-2 flex gap-2 border-b border-sci-dim overflow-x-auto scrollbar-hide">
                  {PRESET_CODE_SNIPPETS.map((snippet, idx) => (
                    <button
                      key={idx}
                      onClick={() => setInputCode(snippet.code)}
                      className="px-3 py-1 text-[10px] font-mono uppercase tracking-wide border border-sci-dim text-gray-400 hover:text-white hover:border-white transition-all whitespace-nowrap"
                    >
                      {snippet.label}
                    </button>
                  ))}
                </div>

                <div className="relative flex-grow">
                     <textarea
                        value={inputCode}
                        onChange={(e) => setInputCode(e.target.value)}
                        className="w-full h-full p-6 font-mono text-sm bg-black/50 text-sci-cyan border-none focus:outline-none resize-none font-bold"
                        spellCheck={false}
                    />
                    {/* Line numbers decoration */}
                    <div className="absolute top-6 left-2 bottom-6 w-4 text-right text-[10px] text-gray-700 font-mono leading-5 select-none hidden sm:block">
                        1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7
                    </div>
                </div>
                
                <div className="p-4 border-t border-sci-dim bg-sci-panel/50">
                    <NeoButton 
                        onClick={handleDeconstruct} 
                        disabled={loading} 
                        className="w-full flex items-center justify-center gap-2"
                        variant="primary"
                    >
                    {loading ? <Loader2 className="animate-spin" /> : <Play size={18} fill="currentColor" />}
                    {loading ? 'PROCESSING_NEURAL_NET...' : 'EXECUTE_ANALYSIS'}
                    </NeoButton>
                </div>
            </NeoCard>
          </div>

          {/* Output Interface */}
          <div className="flex flex-col h-full relative">
             <div className="flex items-center gap-2 mb-2 justify-end">
                <span className="font-mono text-xs text-sci-yellow uppercase">Analysis_Output_01</span>
                <div className="h-1 w-12 bg-sci-yellow"></div>
            </div>

             <NeoCard color="border-sci-yellow" className="h-full relative z-10 bg-black/80 !p-0 flex flex-col min-h-[400px]">
                {/* Header of HUD */}
                <div className="h-8 bg-sci-yellow/10 border-b border-sci-yellow/30 flex items-center px-4 justify-between">
                     <div className="flex gap-1">
                         <div className="w-2 h-2 rounded-full bg-red-500"></div>
                         <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                         <div className="w-2 h-2 rounded-full bg-green-500"></div>
                     </div>
                     <span className="font-mono text-[10px] text-sci-yellow">GEMINI-V2.5-FLASH</span>
                </div>

                <div className="flex-grow p-6 relative overflow-hidden">
                    {/* Grid overlay inside HUD */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none"></div>

                    {result ? (
                        <div className="space-y-6 animate-fadeIn relative z-10">
                            <div className="flex justify-between items-start border-b border-dashed border-gray-700 pb-4">
                                 <div>
                                    <span className="block text-[10px] font-mono text-gray-500 uppercase mb-1">Threat Level</span>
                                    <div className="flex items-center gap-2">
                                        <TriangleAlert size={16} className={result.difficulty === 'ELITE' ? 'text-sci-red' : 'text-sci-cyan'} />
                                        <span className={`text-2xl font-black font-sans tracking-tighter uppercase ${result.difficulty === 'ELITE' ? 'text-sci-red' : 'text-white'}`}>
                                            {result.difficulty}
                                        </span>
                                    </div>
                                 </div>
                                 <Cpu size={32} className="text-sci-dim opacity-50" />
                            </div>
                            
                            <div className="prose prose-invert">
                                <p className="font-mono text-sm leading-relaxed text-gray-300">
                                    <span className="text-sci-yellow mr-2">>></span>
                                    {result.explanation}
                                </p>
                            </div>

                            <div>
                                <span className="text-[10px] font-mono uppercase text-gray-500 mb-2 block">Identified Sub-routines:</span>
                                <div className="flex flex-wrap gap-2">
                                    {result.concepts.map((concept, i) => (
                                        <NeoBadge key={i} variant="cyan">{concept}</NeoBadge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                            <Terminal size={48} className="mb-4 text-sci-yellow animate-pulse" />
                            <p className="font-mono text-sm text-sci-yellow">AWAITING_DATA_STREAM</p>
                        </div>
                    )}
                </div>
             </NeoCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeDeconstructor;