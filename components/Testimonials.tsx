import React from 'react';
import { TESTIMONIALS } from '../constants';
import { MessageSquareCode, Wifi } from 'lucide-react';
import { ScrambleText } from './NeoComponents';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-black border-y border-sci-dim relative">
        <div className="container mx-auto px-4">
             <div className="flex items-center gap-4 mb-12">
                 <div className="w-12 h-12 bg-sci-dim/20 border border-sci-dim flex items-center justify-center text-sci-cyan">
                     <Wifi size={24} className="animate-pulse" />
                 </div>
                 <div>
                     <h2 className="text-2xl md:text-3xl font-bold text-white uppercase">
                        <ScrambleText text="Intercepted Transmissions" />
                     </h2>
                     <span className="text-xs font-mono text-gray-500">DECRYPTING USER LOGS...</span>
                 </div>
             </div>

             <div className="grid md:grid-cols-3 gap-6">
                {TESTIMONIALS.map((t, idx) => (
                    <div key={idx} className="bg-sci-panel border border-sci-dim p-6 relative group hover:border-sci-cyan/50 transition-colors">
                        <div className="flex justify-between items-start mb-4 border-b border-gray-800 pb-2">
                            <div>
                                <span className="block font-mono text-xs text-sci-cyan uppercase mb-1">{t.user}</span>
                                <span className="block font-mono text-[10px] text-gray-500 uppercase">{t.role}</span>
                            </div>
                            <MessageSquareCode size={16} className="text-gray-600 group-hover:text-sci-cyan" />
                        </div>
                        <p className="font-mono text-sm text-gray-300 leading-relaxed">
                            "{t.msg}"
                        </p>
                        
                        {/* Corner Accents */}
                        <div className="absolute bottom-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                             <div className="text-[9px] font-mono text-sci-cyan">MSG_ID: {4092 + idx}</div>
                        </div>
                    </div>
                ))}
             </div>
        </div>
    </section>
  );
};

export default Testimonials;