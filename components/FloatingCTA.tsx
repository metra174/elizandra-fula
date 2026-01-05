import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';
import { motion } from 'framer-motion';

export const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="bg-brand-dark dark:bg-brand-gold text-white dark:text-brand-dark text-[10px] px-3 py-1 rounded-full mb-3 uppercase tracking-widest font-bold shadow-xl border border-brand-gold/20"
      >
        Solicite Orçamento
      </motion.div>
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        className="bg-[#25D366] text-white p-5 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.4)] transition-all flex items-center justify-center hover:scale-110 relative"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={30} />
      </motion.a>
    </div>
  );
};