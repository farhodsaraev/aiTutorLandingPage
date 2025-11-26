import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-sci-panel border border-sci-dim w-full max-w-md shadow-[0_0_30px_rgba(0,0,0,0.8)] animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-sci-dim bg-black/50">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-sci-red animate-pulse"></div>
                <h3 className="font-mono text-sm font-bold text-white uppercase tracking-widest">{title}</h3>
            </div>
            <button 
                onClick={onClose}
                className="text-gray-500 hover:text-sci-red transition-colors"
            >
                <X size={20} />
            </button>
        </div>

        {/* Body */}
        <div className="p-6">
            {children}
        </div>

        {/* Tech Decor */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-sci-cyan"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-sci-cyan"></div>
      </div>
    </div>
  );
};

export default Modal;