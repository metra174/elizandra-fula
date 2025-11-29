import { Scissors, Ruler, Shirt, Sparkles } from 'lucide-react';

export const WHATSAPP_LINK = "https://wa.me/5500000000000"; // Replace with actual number
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

export const GALLERY_IMAGES = [
  { src: 'https://www.instagram.com/p/DRQb_hKDvS9/media/?size=l', alt: 'Vestido de Festa Verde Lima' },
  { src: 'https://www.instagram.com/p/DPhS80PkhYR/media/?size=l', alt: 'Produção e Detalhes' },
  { src: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop', alt: 'Vestido de Gala Elegante' },
  { src: 'https://images.unsplash.com/photo-1605518216938-7f31b4747b88?q=80&w=800&auto=format&fit=crop', alt: 'Detalhes de Costura' },
  { src: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800&auto=format&fit=crop', alt: 'Tecidos Finos e Texturas' },
  { src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop', alt: 'Moda Casual Chic' },
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