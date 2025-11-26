import React, { useState, useEffect, useRef } from 'react';

interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  corner?: boolean;
}

export const NeoButton: React.FC<NeoButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  corner = true,
  ...props 
}) => {
  const baseStyle = "relative font-mono font-bold transition-all duration-200 uppercase tracking-wider flex items-center justify-center group overflow-hidden";
  
  // Mecha-style variants
  const variants = {
    primary: "bg-sci-yellow text-black border border-sci-yellow hover:bg-black hover:text-sci-yellow hover:shadow-[0_0_15px_rgba(252,238,10,0.5)]",
    secondary: "bg-transparent text-sci-cyan border border-sci-cyan hover:bg-sci-cyan/10 hover:shadow-[0_0_15px_rgba(0,243,255,0.3)]",
    danger: "bg-sci-red/10 text-sci-red border border-sci-red hover:bg-sci-red hover:text-black hover:shadow-[0_0_15px_rgba(255,42,42,0.5)]",
    ghost: "bg-transparent text-gray-400 hover:text-white border border-transparent hover:border-sci-dim",
  };

  const sizes = {
    sm: "px-4 py-1 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-10 py-4 text-base",
  };
  
  // Corner clip-path style for that "cut corner" look
  const clipPathStyle = corner ? { clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' } : {};

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      style={clipPathStyle}
      {...props}
    >
        {/* Animated grid background for primary buttons on hover (optional subtle effect) */}
        {variant === 'primary' && (
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>
        )}
      {children}
    </button>
  );
};

export const NeoCard: React.FC<{
  children: React.ReactNode;
  color?: string; // Used for border color now
  className?: string;
  title?: string;
  icon?: React.ReactNode;
}> = ({ children, color = 'border-sci-dim', className = '', title, icon }) => {
  return (
    <div className={`relative bg-sci-panel border ${color} p-6 group transition-all duration-300 ${className}`}>
        {/* Decorative Corner Markers */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-current opacity-50"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-current opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-current opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-current opacity-50"></div>
        
        {/* Technical ID Number Randomizer (Visual only) */}
        <div className="absolute top-2 right-2 text-[10px] font-mono text-gray-600 opacity-50 select-none">
            SYS-{(Math.random() * 1000).toFixed(0)}
        </div>

      {title && (
        <div className="flex items-center gap-3 border-b border-gray-800 pb-4 mb-4">
            {icon && <div className="text-current">{icon}</div>}
          <h3 className="text-lg font-bold font-sans tracking-widest uppercase text-white group-hover:text-sci-cyan transition-colors">
              {title}
          </h3>
        </div>
      )}
      {children}
    </div>
  );
};

export const NeoBadge: React.FC<{ children: React.ReactNode; variant?: 'cyan' | 'yellow' | 'red' }> = ({ children, variant = 'cyan' }) => {
  const colors = {
      cyan: 'text-sci-cyan border-sci-cyan bg-sci-cyan/10',
      yellow: 'text-sci-yellow border-sci-yellow bg-sci-yellow/10',
      red: 'text-sci-red border-sci-red bg-sci-red/10',
  }
  return (
    <span className={`${colors[variant]} border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest`}>
      {children}
    </span>
  );
};

export const TechLine: React.FC<{ className?: string }> = ({ className = "" }) => (
    <div className={`h-[1px] w-full bg-gradient-to-r from-transparent via-sci-dim to-transparent ${className}`}></div>
);

// New Component: Scramble Text Effect
export const ScrambleText: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
    const [display, setDisplay] = useState(text);
    const [hovering, setHovering] = useState(false);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';
    const intervalRef = useRef<number | null>(null);

    const startScramble = () => {
        let iteration = 0;
        clearInterval(intervalRef.current as number);
        
        intervalRef.current = window.setInterval(() => {
            setDisplay(prev => text
                .split('')
                .map((letter, index) => {
                    if(index < iteration) return text[index];
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join('')
            );
            
            if(iteration >= text.length) {
                clearInterval(intervalRef.current as number);
            }
            
            iteration += 1/3; 
        }, 30);
    };

    useEffect(() => {
        startScramble();
        return () => clearInterval(intervalRef.current as number);
    }, [text]);

    return (
        <span 
            className={`inline-block ${className}`}
            onMouseEnter={startScramble}
        >
            {display}
        </span>
    );
}