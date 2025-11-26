import React from 'react';
import { FEATURES } from '../constants';
import { NeoCard } from './NeoComponents';

const Features: React.FC = () => {
  return (
    <section id="modules" className="py-24 bg-sci-base relative">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-2">
                <span className="text-sci-cyan font-mono text-sm tracking-widest uppercase">Available Upgrades</span>
                <h2 className="text-4xl md:text-6xl font-bold uppercase text-white">
                    Core <span className="text-sci-yellow">Modules</span>
                </h2>
            </div>
            <p className="font-mono text-sm md:text-base max-w-md text-gray-400 border-l-2 border-sci-dim pl-4">
                Install these knowledge packets to upgrade your neural understanding of digital systems.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature) => (
                <NeoCard 
                    key={feature.id} 
                    color={feature.color.split(' ')[0]} 
                    className={`group hover:-translate-y-1 ${feature.color.split(' ')[0]}`}
                >
                    <div className={`mb-6 p-4 inline-block bg-black border border-current shadow-lg ${feature.color.split(' ')[1]}`}>
                        {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold uppercase mb-3 leading-tight text-white group-hover:text-sci-cyan transition-colors">
                        {feature.title}
                    </h3>
                    <p className="font-mono text-xs text-gray-400 leading-relaxed border-t border-dashed border-gray-800 pt-4 mt-2">
                        {feature.description}
                    </p>
                    
                    {/* Hover tech decoration */}
                    <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                         <div className="w-2 h-2 bg-current animate-pulse"></div>
                    </div>
                </NeoCard>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Features;