import React from 'react';
import { ScrambleText, NeoCard } from './NeoComponents';
import { X, Check, ArrowRight } from 'lucide-react';

const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-24 bg-sci-base relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
                 <span className="text-sci-red font-mono text-sm tracking-widest uppercase mb-2 block">System Conflict Detected</span>
                 <h2 className="text-4xl md:text-5xl font-bold uppercase text-white mb-4">
                    <ScrambleText text="THE PROTOCOL" />
                 </h2>
                 <p className="text-gray-400 font-mono max-w-2xl mx-auto">
                    Traditional education builds compliant workers. We build system architects.
                 </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                
                {/* The Old Way */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-sci-dim/20 skew-y-2 group-hover:skew-y-0 transition-transform duration-500"></div>
                    <div className="relative p-8 border border-gray-800 bg-black/50 grayscale hover:grayscale-0 transition-all duration-500">
                        <h3 className="text-xl font-bold text-gray-500 mb-6 uppercase tracking-wider flex items-center gap-2">
                             <X size={20} /> Standard Education
                        </h3>
                        <ul className="space-y-4 font-mono text-sm text-gray-500">
                            <li className="flex items-start gap-3">
                                <span className="block mt-1 w-1 h-1 bg-gray-500 rounded-full"></span>
                                "Memorize this syntax."
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="block mt-1 w-1 h-1 bg-gray-500 rounded-full"></span>
                                Copy-paste from tutorials without understanding.
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="block mt-1 w-1 h-1 bg-gray-500 rounded-full"></span>
                                Shields you from errors and crashes.
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="block mt-1 w-1 h-1 bg-gray-500 rounded-full"></span>
                                Result: You panic when things break.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* The Reverse Engineer Way */}
                <div className="relative group">
                     {/* Glowing backdrop */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-sci-cyan to-sci-yellow opacity-75 blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    
                    <NeoCard className="relative bg-sci-panel h-full border-sci-cyan" color="border-sci-cyan">
                        <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-2 text-sci-cyan">
                             <Check size={20} /> Reverse Engineering
                        </h3>
                        <ul className="space-y-4 font-mono text-sm text-gray-300">
                            <li className="flex items-start gap-3">
                                <ArrowRight size={14} className="mt-1 text-sci-yellow shrink-0" />
                                "Here is a broken engine. Fix it."
                            </li>
                            <li className="flex items-start gap-3">
                                <ArrowRight size={14} className="mt-1 text-sci-yellow shrink-0" />
                                Analyze raw memory dumps and stack traces.
                            </li>
                            <li className="flex items-start gap-3">
                                <ArrowRight size={14} className="mt-1 text-sci-yellow shrink-0" />
                                We intentionally crash your environment.
                            </li>
                            <li className="flex items-start gap-3">
                                <ArrowRight size={14} className="mt-1 text-sci-yellow shrink-0" />
                                Result: You are calm in the chaos.
                            </li>
                        </ul>
                    </NeoCard>
                </div>
            </div>

            <div className="mt-16 p-6 border border-sci-dim bg-sci-dim/10 text-center font-mono text-sm text-gray-400">
                <p className="max-w-3xl mx-auto">
                    "To understand the system, you must become the error."
                </p>
            </div>
        </div>
    </section>
  );
};

export default Methodology;