import { Scissors, Ruler, Shirt, Sparkles } from 'lucide-react';

export const WHATSAPP_LINK = "https://wa.me/5500000000000"; // Replace with actual number

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
  { src: 'https://picsum.photos/600/800?random=1', alt: 'Vestido de Gala Dourado' },
  { src: 'https://picsum.photos/600/800?random=2', alt: 'Conjunto de Alfaiataria' },
  { src: 'https://picsum.photos/600/800?random=3', alt: 'Vestido de Noiva Minimalista' },
  { src: 'https://picsum.photos/600/800?random=4', alt: 'Detalhe de Costura Manual' },
  { src: 'https://picsum.photos/600/800?random=5', alt: 'Blusa de Seda' },
  { src: 'https://picsum.photos/600/800?random=6', alt: 'Saia Midi Estampada' },
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