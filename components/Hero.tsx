import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { WHATSAPP_LINK, HERO_IMAGE } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-brand-beige pt-20 md:pt-0 overflow-hidden">
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 h-full">
          
          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 text-left z-10 flex flex-col justify-center py-10 md:py-0"
          >
            <div className="inline-block">
              <span className="text-brand-gold font-sans uppercase tracking-[0.2em] text-xs md:text-sm font-bold border-b-2 border-brand-gold pb-2 mb-6 block w-max">
                Ateliê de Alta Costura
              </span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-brand-dark mb-6 leading-tight">
              Elizandra <br/> 
              <span className="text-brand-gold italic">Fula</span>
            </h1>
            
            <p className="font-sans text-lg md:text-xl text-brand-text/80 mb-10 max-w-lg font-light leading-relaxed">
              Onde elegância encontra conforto. Peças exclusivas, feitas sob medida para realçar a sua beleza única em cada detalhe.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={WHATSAPP_LINK} variant="primary">
                Peça via WhatsApp
              </Button>
              <Button href="#gallery" variant="outline" className="border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white">
                Ver Coleção
              </Button>
            </div>
          </motion.div>

          {/* Image Column - Lado a Lado e Grande */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 h-[60vh] md:h-[85vh] relative"
          >
            <div className="relative w-full h-full rounded-t-full md:rounded-none md:rounded-tl-[100px] overflow-hidden shadow-2xl border-4 border-white max-w-[500px] mx-auto">
              {/* IMAGEM PRINCIPAL - SEM ANIMAÇÃO DE ZOOM PARA MELHORAR NITIDEZ */}
              <img 
                src={HERO_IMAGE} 
                alt="Vestido Exclusivo Elizandra Fula" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-gold/20 rounded-full blur-2xl -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};