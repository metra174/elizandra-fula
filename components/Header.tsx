import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import { NAV_LINKS, WHATSAPP_LINK, INSTAGRAM_LINK } from '../constants';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-serif text-2xl md:text-3xl font-bold text-brand-dark tracking-tighter">
          Elizandra <span className="text-brand-gold">Fula</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-brand-dark hover:text-brand-gold transition-colors text-sm uppercase tracking-widest font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer" className="text-brand-dark hover:text-brand-gold transition-colors"><Instagram size={20} /></a>
          <a href="#" className="text-brand-dark hover:text-brand-gold transition-colors"><Facebook size={20} /></a>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className={`px-4 py-2 text-sm font-medium border border-brand-dark transition-all hover:bg-brand-dark hover:text-white ${scrolled ? 'border-brand-dark text-brand-dark' : 'border-brand-dark bg-white/50'}`}
          >
            Contato
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-brand-dark"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-4 flex flex-col items-center space-y-4 animate-fadeIn">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-brand-dark text-lg font-serif"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-100 w-full flex flex-col items-center space-y-4">
             <div className="flex space-x-6">
                <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer" className="text-brand-dark"><Instagram size={24} /></a>
                <a href="#" className="text-brand-dark"><Facebook size={24} /></a>
             </div>
             <a href={WHATSAPP_LINK} className="bg-brand-gold text-white px-8 py-3 rounded-sm uppercase tracking-widest text-sm">
               Falar no WhatsApp
             </a>
          </div>
        </div>
      )}
    </header>
  );
};