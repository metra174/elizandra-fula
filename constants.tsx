import { Scissors, Ruler, Shirt, Sparkles } from 'lucide-react';

export const WHATSAPP_LINK = "https://wa.me/244936037927";
export const INSTAGRAM_LINK = "https://www.instagram.com/roupas_da_elisandra_fula_?igsh=dWVxZzBsY2ZndWlh";
export const FACEBOOK_LINK = "https://www.facebook.com/share/1bJFgTzdP8/";
export const CONTACT_EMAIL = "fulaelisandra@gmail.com";

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
  { src: 'https://i.imgur.com/jMKYEJS.jpeg', alt: 'Elegância e Estilo' },
  
  // Fotos Profissionais (Unsplash) e Outras do Imgur
  { src: 'https://i.imgur.com/LSmVrUG.jpeg', alt: 'Detalhes de Costura' },
  { src: 'https://i.imgur.com/Z0z8ndM.jpeg', alt: 'Tecidos Finos' },
  { src: 'https://i.imgur.com/M39M9og.jpeg', alt: 'Vestido Elegante' },
  { src: 'https://i.imgur.com/1WfSGEP.jpeg', alt: 'Alta Costura' },
  { src: 'https://i.imgur.com/ZuIshC6.jpeg', alt: 'Acabamentos Manuais' },
  { src: 'https://i.imgur.com/H3huiou.jpeg', alt: 'Design Sob Medida' },
  { src: 'https://i.imgur.com/eJtZ8zH.jpeg', alt: 'Moda Festa' },

  // ==========================================================================
  // ÁREA DE EDIÇÃO: Cole suas novas fotos abaixo entre as aspas ''
  // DICA: Use links diretos (terminados em .jpg ou .png) do Imgur ou Postimages
  // ==========================================================================
  { src: '', alt: 'Nova Foto 1' },
  { src: '', alt: 'Nova Foto 2' },
  { src: '', alt: 'Nova Foto 3' },
  { src: '', alt: 'Nova Foto 4' },
  { src: '', alt: 'Nova Foto 5' },
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