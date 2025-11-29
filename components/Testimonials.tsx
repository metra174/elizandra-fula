import React from 'react';
import { SectionHeading } from './SectionHeading';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-brand-rose/20">
      <div className="container mx-auto px-4">
        <SectionHeading title="O Que Dizem" subtitle="O carinho de quem confia no nosso trabalho." />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-sm shadow-sm relative">
              <Quote className="absolute top-4 right-4 text-brand-rose w-10 h-10 opacity-50" />
              <p className="text-brand-text/80 italic mb-6 font-serif leading-relaxed relative z-10">
                "{t.text}"
              </p>
              <div>
                <h4 className="font-bold text-brand-dark">{t.name}</h4>
                <span className="text-xs text-brand-gold uppercase tracking-wider">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};