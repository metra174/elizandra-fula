import { Scissors, Ruler, Shirt, Sparkles } from 'lucide-react';

export const WHATSAPP_LINK = "https://wa.me/5500000000000"; // Substitua pelo número real
export const INSTAGRAM_LINK = "https://www.instagram.com/roupas_da_elisandra_fula_?igsh=dWVxZzBsY2ZndWlh";

export const NAV_LINKS = [
  { name: 'Início', href: '#home' },
  { name: 'Sobre', href: '#about' },
  { name: 'Serviços', href: '#services' },
  { name: 'Galeria', href: '#gallery' },
  { name: 'Depoimentos', href: '#testimonials' },
];

export const SERVICES = [
  {
    title: 'Confecção Sob Medida',
    description: 'Peças exclusivas desenhadas e costuradas especificamente para o seu corpo e gosto.',
    icon: <Ruler className="w-8 h-8 text-brand-gold" />,
  },
  {
    title: 'Vestidos de Festa',
    description: 'Elegância para casamentos, formaturas e eventos especiais. Brilhe com um design único.',
    icon: <Sparkles className="w-8 h-8 text-brand-gold" />,
  },
  {
    title: 'Ajustes e Reformas',
    description: 'Dê vida nova às suas roupas favoritas com ajustes precisos e acabamento impecável.',
    icon: <Scissors className="w-8 h-8 text-brand-gold" />,
  },
  {
    title: 'Moda Casual Chic',
    description: 'Blusas, saias e calças que unem o conforto do dia a dia com a sofisticação da alfaiataria.',
    icon: <Shirt className="w-8 h-8 text-brand-gold" />,
  },
];

// INSTRUÇÕES PARA FOTOS:
// O Instagram NÃO permite usar links diretos de imagens. As imagens aparecerão quebradas.
// Use links de imagens hospedadas publicamente (ex: Unsplash, Imgur, seu próprio servidor).
// Abaixo estão exemplos funcionais. Substitua pelos seus links reais quando tiver.

export const GALLERY_IMAGES = [
  // --- Adicione suas fotos aqui ---
  { src: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800&auto=format&fit=crop', alt: 'Vestido de Festa Verde' },
  { src: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop', alt: 'Detalhes de Costura' },
  { src: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop', alt: 'Vestido Elegante' },
  { src: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=800&auto=format&fit=crop', alt: 'Noiva e Festa' },
  { src: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800&auto=format&fit=crop', alt: 'Alta Costura' },
  { src: 'https://images.unsplash.com/photo-1550614000-4b9519e07d96?q=80&w=800&auto=format&fit=crop', alt: 'Acabamentos Manuais' },
  
  // Fotos extras para testar o botão "Ver Mais"
  { src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop', alt: 'Moda Casual' },
  { src: 'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?q=80&w=800&auto=format&fit=crop', alt: 'Criação Exclusiva' },
  { src: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop', alt: 'Vestido Floral' },
  { src: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=800&auto=format&fit=crop', alt: 'Tecidos Finos' },
  { src: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=800&auto=format&fit=crop', alt: 'Alfaiataria Feminina' },
  { src: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=800&auto=format&fit=crop', alt: 'Modelagem Perfeita' },
  // ... Você pode adicionar quantas fotos quiser nesta lista.
];

export const TESTIMONIALS = [
  {
    name: "Ana Souza",
    text: "A Elizandra tem mãos de fada! Meu vestido de formatura ficou perfeito, exatamente como eu sonhava.",
    role: "Cliente desde 2021"
  },
  {
    name: "Mariana Costa",
    text: "O atendimento é maravilhoso e as peças duram muito. A qualidade do tecido e da costura é incomparável.",
    role: "Cliente fiel"
  },
  {
    name: "Carla Mendes",
    text: "Mandei reformar um blazer antigo e ele voltou parecendo novo. Recomendo de olhos fechados!",
    role: "Cliente"
  }
];