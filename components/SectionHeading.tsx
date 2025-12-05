import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, center = true }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="font-serif text-3xl md:text-4xl text-brand-dark dark:text-brand-beige mb-4 transition-colors"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <p className="text-brand-text/80 dark:text-gray-400 max-w-2xl mx-auto italic font-serif text-lg transition-colors">
            {subtitle}
          </p>
          <div className="w-16 h-0.5 bg-brand-gold mt-4"></div>
        </motion.div>
      )}
    </div>
  );
};