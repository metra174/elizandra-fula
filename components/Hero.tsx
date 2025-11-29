import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { WHATSAPP_LINK } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1600&auto=format&fit=crop" 
          alt="Atelier Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-rose/20 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-beige via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-brand-dark font-sans uppercase tracking-[0.2em] text-sm md:text-base mb-4 font-bold bg-white/30 backdrop-blur-sm inline-block px-4 py-1 rounded-sm">
            Costura Fina & Design
          </h2>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-brand-dark mb-6 drop-shadow-sm">
            Elizandra Fula
          </h1>
          <p className="font-serif italic text-xl md:text-2xl text-brand-dark/90 mb-10 max-w-2xl mx-auto font-medium">
            "Roupas da Elizandra" — Onde elegância encontra conforto em cada detalhe.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href={WHATSAPP_LINK} variant="primary">
              Peça via WhatsApp
            </Button>
            <Button href="#gallery" variant="outline" className="bg-white/60 backdrop-blur-sm border-brand-dark/40 hover:border-brand-dark text-brand-dark">
              Ver Coleção
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};