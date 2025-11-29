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
          src="https://www.instagram.com/p/DRQb_hKDvS9/media/?size=l" 
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
          <h2 className="text-brand-dark font-sans uppercase tracking-[0.2em] text-sm md:text-base mb-4 font-bold">
            Costura Fina & Design
          </h2>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-brand-dark mb-6">
            Elizandra Fula
          </h1>
          <p className="font-serif italic text-xl md:text-2xl text-brand-text/90 mb-10 max-w-2xl mx-auto">
            "Roupas da Elizandra" — Onde elegância encontra conforto em cada detalhe.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href={WHATSAPP_LINK} variant="primary">
              Peça via WhatsApp
            </Button>
            <Button href="#gallery" variant="outline" className="bg-white/50 backdrop-blur-sm border-brand-dark/20 hover:border-brand-dark">
              Ver Coleção
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};