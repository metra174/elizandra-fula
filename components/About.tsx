import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';
import { ABOUT_IMAGE } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-brand-dark transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-xl relative z-10 border border-gray-100 dark:border-gray-700 max-w-[500px] mx-auto">
              <img 
                src={ABOUT_IMAGE} 
                alt="Detalhes do Ateliê Elizandra Fula" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-2 border-brand-gold -z-0"></div>
          </motion.div>

          {/* Text */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <SectionHeading 
              title="O Ateliê" 
              center={false} 
            />
            <p className="text-lg text-brand-text/80 dark:text-gray-300 mb-6 leading-relaxed font-light transition-colors">
              Bem-vindo ao mundo de <strong>Elizandra Fula</strong>. Nosso ateliê nasceu da paixão por transformar tecidos em arte e da vontade de realçar a beleza única de cada pessoa através da moda sob medida.
            </p>
            <p className="text-lg text-brand-text/80 dark:text-gray-300 mb-8 leading-relaxed font-light transition-colors">
              Aqui, cada peça conta uma história. Não fazemos apenas roupas; criamos experiências de autoestima e conforto. Seja um ajuste delicado ou a criação de um vestido de gala, dedicamos atenção minuciosa a cada costura, caimento e acabamento.
            </p>
            
            <div className="flex items-center gap-8 py-4 border-t border-gray-100 dark:border-gray-700">
               <div className="text-center">
                 <span className="block font-serif text-3xl text-brand-gold">Alta</span>
                 <span className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Qualidade</span>
               </div>
               <div className="h-10 w-px bg-gray-200 dark:bg-gray-700"></div>
               <div className="text-center">
                 <span className="block font-serif text-3xl text-brand-gold">Design</span>
                 <span className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Exclusivo</span>
               </div>
            </div>

            <div className="mt-8">
              <Button href="#appointment" variant="text" className="text-brand-dark dark:text-brand-beige hover:text-brand-gold dark:hover:text-brand-gold">
                Agendar uma visita &rarr;
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};