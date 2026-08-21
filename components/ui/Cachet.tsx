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
  code = 'BAC-DJ-2024',
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
    sm: 'w-20 h-20 sm:w-24 sm:h-24 p-1.5 sm:p-2 text-[7px] sm:text-[8px]',
    md: 'w-24 h-24 sm:w-32 sm:h-32 p-2 sm:p-3 text-[8px] sm:text-[10px]',
    lg: 'w-28 h-28 sm:w-40 sm:h-40 p-2.5 sm:p-4 text-[9px] sm:text-xs',
  }[size];

  const mentionSizes = {
    sm: 'text-[10px] sm:text-xs my-0.5',
    md: 'text-xs sm:text-sm my-0.5 sm:my-1',
    lg: 'text-xs sm:text-base my-0.5 sm:my-1.5',
  }[size];

  return (
    <div
      className={`cachet-border shrink-0 max-w-full aspect-square font-mono font-bold uppercase tracking-wider select-none ${colorClasses} ${rotationClass} ${sizeClasses} ${className}`}
    >
      <span className="opacity-90 leading-tight text-center">{label}</span>
      <div className={`font-black tracking-widest border-y border-dashed border-current py-0.5 px-1.5 sm:px-2 w-full text-center truncate ${mentionSizes}`}>
        {mention}
      </div>
      <span className="opacity-80 leading-none">{date}</span>
      <span className="opacity-70 text-[6px] sm:text-[7px] mt-0.5">{code}</span>
    </div>
  );
}
