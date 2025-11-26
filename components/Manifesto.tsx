import React from 'react';

const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-24 bg-black border-y border-sci-dim relative overflow-hidden">
        {/* Scrolling text background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden select-none">
             <div className="text-[10rem] font-bold text-gray-800 whitespace-nowrap animate-marquee">
                DECONSTRUCT REBUILD OPTIMIZE DECONSTRUCT REBUILD OPTIMIZE
             </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
                <div className="border-l-2 border-sci-yellow pl-8 py-4 mb-8">
                    <h2 className="text-4xl md:text-6xl font-bold text-white uppercase mb-2">The Manifesto</h2>
                    <p className="font-mono text-sci-yellow text-sm">DOC_REF: #492-ALPHA</p>
                </div>

                <div className="space-y-8 font-mono text-gray-300 leading-relaxed text-lg">
                    <p>
                        <strong className="text-white">01. BLACK BOXES ARE FOR CIVILIANS.</strong><br/>
                        We don't accept "it just works." If you don't know how it breaks, you don't know how it works. We tear apart libraries, frameworks, and hardware to see the sparks.
                    </p>
                    
                    <p>
                        <strong className="text-white">02. FAILURE IS DATA.</strong><br/>
                        Clean code is a myth. Production is a warzone. We teach you to survive the errors, the memory leaks, and the race conditions by intentionally causing them.
                    </p>

                    <p>
                        <strong className="text-white">03. THE MACHINE IS NEUTRAL.</strong><br/>
                        It does exactly what you tell it to do, not what you want it to do. To master the machine, you must think in absolute logic.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Manifesto;