import { Scissors, Ruler, Shirt, Sparkles } from 'lucide-react';

export const WHATSAPP_LINK = "https://wa.me/5500000000000"; // Substitua pelo número real
export const INSTAGRAM_LINK = "https://www.instagram.com/roupas_da_elisandra_fula_?igsh=dWVxZzBsY2ZndWlh";

// ==================================================================================
// CONFIGURAÇÃO DAS IMAGENS DE DESTAQUE
// ==================================================================================

export const HERO_IMAGE = "https://i.imgur.com/PsGCL0q.jpeg";
export const ABOUT_IMAGE = "https://i.imgur.com/QEyrwTh.jpeg";

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

// ==================================================================================
// GALERIA DE FOTOS
// ==================================================================================

export const GALLERY_IMAGES = [
  // Novas fotos do Imgur
  { src: 'https://i.imgur.com/yeCPt5V.jpeg', alt: 'Criação Exclusiva' },
  
  // Fotos anteriores (Postimages)
  { src: 'https://i.imgur.com/yeCPt5V.jpeg', alt: 'Moda Sob Medida' },
  { src: 'https://i.imgur.com/yeCPt5V.jpeg', alt: 'Elegância e Estilo' },
  
  // Fotos Profissionais (Unsplash) em Alta Definição (WebP) para compor o restante da galeria
  { src: 'https://i.imgur.com/LSmVrUG.jpeg', alt: 'Detalhes de Costura' },
  { src: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=95&w=1200&fm=webp&fit=crop', alt: 'Vestido Elegante' },
  { src: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=95&w=1200&fm=webp&fit=crop', alt: 'Noiva e Festa' },
  { src: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=95&w=1200&fm=webp&fit=crop', alt: 'Alta Costura' },
  { src: 'https://i.imgur.com/ZuIshC6.jpeg', alt: 'Acabamentos Manuais' },

  // Espaços para novas fotos
  { src: '', alt: 'blob:https://imgur.com/c52ac761-efdc-46be-9244-264850b86d6b' },
  { src: '', alt: 'https://i.imgur.com/LSmVrUG.jpeg' },
  { src: '', alt: 'https://i.imgur.com/ZuIshC6.jpeg' },
  { src: '', alt: 'Nova Foto 8' },
  { src: '', alt: 'Nova Foto 9' },
  { src: '', alt: 'Nova Foto 10' },
  { src: '', alt: 'Nova Foto 11' },
  { src: '', alt: 'Nova Foto 12' },
  { src: '', alt: 'Nova Foto 13' },
  { src: '', alt: 'Nova Foto 14' },
  { src: '', alt: 'Nova Foto 15' },
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