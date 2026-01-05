import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';
import { Calendar, Mail, MessageSquare, Phone, User, Scissors } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

export const AppointmentSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const dateObj = new Date(formData.date);
    const dateStr = dateObj.toLocaleDateString('pt-BR');
    const timeStr = dateObj.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    const message = `Olá, Elizandra! Gostaria de agendar uma consultoria no ateliê.
    
*Nome:* ${formData.name}
*Email:* ${formData.email}
*Telefone:* ${formData.phone}
*Data Desejada:* ${dateStr} às ${timeStr}
*Serviço/Evento:* ${formData.description}`;

    const encodedMessage = encodeURIComponent(message);
    const finalLink = `${WHATSAPP_LINK}?text=${encodedMessage}`;
    
    window.open(finalLink, '_blank');
  };

  return (
    <section id="appointment" className="py-24 bg-white dark:bg-brand-charcoal transition-colors duration-500">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Agende sua Consultoria" 
          subtitle="Para um atendimento exclusivo e personalizado, reserve seu horário em nosso ateliê." 
        />

        <div className="max-w-4xl mx-auto bg-brand-beige dark:bg-brand-dark/30 p-8 md:p-16 rounded-sm shadow-2xl border border-brand-gold/10">
          <div className="flex items-center justify-center gap-4 mb-12 text-brand-gold">
            <div className="h-px w-12 bg-brand-gold/30"></div>
            <Scissors size={24} className="animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.3em]">Atendimento Private</span>
            <div className="h-px w-12 bg-brand-gold/30"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Nome */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-brand-dark/60 dark:text-brand-gold">Nome Completo</label>
                <div className="relative">
                  <User className="absolute left-0 top-1/2 -translate-y-1/2 text-brand-gold w-5 h-5" />
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-8 pr-4 py-3 border-b border-gray-300 dark:border-gray-700 bg-transparent focus:border-brand-gold outline-none text-brand-dark dark:text-white transition-all"
                    placeholder="Seu nome"
                  />
                </div>
              </div>

              {/* Telefone */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-brand-dark/60 dark:text-brand-gold">WhatsApp</label>
                <div className="relative">
                  <Phone className="absolute left-0 top-1/2 -translate-y-1/2 text-brand-gold w-5 h-5" />
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-8 pr-4 py-3 border-b border-gray-300 dark:border-gray-700 bg-transparent focus:border-brand-gold outline-none text-brand-dark dark:text-white transition-all"
                    placeholder="936 000 000"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-brand-dark/60 dark:text-brand-gold">Email</label>
                <div className="relative">
                  <Mail className="absolute left-0 top-1/2 -translate-y-1/2 text-brand-gold w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-8 pr-4 py-3 border-b border-gray-300 dark:border-gray-700 bg-transparent focus:border-brand-gold outline-none text-brand-dark dark:text-white transition-all"
                    placeholder="exemplo@email.com"
                  />
                </div>
              </div>

              {/* Data e Hora */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-brand-dark/60 dark:text-brand-gold">Data e Horário</label>
                <div className="relative">
                  <Calendar className="absolute left-0 top-1/2 -translate-y-1/2 text-brand-gold w-5 h-5" />
                  <input
                    required
                    type="datetime-local"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full pl-8 pr-4 py-3 border-b border-gray-300 dark:border-gray-700 bg-transparent focus:border-brand-gold outline-none text-brand-dark dark:text-white transition-all [color-scheme:light] dark:[color-scheme:dark]"
                  />
                </div>
              </div>
            </div>

            {/* Descrição */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-brand-dark/60 dark:text-brand-gold">Qual o tipo de evento ou peça desejada?</label>
              <div className="relative">
                <MessageSquare className="absolute left-0 top-4 text-brand-gold w-5 h-5" />
                <textarea
                  required
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full pl-8 pr-4 py-3 border-b border-gray-300 dark:border-gray-700 bg-transparent focus:border-brand-gold outline-none text-brand-dark dark:text-white transition-all resize-none"
                  placeholder="Ex: Vestido de noiva, terno feminino para conferência, traje de gala..."
                />
              </div>
            </div>

            <div className="text-center pt-8">
              <Button type="submit" variant="primary" className="w-full md:w-auto min-w-[300px] text-lg py-4">
                Confirmar Disponibilidade
              </Button>
              <p className="mt-6 text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400">
                Retornaremos em até 24 horas úteis via WhatsApp.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};