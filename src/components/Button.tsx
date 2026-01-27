import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  fullWidth?: boolean;
  icon?: boolean;
  to?: string; // If provided, behaves like a link
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  icon = false, 
  to,
  children, 
  className = '',
  ...props 
}) => {
  
  // Changed rounded-sm to rounded-lg for a less formal, friendlier look
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-lg px-8 py-4 text-sm tracking-wide shadow-sm hover:shadow-md hover:-translate-y-0.5";
  
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-red-700 border border-transparent",
    secondary: "bg-brand-dark text-white hover:bg-stone-800 border border-brand-dark",
    outline: "bg-transparent text-brand-dark border-2 border-brand-dark hover:bg-brand-dark hover:text-white",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#20bd5a] border border-transparent rounded-full"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="ml-2 w-4 h-4" />}
    </>
  );

  const classes = `${baseStyles} ${variants[variant]} ${widthStyle} ${className}`;

  if (to) {
    const isExternal = to.startsWith('http') || to.startsWith('tel:') || to.startsWith('mailto:');

    if (isExternal) {
      return (
        <a 
          href={to} 
          className={classes}
          target={to.startsWith('http') ? "_blank" : undefined}
          rel={to.startsWith('http') ? "noopener noreferrer" : undefined}
        >
          {content}
        </a>
      );
    }

    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
};

export default Button;