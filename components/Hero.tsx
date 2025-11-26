import React, { useState, useEffect } from 'react';
import { NeoButton } from './NeoComponents';
import { ChevronRight, Cpu, Activity, Database, Radio } from 'lucide-react';

const Hero: React.FC = () => {
  const [cpuLoad, setCpuLoad] = useState(89);
  const [loadHistory, setLoadHistory] = useState<number[]>(new Array(12).fill(40));

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate fluctuating load between 60% and 98%
      const newLoad = Math.floor(Math.random() * (98 - 60 + 1) + 60);
      setCpuLoad(newLoad);
      
      setLoadHistory(prev => {
        const newHistory = [...prev.slice(1), newLoad];
        return newHistory;
      });
    }, 600); // Fast update for "busy" feel

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-sci-base overflow-hidden pt-20 border-b border-sci-dim">
        {/* Grid Background */}
        <div className="absolute inset-0 pointer-events-none bg-[size:40px_40px] bg-grid-pattern opacity-20"></div>
        
        {/* Radial Fade */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-sci-base/50 to-sci-base"></div>

        <div className="container mx-auto px-4 z-10 grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Text Content */}
            <div className="lg:col-span-7 space-y-8 relative">
                {/* Decorative Status Line */}
                <div className="flex items-center gap-2 text-sci-cyan/60 font-mono text-xs animate-pulse">
                    <Activity size={14} />
                    <span>SYSTEM_ONLINE // V.2.0.45</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter uppercase text-white font-sans">
                    Reverse <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sci-cyan to-blue-600">Engineering</span><br/>
                    <span className="text-sci-yellow">Protocol</span>
                </h1>
                
                <div className="flex items-start gap-4 border-l-2 border-sci-cyan pl-6 py-2 bg-sci-cyan/5 max-w-2xl">
                    <div className="font-mono text-sci-text text-lg md:text-xl leading-relaxed">
                        <span className="text-sci-cyan font-bold">>> INIT: </span>
                        Deconstruct modern software architecture. Learn robotics, AI, and cybersecurity by tearing them apart piece by piece.
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 pt-6">
                    <NeoButton size="lg" className="flex items-center gap-2 group">
                        INITIATE_SEQUENCE <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                    </NeoButton>
                    <NeoButton size="lg" variant="secondary">
                        ACCESS_MANIFESTO
                    </NeoButton>
                </div>
            </div>

            {/* Right Column: Visual Schematic */}
            <div className="lg:col-span-5 relative hidden md:block">
                <div className="relative w-full aspect-square border border-sci-dim bg-sci-panel/50 backdrop-blur-sm p-2">
                    {/* Corners */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-sci-cyan"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-sci-cyan"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-sci-cyan"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-sci-cyan"></div>

                    {/* Inner Content */}
                    <div className="w-full h-full border border-sci-dim relative overflow-hidden group">
                        {/* Scanning Line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-sci-cyan/50 shadow-[0_0_15px_#00f3ff] animate-scanline z-20"></div>
                        
                        {/* Center Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Cpu size={160} strokeWidth={1} className={`text-sci-dim transition-colors duration-100 ${cpuLoad > 95 ? 'text-sci-red/20' : 'group-hover:text-sci-cyan'}`} />
                        </div>

                        {/* Animated CPU Load Panel */}
                        <div className="absolute top-8 left-8 p-3 border border-sci-dim bg-black/90 backdrop-blur z-30 shadow-[0_0_15px_rgba(0,0,0,0.5)] min-w-[140px]">
                            <div className="flex justify-between items-center mb-1 text-[10px] font-mono tracking-widest text-gray-500">
                                <span>CPU_01</span>
                                <Activity size={10} className="text-sci-cyan animate-pulse"/>
                            </div>
                            <div className="flex items-end justify-between mb-2">
                                <span className={`text-xl font-bold font-mono leading-none ${cpuLoad > 90 ? 'text-sci-red' : 'text-sci-yellow'}`}>
                                    {cpuLoad}%
                                </span>
                                <span className="text-[9px] font-mono text-gray-500 mb-1">LOAD</span>
                            </div>
                            
                            {/* Horizontal Bar */}
                            <div className="w-full h-1 bg-gray-800 mb-2 overflow-hidden">
                                <div 
                                    className={`h-full transition-all duration-300 ease-out ${cpuLoad > 90 ? 'bg-sci-red' : 'bg-sci-yellow'}`}
                                    style={{ width: `${cpuLoad}%` }}
                                ></div>
                            </div>

                            {/* Histogram Visualization */}
                            <div className="flex items-end justify-between h-8 gap-[2px]">
                                {loadHistory.map((val, idx) => (
                                    <div 
                                        key={idx} 
                                        className={`w-full transition-all duration-300 ${val > 90 ? 'bg-sci-red' : 'bg-sci-cyan'}`}
                                        style={{ height: `${val}%`, opacity: (idx + 1) / loadHistory.length }}
                                    ></div>
                                ))}
                            </div>
                        </div>

                        {/* Floating Data Points */}
                        <div className="absolute bottom-20 right-10 p-2 border border-sci-dim bg-black/80 font-mono text-xs text-sci-red animate-pulse">
                            {cpuLoad > 92 ? 'WARNING: OVERHEAT' : 'THREAT: DETECTED'}
                        </div>

                         {/* Background Schematic Lines */}
                         <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 400 400">
                            <circle cx="200" cy="200" r="100" fill="none" stroke="#fff" strokeWidth="1" strokeDasharray="5,5" className="animate-[spin_10s_linear_infinite]" />
                            <circle cx="200" cy="200" r="150" fill="none" stroke="#fff" strokeWidth="0.5" />
                            <line x1="0" y1="200" x2="400" y2="200" stroke="#fff" strokeWidth="0.5" />
                            <line x1="200" y1="0" x2="200" y2="400" stroke="#fff" strokeWidth="0.5" />
                         </svg>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Bottom ticker */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-black border-t border-sci-dim flex items-center overflow-hidden">
            <div className="animate-marquee whitespace-nowrap font-mono text-xs text-gray-500 flex gap-8 px-4">
                <span>SYSTEM STATUS: OPTIMAL</span>
                <span>//</span>
                <span>NEW MODULES DETECTED</span>
                <span>//</span>
                <span>USER: GUEST</span>
                <span>//</span>
                <span>LOCATION: UNKNOWN SECTOR</span>
                <span>//</span>
                <span>SECURITY LEVEL: 0</span>
            </div>
        </div>
    </section>
  );
};

export default Hero;