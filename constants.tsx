import { Scissors, Ruler, Shirt, Sparkles, Crown, Heart } from 'lucide-react';

export const WHATSAPP_LINK = "https://wa.me/244936037927";
export const INSTAGRAM_LINK = "https://www.instagram.com/roupas_da_elisandra_fula_?igsh=dWVxZzBsY2ZndWlh";
export const FACEBOOK_LINK = "https://www.facebook.com/share/1bJFgTzdP8/";
export const CONTACT_EMAIL = "fulaelisandra@gmail.com";

export const HERO_IMAGE = "https://i.imgur.com/PsGCL0qh.jpeg"; 
export const ABOUT_IMAGE = "https://i.imgur.com/QEyrwThh.jpeg";

export const NAV_LINKS = [
  { name: 'O Ateliê', href: '#home' },
  { name: 'História', href: '#about' },
  { name: 'Serviços', href: '#services' },
  { name: 'Portfólio', href: '#gallery' },
  { name: 'Depoimentos', href: '#testimonials' },
];

export const SERVICES = [
  {
    title: 'Alta Costura & Gala',
    description: 'Vestidos exclusivos para eventos inesquecíveis. Design autoral com acabamento manual de luxo.',
    icon: <Crown className="w-8 h-8 text-brand-gold" />,
  },
  {
    title: 'Noivas & Cerimônias',
    description: 'Transformamos o seu sonho em uma peça impecável. Consultoria completa de estilo para o grande dia.',
    icon: <Heart className="w-8 h-8 text-brand-gold" />,
  },
  {
    title: 'Alfaiataria Feminina',
    description: 'Cortes precisos e caimento perfeito. Peças estruturadas que exalam poder e elegância.',
    icon: <Ruler className="w-8 h-8 text-brand-gold" />,
  },
  {
    title: 'Consultoria de Imagem',
    description: 'Muito além da costura: ajudamos você a descobrir o corte e a cor que melhor realçam sua beleza.',
    icon: <Sparkles className="w-8 h-8 text-brand-gold" />,
  },
];

export const GALLERY_IMAGES = [
  { src: 'https://i.imgur.com/yeCPt5Vh.jpeg', alt: 'Elegância em cada detalhe' },
  { src: 'https://i.imgur.com/jMKYEJSh.jpeg', alt: 'Corte Impecável' },
  { src: 'https://i.imgur.com/LSmVrUGh.jpeg', alt: 'Texturas Nobres' },
  { src: 'https://i.imgur.com/Z0z8ndMh.jpeg', alt: 'Design Exclusivo' },
  { src: 'https://i.imgur.com/rmNOLBDh.jpeg', alt: 'Alta Moda' },
  { src: 'https://i.imgur.com/4ktUQNTh.jpeg', alt: 'Acabamentos Manuais' },
  { src: 'https://i.imgur.com/0HcoZwRh.jpeg', alt: 'Seda e Sofisticação' },
  { src: 'https://i.imgur.com/5ndLJlqh.jpeg', alt: 'Conceito Ateliê' },
  { src: 'https://i.imgur.com/bucYd4Zh.jpeg', alt: 'Eventos de Gala' },
  { src: 'https://i.imgur.com/2rrSRsqh.jpeg', alt: 'A Arte de Vestir' },
];

export const TESTIMONIALS = [
  {
    name: "Ana Souza",
    text: "A Elizandra não apenas costura, ela esculpe o corpo com o tecido. Senti-me única no meu evento.",
    role: "Cliente VIP"
  },
  {
    name: "Mariana Costa",
    text: "O nível de detalhe e a qualidade dos tecidos é algo que não se encontra em lojas comuns.",
    role: "Advogada"
  },
  {
    name: "Carla Mendes",
    text: "Fiz meu vestido de noiva no ateliê e foi a melhor decisão. O carinho e a técnica são admiráveis.",
    role: "Noiva"
  }
];