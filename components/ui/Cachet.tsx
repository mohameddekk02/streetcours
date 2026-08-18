import React from 'react';

interface CachetProps {
  label?: string;
  mention?: string;
  code?: string;
  date?: string;
  variant?: 'primary' | 'error' | 'secondary' | 'success';
  rotation?: 'left' | 'right' | 'none';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Cachet({
  label = 'RÉPUBLIQUE DE DJIBOUTI',
  mention = 'VALIDÉ',
  code = 'MENFOP-2024',
  date = 'SESSION 2024',
  variant = 'primary',
  rotation = 'right',
  size = 'md',
  className = '',
}: CachetProps) {
  const colorClasses = {
    primary: 'text-primary border-primary',
    error: 'text-error border-error',
    secondary: 'text-secondary border-secondary',
    success: 'text-emerald-700 border-emerald-700',
  }[variant];

  const rotationClass = {
    left: 'cachet-stamp-rotate-left',
    right: 'cachet-stamp-rotate-right',
    none: '',
  }[rotation];

  const sizeClasses = {
    sm: 'w-24 h-24 p-2 text-[8px]',
    md: 'w-32 h-32 p-3 text-[10px]',
    lg: 'w-40 h-40 p-4 text-xs',
  }[size];

  const mentionSizes = {
    sm: 'text-xs my-0.5',
    md: 'text-sm my-1',
    lg: 'text-base my-1.5',
  }[size];

  return (
    <div
      className={`cachet-border font-mono font-bold uppercase tracking-wider select-none ${colorClasses} ${rotationClass} ${sizeClasses} ${className}`}
    >
      <span className="opacity-90 leading-tight text-center">{label}</span>
      <div className={`font-black tracking-widest border-y border-dashed border-current py-0.5 px-2 w-full text-center ${mentionSizes}`}>
        {mention}
      </div>
      <span className="opacity-80 leading-none">{date}</span>
      <span className="opacity-70 text-[7px] mt-0.5">{code}</span>
    </div>
  );
}
