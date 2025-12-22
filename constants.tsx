import { Scissors, Ruler, Shirt, Sparkles, Gift } from 'lucide-react';

export const WHATSAPP_LINK = "https://wa.me/244936037927";
export const INSTAGRAM_LINK = "https://www.instagram.com/roupas_da_elisandra_fula_?igsh=dWVxZzBsY2ZndWlh";
export const FACEBOOK_LINK = "https://www.facebook.com/share/1bJFgTzdP8/";
export const CONTACT_EMAIL = "fulaelisandra@gmail.com";

export const HERO_IMAGE = "https://i.imgur.com/PsGCL0qh.jpeg"; 
export const ABOUT_IMAGE = "https://i.imgur.com/QEyrwThh.jpeg";

export const NAV_LINKS = [
  { name: 'Início', href: '#home' },
  { name: 'Sobre', href: '#about' },
  { name: 'Serviços', href: '#services' },
  { name: 'Galeria', href: '#gallery' },
  { name: 'Depoimentos', href: '#testimonials' },
];

export const SERVICES = [
  {
    title: 'Especial Natal e Réveillon',
    description: 'Criações exclusivas para brilhar nas festas de fim de ano. Tecidos nobres e cortes impecáveis.',
    icon: <Sparkles className="w-8 h-8 text-brand-wine" />,
  },
  {
    title: 'Confecção Sob Medida',
    description: 'Peças únicas desenhadas para o seu corpo, garantindo o look perfeito para qualquer ocasião.',
    icon: <Ruler className="w-8 h-8 text-brand-gold" />,
  },
  {
    title: 'Presentes Personalizados',
    description: 'Surpreenda quem você ama com vales-costura ou peças exclusivas feitas sob encomenda.',
    icon: <Gift className="w-8 h-8 text-brand-wine" />,
  },
  {
    title: 'Alfaiataria Casual Chic',
    description: 'Sofisticação e conforto para os seus eventos de confraternização e dia a dia.',
    icon: <Shirt className="w-8 h-8 text-brand-gold" />,
  },
];

export const GALLERY_IMAGES = [
  { src: 'https://i.imgur.com/yeCPt5Vh.jpeg', alt: 'Brilho de Natal' },
  { src: 'https://i.imgur.com/jMKYEJSh.jpeg', alt: 'Elegância para Festas' },
  { src: 'https://i.imgur.com/LSmVrUGh.jpeg', alt: 'Detalhes em Dourado' },
  { src: 'https://i.imgur.com/Z0z8ndMh.jpeg', alt: 'Tecidos de Luxo' },
  { src: 'https://i.imgur.com/rmNOLBDh.jpeg', alt: 'Vestido Vermelho Elegante' },
  { src: 'https://i.imgur.com/4ktUQNTh.jpeg', alt: 'Alta Costura Natalina' },
  { src: 'https://i.imgur.com/0HcoZwRh.jpeg', alt: 'Acabamentos de Natal' },
  { src: 'https://i.imgur.com/5ndLJlqh.jpeg', alt: 'Design de Réveillon' },
  { src: 'https://i.imgur.com/bucYd4Zh.jpeg', alt: 'Moda Gala' },
  { src: 'https://i.imgur.com/2rrSRsqh.jpeg', alt: 'Look Inesquecível' },
];

export const TESTIMONIALS = [
  {
    name: "Ana Souza",
    text: "Meu look de Natal do ano passado foi um sucesso! A Elizandra entendeu exatamente o que eu queria.",
    role: "Cliente desde 2021"
  },
  {
    name: "Mariana Costa",
    text: "O atendimento de fim de ano é impecável. Mesmo na correria, a qualidade nunca cai.",
    role: "Cliente fiel"
  },
  {
    name: "Carla Mendes",
    text: "Mandei fazer um vestido para o Réveillon e me senti maravilhosa. A melhor de Angola!",
    role: "Cliente"
  }
];