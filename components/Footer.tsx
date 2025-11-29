import React from 'react';
import { WHATSAPP_LINK, INSTAGRAM_LINK } from '../constants';
import { Instagram, Facebook, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-12 mb-12">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-3xl mb-4">Elizandra Fula</h3>
            <p className="text-gray-400 mb-6 max-w-sm mx-auto md:mx-0">
              Transformando sonhos em realidade através da moda. Atendimento personalizado para realçar sua melhor versão.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-gold transition-colors"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-gold transition-colors"><Facebook size={18} /></a>
            </div>
          </div>

          {/* Links */}
          <div className="text-center">
            <h4 className="font-sans font-bold uppercase tracking-wider mb-6 text-brand-gold text-sm">Navegação</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Início</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Galeria</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
             <h4 className="font-sans font-bold uppercase tracking-wider mb-6 text-brand-gold text-sm">Fale Conosco</h4>
             <div className="flex flex-col items-center md:items-end space-y-3 text-gray-400">
               <a href={WHATSAPP_LINK} className="hover:text-white transition-colors flex items-center gap-2">
                 <span className="hidden md:inline">WhatsApp</span> (00) 00000-0000
               </a>
               <a href="mailto:contato@elizandra.com" className="hover:text-white transition-colors flex items-center gap-2">
                 contato@elizandra.com <Mail size={16} />
               </a>
               <div className="flex items-center gap-2">
                 Atendimento com Hora Marcada <MapPin size={16} />
               </div>
             </div>
          </div>
        </div>

        <div className="text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Elizandra Fula Atelier. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};