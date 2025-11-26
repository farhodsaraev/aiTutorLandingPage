import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Twitter, Command } from 'lucide-react';
import Hero from './components/Hero';
import Features from './components/Features';
import CodeDeconstructor from './components/CodeDeconstructor';
import Manifesto from './components/Manifesto';
import Methodology from './components/Methodology';
import Roadmap from './components/Roadmap';
import Testimonials from './components/Testimonials';
import Modal from './components/Modal';
import { NeoButton } from './components/NeoComponents';
import { NAV_ITEMS, MODAL_CONTENT } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (type: string) => {
      setModalType(type);
      setModalOpen(true);
      setIsMenuOpen(false);
  };

  const handleNavClick = (href: string) => {
      setIsMenuOpen(false);
      // Smooth scroll if anchor
      if (href.startsWith('#')) {
          const element = document.querySelector(href);
          if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
          }
      }
  };

  return (
    <div className="min-h-screen bg-sci-base font-sans selection:bg-sci-cyan selection:text-black">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-sci-dim ${scrolled ? 'bg-sci-base/90 backdrop-blur-md py-2' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top:0, behavior: 'smooth'})}>
                <div className="w-8 h-8 bg-black border border-sci-dim flex items-center justify-center group-hover:border-sci-cyan transition-colors">
                    <Command size={16} className="text-white" />
                </div>
                <div className="flex flex-col">
                    <span className="text-lg font-bold tracking-tight uppercase text-white leading-none group-hover:text-sci-cyan transition-colors">
                        REVERSE_ENGINEER
                    </span>
                    <span className="text-[10px] font-mono text-gray-500 leading-none tracking-widest">
                        SYSTEM_VER_2.0
                    </span>
                </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-6 items-center">
                {NAV_ITEMS.map((item) => (
                    <button 
                        key={item.label} 
                        onClick={() => handleNavClick(item.href)}
                        className="font-mono text-[10px] xl:text-xs font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-widest relative group"
                    >
                        {item.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-sci-cyan group-hover:w-full transition-all duration-300"></span>
                    </button>
                ))}
                <NeoButton size="sm" variant="danger" corner={false} onClick={() => openModal('LOGIN')}>
                    LOGIN
                </NeoButton>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
                className="lg:hidden p-2 border border-sci-dim text-white bg-black hover:border-sci-cyan transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-sci-base border-b border-sci-dim p-4 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-2">
                {NAV_ITEMS.map((item) => (
                    <button 
                        key={item.label} 
                        onClick={() => handleNavClick(item.href)}
                        className="text-left font-bold text-xl uppercase border-b border-gray-800 py-3 text-white hover:pl-4 hover:text-sci-cyan transition-all"
                    >
                        {item.label}
                    </button>
                ))}
                <NeoButton className="w-full mt-4" onClick={() => openModal('LOGIN')}>LOGIN</NeoButton>
            </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <Manifesto />
        <Methodology />
        <Features />
        <Roadmap />
        <CodeDeconstructor />
        <Testimonials />
        
        {/* Simple Pricing/CTA Section */}
        <section id="pricing" className="py-24 bg-sci-yellow border-t border-black relative overflow-hidden">
            <div className="absolute inset-0 bg-caution-tape opacity-10 pointer-events-none"></div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
                <h2 className="text-5xl md:text-8xl font-black mb-8 uppercase text-black">
                    Breach The <br/> Mainframe
                </h2>
                <div className="max-w-xl mx-auto bg-black p-1">
                    <div className="border border-sci-dim p-8 bg-sci-base relative">
                         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sci-red via-sci-yellow to-sci-cyan"></div>
                        
                        <h3 className="text-2xl font-bold mb-4 uppercase text-white font-mono">Request Access</h3>
                        <p className="font-mono mb-8 text-sm text-gray-400">
                            We limit entry to maintain server integrity. <br/>
                            Current Waitlist: <span className="text-sci-red">8,402</span>
                        </p>
                        
                        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative">
                                <input 
                                    type="email" 
                                    placeholder="USER@NET.COM" 
                                    className="w-full p-4 bg-black border border-sci-dim text-white font-mono focus:border-sci-cyan focus:outline-none placeholder:text-gray-700"
                                />
                                <div className="absolute top-0 right-0 bottom-0 w-2 bg-sci-dim"></div>
                            </div>
                            <NeoButton className="w-full" variant="primary">TRANSMIT REQUEST</NeoButton>
                        </form>
                    </div>
                </div>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-sci-dim font-mono text-sm relative">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">
            <div>
                <div className="flex items-center gap-2 mb-4 text-sci-yellow">
                     <Command size={20} />
                     <h4 className="text-lg font-bold uppercase">System_Root</h4>
                </div>
                <p className="text-gray-500 leading-relaxed">
                    Deconstructing the illusion of complexity. <br/>
                    Built for the next generation of hardware hackers and software architects.
                </p>
            </div>
            <div className="flex flex-col gap-3">
                <h4 className="text-gray-300 font-bold uppercase mb-2">Protocols</h4>
                <button onClick={() => openModal('TERMS')} className="text-left text-gray-500 hover:text-sci-cyan transition-colors">>> Terms_of_Service</button>
                <button onClick={() => openModal('PRIVACY')} className="text-left text-gray-500 hover:text-sci-cyan transition-colors">>> Privacy_Link</button>
                <button onClick={() => handleNavClick('#manifesto')} className="text-left text-gray-500 hover:text-sci-cyan transition-colors">>> View_Manifesto</button>
            </div>
            <div>
                <h4 className="text-gray-300 font-bold uppercase mb-4">Frequency</h4>
                <div className="flex gap-4 items-start">
                    <a href="#" className="p-3 bg-sci-dim/30 border border-sci-dim hover:border-white hover:bg-white hover:text-black transition-all">
                        <Github size={20} />
                    </a>
                    <a href="#" className="p-3 bg-sci-dim/30 border border-sci-dim hover:border-sci-cyan hover:bg-sci-cyan hover:text-black transition-all">
                        <Twitter size={20} />
                    </a>
                </div>
            </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-900 text-center text-xs text-gray-700">
            [ SYSTEM ID: 449-22-X ] // ALL RIGHTS RESERVED 2024
        </div>
      </footer>

      {/* Generic Modal for Links */}
      <Modal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)}
        title={MODAL_CONTENT[modalType]?.title || 'SYSTEM INFO'}
      >
          {MODAL_CONTENT[modalType]?.content}
      </Modal>

    </div>
  );
};

export default App;