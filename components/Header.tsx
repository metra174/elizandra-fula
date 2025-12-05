import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import { NAV_LINKS, WHATSAPP_LINK, INSTAGRAM_LINK, FACEBOOK_LINK } from '../constants';
import { ThemeToggle } from './ThemeToggle';

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
        scrolled 
          ? 'bg-white/95 dark:bg-brand-charcoal/95 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-serif text-2xl md:text-3xl font-bold text-brand-dark dark:text-brand-beige tracking-tighter transition-colors">
          Elizandra <span className="text-brand-gold">Fula</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-brand-dark dark:text-brand-beige hover:text-brand-gold dark:hover:text-brand-gold transition-colors text-sm uppercase tracking-widest font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer" className="text-brand-dark dark:text-brand-beige hover:text-brand-gold transition-colors"><Instagram size={20} /></a>
          <a href={FACEBOOK_LINK} target="_blank" rel="noreferrer" className="text-brand-dark dark:text-brand-beige hover:text-brand-gold transition-colors"><Facebook size={20} /></a>
          <a 
            href="#appointment"
            className={`px-4 py-2 text-sm font-medium border border-brand-dark dark:border-brand-beige transition-all hover:bg-brand-dark hover:text-white dark:hover:bg-brand-beige dark:hover:text-brand-dark ${
              scrolled ? 'text-brand-dark dark:text-brand-beige' : 'bg-white/50 dark:bg-black/30 text-brand-dark dark:text-brand-beige'
            }`}
          >
            Agendar
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button 
            className="text-brand-dark dark:text-brand-beige"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-brand-charcoal shadow-lg py-6 px-4 flex flex-col items-center space-y-4 animate-fadeIn border-t dark:border-gray-800">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-brand-dark dark:text-brand-beige text-lg font-serif"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 w-full flex flex-col items-center space-y-4">
             <div className="flex space-x-6">
                <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer" className="text-brand-dark dark:text-brand-beige"><Instagram size={24} /></a>
                <a href={FACEBOOK_LINK} target="_blank" rel="noreferrer" className="text-brand-dark dark:text-brand-beige"><Facebook size={24} /></a>
             </div>
             <a href="#appointment" onClick={() => setIsOpen(false)} className="bg-brand-gold text-white px-8 py-3 rounded-sm uppercase tracking-widest text-sm">
               Agendar Agora
             </a>
          </div>
        </div>
      )}
    </header>
  );
};