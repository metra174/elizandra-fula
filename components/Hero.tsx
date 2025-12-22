import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { HERO_IMAGE } from '../constants';
import { Star } from 'lucide-react';

const Snowfall = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(20)].map((_, i) => (
        <div 
          key={i}
          className="snowflake animate-snow"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${5 + Math.random() * 10}s`,
            fontSize: `${10 + Math.random() * 15}px`,
            opacity: Math.random() * 0.5,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
};

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-brand-beige dark:bg-brand-charcoal transition-colors duration-300 pt-20 md:pt-0 overflow-hidden">
      <Snowfall />
      
      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 h-full">
          
          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 text-left z-10 flex flex-col justify-center py-10 md:py-0"
          >
            <div className="inline-block relative">
              <span className="text-brand-wine dark:text-brand-rose font-sans uppercase tracking-[0.2em] text-xs md:text-sm font-bold border-b-2 border-brand-wine dark:border-brand-rose pb-2 mb-6 block w-max">
                Especial de Boas Festas
              </span>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-8 text-brand-gold opacity-50"
              >
                <Star size={20} fill="currentColor" />
              </motion.div>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-brand-dark dark:text-white mb-6 leading-tight transition-colors">
              Brilhe neste <br/> 
              <span className="text-brand-wine italic">Natal</span>
            </h1>
            
            <p className="font-sans text-lg md:text-xl text-brand-text/80 dark:text-gray-300 mb-10 max-w-lg font-light leading-relaxed transition-colors">
              Sua beleza merece o melhor acabamento. Agende seu look exclusivo para as festas e celebre com a elegância da alta costura.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="#appointment" variant="primary" className="bg-brand-wine hover:bg-red-900 border-none">
                Agendar Look de Natal
              </Button>
              <Button href="#gallery" variant="outline" className="border-brand-dark dark:border-white text-brand-dark dark:text-white hover:bg-brand-dark hover:text-white dark:hover:bg-white dark:hover:text-brand-dark">
                Ver Coleção
              </Button>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 h-[60vh] md:h-[85vh] relative"
          >
            <div className="relative w-full h-full rounded-t-full md:rounded-none md:rounded-tl-[100px] overflow-hidden shadow-2xl border-4 border-brand-wine dark:border-brand-dark max-w-[500px] mx-auto transition-colors">
              <img 
                src={HERO_IMAGE} 
                alt="Vestido Especial Elizandra Fula" 
                className="w-full h-full object-cover object-top"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-wine/20 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-wine/10 rounded-full blur-2xl -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};