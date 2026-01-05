import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { HERO_IMAGE } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-brand-beige dark:bg-brand-charcoal transition-colors duration-500 pt-20 md:pt-0 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 -skew-x-12 transform origin-top-right"></div>
      
      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 h-full">
          
          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full md:w-1/2 text-left z-10 flex flex-col justify-center py-10 md:py-0"
          >
            <div className="inline-block relative mb-6">
              <span className="text-brand-gold font-sans uppercase tracking-[0.4em] text-xs md:text-sm font-bold">
                Exclusividade em Alta Costura
              </span>
              <div className="w-12 h-px bg-brand-gold mt-2"></div>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-brand-dark dark:text-white mb-6 leading-[1.1] transition-colors">
              A Arte de <br/> 
              <span className="shimmer-text italic">Vestir Sonhos</span>
            </h1>
            
            <p className="font-sans text-lg md:text-xl text-brand-text/70 dark:text-gray-400 mb-10 max-w-lg font-light leading-relaxed transition-colors">
              Onde a precisão do corte encontra a alma do tecido. Peças sob medida que celebram sua individualidade com elegância atemporal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button href="#appointment" variant="primary" className="shadow-2xl shadow-brand-gold/20 hover:scale-105">
                Agendar Consultoria
              </Button>
              <Button href="#gallery" variant="outline" className="border-brand-dark dark:border-brand-gold text-brand-dark dark:text-brand-gold hover:bg-brand-dark hover:text-white transition-all">
                Explorar Coleção
              </Button>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm shadow-[40px_40px_80px_rgba(0,0,0,0.1)] dark:shadow-[40px_40px_80px_rgba(197,160,89,0.05)] max-w-[500px] mx-auto group">
              <img 
                src={HERO_IMAGE} 
                alt="Alta Costura Elizandra Fula" 
                className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 border-[12px] border-white/10 pointer-events-none"></div>
            </div>
            
            {/* Elegant Floating Element */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 md:-right-12 bg-brand-dark text-white p-6 md:p-8 rounded-sm shadow-2xl z-20"
            >
              <p className="font-serif text-2xl md:text-3xl text-brand-gold mb-1">Peças Únicas</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400">Design 100% Autoral</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};