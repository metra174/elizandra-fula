import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';
import { motion } from 'framer-motion';

export const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="bg-brand-wine text-white text-[10px] px-2 py-1 rounded-full mb-2 uppercase tracking-tighter font-bold shadow-sm"
      >
        Peça seu Look! 🎄
      </motion.div>
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center hover:scale-110 relative"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-wine opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-wine"></span>
        </span>
      </motion.a>
    </div>
  );
};