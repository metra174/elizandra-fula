import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  href, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm font-bold transition-all duration-500 rounded-sm tracking-[0.2em] uppercase";
  
  const variants = {
    primary: "bg-brand-dark dark:bg-brand-gold text-white dark:text-brand-dark hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] hover:-translate-y-1 active:translate-y-0",
    outline: "border border-brand-dark/20 dark:border-brand-gold/30 text-brand-dark dark:text-brand-gold hover:border-brand-dark dark:hover:border-brand-gold hover:bg-brand-dark dark:hover:bg-brand-gold hover:text-white dark:hover:text-brand-dark",
    text: "text-brand-dark dark:text-brand-beige hover:text-brand-gold dark:hover:text-brand-gold underline-offset-8 hover:underline decoration-brand-gold",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
};