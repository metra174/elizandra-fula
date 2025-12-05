import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';
import { Calendar, Clock, Mail, MessageSquare, Phone, User } from 'lucide-react';
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
    
    // Formatar data para exibição amigável
    const dateObj = new Date(formData.date);
    const dateStr = dateObj.toLocaleDateString('pt-BR');
    const timeStr = dateObj.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    // Construir mensagem do WhatsApp
    const message = `Olá, Elizandra! Gostaria de agendar um horário.
    
*Nome:* ${formData.name}
*Email:* ${formData.email}
*Telefone:* ${formData.phone}
*Data Desejada:* ${dateStr} às ${timeStr}
*Descrição do Pedido:* ${formData.description}`;

    // Codificar URL e abrir
    const encodedMessage = encodeURIComponent(message);
    // Extrair apenas o número do link base se necessário, aqui assumimos que WHATSAPP_LINK é a base wa.me
    // Se WHATSAPP_LINK for "https://wa.me/55...", vamos usar ele direto com o parametro text
    const finalLink = `${WHATSAPP_LINK}?text=${encodedMessage}`;
    
    window.open(finalLink, '_blank');
  };

  return (
    <section id="appointment" className="py-20 bg-white dark:bg-brand-charcoal transition-colors duration-300">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Agende seu Horário" 
          subtitle="Preencha o formulário abaixo para solicitar um atendimento personalizado." 
        />

        <div className="max-w-3xl mx-auto bg-brand-beige dark:bg-brand-dark/50 p-8 md:p-12 rounded-sm shadow-lg border border-brand-gold/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nome */}
              <div className="relative">
                <label className="block text-sm font-medium text-brand-dark dark:text-brand-beige mb-1">Nome Completo</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-brand-gold w-5 h-5" />
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none bg-white dark:bg-brand-charcoal text-brand-dark dark:text-white transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
              </div>

              {/* Telefone */}
              <div className="relative">
                <label className="block text-sm font-medium text-brand-dark dark:text-brand-beige mb-1">Telefone / WhatsApp</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 text-brand-gold w-5 h-5" />
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none bg-white dark:bg-brand-charcoal text-brand-dark dark:text-white transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="relative">
                <label className="block text-sm font-medium text-brand-dark dark:text-brand-beige mb-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-brand-gold w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none bg-white dark:bg-brand-charcoal text-brand-dark dark:text-white transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              {/* Data e Hora */}
              <div className="relative">
                <label className="block text-sm font-medium text-brand-dark dark:text-brand-beige mb-1">Data e Hora Preferida</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 text-brand-gold w-5 h-5" />
                  <input
                    required
                    type="datetime-local"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none bg-white dark:bg-brand-charcoal text-brand-dark dark:text-white transition-colors [color-scheme:light] dark:[color-scheme:dark]"
                  />
                </div>
              </div>
            </div>

            {/* Descrição */}
            <div className="relative">
              <label className="block text-sm font-medium text-brand-dark dark:text-brand-beige mb-1">Como podemos ajudar?</label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-brand-gold w-5 h-5" />
                <textarea
                  required
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none bg-white dark:bg-brand-charcoal text-brand-dark dark:text-white transition-colors resize-none"
                  placeholder="Descreva o tipo de roupa, ajuste ou serviço que você deseja..."
                />
              </div>
            </div>

            <div className="text-center pt-4">
              <Button type="submit" variant="primary" className="w-full md:w-auto min-w-[250px]">
                Confirmar Agendamento
              </Button>
              <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                Ao clicar, você será redirecionado para o WhatsApp com os dados preenchidos para finalizar o agendamento.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};