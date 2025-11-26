import React from 'react';
import { ROADMAP_STEPS } from '../constants';
import { ScrambleText } from './NeoComponents';
import { Lock, Unlock, Crosshair } from 'lucide-react';

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-24 bg-sci-base relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
                 <span className="text-sci-yellow font-mono text-sm tracking-widest uppercase mb-2 block">Initialization Sequence</span>
                 <h2 className="text-4xl md:text-5xl font-bold uppercase text-white">
                    <ScrambleText text="System Roadmap" />
                 </h2>
            </div>

            <div className="max-w-4xl mx-auto relative">
                {/* Vertical Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-sci-dim transform -translate-x-1/2"></div>
                
                {/* Scanning Laser Effect */}
                <div className="absolute left-4 md:left-1/2 top-0 w-full h-24 bg-gradient-to-b from-sci-cyan/0 via-sci-cyan/50 to-sci-cyan/0 w-[2px] transform -translate-x-1/2 animate-scanline opacity-50"></div>

                <div className="space-y-12">
                    {ROADMAP_STEPS.map((step, idx) => (
                        <div key={idx} className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            
                            {/* Connector Node */}
                            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-sci-base border-2 border-sci-dim rounded-full flex items-center justify-center z-10 group-hover:border-sci-cyan transition-colors">
                                <div className={`w-2 h-2 rounded-full ${step.status === 'ONLINE' ? 'bg-sci-cyan animate-pulse' : 'bg-gray-700'}`}></div>
                            </div>

                            {/* Content Card */}
                            <div className="w-full md:w-[calc(50%-2rem)] ml-12 md:ml-0 group">
                                <div className={`p-6 border ${step.status === 'ONLINE' ? 'border-sci-cyan/30 bg-sci-cyan/5' : 'border-sci-dim bg-sci-panel'} relative hover:border-sci-cyan transition-colors`}>
                                    
                                    <div className="flex justify-between items-start mb-2">
                                        <span className={`font-mono text-xs uppercase tracking-widest ${step.status === 'ONLINE' ? 'text-sci-cyan' : 'text-gray-600'}`}>
                                            {step.phase}
                                        </span>
                                        {step.status === 'ONLINE' ? <Unlock size={14} className="text-sci-cyan"/> : <Lock size={14} className="text-gray-600"/>}
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-white uppercase mb-2 group-hover:text-sci-cyan transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="font-mono text-sm text-gray-400">
                                        {step.desc}
                                    </p>

                                    {/* Tech decoration on hover */}
                                    <div className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100">
                                         <Crosshair size={12} className="text-sci-cyan" />
                                    </div>
                                </div>
                            </div>

                             {/* Empty Spacer for alternating layout */}
                             <div className="hidden md:block w-[calc(50%-2rem)]"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Roadmap;