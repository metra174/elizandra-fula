import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { GALLERY_IMAGES } from '../constants';
import { X, ZoomIn } from 'lucide-react';
import { Button } from './Button';

export const Gallery: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);

  const showMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <section id="gallery" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Galeria de Peças" 
          subtitle="Um pouco do nosso portfólio e inspirações."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.slice(0, visibleCount).map((img, index) => (
            <motion.div
              key={`${img.src}-${index}`} // Unique key
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden aspect-[3/4] cursor-pointer rounded-sm shadow-sm"
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <ZoomIn className="text-white w-10 h-10 mb-2 opacity-80" />
                <p className="text-white font-serif text-lg tracking-wide border-b border-brand-gold pb-1">
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botão Ver Mais */}
        {visibleCount < GALLERY_IMAGES.length && (
          <div className="mt-12 text-center">
            <Button onClick={showMore} variant="outline">
              Ver mais modelos
            </Button>
          </div>
        )}

        {/* Modal / Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                className="absolute top-4 right-4 text-white hover:text-brand-gold transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={40} />
              </button>
              
              <motion.img 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="max-h-[90vh] max-w-full rounded-sm shadow-2xl object-contain"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};